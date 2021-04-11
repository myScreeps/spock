var roleBuilder = require('role.builder');
var util = require('Util');
var fileName = "WallRepair  ";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // return;
        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);
        util.pickupResourcesFromTombstone(creep, 3);

        var pos = new RoomPosition(4, 20, "E26N3")
        creep.travelTo(pos);

        // const rpos = new RoomPosition(6, 25, "E26N3");


        // if (creep.pos != rpos) {
        //     creep.travelTo(rpos);
        // }

        return;





        try {
            if (creep.room.storage.store.getFreeCapacity(RESOURCE_ENERGY) <= 75000) {
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
            }
        } catch (error) {

        }




        // check to see if engery == 0 and ttl < 75
        var status = util.SelfSecide(creep);

        //   var status = util.stayInTargetRoom(creep);


        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            // find all walls in the room
            var walls = undefined;

            // all other rooms
            if (walls == undefined) {
                walls = creep.room.find(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_WALL
                        && s.id != "6003eca90502b17fee9fe780" //11,22
                        && s.id != "6003eca3a520da2e000313af" //12,22
                        && s.id != "6003ec9eb1154d8cb9ae4001" //13,22
                        && s.id != "6003ec95c364099a2debdd25" //15,22
                        && s.id != "6003ec8f360a72d3a7ffd744" //16,22
                        && s.id != "6003ec92c1ec6c45562bf1f0" //17,22
                        && s.id != "6003ec9b42c7e223b462d927" //18,22


                        && s.id != "6003ecae7aa85772128e6402" //10,21
                        && s.id != "6003ec44d8eaee1ab559212c" //20,24
                        && s.id != "6003ec41be0c60d3520a9437" //20,25
                        && s.id != "6003ec3e7aa857f8eb8e63d3" //20,26
                        && s.id != "6003ec49a42f34e2ee18d465" //20,27
                        && s.id != "6003ec49a42f34e2ee18d465" //20,27
                        && s.id != "6003ec3b126ea5181fd59d0c" //20,22



                        && s.id != "6003ecfca712292420cb7816" //25,26
                        && s.id != "6003ecff152afcc9f66c2efa" //26,26
                        && s.id != "6003ed02ec039a491e3e9b9b" //27,26
                        && s.id != "6003ed05ce031fad33b078ae" //27,27

                });
            }


            var target = undefined;

            // loop with increasing percentages
            for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001) {
                // find a wall with less than percentage hits
                for (let wall of walls) {
                    if (wall.hits / wall.hitsMax < percentage) {
                        target = wall;
                        break;
                    }
                }
                if (target != undefined) {
                    if (target.id == "6003eca90502b17fee9fe780x" // 11,22
                        // || target.id == "6003eca3a520da2e000313af" //12,22
                        // || target.id == "6003ec9eb1154d8cb9ae4001" //13,22
                        // || target.id == "6003ec95c364099a2debdd25" //15,22
                        // || target.id == "6003ecae7aa85772128e6402" //10,21
                        // || target.id == "6003ec44d8eaee1ab559212c" //20,24
                        // || target.id == "6003ec41be0c60d3520a9437" //20,25
                        // || target.id == "6003ec3e7aa857f8eb8e63d3" //20,26
                        // || target.id == "6003ec49a42f34e2ee18d465" //20,27
                        // || target.id == "6003ec49a42f34e2ee18d465" //20,27
                        // || target.id == "6003ec3b126ea5181fd59d0c" //20,22

                        // || target.id == "6003ecfca712292420cb7816" //25,26
                        // || target.id == "6003ecff152afcc9f66c2efa" //26,26
                        // || target.id == "6003ed02ec039a491e3e9b9b" //27,26
                        // || target.id == "6003ed05ce031fad33b078ae" //27,27
                    ) {
                        continue;
                    }
                }
                // if there is one
                if (target != undefined) {
                    // break the loop
                    break;
                }
            }


            // if (creep.room.name == "W9N34") {
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] wall target.hitsMax is ' + target.hitsMax +' ('+ target.pos + ')</>');
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] wall target.hits is ' + target.hits +' ('+ target.pos + ')</>');
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] wall target is ' + target +' ('+ target.pos + ')</>');
            //     // if(target.id == "5e17caccc609b9ed090c41b9"){
            //     //     return;
            //     // }

            // }

            // if we find a wall that has to be repaired
            if (target != undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(target, { visualizePathStyle: { stroke: '#ffaa00' } });
                    // util.repairRoad(creep);
                    return;
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
                //  util.repairRoad(creep);
                return;
            }
        }
        // if creep is supposed to get energy
        else {
            // find closest container //s.structureType == STRUCTURE_CONTAINER ||
            var source2Flag = Game.flags["Source_" + creep.room.name];

            let container = source2Flag.pos.findClosestByPath(FIND_STRUCTURES, {
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
                var source2Flag = Game.flags["Source2_" + creep.room.name];

                var source = source2Flag.pos.findClosestByPath(FIND_SOURCES);
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] FIND_SOURCES_ACTIVE is ' + source);
                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) != 0) {
                    // move towards it
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    }
};

function renewCheck(creep, checkTime) {
    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
        if (creep.ticksToLive <= checkTime) {
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
