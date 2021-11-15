
var util = require('Util');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
//const { createObjectBindingPattern } = require('typescript');


var fileName = "Harvester   ";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {


        //    return;
        if (creep.id == "60669d5cf35317849a39566ax" || creep.id == "6066b672c2c8a567ebf1cfd4x") {
            var pos = new RoomPosition(4, 21, "E26N3")
            creep.travelTo(pos);
            return;
        }
        if (creep.ticksToLive < 300) {
            creep.say("hrv " + creep.ticksToLive);

        }
        // if resouces are nearby, attempt to pickup.
        //   util.pickupResources(creep, 0);
        //       util.pickupResourcesFromTombstone(creep, 3)
        //   util.stayInTargetRoom(creep);

        // util.pickupResources(creep, 0);
        //   util.pickupResourcesFromTombstone(creep, 3);

        //  const rpos = new RoomPosition(3, 25, creep.room.name);


        //     if (creep.pos != rpos) {
        //         creep.travelTo(rpos);
        //     }

        //     return;




        // if creep is bringing energy to a structure but has no energy left
        workCheck(creep);

        renewCheck(creep);

        if (creep.memory.renew == true) {

            var closestSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
            var isNextToSpawn = creep.pos.isNearTo(closestSpawn);
            if (!isNextToSpawn) {
                creep.travelTo(closestSpawn);
                return;
            }
            closestSpawn.renewCreep(creep);
            if (creep.ticksToLive >= 1450) {
                creep.memory.renew = false;
            }
            return;
            //var travelToStatus = creep.travelTo(closestSpawn);
        }

        // var numberOfStorageToExt = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExt');//

        // if (numberOfStorageToExt > 0) {
        //     roleUpgrader.run(creep);
        // }

        // ********************************************************************************//;
        //                          transfer energy to a structure
        // ********************************************************************************//;
        if (creep.memory.working == true) {
            //         console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");




            // energy in room is too low, only supple spawn and extentions.
            // Skip towers while rooom energy is low.
            if (creep.memory.spawnSourcesOnly == true) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
                // find closest spawn, extension which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_SPAWN
                        && s.id != "602899b51d26a99361d2c076"
                        || s.structureType == STRUCTURE_EXTENSION
                        || s.structureType == STRUCTURE_STORAGE)
                        && s.energy < s.energyCapacity
                });

            }
            // room energy is OK, so supple towers.
            else {
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_SPAWN
                        && s.name == "Spawn3"
                        // || s.structureType == STRUCTURE_EXTENSION
                        //  || s.structureType == STRUCTURE_STORAGE
                        // || (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 50))
                        //  || (s.structureType == STRUCTURE_TOWER && s.energy <= s.energyCapacity - _.sum(creep.carry))
                        && s.energy < s.energyCapacity - 24)
                });

                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+  creep.name +', !!!!!!!!!!!!!! creep._.sum(creep.carry) is ' + _.sum(creep.carry));



                if (structure != null) {

                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
                }
            }



            if (structure == undefined) {
                //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
                //structure = creep.room.storage;

                roleBuilder.run(creep);
                if (structure == undefined) {
                    // TODO: Hack

                }



            }

            // if we found have a structure that needs energy
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                //      console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");


                if (creep.lockedTargetId == undefined) {

                    creep.lockedTargetId = structure.id;
                }



                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
            }
        }


        // ********************************************************************************//;
        //  else creep is supposed to harvest get energy from a store
        // ********************************************************************************//;
        else {

            //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is " + creep.memory.working + ", " + creep.name + ", (" + creep.memory.role + ")");

            let ClosestContainer = undefined;


            if (creep.room.name == "E26N3") {

                ClosestContainer = Game.getObjectById("60285cefa2201a2a5e18b53d"); // link near controller

                // if (ClosestContainer == undefined) {
                //     let ClosestContainer = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                //         filter: s => s.structureType == STRUCTURE_LINK &&
                //             s.store[RESOURCE_ENERGY] > 100
                //     });
                // }
            }



            // if (creep.room.storage != undefined) {
            //     ClosestContainer = creep.room.storage;
            // }

            if (ClosestContainer == undefined) {
                let ClosestContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    // filter: s => s.structureType == STRUCTURE_STORAGE &&
                    filter: s => s.structureType == STRUCTURE_CONTAINER &&
                        s.store[RESOURCE_ENERGY] > 75
                });
            }



            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' ClosestContainer engery is ' + ClosestContainer);


            // if (creep.room.name == "W9N34") {
            //     ClosestContainer = creep.room.terminal;
            // }


            if (ClosestContainer != undefined) {
                // try to withdraw energy, if the container is not in range


                if (creep.room.name == "W9N34") {
                    ClosestContainer = creep.room.terminal;
                }



                if (creep.withdraw(ClosestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);

                } else {
                    // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");
                    roleUpgrader.run(creep);
                    return;
                }

            }
            else {




                var status = creep.harvest(ClosestContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + creep.room.name + " " +  creep.name + ' current harvest status is ' + status );
                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is  ' + ClosestContainer);
                if (ClosestContainer != undefined || ClosestContainer != null && (creep.harvest(ClosestContainer) == ERR_NOT_IN_RANGE) && (creep.harvest(ClosestContainer) == -7)) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a container ');
                    creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                    return;
                } else {
                    // find closest source
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    if (source == null) {
                        // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") is " + source);
                        // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");

                        roleUpgrader.run(creep);
                        //return;
                    }

                    if (source == undefined || source == null) {
                        //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

                        source = creep.room.storage;

                        if (source == undefined || source == null) {
                            // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + "creep.room.storage is " + source);
                            console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + " running as a builder ");

                            roleBuilder.run(creep);
                            // roleUpgrader.run(creep);

                            return;
                        }

                    }

                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards the source

                        // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");

                        creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                        util.repairRoad(creep);
                    }

                }
            }

        }
    }
};

function renewCheck(creep) {
    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
        if (creep.ticksToLive <= 700) {
            creep.memory.renew = true;
        }
    }
}

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
        //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is false name:" + creep.name + " (" + creep.memory.role + ")");
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        creep.memory.working = true;
    }
}
