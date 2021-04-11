var util = require('Util'); 

var fileName = "LinkToTerm  ";


module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Executing role StorageToLink ');
        // if creep is bringing energy to a structure but has no energy left   

        util.say("ltt",creep,300);
       
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }



        //*********************************************************************/
        // if creep is supposed to transfer energy to a structure
        //*********************************************************************/

        if (creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
        //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  !!!!!!! !!!!!!!!!!!!!!!!!!!!!!!! creep.room.spawn.terminalId  is' + creep.room.memory.terminalId);
        //    var termId =  Game.rooms[creep.room.name].memory.terminalId;
        //    var terminal = Game.getObjectById(termId);
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it

                // filter: (s) => (s.structureType == STRUCTURE_SPAWN
                //     || s.structureType == STRUCTURE_EXTENSION
                //     || s.structureType == STRUCTURE_TOWER)
                //     && s.energy < s.energyCapacity


                filter: (s) => (s.structureType == STRUCTURE_TERMINAL)
                  //  && s.energy < s.energyCapacity
            });

            // if (structure == undefined) {
            //     structure = creep.room.storage;
            // }

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
        }


        //******************************************************************** */
        // if creep is supposed to get energy
        //******************************************************************** */

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

            // Find the closet Link to terminal




          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  !!!!!!! !!!!!!!!!!!!!!!!!!!!!!!! creep.room.spawn.terminalId  is' + creep.room.memory.terminalId);
            var termId =  Game.rooms[creep.room.name].memory.terminalId;
            //var terminal = Game.getObjectById(termId);
            var terminal = creep.room.terminal; 
            let container = terminal.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LINK 
                
            });
  

            // if (container == undefined) {
            //     container = creep.room.storage;
            // }

            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(container);
                }
            }
        }
    }
};