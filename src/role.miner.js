const { uniqueId } = require('lodash');
var util = require('Util');
const { say } = require('./Util');
var fileName = "Miner       ";
var harvest
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        // creep specific vars ////////////////////////////////////////////////////////////////
        var boolRepairRamparts = false
        var debugRoom = undefined;
        var creepId = "60bf1fd87552b3b5c2cc5ad9";
        //////////////////////////////////////////////////////////////////////////////////////


        // if (creep.id = "60c4a8bc5cb727a704230824") {
        //     var containerFlag = Game.flags["Source1_Container_E25N3"];
        //     // var pos = new RoomPosition(42, 37, "E25N3")
        //     if (creep.pos.isEqualTo(containerFlag) == false) {
        //         creep.travelTo(containerFlag)
        //     }
        // }



        if (creep.memory.boolRepairRamparts != undefined) {
            boolRepairRamparts = creep.memory.boolRepairRamparts;
        }

        // return;
        // 6050f0c337ff3930a95d21fe source2 miner in E26N3

        // if (creep.id == "6055ce0d65df7726ab3a181d") {
        //     //   creep.goto(new RoomPosition(42, 37, "E25N3"));
        //     creep.gotoXY(42, 37);


        //     return;
        // }



        // if (creep.room.name == "E25N3") {
        //     creep.pickup(RESOURCE_ENERGY);
        //     creep.transfer(Game.getObjectById("60b7f5fde1c5b07a6afdf36a"));
        //     return;
        // }



        if (creep.room.name == "E25N3") {


            if (creep.id == creepId) {

                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] screep.store.getUsedCapacity(RESOURCE_ENERGY)  is ' + creep.store.getUsedCapacity(RESOURCE_ENERGY) + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Game.spawns.Spawn4.store.getUsedCapacity(RESOURCE_ENERGY)  is ' + Game.spawns.Spawn4.store.getUsedCapacity(RESOURCE_ENERGY) + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.store.getFreeCapacity(RESOURCE_ENERGY)  is ' + creep.store.getFreeCapacity(RESOURCE_ENERGY) + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.room.terminal.store.getUsedCapacity(RESOURCE_ENERGY)  is ' + creep.room.terminal.store.getUsedCapacity(RESOURCE_ENERGY) + '</>');
            }

            if (creep.room.terminal.store.getUsedCapacity(RESOURCE_ENERGY) > 0 && creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                creep.say("Term withdraw");
                var withDrawStatus = creep.withdraw(creep.room.terminal, RESOURCE_ENERGY);
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] withDrawStatus  is ' + withDrawStatus + '</>');

                //  creep.harvest(source1)
                return;
            }
        }



        if (creep.room.name == "E25N3") {

            var source1Obj = Game.getObjectById(creep.memory.sourceId);


            if (creep.store[RESOURCE_ENERGY] == 0) {
                harvest = true
            }

            if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                harvest = false
            }

            if (harvest) {
                creep.harvest(Game.getObjectById(creep.memory.sourceId))
                creep.say("t" + creep.store[RESOURCE_ENERGY]);
                if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                    harvest = false
                    return;
                } else {
                    return;
                }

            }


            // if (creep.store.getUsedCapacity(RESOURCE_ENERGY) < 90 && source1Obj.energy > 0) {
            //     creep.harvest(source1Obj)
            //     creep.say(creep.store.getUsedCapacity(RESOURCE_ENERGY));
            //     return;
            // }
        }


        if (creep.room.name == "E25N3") {

            var constructionSitesFound = creep.room.lookForAtArea(LOOK_CONSTRUCTION_SITES, creep.pos.y - 3, creep.pos.x - 3, creep.pos.y + 3, creep.pos.x + 3, true);
            if (constructionSitesFound.length > 0) {
                util.buildIt(creep, debug = false);
                return;
            }



            if (Game.spawns.Spawn4 != undefined
                && Game.spawns.Spawn4.store.getUsedCapacity(RESOURCE_ENERGY) < 300) {
                var transferStatus = creep.transfer(Game.spawns.Spawn4, RESOURCE_ENERGY);
                creep.say("toSp4-" + transferStatus);
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus  is ' + transferStatus + '</>');
                return;
            }


        }


        if (creep.room.name == "E25N3") {
            if (creep.store.getUsedCapacity(RESOURCE_ENERGY) >= 0
                && Game.spawns.Spawn4 != undefined) {
                var source1Link = Game.getObjectById("60b8544873c93a43eeab1fd9");
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] source1Link  is ' + source1Link + '</>');
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] source1Link.store.getFreeCapacity(RESOURCE_ENERGY)  is ' + source1Link.store.getFreeCapacity(RESOURCE_ENERGY) + '</>');

                if (source1Link != undefined && source1Link.store.energy < 800) {
                    var transferStatus = creep.transfer(source1Link, RESOURCE_ENERGY);
                    creep.say("toLink-" + transferStatus);

                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus  is ' + transferStatus + '</>');
                    return;
                }

                if (creep.room.storage != undefined) {

                    var transferStatus = creep.transfer(creep.room.storage, RESOURCE_ENERGY);
                    creep.say("toStor-" + transferStatus);

                }

            }
        }




        // if (creep.room.name == "E25N3") {
        //     //creep.pickup(RESOURCE_ENERGY);
        //     util.pickupResources(creep, 0);
        //     //creep.transfer(Game.getObjectById("60b7f5fde1c5b07a6afdf36a", RESOURCE_ENERGY));
        //     if (creep.store.getUsedCapacity() > 0) {
        //         creep.transfer(creep.room.storage, RESOURCE_ENERGY);
        //         return;
        //     }
        // }

        if (creep.room.name == "E26N3") {

            var miner1 = Game.spawns.Spawn1.memory.miner1;
            var miner2 = Game.spawns.Spawn1.memory.miner2;


            if (Game.spawns.Spawn1.memory.miner1 == undefined) {
                Game.spawns.Spawn1.memory.miner1 = getMiner(new RoomPosition(15, 17, "E26N3")).id
                miner1 = Game.spawns.Spawn1.memory.miner1;
            }

            if (Game.spawns.Spawn1.memory.miner2 == undefined) {
                Game.spawns.Spawn1.memory.miner2 = getMiner(new RoomPosition(40, 20, "E26N3")).id
                miner2 = Game.spawns.Spawn1.memory.miner2;
            }

            //  miner1 = "60bf32cc3222458f0e844862";
            //  miner2 = "6050f0c337ff3930a95d21fe";

            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] miner1 ' + miner1 + '</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] miner2 ' + miner2 + '</>');



            if (creep.id == miner2) {

                var source2 = Game.getObjectById(creep.memory.sourceId)
                var link = Game.getObjectById("60091a986bc6db40323e0d1e");
                var container2 = getContainerUnderMiner(creep)
                if (source2.energy == 0) {
                    // console.log('<font color = "greem">[' + fileName + 'line:' + util.LineNumber() + '] source2.energy   is ' + source2.energy + '</>');

                    if (container2.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                        if (link.store.getFreeCapacity() > 0) {

                            var withDrawStatus = creep.withDrawStatus(container2, RESOURCE_ENERGY)
                            creep.say("withDraw-" + withDrawStatus)
                        }
                    }
                    else {
                        creep.say("Noting To do!");

                    }
                }

                if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity() && source2.energy > 0) {
                    if (source2.energy > 0) {
                        creep.harvest(source2);
                        creep.say(creep.store[RESOURCE_ENERGY]);
                        return;
                    }
                }

                if (Game.spawns.Spawn2.store[RESOURCE_ENERGY] < 300) {
                    var tranferStatus = creep.transfer(Game.spawns.Spawn2, RESOURCE_ENERGY)
                    creep.say("ToSpwn-" + tranferStatus);

                    //  return
                }


                if (link.store[RESOURCE_ENERGY] < 800) {
                    var tranferStatus = creep.transfer(link, RESOURCE_ENERGY)
                    creep.say("Tolink-" + tranferStatus);

                    //return;
                }

                creep.say("nothing to do");
            }



            if (creep.id == miner1) {

                // if (Game.spawns.Spawn1.containerSource1Repair == undefined) {
                //     Game.spawns.Spawn1.containerSource1Repair == false;
                // }

                var source1Id = creep.memory.sourceId
                var container1 = getContainerUnderMiner(creep)
                var source1 = Game.getObjectById(source1Id)
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structure is ' + structure + '</>');
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structure.structureType is ' + structure.structureType + '</>');


                var nearestLink = creep.findNearestLink(1);

                // /                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures[0].type is ' + structures[0].type + '</>');


                if (nearestLink != undefined) {
                    if (nearestLink.store[RESOURCE_ENERGY] > 0 && creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                        creep.say("Link");
                        creep.withdraw(nearestLink, RESOURCE_ENERGY)
                        return;
                    }
                }

                if (source1.energy == 0) {
                    //  console.log('<font color = "greem">[' + fileName + 'line:' + util.LineNumber() + '] source2.energy   is ' + source2.energy + '</>');

                    if (container1.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                        var withDrawStatus = creep.withDrawStatus(container1, RESOURCE_ENERGY)
                        creep.say("withDraw-" + withDrawStatus);
                    }

                }



                // if (container1 != undefined) {
                //     if (container1.hits < container1.hitMax) {
                //         Game.spawns.Spawn1.containerSource1Repair = true
                //     }
                //     else {
                //         Game.spawns.Spawn1.containerSource1Repair = false
                //     }

                //     if (Game.spawns.Spawn1.containerSource1Repair == true && creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                //         say("repair container")
                //         creep.repair(container1)
                //         return;
                //     }
                // }


                if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity() && creep.pos.isNearTo(source1)) {
                    util.pickupResources(creep, 1)
                    if (source1.energy > 0) {
                        creep.harvest(source1);
                        creep.say("E" + creep.store[RESOURCE_ENERGY]);
                        return;
                    }
                }



                //#
                if (creep.room.storage[RESOURCE_ENERGY] < creep.room.storage.store.getCapacity()) {
                    creep.say("toStore");
                    creep.transfer(creep.room.storage, RESOURCE_ENERGY)
                    return;
                }


                if (creep.room.terminal[RESOURCE_ENERGY] < creep.room.terminal.store.getCapacity()) {
                    creep.say("toTerm");
                    creep.transfer(creep.room.terminal, RESOURCE_ENERGY)
                    return;
                }


                // var link = Game.getObjectById("60091a986bc6db40323e0d1e");
                // if (link.store[RESOURCE_ENERGY] < 800) {
                //     creep.transfer(link, RESOURCE_ENERGY)
                //     return;
                // }
            }



        }




        //  util.pickupResources2(creep, 1);
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
        var storageFreeCapacity = undefined;
        if (creep.room.storage != undefined) {
            var storageFreeCapacity = creep.room.storage.store.getFreeCapacity();
        }

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



        renewCheck(creep, 700);

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



        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxlink1 is ' + link1 + '</>');


        // ********************************************************************
        // if creep has energy then transfer to the Storage container
        // ********************************************************************
        if (nearToStorageStatus == true
            && creep.room.storage != undefined
            && creep.room.storage.store.getFreeCapacity() > 0
            && creep.store.getFreeCapacity() == 0) {
            var storageTransferStatus = creep.transfer(creep.room.storage, RESOURCE_ENERGY);

            var resources = creep.store;
            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] JSON.stringify(resources) is ' + JSON.stringify(resources) + '</>');

            if (creep.room.name == "E25N3") {
                for (const resourceType in creep.store) {
                    if (creep.store.hasOwnProperty.call(creep.store, resourceType)) {
                        //     const resource = creep.store[resourceType];
                        var storageTransferStatus = creep.transfer(creep.room.storage, resourceType);
                        //
                    }
                }

                // for (let index = 0; index < resources.length; index++) {
                //     const resource = resources[index];
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] resource is ' + resource + '</>');

                //     var storageTransferStatus = creep.transfer(creep.room.storage, resource);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] storageTransferStatus is ' + storageTransferStatus + '</>');
                // }
            }

            // creep.store.forEach(resource => {
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] resource is ' + resource + '</>');
            //     var storageTransferStatus = creep.transfer(creep.room.storage, resource);
            // });
            // var storageTransferStatus = creep.transfer(creep.room.storage, RESOURCE_ENERGY);

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
        // if link1 has has energy
        // ********************************************************************
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug ' + this.getMyName() + ': Link1 is ' + Link1 + '</>');
        if (creep.id == creepId) {
            console.log('<font color = "greem">[' + fileName + 'line:' + util.LineNumber() + '] creep.energy ' + creep.energy() + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] link1 is ' + link1 + '</>');

        }

        // ********************************************************************
        // if link1 in E26N3 has has energy then withdraw
        // ********************************************************************
        if (creep.energy() == 0 && link1 != undefined && creep.room.name == "E26N3") {
            //    / console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] link1 is ' + link1 + '</>');
            if (link1.store[RESOURCE_ENERGY] >= 100) {
                if (creep.room.name == "E25N3") {
                    creep.say("withDraw from Link1")
                }

                var withDrawStatus = creep.withdraw(link1, RESOURCE_ENERGY);
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withDrawStatus is ' + withDrawStatus + '</>');

                //  return;
            }
        }


        // ********************************************************************
        // if link1 in E25N3 has has energy then withdraw
        // ********************************************************************

        // if (creep.energy() == 0 && link1 != undefined && creep.room.name == "E25N3") {
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] link1 is ' + link1 + '</>');
        //     if (link1.store[RESOURCE_ENERGY] >= 200) {
        //         if (creep.room.name == "E25N3") {
        //             // creep.say("withDraw from Link1")
        //         }



        //         //var withDrawStatus = creep.withdraw(link1, RESOURCE_ENERGY);
        //         //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withDrawStatus is ' + withDrawStatus + '</>');

        //         //  return;
        //     }
        // }



        // death warning
        //  util.say(creep, "mine ", 300);
        //   util.stayInTargetRoom(creep);
        util.pickupResources(creep, 2);

        if (Game.time % 10 == 0 && boolRepairRamparts == true) {
            var repairStatus = creep.repairNearByStructures(2);
        }
        //
        //   if (creep.room.name == "E45S2") {

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] !O!O!O!O!O!O! creep.memory.respawn is ' + creep.memory.respawn);
        var triggerTime = 100;


        if (creep.room.name == "E26N3") {



        }



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
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] source depleted source.id: ' + source.id + '</>');
            creep.pickup(RESOURCE_ENERGY);
            if (_.sum(creep.store) < 7) {
                var withDrawStatus = creep.withdraw(container, RESOURCE_ENERGY)
            }

            else if (creep.room.storage != undefined && creep.room.storage.store[RESOURCE_ENERGY] >= 1000) {
                var withDrawStatus = creep.withdraw(creep.room.storage, RESOURCE_ENERGY)

            }

            util.buildIt(creep, debug = false);

            if (creep.room.name == "E26N3") {
                var nearbyRamparts = creep.pos.findInRange(FIND_MY_STRUCTURES, 3, {
                    filter: s => s.structureType == STRUCTURE_RAMPART
                        && s.hits < Game.spawns.Spawn1.memory.maxRampartsHits
                });

                var targetRampart = undefined
                if (nearbyRamparts.length > 0) {
                    targetRampart = nearbyRamparts[0];
                    creep.repair(targetRampart);
                    return;
                }


            }
            creep.transfer(container, RESOURCE_ENERGY);

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


            if (Game.spawns.Spawn4 != undefined && creep.pos.isNearTo(Game.spawns.Spawn4.pos)
                && creep.store.getFreeCapacity() >= 0
                && Game.spawns.Spawn4.store.getFreeCapacity(RESOURCE_ENERGY) >= 0) {
                creep.transfer(Game.spawns.Spawn4, RESOURCE_ENERGY);
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
                        if (linkNearSource.store[RESOURCE_ENERGY] < 800 && containerNearSource2.store[RESOURCE_ENERGY] >= 1000) {

                            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] linkNearSource.store[RESOURCE_ENERGY]  : ' + linkNearSource.store[RESOURCE_ENERGY] + '</>');
                            var transferStatus = creep.transfer(linkNearSource, RESOURCE_ENERGY);
                            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus to link: ' + transferStatus + '</>');
                        }
                    }
                }

                if (creep.room.name == "E25N3"
                    && creep.pos.isNearTo(Game.flags.Link1_E25N3.pos)) {

                    var linkNearSource = util.findNearestStructureByType(creep, STRUCTURE_LINK, 4);
                    var containerNearSource1 = util.findNearestStructureByType(creep, STRUCTURE_CONTAINER, 2);
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Game.flags.Link1_E25N3.pos is ' + Game.flags.Link1_E25N3.pos + '</>');
                    if (linkNearSource != undefined && containerNearSource1 != undefined) {
                        // if (containerNearSource2 >= 1500) {
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1containerNearSource1.store[RESOURCE_ENERGY] : ' + containerNearSource1.store[RESOURCE_ENERGY] + '</>');
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] 1linkNearSource.store[RESOURCE_ENERGY]  : ' + linkNearSource.store[RESOURCE_ENERGY] + '</>');
                        // }
                        //  if (linkNearSource.store[RESOURCE_ENERGY] < 800 && containerNearSource1.store[RESOURCE_ENERGY] >= 1000) {
                        if (linkNearSource.store[RESOURCE_ENERGY] < 800) {

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
            //  creep.harvest(source);

            if (creep.store.getUsedCapacity(RESOURCE_ENERGY) <= 87) {
                source = Game.getObjectById(creep.memory.sourceId);
                creep.harvest(source)
                return;
            }

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

function getContainerUnderMiner(creep) {
    var structures = creep.pos.lookFor(LOOK_STRUCTURES)
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(structures[0]) is ' + JSON.stringify(structures[0]) + '</>');
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures[0].structureType is ' + structures[0].structureType + '</>');
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] STRUCTURE_CONTAINER is ' + STRUCTURE_CONTAINER + '</>');

    if (structures.length > 0 && structures[0].structureType == STRUCTURE_CONTAINER) {

        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] STRUCTURE_CONTAINER is ' + STRUCTURE_CONTAINER + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures[0].structureType is ' + structures[0].structureType + '</>');
        var structure = structures[0]
        return structure
    }
    return undefined;
}

function getMiner(pos) {
    var creeps = pos.lookFor(LOOK_CREEPS)
    if (creeps.length > 0) {
        return creeps[0]
    }
    return undefined;
}
