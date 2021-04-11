var roleUpgrader = require('role.upgrader');
var util = require('Util'); 
var fileName = "LDBuilder    ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
     return;
       console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.memory.sourceTarget is ' + creep.memory.sourceTarget);
        var buildTarget = Game.getObjectById  ("5d6adc224541277cae4aa552");
        //var sourceTarget =  Game.getObjectById  (creep.memory.sourceTarget);
        var sourceTarget =  Game.getObjectById  ("5d54123bbbfeab73fabe5c65");
    //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' buildTarget is ' + buildTarget);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' sourceTarget is ' + sourceTarget);

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        var status = null;
        
       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  current creep.room.name is ' + creep.room.name);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  current buildTarget.room.name is ' + buildTarget.room.name);
        
        //if the creep has energy, then head to build target ');

      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.energy is ' + creep.carry.energy );
        if (creep.carry.energy  > 0) {
           
//console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.carry.energy  is ' + creep.carry.energy );
            // if not in build target room, then head to the exit
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' buildTarget is ' + buildTarget);
            if (creep.room.name != buildTarget.room.name) {
                var exit = creep.room.findExitTo(buildTarget.room);
                creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            }
            // if in build target room, then head toward build target
            else{
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Building Target ');
                status = creep.build(buildTarget);
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    status = creep.travelTo(buildTarget);
                }
              
            }
        }  
       
        // if creep is out of energy, return to target source
        if (creep.carry.energy == 0) {
            // if source target is in another room
        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.energy is ' + creep.carry.energy );
           console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' sourceTarget.room.name is ' + sourceTarget);
            if (creep.room.name != sourceTarget.room.name) {
                var exit = creep.room.findExitTo(sourceTarget.room);
                status = creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' moving to exit status is ' + status);
            } 
            // 
            else{
                status = creep.withdraw(sourceTarget, RESOURCE_ENERGY);
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    status = creep.travelTo(sourceTarget);
                } 
            }

        }    

         
    }
};