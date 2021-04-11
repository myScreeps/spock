var util = require('Util'); 
var fileName = "Lorry       ";


module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        // if creep is bringing energy to a structure but has no energy left
       
        util.pickupResources(creep,3);
        util.TimeToDie(creep,10,0);


       if (creep.ticksToLive == 25) {
           
       var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_SPAWN}
        });

      //  var Spawn1 = spawns[0];
        var Spawn1 = creep.room.spawn;


       // Spawn1.memory.qLorry = Spawn1.memory.qLorry + 1;

       }
       
        workCheck(creep);

        // ********************************************************************************//;
        //          if creep is supposed to transfer energy to a structure
        // ********************************************************************************//;

        if (creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it

                // filter: (s) => (s.structureType == STRUCTURE_SPAWN
                //     || s.structureType == STRUCTURE_EXTENSION
                //     || s.structureType == STRUCTURE_TOWER)
                //     && s.energy < s.energyCapacity


                filter: (s) => (
                 //   s.structureType == STRUCTURE_SPAWN
                     s.structureType == STRUCTURE_STORAGE)
                    //|| s.structureType == STRUCTURE_TERMINAL
                   // || s.structureType == STRUCTURE_CONTAINER)
                    && s.energy < s.energyCapacity
            
                });

                if (creep.room.name == "E44S2") {
                    
                    var terminalE44S2 = creep.room.terminal
                  // var terminalEnergy = _.sum(terminalE44S2.store);
                   var terminalEnergy = terminalE44S2.store.energy;

                   // const terminalEnergy = _.sum(Game.rooms[creep.room.name].terminal.store); size="1"
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] <b><font color="yellow">terminalEnergy is ' + terminalEnergy +"</font></b>");
                    if (terminalEnergy < 13600) {
                        structure = terminalE44S2;
                    }

                }


            if (structure == undefined) {
                structure = creep.room.storage;
            }

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
       // else creep is supposed to get energy
       // ********************************************************************************//;

        else {
           
           
            var energyTargets = creep.room.find(FIND_MY_STRUCTURES, {filter: (s) => (
                   s.structureType == STRUCTURE_SPAWN 
                   || s.structureType == STRUCTURE_EXTENSION
                   && s.energy < s.energyCapacity)
            
                });

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

                

            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LINK
            });



            // if (container == undefined  || container.energy == 0) {
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
