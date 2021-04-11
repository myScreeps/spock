/**
 * extension-structurelink.js
 * 
 * Logic for operating links
 */
'use strict';
​
global.BIT_LINK_RECEIVE_ONLY = (1 << 1);
​
defineCachedGetter(Room.prototype, 'links', r => r.structuresByType[STRUCTURE_LINK] || []);
defineCachedGetter(Room.prototype, 'energyInNetwork', r => _.sum(r.links, 'energy'));
defineCachedGetter(Room.prototype, 'energyCapacityInNetwork', r => _.sum(r.links, 'energyCapacity'));
defineCachedGetter(Room.prototype, 'avgInNetwork', r => r.energyInNetwork / r.links.length);
​
StructureLink.prototype.run = function () {		
	if(this.cooldown > 0 || CPU_LIMITER || this.energy < LINK_AUTOBALANCE_THRESHOLD)
		return;
	
	if(this.memory.defer) {
		if(Game.time < this.memory.defer)
			return;
		delete this.memory.defer;
	}
​
	if(this.memory.bits & BIT_LINK_RECEIVE_ONLY)
		return;
	
	try {				
		// var start = Game.cpu.getUsed();
		if(!this.room) {
			console.log('link: ' + ex(this));
		}
		// var avgInNetwork = this.room.energyInNetwork / this.room.links.length;
		var avgInNetwork = this.room.avgInNetwork;
		var diff = Math.floor(this.energy - avgInNetwork);
		if( diff > LINK_AUTOBALANCE_THRESHOLD ) {			
			var target = this.pos
				.findClosestByRange( this.room.links,
									{filter: t => t.energy < avgInNetwork });
			if(!target)
				return;
			var amt = Math.clamp(0, Math.ceil(diff), LINK_CAPACITY - target.energy);
			if(amt > 0)
				this.transferEnergy(target, amt);
		}			
		// var used = Game.cpu.getUsed() - start;
		// console.log('Links using: ' + used);
	} catch(e) {		
		console.log(e);
		console.log(e.stack);		
		var msg  = "WARNING: Link " + this.id + " in " + this.room.roomName + " failed!";
		Log.notify(msg);
	}	
}
​
/**
 * Link to link transfer enhancement. Denies transfer if destination
 * already has incoming.
 */
var te = StructureLink.prototype.transferEnergy;
StructureLink.prototype.transferEnergy = function(target, amount) {	
	if( !target || !(target instanceof StructureLink) ) {
		return ERR_INVALID_TARGET;		
	}
	
	if( target && target.isReceiving )
		return ERR_BUSY;
	
	var status;	
	switch( (status=te.apply(this, arguments)) ) {
		case OK:
			target.isReceiving = true;
			break;
	}
	return status;
}