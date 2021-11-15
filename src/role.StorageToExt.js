
var util = require('Util');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
var fileName = 'StorageToExt ';



module.exports = {
    run: function (creep) {
        //    console.log("running storageToExt")

        //60c4a9d57afa4a2395eb5f61

        // creep.say("S2E " + creep.ticksToLive);

        util.say(creep, "S2X", 300);

        // if (creep.id == "60c4a9d57afa4a2395eb5f61" && creep.memory.moveTo == true) {

        //     var pos = new RoomPosition(40, 36, "E25N3")
        //     if (creep.pos.isEqualTo(pos) == false) {
        //         creep.travelTo(pos);
        //         return;
        //     }
        // }


        //  util.repairRoad(creep);

        // if (!creep.pos.isEqualTo(new RoomPosition(16, 18, "E26N3"))) {
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos ' + creep.pos + '</>');

        //     var noEnergy = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //         // the second argument for findClosestByPath is an object which takes
        //         // a property called filter which can be a function
        //         // we use the arrow operator to define it
        //         filter: (s) => (s.structureType == STRUCTURE_SPAWN
        //             || s.structureType == STRUCTURE_EXTENSION)
        //             && s.store[RESOURCE_ENERGY] < s.storeCapacity
        //     });

        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1noEnergy ' + noEnergy + '</>');

        //     if (noEnergy == undefined || noEnergy == null) {

        //         var noEnergy = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        //             // the second argument for findClosestByPath is an object which takes
        //             // a property called filter which can be a function
        //             // we use the arrow operator to define it
        //             filter: (s) => (s.structureType == STRUCTURE_TOWER

        //                 && s.store[RESOURCE_ENERGY] < s.storeCapacity - 100)
        //         });
        //     }

        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 2noEnergy ' + noEnergy + '</>');

        //     if (noEnergy == undefined || noEnergy == null) {
        //         parkIt(creep, 16, 18);
        //         return;
        //     }
        // }





        // if (creep.room.name != creep.memory.target) {
        //     // find exit to target room
        //     var exit = creep.room.findExitTo(creep.memory.target);
        //     // move to exit
        //     var moveStatus = creep.travelTo(creep.pos.findClosestByRange(exit));
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] moveStatus is ' + moveStatus + '</>');
        //     return;
        // }


        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] *           running  role. StorageToExt creep: ' + creep.name);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');

        //  creep.room.spawns[0].memory.W8N35 = 90;

        var spawn = Game.spawns[0];

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);
        util.TimeToDie(creep, 25, 0);


        if (creep.memory.working == undefined) {
            creep.memory.working = false;
        }

        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;

        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy > 0) {
            // switch state
            creep.memory.working = true;
        }

        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.memory.working is ' + creep.memory.working);

        // ********************************************************************************//;
        //         transfer energy to a structure
        // ********************************************************************************//;
        if (creep.memory.working == true) {
            //   console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");

            // energy in room is too low, only supple spawn and extentions.
            // Skip towers while rooom energy is low.
            if (creep.memory.spawnSourcesOnly == true) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER
                        || s.structureType == STRUCTURE_EXTENSION)
                        && s.store < s.storeCapacity
                });

            }
            // room energy is OK, so supple towers.

            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                // NOTE: W9N34 Spawn6.id = 5e69303370a8a9c16609e25f
                filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                    || (s.structureType == STRUCTURE_SPAWN
                        && s.id != "5e69303370a8a9c16609e25f"
                        && s.id != "602899b51d26a99361d2c076"
                        && s.id != "602899b51d26a99361d2c076"
                        && s.id != "60b85f557e3e0d31ab1905c4" // E25N3 spawn5

                        && s.id != ignoreSpawn3()))   // E26N3 Spawn3
                    // && (s.name != "Spawn3" && s.store[RESOURCE_ENERGY] > 50)
                    && s.energy < s.energyCapacity
                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

            });

            // Fill towers
            if (structure == undefined) {
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_TOWER
                        && s.energy < s.energyCapacity - 100)
                        && s.energy < s.energyCapacity
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

                });

            }

            // if (structure == undefined) {
            //     var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            //         filter: (s) => (s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] < 300000)
            //         //   && s.energy < s.energyCapacity
            //         //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

            //     });
            // }

            if (structure == undefined) {
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_NUKER)
                        && s.energy < s.energyCapacity
                    //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

                });
            }






            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' AAAAAAAAAAAAAAAAAAAA structure is ' + structure);

            if (structure != null) {

                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
            }
            //}



            if (structure == undefined) {
                //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
                // structure = creep.room.storage;
                if (structure == undefined) {
                    // TODO: Hack
                    if (creep.room.name == "E44S2") {
                        //  console.log("Harvesterstructure is undefined, run as upgrader " + creep.name + " (" + creep.memory.role + ")");
                        console.log('[' + fileName + util.LineNumber() + '] ' + creep.name + '  structure is undefined, run as builder. Creep role: ' + creep.memory.role);

                        roleBuilder.run(creep);
                    }
                }

            }

            // if we found have a structure that needs energy
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                //console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");

                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  SSSSSSSSSSSSSSSSSSSSSSSSstructure is ' + structure);
                if (creep.lockedTargetId == undefined) {

                    creep.lockedTargetId = structure.id;
                }


                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' transfer energy.......... ');

                // if (creep.room.name == "E26N3") {
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] sdfsdfsdfsdfsdf structure.structureType is ' + structure.structureType + '</>');
                // }
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
                return;
            }

            // if it gets here then no structure was found that needed energy
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name + '</>');

            if (creep.room.name == "E26N3") {
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name + '</>');

                var parkItStatus = parkIt(creep, 12, 17);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] parkItStatus is ' + parkItStatus + '</>');
                return;
            }
            if (creep.room.name == "E26N3") {
                var parkItStatus = parkIt(creep, 12, 17);
            }

            else if (creep.room.name == "E25N3") {
                var parkItStatus = parkIt(creep, 40, 36);
            }
            else {
                creepTravelTo(creep.room.storage)
            }

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2parkItStatus is ' + parkItStatus + '</>');
            return;
        }


        // ********************************************************************************//;
        // if creep needs to get energy from source
        // ********************************************************************************//;
        else {
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] End of the line creep.memory.working is ' + creep.memory.working + '</>');


            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creep.memory.working is ' + creep.memory.working);



            let ClosestContainer = undefined;

            if (ClosestContainer == undefined) {
                ClosestContainer = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: s => s.structureType == STRUCTURE_CONTAINER
                        || s.structureType == STRUCTURE_STORAGE
                    // s.store[RESOURCE_ENERGY] > 75
                    // filter: s => s.structureType == STRUCTURE_STORAGE
                    // && s.store[RESOURCE_ENERGY] > 1000
                });
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1ClosestContainer is ' + ClosestContainer + '</>');

            }

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2ClosestContainer is ' + ClosestContainer + '</>');




            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' ClosestContainer engery is ' + ClosestContainer);

            if (ClosestContainer != undefined) {
                // try to withdraw energy, if the container is not in range

                if (creep.room.name == "W9N34") {
                    var destinationPos = new RoomPosition(22, 21, "W9N34");
                    if (creep.pos != destinationPos) {
                        creep.travelTo(destinationPos, { visualizePathStyle: { stroke: '#ffaa00' } });
                        return
                    }
                }

                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is ' + ClosestContainer + '</>');

                if (creep.withdraw(ClosestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                    return

                } else {

                    // if it gets here there is no storage that needs to be filled
                    // park it somewhere

                    // if (creep.room.name == "E26N3") {
                    //     var parkItPos = new RoomPosition(16, 18, creep.room.name)
                    //     var moveTostus = creep.travelTo(parkItPos);
                    // }

                    // console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + " running as a upgrader ");
                    //roleUpgrader.run(creep);
                    return;
                }
                return;
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

                        // roleUpgrader.run(creep);
                        //return;
                    }

                    if (source == undefined || source == null) {
                        //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

                        source = creep.room.storage;

                        if (source == undefined || source == null) {
                            console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + "creep.room.storage is " + source);
                            console.log("[" + fileName + "line:" + util.LineNumber() + "]  " + creep.name + " running as a builder ");

                            roleUpgrader.run(creep);
                            return;
                        }
                        return;
                    }

                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards the source

                        // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");

                        creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                        util.repairRoad(creep);
                        return;
                    }
                }
            }
            //  return;
        }
        //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] End of the line creep.memory.working is ' + creep.memory.working + '</>');
        //

        // if (creep.room.name == "E26N3") {
        //     parkIt(creep, 16, 18);
        // }

        var parkItStatus = parkIt(creep, 12, 17);
    }


};


