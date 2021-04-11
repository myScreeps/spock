var roleTurrets = {
​
	run: function() {
		var towers = _.filter(Game.structures, struct => struct.structureType == STRUCTURE_TOWER);
		towers.forEach(tower => {
			if (tower.energy > 0) {
				var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
				if(closestHostile) {
					tower.attack(closestHostile);
				}
			} else {
				if (Game.time % 20 === 0) {console.log("Tower: URGENT! Unable to attack, unable to attack!")};
			}
			
			if (tower.energy > 300) {
				const dmgstr = tower.room.find(FIND_STRUCTURES, {filter: str => str.hits < str.hitsMax && str.hits < 25000});
				const byType = _.groupBy(dmgstr, 'structureType');
				for(let type of [STRUCTURE_CONTAINER, STRUCTURE_RAMPART, STRUCTURE_ROAD]) {
					if(!byType[type] || !byType[type].length)
						continue;
					const target = _.min(byType[type], 'hits');
					const status = tower.repair(target);
					if(status === OK){
						const target = _.min(dmgstr, 'hits');
						const status = tower.repair(target);
						if (status === OK) {
							if (Game.time % 50 === 0) {console.log("Tower: There are no heavily damaged structures.")};
						}
					}
				}
			} else {
				if (Game.time % 50 === 0) {console.log("Tower: Energy levels are too low to repair anything.")};
			}
		})
	}
};
​
module.exports = roleTurrets;