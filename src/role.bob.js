var roleUpgrader = require('role.upgrader');
//var roleHarvester = require('role.harvester');
//var roleHarvester = require('role.harvester');

var util = require('Util');
var fileName = "bob        ";

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        //  return;

        util.say("bob", creep, 300);

        var t1 = Game.flags.T1;
        var t2 = Game.flags.T2;
        // var t3 =  Game.flags.T3;
        // var t4 =  Game.flags.T4;

        // t1->T2->t3->etc
        goFromFlagToFlag(creep);
        return;



        if (creep.hits <= creep.hits / 2) {
            creep.travelTo(T2);
            return;
        }

        creep.travelTo(T2);

        return;





        //   return;
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

        // if (creep.memory.renew == true) {

        //     var closestSpawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
        //     var isNextToSpawn = creep.pos.isNearTo(closestSpawn);
        //     if (!isNextToSpawn) {
        //         var travelToStatus = creep.travelTo(closestSpawn);
        //         return;
        //     }
        //     closestSpawn.renewCreep(creep);
        //     if (creep.ticksToLive >= 1450) {
        //         creep.memory.renew = false;
        //     }
        //     return;
        //     //var travelToStatus = creep.travelTo(closestSpawn);
        // }



        // if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {

        //     roleUpgrader.run(creep);
        //   //  roleHarvester.run(creep);
        // }




        //        u til.TimeToDie(creep,32,0);

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0000000000000000000000 creep.pos.y is ' + creep.pos.y);
        // var status = util.stayInTargetRoom(creep);
        // if (status == 0) {
        //     return;
        // }

        if (creep.room.name == "E45S3" || creep.room.name == "E43S3") {
            var havesterCreepsInRoom = creep.room.find(FIND_MY_CREEPS, { filter: s => (s.memory.role == 'harvester') });
            if (havesterCreepsInRoom.length == 0) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  havesterCreepsInRoom.length is ' + havesterCreepsInRoom.length + '</>');
                creep.memory.role = "harvester";
                return;
            }

        }





        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
            // find exit to target room\\
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);

            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            // return the function to not do anything else
            //   /  return;
        }

        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] XXXXXXXXXXXXXXXXXXXXXXXXX creep.memory.working == true && creep.carry.energy == 0');
            creep.memory.working = false;
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
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.working == true ');

            // find closest constructionSite
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {
                filter: s => s.progress < s.progressTotal
                //   && s.id != "60288b840995b11e5ddd90f6"
            });
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug ' + util.getMyName() + ': constructionSite is ' + constructionSite + '</>');


            // if (constructionSite == undefined) {
            //     var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            // }


            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] constructionSite.length is ' + constructionSite.length);
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.travelTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);


                }
                return;
            }
            // if no constructionSite is found
            else {
                // creep.memory.working = false;
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!! no constructionSite is found ');
                // go upgrading the controller
                // roleHarvester.run(creep);
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' is calling upgrader role'  +'</>');
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
                    filter: s => (s.structureType == STRUCTURE_LINK && s.store[RESOURCE_ENERGY] > 0)
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
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => (
                        s.structureType == STRUCTURE_STORAGE
                        && s.store[RESOURCE_ENERGY] > 0)
                    //    && s.store[RESOURCE_ENERGY] > 0

                });
            }

            if (container == undefined && source == undefined) {
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
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

                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
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
function goFromFlagToFlag(creep) {
    var flags = Object.keys(Game.flags);

    var flags = _.filter(flags, s => s.startsWith('T'));

    flags.sort();

    var targetFlagIndex = creep.memory.targetFlagIndex;

    if (targetFlagIndex == undefined) {
        targetFlagIndex = 0;
        creep.memory.targetFlagIndex = targetFlagIndex;
    }
    var targetFlag = Game.flags[flags[targetFlagIndex]];
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] flags is ' + JSON.stringify(flags) + '</>');
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] flags[targetFlagIndex] is ' + flags[targetFlagIndex] + '</>');
    if (creep.hits < creep.hitsMax) {
        creep.heal(creep);
    }
    creep.travelTo(targetFlag);

    if (creep.pos.isEqualTo(targetFlag.pos)) {
        if (targetFlag.name == "T1") {
            if (creep.hits < creep.hitsMax) {
                creep.heal(creep);
                return;
            }
        }
        creep.memory.targetFlagIndex++;
        if (creep.memory.targetFlagIndex == flags.length) {
            creep.memory.targetFlagIndex = 0;
        }
    }
}

