var util = require('Util');
var fileName = "UpgraderTS  ";
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        //return;
        //    creep.say ("UpgraderTS: " + + creep.ticksToLive);

        //util.mySign(creep,"E44S2","Last of the Mohicans");
        // util.mySign(creep,"E45S2","Last of the Mohicans");


        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep, 0);
        //    var status = util.stayInTargetRoom(creep);
        util.TimeToDie(creep, 55, 0);

        util.say(creep, "upTS ", 300);
        util.stayInTargetRoom(creep);

        // if (creep.ticksToLive == 50) {

        //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });

        //      var Spawn1 = spawns[0];
        //      Spawn1.memory.qUpgrader = Spawn1.memory.qUpgrader + 0;

        //     }

        // ********************************************************************************//
        // Room Specific code
        // ********************************************************************************//

        // if (creep.room.name == "E44S2") {
        //     var time  = Game.time % 5;
        //     if (time == 0) {
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Game.time % 5 is  ' + Game.time % 5);
        //         return;
        //     }

        // }




        if (creep.room.name == "E45S2") {




            // backup original role
            if (creep.memory.orginalRole == undefined) {
                creep.memory.orginalRole = creep.memory.role
            }
            const pos = new RoomPosition(42, 10, 'E45S2');
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!! creep.pos is ' + creep.pos);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!!!      pos is ' + pos);
            if (creep.pos.isEqualTo(45, 8)) {

                creep.moveTo(pos);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']XXXXXXXXXXXXXXXXXXXXXXX the spot has been taken ' + creep.name);
            }

        }


        //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is now running as a upgrader");

        // check to see if engery == 0 and ttl < 75
        //  var status = util.SelfSecide(creep);

        // if creep is bringing energy to the controller but has no energy left
        var workStatus = workCheck(creep);


        // ********************************************************************************//;
        // // if creep is supposed to transfer energy to the controller
        // ********************************************************************************//;

        if (creep.memory.working == true) {

            // var siteObjId = "5dda8c5998e0dc34905dcd2f";
            // var site = Game.getObjectById(siteObjId);

            // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " creep.memory.working == true)");
            // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " The room constroller is )" + creep.room.controller);

            // instead of upgraderController we could also use:
            // if (creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {

            // try to upgrade the controller
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
                // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
                util.repairRoad(creep);
            }
            else {
                //  console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " upgrading controller");
                // find closest container //s.structureType == STRUCTURE_CONTAINER ||
                var status = creep.upgradeController(creep.room.controller);
                //    console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " upgrading status " + status);

                if (creep.room.name == "E46S1") {


                    //  creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffaa00' } });
                }


            }
        }

        else {
            let container
            if (util.isRoom(creep, "E44S2")) {

                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => ((
                        //s.structureType == STRUCTURE_CONTAINER
                        // s.structureType == STRUCTURE_TERMINAL
                        //|| s.structureType == STRUCTURE_STORAGE)
                        //&& s.store[RESOURCE_ENERGY] > 0 )
                        (s.structureType == STRUCTURE_LINK)
                    ))
                });
            }
            else {
                container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => ((s.structureType == STRUCTURE_CONTAINER
                        || s.structureType == STRUCTURE_TERMINAL
                        || s.structureType == STRUCTURE_STORAGE)
                        && s.store[RESOURCE_ENERGY] > 0)
                        || (s.structureType == STRUCTURE_LINK)


                });
            }
            // if one was found


            // hack

            container = Game.getObjectById(creep.memory.SourceObjId);
            //          console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] HACK HACK HACK container is ' + container +'</>');

            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " switching is moving closer to container");
                    creep.moveTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
            else {
                // find closest source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    // console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + " is moving closer to constroler");
                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            } // else
        }
    }

};

function workCheck(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        return creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        // switch state
        return creep.memory.working = true;
    }
}
