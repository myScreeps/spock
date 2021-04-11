var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var util = require('Util');
var roleBuilder = require('role.builder');



var fileName = 'recycle ';





module.exports = {
    run: function (creep) {

        if (creep.memory.parkItPos == undefined) {
            creep.memory.parkItPos = creep.roomPosition(39, 18);
        }



        // if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
        //     var link2Flag = Game.flags["Link2_" + creep.room.name] //E26N3
        //     if (creep.store.getCapacity(RESOURCE_ENERGY) > 0) {
        //         var link2 = util.findNearestLinkToSource2(creep, 3)
        //         if (creep.pos.isNearTo(link2) != true) {
        //             var moveStatus = creep.travelTo(link2);
        //             return;
        //         }
        //         creep.transfer(link2, RESOURCE_ENERGY);
        //         return;
        //     }
        // }

        // creep.goto(creep.roomPosition(31, 11));
        // util.pickupResources(creep, 0);

        // return;

        // creep.memory.parkItPos = creep.roomPosition(39, 18);
        // var travelStatus = creep.travelTo(creep.memory.parkItPos);
        // if (creep.pos.isEqualTo(creep.memory.parkItPos) == false) {
        //     return;
        // }

        // creep.goto(creep.memory.parkIt.pos);
        // scan room for tombstones
        // var tombstone = creep.pos.findClosestByRange(FIND_TOMBSTONES, { filter: s => s.store > 0 })
        var tombstone = undefined;

        // Don't attempt to withdraw resources while invaders are in the room
        var invadersCount = creep.room.find(FIND_HOSTILE_CREEPS).length;
        if (invadersCount == 0) {
            tombstone = creep.pos.findClosestByRange(FIND_TOMBSTONES, { filter: s => _.sum(s.store) > 0 })
        }

        // var tombstonesHistory = new set (Memory.E26N3.tombstones);
        //  Memory.E26N3.tombstones = Memory.E26N3.tombstones.add
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstone is ' + tombstone + '</>');
        var storeContent = 0;
        if (tombstone != undefined) {
            var storeContent = _.sum(tombstone.store)
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] storeContent is ' + storeContent + '</>');
        }

        //        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] _.sum(creep.store[RESOURCE_ENERGY])  is ' + _.sum(creep.store[RESOURCE_ENERGY]) + '</>');
        //        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store[RESOURCE_ENERGY]  is ' + creep.store[RESOURCE_ENERGY] + '</>');

        // var Lab_GO = util.findStructureAtFlag(creep, "Lab_GO_" + creep.room.name, STRUCTURE_LAB);
        // var Lab_UH = util.findStructureAtFlag(creep, "Lab_UH_" + creep.room.name, STRUCTURE_LAB);
        // var Lab_ZH = util.findStructureAtFlag(creep, "Lab_ZH_" + creep.room.name, STRUCTURE_LAB);
        // var Lab_KO = util.findStructureAtFlag(creep, "Lab_KO_" + creep.room.name, STRUCTURE_LAB);
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Lab_GO is ' + Lab_GO + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Lab_UH is ' + Lab_UH + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Lab_ZH is ' + Lab_ZH + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Lab_KO is ' + Lab_KO + '</>');
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store.getFreeCapacity()' + creep.store.getFreeCapacity() + '</>');


        if ((tombstone == undefined || storeContent == 0 || creep.store.getFreeCapacity() == 0) && creep.store[RESOURCE_ENERGY] > 0) {

            var link2Flag = Game.flags["Link2_" + creep.room.name] //E26N3
            if (creep.store.getCapacity(RESOURCE_ENERGY) > 0) {
                var link2 = util.findNearestLinkToSource2(creep, 3)
                if (creep.pos.isNearTo(link2) != true) {
                    var moveStatus = creep.travelTo(link2);
                    return;
                }
                creep.transfer(link2, RESOURCE_ENERGY);
                return;
            }
        }

        // if ((tombstone == undefined || storeContent == 0 || creep.store.getFreeCapacity() == 0) && creep.store[RESOURCE_UTRIUM_HYDRIDE] > 0) {


        //     var link2Flag = Game.flags["Lab_UH_" + creep.room.name] //E26N3
        //     if (creep.store.getCapacity(RESOURCE_UTRIUM_HYDRIDE) > 0) {
        //         var Lab_UH = util.findStructureAtFlag(creep, "Lab_UH_" + creep.room.name, STRUCTURE_LAB);

        //         var link2 = util.findNearestLinkToSource2(creep, 3)
        //         if (creep.pos.isNearTo(Lab_UH) != true) {
        //             var moveStatus = creep.travelTo(Lab_UH);
        //             return;
        //         }
        //         creep.transfer(Lab_UH, RESOURCE_UTRIUM_HYDRIDE);
        //         return;
        //     }
        // }

        // var depositStatus = labDeposit(creep, tombstone, storeContent, RESOURCE_ENERGY);
        // if (depositStatus != true) {
        //     return;
        // }

        var depositStatus = labDeposit(creep, tombstone, storeContent, RESOURCE_GHODIUM_OXIDE);
        if (depositStatus != true) {
            return;
        }

        var depositStatus = labDeposit(creep, tombstone, storeContent, RESOURCE_UTRIUM_HYDRIDE);
        if (depositStatus != true) {
            return;
        }


        var depositStatus = labDeposit(creep, tombstone, storeContent, RESOURCE_ZYNTHIUM_HYDRIDE);
        if (depositStatus != true) {
            return;
        }
        var depositStatus = labDeposit(creep, tombstone, storeContent, RESOURCE_KEANIUM_OXIDE);
        if (depositStatus != true) {
            return;
        }

        //   /  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] getUsedCapacity is ' + tombstone.getUsedCapacity + '</>');
        if (tombstone == undefined || storeContent == 0) {

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] no tombstone is found. There is nothing for recycler to do at this time' + tombstone + '</>');

            creep.memory.parkItPos = creep.roomPosition(39, 18);
            if (creep.pos.isEqualTo(creep.memory.parkItPos) == false) {
                var travelStatus = creep.travelTo(creep.memory.parkItPos);
                return;
            }
            return;
        }


        if (creep.pos.isEqualTo(tombstone) == false && storeContent > 0) {
            var travelStatus = creep.travelTo(tombstone);
            return;
        }

        creep.withdraw(tombstone, RESOURCE_GHODIUM_OXIDE);
        creep.withdraw(tombstone, RESOURCE_KEANIUM_OXIDE);
        creep.withdraw(tombstone, RESOURCE_ZYNTHIUM_HYDRIDE);
        creep.withdraw(tombstone, RESOURCE_UTRIUM_HYDRIDE);
        creep.withdraw(tombstone, RESOURCE_ENERGY);

        // var distmantleStatus = creep.dismantle(tombstone)
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] distmantleStatus is ' + distmantleStatus + '</>');



        //   return;

        // {
        //     filter: s => ((s.structureType == STRUCTURE_CONTAINER)
        //         || s.structureType == STRUCTURE_TERMINAL
        //         || s.structureType == STRUCTURE_STORAGE)
        //     //   //  && s.store[RESOURCE_ENERGY] > 0 ) || (s.structureType == STRUCTURE_LINK)
        //     //    && s.store[RESOURCE_ENERGY] > 0

        // });

        // creep.parkIt();
        //    return;
        // creep.move(RIGHT);
        // return;
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1recycler </>');

        var Flag_F1 = Game.flags.Link2_E26N3;
        var Flag_F1 = Game.flags.F1;

        util.pickupResources(creep, 0);
        // /60091a986bc6db40323e0d1e
        // link = Game.getObjectById("60655914ab975cbd08867b17");
        // tomestone = Game.getObjectById("60667e9cdbd1e68826403828");
        // //   var pos = new RoomPosition(39, 18, creep.room.name)
        // var travelToStatus = creep.travelTo(Flag_F1);

        // var travelToStatus = creep.travelTo(tomestone);
        // if (creep.pos.isNearTo(tomestone) != true) {
        //     return;
        // }


        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] travelToStatus: ' + travelToStatus + ' </>');




        // return;
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store.getUsedCapacity(RESOURCE_ENERGY): ' + creep.store.getUsedCapacity(RESOURCE_ENERGY) + ' </>');

        if (creep.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
            var link2Flag = Game.flags["Link2_" + creep.room.name] //E26N3
            if (creep.store.getCapacity(RESOURCE_ENERGY) > 0) {
                var link2 = util.findNearestLinkToSource2(creep, 3)
                if (creep.pos.isNearTo(link2) != true) {
                    var moveStatus = creep.travelTo(link2);
                    return;
                }
                creep.transfer(link2, RESOURCE_ENERGY);
                return;
            }
        }


        return;
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2recycler </>');


        var link2 = util.findNearestLinkToSource2(creep, 3);

        // if (creep.store.getUsedCapacity() > 0) {

        //     var lab1 = util.findStrucureAtFlag(creep, "Lab_1_" + creep.room.name, STRUCTURE_LAB, 1)
        //     //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] lab1: ' + lab1 + ' </>');
        //     //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] "Lab_1_" + creep.room.name) ' + "Lab_1_" + creep.room.name + ' </>');

        //     if (creep.pos.isNearTo(lab1) != true) {
        //         var moveStatus = creep.travelTo(lab1);
        //         return;
        //     }



        //     creep.transfer(lab1, RESOURCE_KEANIUM_OXIDE);
        //     creep.transfer(lab1, RESOURCE_ZYNTHIUM_HYDRIDE);
        //     creep.transfer(lab1, RESOURCE_UTRIUM_HYDRIDE);

        //     var transferStatus = transferResource(creep, link2, RESOURCE_GHODIUM_OXIDE);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus: ' + transferStatus + ' </>');

        //     if (transferStatus == true) {
        //         return;
        //     }
        //     var transferStatus = transferResource(creep, link2, RESOURCE_KEANIUM_OXIDE);
        //     if (transferStatus == true) {
        //         return;
        //     }
        //     var transferStatus = transferResource(creep, link2, RESOURCE_ZYNTHIUM_HYDRIDE);
        //     if (transferStatus == true) {
        //         return;
        //     }
        //     var transferStatus = transferResource(creep, link2, RESOURCE_UTRIUM_HYDRIDE);
        //     if (transferStatus == true) {
        //         return;
        //     }
        // }

        // var parkItPos = new roomPosition(x, y, "E26N3");
        //   var pos = new  RoomPosition(39, 18, creep.room.name)

        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] parkItPos is ' + parkItPos + '</ > ');
        // if (creep.parkIt() != true) {
        //     return;
        // };

        // if (creep.goto(Game.flags.F1.pos) != true) {
        //     return;
        // };

        if (creep.parkIt() != true) {
            return;
        };


        // if (creep.pos.isEqualTo(creep.memory.parkItPos) != true) {
        //     var moveStatus = creep.travelTo(creep.memory.parkItPos);
        //     return;
        // }

        return;

        var travelToStatus = creep.travelTo(tomestone);





        var travelToStatus = creep.travelTo(Flag_F1.pos);
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] travelToStatus: ' + travelToStatus + ' </>');

        // return;

        if (creep.memory.mode == undefined) {
            creep.memory.mode = "search";
        }

        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
            // find exit to target room\\
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' !!!!!!!!!!!!!!!!!!!!!!!!!!!!! creep.memory.target is ' + creep.memory.target);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.target is ' + creep.memory.target);

            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            // return the function to not do anything else
            //   /  return;
        }


        var mode = creep.memory.mode;
        var flagTarget = creep.pos.findClosestByPath(FIND_FLAGS, { filter: s => s.name.includes("dismantle") });

        // ********************************************************************************//;
        //          search for a "dismantle_X"
        // ********************************************************************************//;
        if (mode == "search") {

            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mode is ' + mode + '</>');
            //  search for nearest destroyFlag_X
            // when found destory and pickup energy left behind
            // var flagTarget = creep.pos.findClosestByPath(FIND_FLAGS, {
            //     // the second argument for findClosestByPath is an object which takes
            //     // a property called filter which can be a function
            //     // we use the arrow operator to define it
            //     filter: (s) => (s.name.includes ("dismantle"))
            // });

            if (flagTarget != undefined) {


                var moveStatus = creep.moveTo(flagTarget);

                if (creep.pos.isNearTo(flagTarget)) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] moveStatus is ' + moveStatus + '</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.pos is ' + creep.pos + '</>');
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget.pos is ' + flagTarget.pos + '</>');
                    creep.memory.mode = "dismantle";
                }


                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] moveStatus is ' + moveStatus +'</>');
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.pos is ' + creep.pos +'</>');
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget.pos is ' + flagTarget.pos +'</>');

                //var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);

                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagTarget is ' + flagTarget +'</>');

                // var structures = flagTarget.room.lookAt(flagTarget);
                // var target = structures[0];


                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length +'</>');
                // for (const key in structures) {

                //         const element = structures[key].type;
                //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element +'</>');
                // }



                // var status = creep.dismantle(target);

                // if (status == ERR_NOT_IN_RANGE) {
                //     creep.moveTo(flagTarget,{ visualizePathStyle: { stroke: '#ffaa00' } });
                //     util.repairRoad(creep);
                //     return;
                // }

            }

        }


        if (mode == "dismantle") {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mode is ' + mode + '</>');
            var structures = flagTarget.room.lookAt(flagTarget);

            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] structures.length is ' + structures.length + '</>');
            for (const key in structures) {

                const element = structures[key];
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] key is ' + key +'</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element.type + '</>');
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] element is ' + element.structure.id +'</>');

            }



            var target = structures[0].structure;
            var targetPos = target.pos;
            var dismantalSatus = target.destroy();

            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] dismantalSatus is ' + dismantalSatus +'</>');
            //    var withdrawStatus = creep.withdraw(targetPos);
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] withdrawStatus is ' + withdrawStatus +'</>');

            var removeStatus = flagTarget.remove();
            //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] removeStatus is ' + removeStatus +'</>');

        }


    }
};

