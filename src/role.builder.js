var roleUpgrader = require('role.upgrader');
//var roleHarvester = require('role.harvester');
//var roleHarvester = require('role.harvester');

var util = require('Util');
var fileName = "Builder     ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {


        var debugRoomName = "E25N3";

        if (creep.room.name == "E25N3") {
            //  creep.memory.buildTargetId = "60b85184d1b51120104bc03d";
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] somethiing is ' + ' ' +'</>');
        }

        // creep.travelTo(new RoomPosition(42, 38, "E25N3"))

        // return;
        // if (creep.id == "6083e9982ba9ac6870c88c03x") {
        //     creep.goto(new RoomPosition(41, 34, "E25N3"))
        //     return;

        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.memory.target is ' + creep.memory.target + '</>');
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.room.name is ' + creep.room.name + '</>');
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Memory.E25N3.invadersCount is ' + Memory.E25N3.invadersCount + '</>');

        //     if (creep.memory.target == "E25N3" && creep.room.name != "E25N3" && Memory.E25N3.invadersCount == 0) {
        //         console.log('<font color = "purple">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.memory.target is ' + creep.memory.target + '</>');
        //         creep.goto(new RoomPosition(41, 34, "E25N3"))
        //         return;
        //     }
        // }
        // // if (creep.id == "6083e9982ba9ac6870c88c03") {
        // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Build creep.room.name is ' + creep.room.name + '</>');

        // //     creep.goto(new RoomPosition(42, 38, "E25N3"))
        // //     return;
        // // }

        //creep.memory.id = creep.id;

        //creep.goto(new RoomPosition(42, 38, "E25N3"));

        // if (creep.id == "60806d1ff9b1d620571f3fc1") {
        //     creep.gotoXY(48, 34)
        //     return;
        // }


        var safeModeTimeRemaining = Game.rooms[creep.memory.target].controller.safeMode;
        if (safeModeTimeRemaining != undefined) {
            console.log('<font color = "greem">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] safeModeTimeRemaining ' + safeModeTimeRemaining + '</>');

            Memory.E25N3.invadersCount = 0;
        }


        if (creep.memory.target == "E25N3" && creep.room.name != "E25N3" && Memory.E25N3.invadersCount == 0) {
            // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Build creep.room.name is ' + creep.room.name + '</>');

            creep.goto(new RoomPosition(42, 38, "E25N3"))
            return;
        }



        if (creep.room.name == "E25N3") {



            if (Memory.E25N3.invadersCount > 0 && safeModeTimeRemaining == undefined) {

                console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Memory.E25N3.invadersCount ' + Memory.E25N3.invadersCount + '</>');

                creep.travelTo(new RoomPosition(3, 33, "E26N3"))
                return;
            }




            if (creep.room.name == "E25N3") {
                var tower40x35y = Game.getObjectById("607afc9c2800abdecf885678");
                //      console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tower40x35y.store.getFreeCapacity() is ' + tower40x35y.store.getFreeCapacity(RESOURCE_ENERGY) + '</>');
                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store.getFreeCapacity() is ' + creep.store.getFreeCapacity() + '</>');
                if (tower40x35y != undefined && tower40x35y.store.getFreeCapacity(RESOURCE_ENERGY) >= 150 && creep.store.getFreeCapacity() == 0) {
                    creep.goto(tower40x35y.pos)
                    creep.transfer(tower40x35y, RESOURCE_ENERGY);
                    return;
                }


                var tower39x35y = Game.getObjectById("60848acea1a62b83ab53dd40");
                if (tower39x35y != undefined && tower39x35y.store.getFreeCapacity(RESOURCE_ENERGY) >= 150 && creep.store.getFreeCapacity() == 0) {
                    creep.goto(tower39x35y.pos)
                    creep.transfer(tower39x35y, RESOURCE_ENERGY);
                    return;
                }
            }



            var source1 = Game.getObjectById("5bbcae639099fc012e638ec1");

            if (creep.pos.isNearTo(new RoomPosition(42, 37, "E25N3"))) {
                creep.pickup(RESOURCE_ENERGY);
            }
            var energyRemaining = source1.energy;
            if (energyRemaining == 0) {
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] energyRemaining is ' + energyRemaining + '</>');
                var source1Container = Game.getObjectById("607aa27af913974828c07b7a");

                if (Game.time % 2 == 0 && _.sum(source1Container.store) <= 1800) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] skippng tick is ' + Game.time + '</>');
                    return;
                }
            }

            //#hack
            var firstTowerInE25N3 = Game.getObjectById("607afc9c2800abdecf885678")
            if (firstTowerInE25N3 != undefined) {
                var towerEnergy = _.sum(firstTowerInE25N3.store);
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] towerEnergy is ' + towerEnergy + '</>');

                if (creep.pos.isNearTo(firstTowerInE25N3) && towerEnergy <= 850) {
                    creep.transfer(firstTowerInE25N3, RESOURCE_ENERGY);
                    //    return;
                }

            }



        }



        // if (creep.id == "60669d5cf35317849a39566ax") {
        //     var pos = new RoomPosition(4, 21, "E26N3")
        //     creep.travelTo(pos);
        //     return;
        // }

        // var spawn1 = Game.spawns["Spawn1"];

        // if (spawn1.store[RESOURCE_ENERGY] < 300) {
        //     return;
        // }

        //     return;
        // var flagOnSource2LinkName = "Link2_" + creep.room.name;

        // //Link2_W9N34
        // var flagOnSource2Link = util.findFlagByName(creep,flagOnSource2LinkName);
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] flagOnSource2LinkName is ' + flagOnSource2LinkName +'</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] flagOnSource2Link is ' + flagOnSource2Link +'</>');


        // if (creep.id == "607ab7663769c57e96436cc2") {
        //     creep.goto(Game.flags.Flag1);
        //     return;
        // }

        let container = undefined;
        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);



        util.say(creep, "bld ", 300);
        util.TimeToDie(creep, 32, 0);

        if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            if (creep.ticksToLive <= 300) {
                creep.memory.renew = true;
            }
        }

        if (creep.memory.ignoreRenew == false && creep.renew(800)) {
            return;
        }


        //    if (creep.memory.renew == true && (creep.id == "6083e8abfa8e740019de4301" || creep.id == "6083e90c5d3cb58431ba25c4" || creep.id == "6083e9982ba9ac6870c88c03")) {
        if (creep.memory.renew == true) {

            var closestSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
            var isNextToSpawn = creep.pos.isNearTo(closestSpawn);
            if (!isNextToSpawn) {
                var travelToStatus = creep.travelTo(closestSpawn);
                return;
            }
            closestSpawn.renewCreep(creep);
            if (creep.ticksToLive >= 1450) {
                creep.memory.renew = false;
            }
            return;
            //var travelToStatus = creep.travelTo(closestSpawn);
        }



        if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {

            roleUpgrader.run(creep);
            //  roleHarvester.run(creep);
        }




        //        u til.TimeToDie(creep,32,0);

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0000000000000000000000 creep.pos.y is ' + creep.pos.y);
        // var status = util.stayInTargetRoom(creep);
        // if (status == 0) {
        //     return;
        // }

        // if (creep.room.name == "E45S3" || creep.room.name == "E43S3") {
        //     var havesterCreepsInRoom = creep.room.find(FIND_MY_CREEPS, { filter: s => (s.memory.role == 'harvester') });
        //     if (havesterCreepsInRoom.length == 0) {
        //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  havesterCreepsInRoom.length is ' + havesterCreepsInRoom.length + '</>');
        //         creep.memory.role = "harvester";
        //         return;
        //     }

        // }





        // // if target is defined and creep is not in target room
        // if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
        //     // find exit to target room\\
        //     //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
        //     // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);

        //     var exit = creep.room.findExitTo(creep.memory.target);
        //     // move to exit
        //     creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
        //     // return the function to not do anything else
        //     //   /  return;
        // }

        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXXXXXXXXXXXXXXXXXXXXXXX creep.memory.working == true && creep.carry.energy == 0');
            creep.memory.working = false;
        }


        renewCheck(creep, 700);

        if (creep.memory.renew == true) {

            var closestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
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



        // ********************************************************************************//
        // if creep is harvesting energy but is full
        // ********************************************************************************//

        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {

            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! creep.memory.working == false && creep.carry.energy == creep.carryCapacity');
            // switch state
            creep.memory.working = true;
        }


        // ********************************************************************************//
        //  if creep is supposed to complete a constructionSite
        // ********************************************************************************//


        if (creep.memory.working == true) {
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.working == true ');



            // find closest constructionSite
            var constructionSite = undefined;
            constructionSite = Game.getObjectById("607a9bc083a3c9767a9ac6c4")
            //      console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.buildTargetId is ' + creep.memory.buildTargetId + '</>');

            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name + '</>');
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(creep.memory) is ' + JSON.stringify(creep.memory) + '</>');
            // creep.goto(constructionSite.pos);

            if (creep.memory.buildTargetId != undefined) {
                constructionSite = Game.getObjectById(creep.memory.buildTargetId)
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] constructionSite is ' + constructionSite + '</>');
                if (constructionSite == undefined) {
                    creep.memory.buildTargetId = undefined;
                }
            }

            if (constructionSite == undefined) {
                constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES, {
                    filter: s => s.progress < s.progressTotal
                        && s.room.name == creep.room.name

                });

                if (constructionSite != undefined) {
                    if (creep.memory.buildTargetId == undefined) {
                        creep.memory.buildTargetId = constructionSite.id
                    }
                }
            }




            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug ' + util.getMyName() + ': constructionSite is ' + constructionSite + '</>');


            // if (constructionSite == undefined) {
            //     var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            // }


            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] constructionSite.length is ' + constructionSite.length);
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                // if (creep.id == "60601ce2a96f6348e9edfd48") {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1creep.id is ' + creep.id + '</>');
                // }
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.travelTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
                    //   util.repairRoad(creep);


                }
                return;
            }
            // if no constructionSite is found
            else {
                // creep.memory.working = false;
                if (creep.room.name == debugRoomName) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! no constructionSite is found ');

                    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] somethiing is ' + ' ' +'</>');
                }
                // go upgrading the controller
                // roleHarvester.run(creep);
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' is calling upgrader role' + '</>');

                var upgraderStatus = roleUpgrader.run(creep);
                if (creep.name != upgraderStatus) {
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] WE HAVE A PROBLEM. Investigate!!!' +'</>');
                    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] upgraderStatus is ' + upgraderStatus +'</>');
                }
                else {
                    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] The creep name match when return from calling upgrade role: ' + creep.name +'</>');

                }
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.name before calling upgrader role is ' + creep.name +'</>');
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] return from running upgrader. upgraderStatus is ' + upgraderStatus +  '</>');
                //    util.repairRoad(creep);
                return;
            }
        }



        // ********************************************************************************//
        // if creep is supposed to get energy
        // ********************************************************************************//

        else {

            container = undefined;
            var source = undefined;

            if (container == undefined && source == undefined) {
                // container = util.findNearestLinkToSource2(creep,4);
                links = creep.pos.findInRange(FIND_STRUCTURES, 5, {
                    filter: s => (s.structureType == STRUCTURE_LINK && s.store[RESOURCE_ENERGY] > 200)
                });

                if (links.length > 0) {
                    container = links[0];
                }
                // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');



            }

            if (creep.room.name == "W9N34") {
                console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xyxyxyxy container is ' + container + '</>');

            }


            if (creep.memory.source != undefined) {
                var containerid = creep.memory.source;
                source = Game.getObjectById(containerid);
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xyxyxyxy container is ' + container + '</>');

            }

            // if (creep.room.name == "W9N34") {

            //     container = creep.room.storage;

            // }


            if (container == undefined && source == undefined) {
                container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: s => (
                        (s.structureType == STRUCTURE_STORAGE
                            //  || s.structureType == STRUCTURE_LINK
                            || s.structureType == STRUCTURE_CONTAINER)
                        && s.store[RESOURCE_ENERGY] > 200
                        //    && s.store[RESOURCE_ENERGY] > 0

                    )
                });
            }

            if (container == undefined && source == undefined) {
                container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: s => ((s.structureType == STRUCTURE_CONTAINER)
                        || s.structureType == STRUCTURE_TERMINAL
                        || s.structureType == STRUCTURE_STORAGE)
                    //   //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                    //    && s.store[RESOURCE_ENERGY] > 0

                });
            }

            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep is supposed to get energy ' + '</>');


        }
        // if one was found
        if (creep.room.name == "W9N34") {
            console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] xyxyxyxy container is ' + container + '</>');

        }

        if (creep.room.name == "W9N34") {
            //      container = undefined
        }


        //******************************************************* */
        // Always Use targetId if defined
        //******************************************************* */
        if (creep.memory.targetId != undefined) {
            container = Game.getObjectById(creep.memory.targetId);
        }


        // if (creep.room.name == "W8N36") {
        //     container = undefined;
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + ']  HACK WARNING ClosestContainer has been set to undefined for W8N36 to force Builder to get energy from source ' + container +'</>');
        // }


        if (container != undefined) {

            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] try to withdraw energy, if the container is not in range ');
            // try to withdraw energy, if the container is not in range

            // if (creep.room.name == "W9N34") {
            //     container = creep.room.terminal;
            // }

            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.travelTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        }
        else {
            // find closest source

            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXfind closest sourceXXX  ');
            if (source != undefined) {
                var status = creep.harvest(source)
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            else {

                var source = creep.pos.findClosestByRange(FIND_SOURCES,
                    {
                        filter: s => (s.room.name == creep.room.name)
                        //   //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
                        //    && s.store[RESOURCE_ENERGY] > 0
                    });


                if (source == null) {
                    //      console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " source is null");

                }

                // try to harvest energy, if the source is not in range
                // console.log("[" +  fileName + " line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");
                var status = creep.harvest(source)
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
                else {
                    //            console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.harvest(source) status is '  + creep.harvest(source));
                }

                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Energy is gone and source is on cool down ');

            }
        }
    }

};
function renewCheck(creep, renewCheck) {
    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0 || creep.ticksToLive <= 300) {
        if (creep.ticksToLive <= renewCheck) {
            creep.memory.renew = true;
        }
    }
}