function parkIt(creep, x, y) {
    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Calling Parkit is </>');
    var parkItPos = new RoomPosition(x, y, creep.room.name);

    if (creep.store.getFreeCapacity() > 0) {
        var storage = creep.room.storage;
        if (creep.pos.isNearTo(storage) != true) {
            creep.travelTo(creep.room.storage);
        }
        creep.withdraw(storage, RESOURCE_ENERGY);
        return;
    }


    if (creep.pos.isEqualTo(parkItPos)) {
        if (creep.store.getFreeCapacity == 0) {

            // if creep is close to death, then transfer engergy back to storage
            if (creep.ticksToLive <= 35) {
                creep.transfer(creep.room.storage, RESOURCE_ENERGY);
            }
            return;
        }

        if (creep.pos.isNearTo(creep.room.storage.pos)) {
            creep.withdraw(creep.room.storage, RESOURCE_ENERGY);
        }

        return 0;
    }

    moveTostus = creep.travelTo(parkItPos);
    return moveTostus;
}

function ignoreSpawn3() {

    if (Game.spawns.Spawn3.store[RESOURCE_ENERGY] > 50) {
        return "6053303b1b94d05296dcfb36"; // spawn3 id in room E26N3
    }


}


function findWithDrawStructure(creep) {
    if (creep.memory.working == true) {

        if (creep.memory.spawnSourcesOnly == true) {
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER
                    || s.structureType == STRUCTURE_EXTENSION)
                    && s.store < s.storeCapacity
            });

        }

        var structure = undefined
        structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_SPAWN
                && s.energy < s.energyCapacity
        });

        if (structure == undefined) {
            structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_EXTENSION
                    && s.energy < s.energyCapacity

            });

        }


        if (structure == undefined) {
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 100)
                    && s.energy < s.energyCapacity
                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

            });

        }

        if (structure == undefined) {
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] < 300000)
                //   && s.energy < s.energyCapacity
                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

            });
        }

        if (structure == undefined) {
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_NUKER)
                //   && s.energy < s.energyCapacity
                //   filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL)

            });
        }



        if (creep.room.name == "W8N35") {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] structure.structureType is ' + structure.structureType + '</>');
        }


        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' AAAAAAAAAAAAAAAAAAAA structure is ' + structure);

        if (structure != null) {

            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
        }
        //}



        if (structure == undefined) {
            //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
            structure = creep.room.storage;
        }




    }
}
