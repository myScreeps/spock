var roleUpgrader = require('role.upgrader');
var util = require('Util'); 
var fileName = "Builder     ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
       
        var buildTarget = buildTarget (creep.memory.buildTarget);
        var sourceTarget = buildTarget (creep.memory.sourceTarget);

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        var status = null;
        
        
        //if the creep has energy, then head to build target
        if (creep.room.name == buildTarget.room.name && creep.energy > 0) {
           
            // if not in build target room, then head to the exit
            if (Creep.room.name != buildTarget.room.name) {
                var exit = creep.room.findExitTo(buildTarget);
                creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            }
            // if in build target room, then head toward build target
            else{
                status = creep.build(structure);
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    status = creep.moveTo(buildTarget);
                }
              
            }
        }  
       
        // if creep is out of energy, return to target source
        if (creep.energy == 0) {
            // if source target is in another room
            if (Creep.room.name != sourceTarget.room.name) {
                var exit = creep.room.findExitTo(sourceTarget);
                creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            } 
            // 
            else{
                status = creep.withdraw(structure, RESOURCE_ENERGY);
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    status = creep.moveTo(buildTarget);
                } 
            }

        }    

         
    }
};