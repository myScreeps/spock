var util = require('Util');
var fileName = "Miner       ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        // return;
        var creepId = "600953cad9e537fe4448db21";
        var debugRoomName = "E26N3";
        var debugColor = "yellow";
        var maxRampartSize = 1350001;
        var rampartRepairDelay = 2; // delay tick between repairing nearby rampart

        //  var nearToterminalStatus = creep.pos.isNearTo(creep.room.terminal);
        //  var nearToStorageStatus = creep.pos.isNearTo(creep.room.storage);
        //  var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
        var link1 = util.findNearestLinkToSource1(creep, 2);

        var nearToterminalStatus = creep.pos.isNearTo(creep.room.terminal);
        var nearToStorageStatus = creep.pos.isNearTo(creep.room.storage);
        var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
        var nearestLink = creep.findNearestLink(1);
        var nearestSpawn = creep.findNearestSpawn(1);
        util.pickupResources(creep, 2);


        var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] closestSource is ' + closestSource + '</>');
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] closestSource.stringify is ' + JSON.stringify(closestSource) + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] closestSource.energy is ' + closestSource.energy + '</>');

        var closestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if (!creep.pos.isNearTo(closestSpawn)) {
            if (creep.ticksToLive <= 1400) {
                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] closestSource.energy is ' + closestSource.energy + '</>');
                if (closestSource.energy == 0) {
                    creep.memory.renew = true;
                }
            }

        }

        if (creep.memory.renew == true) {
            if (creep.ticksToLive >= 1400) {
                creep.memory.renew = false;
                return;
            }

            var nextToSpawnStatus = creep.pos.isNearTo(closestSpawn);
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] nextToSpawnStatus is ' + nextToSpawnStatus + '</>');

            if (!nextToSpawnStatus) {
                creep.travelTo(closestSpawn)
            }
            return;
        }



        // if creep is not next to source then check if source is empty
        // if source is empty then find nearest spawn
        // if not next to spawn, then move toward spawn



        // renewCheck(creep, 700);

        // if (creep.memory.renew == true) {

        //     var closestSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
        //     var isNextToSpawn = creep.pos.isNearTo(closestSpawn);
        //     if (!isNextToSpawn) {
        //         creep.travelTo(closestSpawn);
        //         return;
        //     }
        //     closestSpawn.renewCreep(creep);
        //     if (creep.ticksToLive >= 1450) {
        //         creep.memory.renew = false;
        //     }
        //     return;
        //     //var travelToStatus = creep.travelTo(closestSpawn);
        // }



        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxlink1 is ' + link1 + '</>');


        // ********************************************************************
        // if creep has energy then transfer to the Storage container
        // ********************************************************************
        if (nearToStorageStatus == true
            && creep.room.storage.store.getFreeCapacity() > 0
            && creep.store[RESOURCE_ENERGY] >= 100) {
            var storageTransferStatus = creep.transfer(creep.room.storage, RESOURCE_ENERGY);
            if (creep.room.name == debugRoomName) {
                //     console.log('<font color = ' + debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storageTransferStatus is ' + storageTransferStatus + '</>');
            }
            if (storageTransferStatus == 0) {
                return;
            }
        }

        // ********************************************************************
        // if Storage is full and if creep has energy then transfer to the terminal
        // ********************************************************************

        if (nearToterminalStatus == true
            && creep.room.terminal.store.getFreeCapacity() > 0
            && creep.store[RESOURCE_ENERGY] >= 100) {
            var terminalTransferStatus = creep.transfer(creep.room.terminal, RESOURCE_ENERGY);
            if (creep.room.name == debugRoomName) {
                //     console.log('<font color = ' + debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] terminalTransferStatus is ' + terminalTransferStatus + '</>');
            }
            if (terminalTransferStatus == 0) {
                return;
            }
        }


        // ********************************************************************
        // if link1 has has energy then withdraw
        // ********************************************************************
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug ' + this.getMyName() + ': Link1 is ' + Link1 + '</>');
        if (creep.id == creepId) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.energy ' + creep.energy() + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] link1 is ' + link1 + '</>');

        }

        if (creep.energy() == 0 && link1 != undefined) {
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] link1 is ' + link1 + '</>');
            if (link1.store[RESOURCE_ENERGY] >= 100) {
                var withDrawStatus = creep.withdraw(link1, RESOURCE_ENERGY);
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withDrawStatus is ' + withDrawStatus + '</>');

                //  return;
            }
        }



        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] the creep name is ' +  creep.name + '  ');
        // if (creep.room.name == "W9N34") {
        //     spawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] spawn.name is ' + spawn.name +'</>');
        // }

        // death warning
        util.say(creep, "mine ", 300);
        //   util.stayInTargetRoom(creep);
        util.pickupResources(creep, 2);

        if (Game.time % 10 == 0) {
            var repairStatus = creep.repairNearByStructures(2);
        }
        //
        //   if (creep.room.name == "E45S2") {

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
        var triggerTime = 100;

        // if (creep.room.name == "W8S36") {
        //     triggerTime = 200;
        // }

        // if (creep.room.name == "E43S3") {
        //     triggerTime = 65;
        // }


        // if (creep.room.name == "E44S3") {
        //     triggerTime = 60;
        // }

        // if (creep.room.name == "E44S2") {
        //     triggerTime = 80;
        // }

        // if (creep.room.name == "E45S2") {
        //     var creep2xDeathTime = 11694653;
        //     var thisCreepDeathTime = 11694700;

        //     triggerTime = 65;



        // }

        // if (creep.room.name == "E45S3") {
        //     triggerTime = 35;
        // }



        // if (creep.room.name == "W8N35") {



        //     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.body.length * 3 is ' + creep.body.length * 3 +'</>');

        //     var spawns;
        //     var spawn;
        //     var startPos;
        //     var endPos;
        //     var path;
        //     var Distance;
        //     ({ spawns, spawn, startPos, endPos, path, Distance, triggerTime } = calcTiggerTime(creep, triggerTime));

        //     if (creep.memory.triggerTime != undefined) {
        //         triggerTime = creep.memory.triggerTime;
        //     }

        //     //     triggerTime = 200;
        // }

        // if (creep.room.name == "W9N34") {



        //     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.body.length * 3 is ' + creep.body.length * 3 +'</>');

        //     var spawns;
        //     var spawn;
        //     var startPos;
        //     var endPos;
        //     var path;
        //     var Distance;
        //     ({ spawns, spawn, startPos, endPos, path, Distance, triggerTime } = calcTiggerTime(creep, triggerTime));

        //     if (creep.memory.triggerTime != undefined) {
        //         triggerTime = creep.memory.triggerTime;
        //     }

        //     // triggerTime = 200;


        // }

        // if (creep.room.name == "W8N36") {


        //     if (creep.ticksToLive < 500 && creep.memory.triggerTime == undefined) {

        //         var spawns = creep.room.find(FIND_MY_SPAWNS);
        //         var spawn = spawns[0];
        //         var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
        //         var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
        //         var path = PathFinder.search(startPos, endPos);
        //         var Distance = path.path.length;
        //         triggerTimex = Distance * 2.25 + (creep.body.length * 3);
        //         triggerTime = Distance * 2.50 + (creep.body.length * 3);

        //         //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] W8N36 triggerTimex is ' + triggerTimex +'</>');

        //         creep.memory.triggerTime = triggerTime;

        //     }
        //     else {
        //         if (creep.memory.triggerTime != undefined) {
        //             triggerTime = creep.memory.triggerTime;
        //         }
        //     }

        //     //       console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1W8N36 triggerTime is ' + triggerTime +'</>');


        //     //     var spawns = cr e   ep.room.find(FIND_MY_SPAWNS);
        //     //     var spawn = sp awns[0].name;

        //     //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] JSON.stringify (spawns) is ' + JSON.stringify (spawns) +'</>');
        //     //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] JSON.stringify (spawn1) is ' + JSON.stringify (spawn1) +'</>');


        //     //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] spawn.name is ' + spawn.name +'</>');
        //     //     var startPos = new RoomPosition (spawn.pos,creep.room.name);
        //     //     var endPos = new RoomPosition (5,16,creep.room.name);
        //     //     var path = PathFinder.search(startPos,endPos);
        //     //     var Distance = path.path.length;


        //     //    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify (path) is ' + JSON.stringify (path) +'</>');
        //     //    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Distance is ' + Distance +'</>');
        //     //    var triggerTime = Distance * 2.5 + 21;
        //     // //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] triggerTime is ' + triggerTime +'</>');
        //     //  //   triggerTime = 100;

        // }


        if (creep.room.name == "E26N3") {


            // if (creep.ticksToLive < 500 && creep.memory.triggerTime == undefined) {

            //     var spawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
            //     //var spawn = spawns[0];
            //     var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
            //     var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
            //     var path = PathFinder.search(startPos, endPos);
            //     var Distance = path.path.length;
            //     triggerTimex = Distance * 2.25 + (creep.body.length * 3);
            //     triggerTime = Distance * 2.50 + (creep.body.length * 3);

            //     //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] W8N36 triggerTimex is ' + triggerTimex +'</>');

            //     creep.memory.triggerTime = triggerTime;

            // }
            // else {
            //     if (creep.memory.triggerTime != undefined) {
            //         triggerTime = creep.memory.triggerTime;
            //     }
            // }

            //       console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1W8N36 triggerTime is ' + triggerTime +'</>');


            //     var spawns = cr e   ep.room.find(FIND_MY_SPAWNS);
            //     var spawn = sp awns[0].name;

            //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] JSON.stringify (spawns) is ' + JSON.stringify (spawns) +'</>');
            //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] JSON.stringify (spawn1) is ' + JSON.stringify (spawn1) +'</>');


            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] spawn.name is ' + spawn.name +'</>');
            //     var startPos = new RoomPosition (spawn.pos,creep.room.name);
            //     var endPos = new RoomPosition (5,16,creep.room.name);
            //     var path = PathFinder.search(startPos,endPos);
            //     var Distance = path.path.length;


            //    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify (path) is ' + JSON.stringify (path) +'</>');
            //    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Distance is ' + Distance +'</>');
            //    var triggerTime = Distance * 2.5 + 21;
            // //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] triggerTime is ' + triggerTime +'</>');
            //  //   triggerTime = 100;

        }


        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 2W8N36 triggerTime is ' + triggerTime +'</>');

        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] triggerTime is ' + triggerTime +'</>');


        // ********************************************************************************//;
        // Spawn a minor before it dies
        // ********************************************************************************//;

        // if (creep.ticksToLive < triggerTime) {

        //     var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        //     var spawns = creep.room.find(FIND_MY_SPAWNS);

        //     if (spawns.length > 1) {
        //         // find spawn closet to creep.
        //         //var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES,{filter: s => s.progress > 0 && s.progress < s.progressTotal});

        //         spawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
        //         // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1111111111111111111111111 spawn is ' + spawn + '</>');

        //     }



        //     var respawnStatus = creep.memory.respawn;

        //     if (respawnStatus == undefined) {
        //         var name;
        //         var status



        //         //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] spawn is ' + spawn + '</>');
        //         name = spawn.createMiner(spawn, creep.memory.sourceId);


        //         spawn.memory.spawnMinor = false;

        //         var spawnStats = false;
        //         if (spawn.spawning != null) {
        //             spawnStatus = spawn.spawning.name.includes("mine");
        //         }


        //         // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name);


        //         if (name == -4 && spawnStatus == true) {
        //             creep.memory.respawn = false;
        //             spawn.memory.spawnMinor = false;

        //             console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! spawn.name ' + spawn.name + ",   spawn.spawning.name.includes('mine') is " + status);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] X!C!CC!C!!!CC!C! creep.memory.respawn is ' + creep.memory.respawn);

        //         }
        //     }
        // }


        // //   }

        // if (creep.ticksToLive == 75) {

        //     var spawns = creep.room.find(FIND_MY_STRUCTURES, {
        //         filter: { structureType: STRUCTURE_SPAWN }
        //     });

        //     var Spawn1 = spawns[0];
        //     spawns[0].memory.spawnMiner = false;
        // }

        //#Miner

        util.pickupResources(creep, 0); //5bbcafa89099fc012e63af90
        util.repairRoad(creep);

        //let source = Game.getObjectById(creep.memory.sourceId); 5bbcaf979099fc012e63ad59
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
            //  && s.store[RESOURCE_ENERGY] < 2000
        })[0];


        //    console.log("miner1")

        // ****************************************************************************************************
        // If source depleted and container has energy, then withdraw from container and do something with it.
        // ****************************************************************************************************
        if (source.energy == 0 && container.store[RESOURCE_ENERGY] > 0) {
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] qqqqqq test is ' + '</>');
            if (container.store[RESOURCE_ENERGY] >= 200) {
                var withDrawStatus = creep.withdraw(container, RESOURCE_ENERGY)
            }

            else if (creep.room.storage.store[RESOURCE_ENERGY] >= 1000) {
                var withDrawStatus = creep.withdraw(creep.room.storage, RESOURCE_ENERGY)

            }

            util.buildIt(creep, debug = false);

            // return;
        }



        if (container == null || container == undefined) {
            let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
                //        && s.store[RESOURCE_ENERGY] < 2000
            })[0];
        }
        else if (container == null || container == undefined) {
            // console.log("Role.miner Unable to find a container " + container);
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + creep.name + ', ' + creep.room.name + ', Unable to find a container. Container is ' + container);
            return;
        }
        // *******************************************************
        // if creep is on top of the container
        // *******************************************************
        if (container != null && creep.pos.isEqualTo(container.pos)) {
            // harvest source
            const currentStoredEngery = _.sum(container.store);



            // var freeCap = Game.spawns.Spawn2.store.getFreeCapacity(RESOURCE_ENERGY);
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] freeCap is ' + freeCap + '</>');

            if (creep.pos.isNearTo(Game.spawns.Spawn2.pos)
                && creep.store.getFreeCapacity() >= 0
                && Game.spawns.Spawn2.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                creep.transfer(Game.spawns.Spawn2, RESOURCE_ENERGY);
            }


            if (creep.pos.isNearTo(Game.getObjectById("60091a986bc6db40323e0d1e"))
                && creep.store.getFreeCapacity() >= 0
                && Game.getObjectById("60091a986bc6db40323e0d1e").store.getFreeCapacity(RESOURCE_ENERGY) >= 0) {
                creep.transfer(Game.spawns.Spawn2, RESOURCE_ENERGY);
            }

            if (Game.time % 2 == 0) {
                if (creep.room.name == "E26N3"
                    && creep.pos.isNearTo(Game.flags.Link2_E26N3.pos)) {
                    var linkNearSource = util.findNearestStructureByType(creep, STRUCTURE_LINK, 4);
                    var containerNearSource2 = util.findNearestStructureByType(creep, STRUCTURE_CONTAINER, 2);

                    if (linkNearSource != undefined && containerNearSource2 != undefined) {
                        // if (containerNearSource2 >= 1500) {
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1containerNearSource2.store[RESOURCE_ENERGY] : ' + containerNearSource2.store[RESOURCE_ENERGY] + '</>');
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1linkNearSource.store[RESOURCE_ENERGY]  : ' + linkNearSource.store[RESOURCE_ENERGY] + '</>');
                        // }
                        if (linkNearSource.store[RESOURCE_ENERGY] < 800 && containerNearSource2.store[RESOURCE_ENERGY] >= 1980) {

                            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] linkNearSource.store[RESOURCE_ENERGY]  : ' + linkNearSource.store[RESOURCE_ENERGY] + '</>');
                            var transferStatus = creep.transfer(linkNearSource, RESOURCE_ENERGY);
                            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus to link: ' + transferStatus + '</>');
                        }
                    }
                }
            }

            if (Game.time % 3 == 0) {
                util.buildIt(creep);
            }

            if (Game.time % 5 == 0) {
                util.repairContainers(creep);
            }


            //   console.log("miner harvest source")
            creep.harvest(source);

            if (currentStoredEngery <= 2000) {
                //   creep.harvest(source);
            }
            else {
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****** Containter is full! Game.Time: ' + Game.time );
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  ****** Containter is full! Game.Time: ' + Game.time +'</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  ****** Containter is full! Game.Time: ' + Game.time + '</>');
                let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER
                    // && s.store[RESOURCE_ENERGY] < 2000
                })[1];


                if (container != null && creep.pos.isEqualTo(container.pos)) {
                    // harvest source
                    const currentStoredEngery = _.sum(container.store);

                    if (Game.time % rampartRepairDelay == 0) {
                        console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 2miner is repairing ramparts is ' + '</>');
                        //   util.repairRamparts(creep, maxRampartSize);
                    }

                    if (Game.time % 3 == 0) {
                        util.buildIt(creep);
                    }


                    if (Game.time % 2 == 0 && creep.name == "W8N36") {
                        var linkNearSource = util.findNearestStructureByType(creep, STRUCTURE_LINK, 3);
                        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] linkNearSource: ' + linkNearSource + '</>');

                        if (linkNearSource != undefined) {
                            if (linkNearSource.store[RESOURCE_ENERGY] < 800) {
                                var transferStatus = creep.transfer(linkNearSource, RESOURCE_ENERGY);
                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus to link: ' + transferStatus + '</>');
                            }
                        }
                    }

                    if (Game.time % 5 == 0) {
                        util.repairContainers(creep);
                    }



                    //   if (currentStoredEngery <= 2000) {
                    creep.harvest(source);
                    //   }

                }
                // if creep is not on top of the container
                else {
                    // move towards it
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1!!!!!!!!!!!!!!! doing nothing is ' + '</>');

                    creep.travelTo(container);
                }







            }
        }
        // *******************************************************
        // if creep is not on top of the container
        // *******************************************************
        else {
            // move towards it
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!! doing nothing is ' + '</>');

            creep.travelTo(container);
        }
    }
};

function calcTiggerTime(creep, triggerTime) {
    if (creep.ticksToLive < 500 && creep.memory.triggerTime == undefined) {
        var spawns = creep.room.find(FIND_MY_SPAWNS);
        var spawn = spawns[0];
        var startPos = new RoomPosition(spawn.pos.x, spawn.pos.y, creep.room.name);
        var endPos = new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
        var path = PathFinder.search(startPos, endPos);
        var Distance = path.path.length;
        triggerTime = Distance * 2.50 + (creep.body.length * 3);
        creep.memory.triggerTime = triggerTime;
    }
    return { spawns, spawn, startPos, endPos, path, Distance, triggerTime };
}


// if (nearToStorageStatus == true && creep.room.storage.store.getFreeCapacity() >= 100 ) {
//     var storageTransferStatus = creep.transfer(creep.room.storage,RESOURCE_ENERGY);
//     if (creep.room.name == debugRoomName) {
//         console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storageTransferStatus is ' + storageTransferStatus +'</>');
//      }
//      if (storageTransferStatus == 0) {
//         return;
//     }
//  }

function renewCheck(creep, checkTime) {
    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
        if (creep.ticksToLive <= checkTime) {
            creep.memory.renew = true;
        }
    }
}
