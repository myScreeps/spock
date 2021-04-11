var util = require('Util'); 
var fileName = "Lorry       ";


module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        
       // creep.say ("S2L2");
       util.say(creep,"S2L", 300);






  
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Executing role StorageToLink ');
        // if creep is bringing energy to a structure but has no energy left   
    //    if (creep.ticksToLive == 25) {
           
    //    var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
    //         filter: { structureType: STRUCTURE_SPAWN}
    //     });


    //     var Spawn1 = spawns[0];
    //     Spawn1.memory.qLorry = Spawn1.memory.qLorry + 1;

    //    }
       

             //  var termId =  Game.rooms[creep.room.name].memory.terminalId;
       // var terminal = Game.getObjectById(termId);
   
       var terminal = creep.room.terminal;
       if (terminal != undefined) {
            const totalEnergy = _.sum(Game.rooms[creep.room.name].terminal.store);
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxAAAA totalEnergy is ' + totalEnergy);
            if (totalEnergy > 70000) {
                  return;
            }  
       }  

       

        workCheck(creep);

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
        
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
          filter: (s) => (s.structureType == STRUCTURE_LINK)
                  //  && s.energy < s.energyCapacity
            });

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
        }
      
      
      // ********************************************************************************//;
      //   // if creep is supposed to get energy
      // ********************************************************************************//;`
      
        else {
           
           

            // find closest container

            // let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: s => s.structureType == STRUCTURE_LINK || s.structureType == STRUCTURE_CONTAINER

            // if (room contains links)
            // {
            //     let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //         filter: s => s.structureType == STRUCTURE_LINK
            //     });
            // } 
            // else
            // {
            //     let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //        filter: s => s.structureType == STRUCTURE_CONTAINER
            // }   

            let container = creep.room.storage;

            // let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: s => s.structureType == STRUCTURE_STORAGE
            // });

            // if (container == undefined) {
            //     container = creep.room.storage;
            // }

            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(container);
                }
            }
        }
    }
};

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        creep.memory.working = true;
    }
}
