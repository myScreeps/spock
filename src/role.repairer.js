var roleBuilder = require('role.builder');
var roleHarvester = require('role.builder');

var util = require('Util');
var fileName = "Repairer    ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        util.say(creep, "rpr");

        // return;



        // check to see if engery == 0 and ttl < 75
        //var status = util.SelfSecide(creep);



        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);
        //  var status = util.stayInTargetRoom(creep);
        // if (creep.ticksToLive == 50) {

        //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });

        //      var Spawn1 = spawns[0];
        //      Spawn1.memory.qRepairer = Spawn1.memory.qRepairer + 1;

        //     }


        // 5d4f2eb0ac2d2d20dcee9a27
        // creep.memory.targetStructureId = "5d4f2eb0ac2d2d20dcee9a27";
        var localTargetStructure = null; //5d1dde21b6fe552a9e36646c
        if (creep.memory.targetStructureId == undefined) {
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' setting creep.memory.targetStructure null ' );
            //  creep.memory.targetStructureId = null;
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.targetStructure is ' + creep.memory.targetStructureId );
        }

        // if (creep.memory.targetStructureId != null)
        // {
        //     localTargetStructure = creep.memory.targetStructureId;
        // }



        // ***************************************************************
        // if creep is trying to repair something but has no energy left
        // ***************************************************************
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }
        // ***************************************************************
        // if creep is supposed to repair something
        // ***************************************************************
        if (creep.memory.working == true) {

            // check for a specific structure
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.memory.targetStructure is ' + creep.memory.targetStructureId);

            if (creep.memory.targetStructureId != undefined) {
                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.memory.targetStructure is ' + creep.memory.targetStructureId);
                structure = Game.getObjectById(creep.memory.targetStructureId);
                if (structure.hits == structure.hitsMax) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' hits = MaxHits. Changing target to undefined  ');
                    creep.memory.targetStructureId = undefined;
                }
                else {
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' XXXXXXXXXstructure is '  + structure);
                    var repairStatus = creep.repair(structure);
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' repair status is ' + repairStatus);
                    if (repairStatus == ERR_NOT_IN_RANGE) {
                        // move towards structure
                        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                        creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
            }

            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.

            else {
                var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => s.hits < (s.hitsMax) && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                });


                // var x = "0";
                // switch (structure.structureType) {
                //   case STRUCTURE_ROAD:

                //     break;
                //   case STRUCTURE_RAMPART:
                //     text = "On";
                //     break;

                //     default:
                //     text = "No value found";
                // }



                var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => s.hits < (s.hitsMax) && s.structureType != STRUCTURE_WALL, ignoreCreeps: true
                });

                if (structure != undefined) {
                    //  creep.memory.targetStructureId = structure;
                }

                // if we find one
                if (structure != undefined && structure.structureType == STRUCTURE_ROAD && structure.hitsMax == 750000 && structure.hits < 725000) {
                    // try to repair it, if it is out of range
                    var repairStatus = creep.repair(structure);
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' repair status is ' + repairStatus);
                    if (repairStatus == ERR_NOT_IN_RANGE) {
                        // move towards it
                        // /console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                        creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }

                // else if (structure != undefined && structure.structureType == STRUCTURE_RAMPART && structure.hits < structure.hitsMax * .35){

                //     var repairStatus = creep.repair(structure);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structure.hitsMax * .35 is ' + structure.hitsMax * .35);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  structure.hits is ' + structure.hits);
                //     //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name +', ' +  creep.name + ' repairing rampart status is ' + repairStatus);
                //     if (repairStatus == ERR_NOT_IN_RANGE) {
                //         // move towards it
                //         // /console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                //         creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                //     }
                // }

                else if (structure != undefined && structure.structureType != STRUCTURE_RAMPART) {
                    // try to repair it, if it is out of range
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' structure type is ' + structure.structureType);
                    if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
                // can't fine one
                else {
                    // look for construction sites

                    if (creep.name.startsWith("LDH")) {
                        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + 'Creep name is ' + creep.name);
                        creep.memory.role = "longDistanceHarvester";
                    }

                    roleHarvester.run(creep);
                }
            } // end if

        }
        // *********************************************************************
        // if creep is supposed to get energy
        // *********************************************************************

        else {
            // find closest container // s.structureType == STRUCTURE_CONTAINER ||


            var sourceFlag = Game.flags["Source2_" + creep.room.name];




            let container = sourceFlag.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                    s.store[RESOURCE_ENERGY] > 200
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
                var sourceFlag = Game.flags["Source2_" + creep.room.name];
                var source = sourceFlag.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    }
};