//var transferStatus = transferResource(creep, lab1, RESOURCE_GHODIUM_OXIDE);
//

function labDeposit(creep, tombstone, storeContent, resource) {

    labFlagName = "Lab_" + resource + "_" + creep.room.name;
    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] labFlagName is ' + labFlagName + '</>');
    //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstone is ' + tombstone + '</>');
    //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] storeContent is ' + storeContent + '</>');
    //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store[resource] is ' + creep.store[resource] + '</>');

    if ((tombstone == undefined || storeContent == 0 || creep.store.getFreeCapacity() == 0) && creep.store[resource] > 0) {

        labFlagName = "Lab_" + resource + "_" + creep.room.name;
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] labFlagName is ' + labFlagName + '</>');
        if (creep.store.getCapacity(resource) > 0) {
            var _Lab = util.findStructureAtFlag(creep, labFlagName, STRUCTURE_LAB);
            //    var link2 = util.findNearestLinkToSource2(creep, 3)
            if (creep.pos.isNearTo(_Lab) != true) {
                var moveStatus = creep.travelTo(_Lab);
                return false;
            }
            creep.transfer(_Lab, resource);
            return true;
        }
    }
    return true;
}


function transferResource(creep, lab, resourceType) {
    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] creep.store.getUsedCapacity(resourceType) is ' + creep.store.getUsedCapacity(resourceType) + '</>');

    if (creep.store.getUsedCapacity(resourceType) > 0) {
        var transferStatus = creep.transfer(lab, resourceType);
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus is ' + transferStatus + '</>');
        if (transferStatus == 0) {
            return true;
        }

        return false;
    }
}

