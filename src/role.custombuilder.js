var roleUpgrader = require('role.upgrader');
var util = require('Util'); 
var fileName = "Builder     ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
       
//        5d5101c06507e179e61a2ec3

        var energySource2 = Game.getObjectById(creep.memory.energySource) //ENERGY SOURCE
        var targetStructure = Game.getObjectById(creep.memory.targetStructure); //
       
        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);



        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' running');
        // creep.memory.home2 =="E44S2";
        // Game.spawns.Spawn1.creep['builder_9'].foo = "test";
        // Game.creeps[creep.name].memory.foo = "test2";

        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }

        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }
        else
        {
            creep.memory.working = false;
        }

        // if creep is supposed to complete a constructionSite
        if (creep.memory.working == true) {
            // find closest path to target structure
            var constructionSite = creep.pos.findClosestByPath(targetStructure.pos);
            // if target structure is found
            if (constructionSite != undefined) {
                // try to build, if the target structure is not in range
                var status = (creep.build(constructionSite) ;
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards the target structure
                    creep.moveTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            // if no target structure is found
            else {
                // go upgrading the controller
                roleUpgrader.run(creep);
            }
        }
        
        
        // if creep is supposed to get energy
        else {

            
            var withdrawStatus =  creep.withdraw(energySource2, RESOURCE_ENERGY); 
            if (creep.energy == creep.energyCapicy ) {
                
                // full, so exit 
                return;
            }


            if (withdrawStatus == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.moveTo(energySource2, { visualizePathStyle: { stroke: '#ffaa00' } });
                return;
            }

            // if some other error
            else if (withdrawStatus != 0)
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' There is a problem. withdrawStatus is ' + withdrawStatus);
            }
        }

            // find closest container
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                    s.store[RESOURCE_ENERGY] > 0
            });
            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            else {
                // find closest source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if(source == null ){
                    console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " source is null");

                }

                // try to harvest energy, if the source is not in range
                // console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source + ")");

                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    }
};