/* eslint-disable no-unused-vars */
var util = require('Util');
var fileName = "tower        ";

module.exports =
{

    run: function () {


        // //************************************** */
        // // find all towers
        // //************************************** */

        var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);


        var maxWallHits = 10000;
        var maxRampartsHits = 50000;
        var spawnRampartHits = 50000;
        var towerHits = 50000;
        var extensionHits = 50000;


        // if (Game.time % 100 == 0) {
        //     firstSpawn.memory.maxRampartsHits = firstSpawn.memory.maxRampartsHits  + 350;
        // }




        var testRampartObj = Game.getObjectById("5e350620a87dbb0dfe7261e8");
        //   var rampartHits = testRampartObj.hits;
        var rampartHits = 1

        //var screenText = new RoomVisual(rampartHits);
        // var hits = Game.spawns.Spawn2.memory.maxRampartsHits = 2;
        var hits = 1;

        //  var screenText1 = new RoomVisual().text(util.numberWithCommas(Game.time), 40, 29, { color: 'yellow', font: "1.0 Times New Roman", align: "left" });
        //  var screenText1 = new RoomVisual().text(util.numberWithCommas(hits), 40, 30, { color: 'yellow', font: "1.0 Times New Roman", align: "left" });
        //var screenText1 = new RoomVisual().text("Neal Noble", 40, 31, {align: 'left'});
        //    var screenText2 = new RoomVisual().text(util.numberWithCommas(rampartHits), 40, 31, { color: 'yellow', font: "1.0 Times New Roman", align: "left" });



        // var towerTargetLocation = new RoomPosition(42, 27, "E26N3")
        // var look = tower.room.lookAt(towerTargetLocation)
        // look.forEach(function (lookObject) {
        //     if (lookObject.type == LOOK_CREEPS) {
        //         tower.attack(lookObject.creep);
        //     }
        // });
        // if creep is at 43,27 then attack creep.



        for (let tower of towers) {

            // if (tower.id == "6053f6f0434e3bbc31be9458"          // tower 13,20  E26N3
            //     || tower.id == "60540ef937ff3948e85e4dc1"       // tower 13,21  E26N3
            //     || tower.id == "6027fc073f89d23df71d4d82"       // tower 15,20  E26N3
            //     || tower.id == "605405068951753c9fcb861e") {    // tower 15,21  E26N3
            //     continue;
            // }

            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  tower.room.Test is ' + tower.room.Test  +'</>');
            //  tower.memory.test = "test";
            // find closes hostile creep that has a heal part.
            //   var room_1 = Object.keys(Game.rooms)[0].name;


            // Room.prototype.getSpawns = function(): StructureSpawn[] {
            //     return this.find(FIND_MY_SPAWNS) as StructureSpawn[];
            // };

            // var towerTargetLocation = new RoomPosition(42, 27, "E26N3")
            // var look = tower.room.lookAt(towerTargetLocation)
            // look.forEach(function (lookObject) {
            //     if (lookObject.type == LOOK_CREEPS) {
            //         tower.attack(lookObject.creep);
            //     }
            // });
            // // if creep is at 43,27 then attack creep.


            var firstSpawn = tower.room.find(FIND_MY_SPAWNS)[0];

            if (firstSpawn.memory.maxWallHits == undefined) {
                firstSpawn.memory.maxWallHits = maxWallHits;
            }
            else {

                if (Game.time % 100 == 0 && tower.room.storage.store[RESOURCE_ENERGY] > 990000) {
                    firstSpawn.memory.maxWallHits = firstSpawn.memory.maxWallHits + 1667;
                }

                maxWallHits = firstSpawn.memory.maxWallHits;


            }
            // JoeByrd
            // if (firstSpawn.memory.maxRampartsHits == undefined) {
            //     firstSpawn.memory.maxRampartsHits = maxRampartsHits;
            // }
            // else{

            //     maxRampartsHits = firstSpawn.memory.maxRampartsHits;
            //     if (Game.time % 100 == 0) {
            //        firstSpawn.memory.maxRampartsHits = firstSpawn.memory.maxRampartsHits;

            //     }
            // }


            if (firstSpawn.memory.extensionHits == undefined) {
                firstSpawn.memory.extensionHits = extensionHits;
            }
            else {
                extensionHits = firstSpawn.memory.extensionHits;
            }


            if (firstSpawn.memory.spawnRampartHits == undefined) {
                firstSpawn.memory.spawnRampartHits = spawnRampartHits;
            }
            else {
                if (Game.time % 100 == 0) {
                    if (firstSpawn.memory.spawnRampartHits < 300000000) {
                        //  firstSpawn.memory.spawnRampartHits = firstSpawn.memory.spawnRampartHits + 1000;
                    }

                }

                spawnRampartHits = firstSpawn.memory.spawnRampartHits;
                var debugColor = "Yellow";
                if (Game.time % 100 == 0) {
                    firstSpawn.memory.maxRampartsHits = firstSpawn.memory.maxRampartsHits + 67;
                    debugColor = "green";

                }

                var maxRampartsHits = firstSpawn.memory.maxRampartsHits;
                // console.log('<font color = ' + debugColor> + '[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] maxRampartsHits is ' + maxRampartsHits +'</>');

            }

            //  var firstSpawn = tower.room.getSpawns();
            //  var firstSpawn = tower.room.getFirstSpawn;

            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  firstSpawn is ' + firstSpawn +'</>');

            // var rampartMaxHits =  firstSpawn.memory.rampartMaxHits;
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  JSON.stringify(tower.room) is ' + JSON.stringify(tower.room)  +'</>');

            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  rampartMaxHits is ' + rampartMaxHits +'</>');
            // var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
            // var mycreeps = tower.room.find(FIND_MY_CREEPS);
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ mycreeps is ' + mycreeps);

            // var results = _.filter(mycreeps, _.filter({ 'owner': 'nrnoble' }));
            // /     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  @@@@@@ @@@@ results is ' + results);
            // var mycreeps  = tower.room.find(FIND_MY_CREEPS);
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );

            // ********************************************************************************************************
            // Attack invaders
            // ********************************************************************************************************
            var invadersCount = tower.room.find(FIND_HOSTILE_CREEPS).length;
            if (invadersCount > 0) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] invadersCount is ' + invadersCount + '</>');

            }

            //console.log('[' + fileName + 'line:' + util.LineNumber() + ']  JSON.stringify(mycreeps) is ' + JSON.stringify(mycreeps) );

            var roomController = tower.room.controller;
            var safeModeTimeRemaining = roomController.safeMode;


            // safemode is undefined when not active, otherwise it has a count down value
            // there no point in attacking invaders during safeMode, just a waste of energy.
            /* #region  Attack only when Safe mode is undesfied. */
            if (safeModeTimeRemaining == undefined) {

                //   var towerCountInThisRoom = tower.room.find(FIND_MY_STRUCTURES, {filter: s => s.structureType == STRUCTURE_TOWER}).length;
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  towerCountInThisRoom is ' + towerCountInThisRoom +'</>');
                // towersInThisRoom = _.filter(towers, s => s.structureType == STRUCTURE_TOWER)
                if (invadersCount > 0) {
                    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] invadersCount is ' + invadersCount + '</>');

                    var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                    var evilCreepHeal = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, { filter: (s) => s.getActiveBodyparts(ATTACK) });
                    evilCreepHeal = undefined;
                    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@ww@@@ evilcreep is ' + evilCreep);

                    // if one is found...

                    //  var invaders = tower.room.find(FIND_HOSTILE_CREEPS);
                    //  var mycreeps = tower.room.find(FIND_MY_CREEPS);


                    //       Once I have a array of invaders, how can I use lodash to filter that array for invaders that have HEAL part.
                    // I have not used lodash much. How can I filter an array for invaders that have HEAL part
                    // `var invaders`

                    if (tower.room.name == "W14S18") {
                        if ((evilCreep.pos.y > 7 && evilCreep.pos.y < 49) || evilCreep.pos.x > 46) {

                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack1 is ' + '</>');
                            tower.attack(evilCreep);
                            continue;
                        }
                    }
                    else if (evilCreepHeal != undefined) {
                        // ...FIRE!

                        //   var badguycreep = Game.getObjectById("5d6b2c15a15b166db2e08304");
                        var status = evilCreepHeal.getActiveBodyparts(HEAL);
                        console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!! evilCreep.getActiveBodyparts(HEAL) status  is ' + status);

                        if (evilCreepHeal.getActiveBodyparts(HEAL) > 1 && evilCreepHeal.getActiveBodyparts(HEAL) < 12) {
                            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] HEAL ATTACK HEAL ATTACK HEAL ATTACK firing on evil creep status  is ' + status);
                            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);

                            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] creep has heal parts is ' + +'</>');
                            // // if (tower.room.name == "W14S18") {
                            // //     if (evilCreepHeal.pos.y > 9 && evilCreepHeal.pos.y < 46) {
                            // //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack1 is ' + '</>');
                            // //          tower.attack(evilCreepHeal);
                            // //         continue;
                            // //     }
                            // // }
                            // // else {
                            // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] creep DOES NOT HAVE heal parts is ' +  +'</>');

                            // //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attack2 is ' + '</>');

                            // //     //  tower.attack(evilCreepHeal);
                            // //     continue;
                            // // }

                            // if (evilCreep.owner.username != "JoeByrdx") {
                            //     if (evilCreep.pos.isEqualTo(new RoomPosition(40, 24, "E26N3"))) {
                            //         tower.attack(evilCreep);
                            //     }
                            // }

                            // if (evilCreep.owner.username != "JoeByrdx") {
                            //     if (evilCreep.pos.x < 41 && evilCreep.pos.y < 32) {
                            //         //    tower.attack(evilCreep);
                            //     }
                            // }


                            //  return;
                        }

                    }
                    else {
                        //                           if (evilCreepHeal.getActiveBodyparts(HEAL).length < 25) {
                        // TODO: add a enemy creeps to a target list only once it breaches specific boundry
                        // in a room. Once on the target list it remain a target while in the room, once it
                        // leaves the room or dies, it is removed from list.
                        // The need for a target list is to prevent enemy creeps from just bouncy in\out of
                        // the room to heal, and doing the same thing with a specific defined boundry

                        var creepLocationInRoom = [evilCreep.pos.x, evilCreep.pos.y]
                        var roomParemeter = Memory.E26N3.roomParameter;
                        var insideParameterStatus = util.insideParameter(creepLocationInRoom, roomParemeter);
                        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] insideParameterStatus is ' + insideParameterStatus + '</>');

                        if (insideParameterStatus == true) {
                            tower.attack(evilCreep);
                        }

                        if (evilCreep.owner.username != "JoeByrdx") {

                            if (evilCreep.owner.username != "JoeByrdx") {
                                if (evilCreep.pos.x < 41
                                    && evilCreep.pos.x > 6
                                    && evilCreep.pos.y < 32
                                    && evilCreep.pos.y > 12
                                ) {
                                    tower.attack(evilCreep);
                                }
                            }


                            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] evilCreepHeal is ' + evilCreepHeal + '</>');
                            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + tower.room.name + ' HEAL ATTACK HEAL ATTAC ATTACK firing on evil creep status  is ' + status);
                            if (evilCreep.pos.isEqualTo(new RoomPosition(40, 24, "E26N3"))) {
                                //  var attackStatus = tower.attack(evilCreep);
                                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] attackStatus is ' + attackStatus + '</>');

                            }
                        }
                        // else{
                        //     console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] evilCreepHeal is not being attacked because it can not be damaged' + evilCreepHeal + '</>');

                        // }
                        //   return;
                        continue;

                    }





                }

            }


            //heal
            /* #region  Tower Heals damaged creeps */
            var damagedCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, { filter: s => s.hits < s.hitsMax });
            if (damagedCreep != undefined) {
                tower.heal(damagedCreep);
            }
            /* #endregion */



            /* #endregion */






            // if (evilCreep == null) {


            //     //  tower.memory.test = "test";
            //     // find closes hostile creep
            //     var evilCreep = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] evilcreepevilcreepevilcreepevilcreep evilcreep is ' + evilCreep);
            //     // if one is found...
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] firing on evil creep status  is ' + status);
            //     tower.attack(evilCreep);
            //     continue;

            // }

            var targetCreep = tower.pos.findClosestByRange(FIND_CREEPS);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] targetCreep.my is ' + targetCreep.my);



            // if one is found...
            if (targetCreep != null && targetCreep.my == true && targetCreep.hits < targetCreep.hitsMax) {
                // ...heal
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] healing creep ' + targetCreep);
                tower.heal(targetCreep);
                continue;
                ///  return;
            }


            // if (creep != null && tower.energy > 300)
            var towerTarget = undefined;

            // if (tower.id == "6053f6f0434e3bbc31be9458"         // tower 13,20  E26N3
            //     || tower.id == "60540ef937ff3948e85e4dc1"      // tower 13,21  E26N3
            //     || tower.id == "6027fc073f89d23df71d4d82"      // tower 15,20  E26N3
            //     || tower.id == "605405068951753c9fcb861e") {  // tower 15,21  E26N3
            //     continue;
            // }



            if (tower.energy > 499) {

                if (tower.room.name == "W9N34") {
                    var source2Container = Game.getObjectById("5f4c0b835144efc3ebf188b4");
                    if (source2Container.hits < source2Container.hitsMax) {
                        towerTarget = source2Container;
                    }
                }


                //                  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] maxWallHits is ' + maxWallHits +'</>');



                var skipNukeRampart = "";
                if (Game.time % 5 != 0) {
                    var skipNukeRampart = "5ffeaffdefa97d2aab517cf4";
                }


                var rampartsArray = [];
                if (Game.time % 10 == 0) {
                    rampartsArray.push("606e07a2670d4b41db961eba")
                    rampartsArray.push("")
                    rampartsArray.push("")
                }

                // towerTarget = function (rampartsArray){

                // }


                if (towerTarget == undefined) {
                    towerTarget = tower.pos.findClosestByPath(FIND_STRUCTURES, {
                        // the second argument for findClosestByPath is an object which takes
                        // a property called filter which can be a function
                        // we use the arrow operator to define it
                        //filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                        filter: (s) => s.structureType == STRUCTURE_ROAD && s.hits < s.hitsMax
                            //  || s.structureType == STRUCTURE_WALL && s.hits < maxWallHits

                            || s.structureType == STRUCTURE_RAMPART
                            && s.hits < maxRampartsHits
                            // && s.id != "5ffd7aec27026c589cd040cf" // W8N35 (13,22) Rampart next to Soruce1
                            // && s.id != "5ffd5bb2543e6512d34f7e33" // W8N36 (5,19) Rampart on Spawn7
                            // && s.id != "5ffe6a5afd29116e1e64aacf" // W8N36 (5,17) Rampart on Spawn7
                            // && s.id != "5ffebdf1fc26f502cf106f29" // W8N36 (5,17) Rampart on Spawn8
                            // && s.id != "5ffeb4cfe086f4a5f11047e7" // W8N36 (6,14) near source1
                            // && s.id != "5ffedbd48a854b232f1bf7a0" // W8N36 (6,17) near source1
                            // && s.id != "605c19a3dbd1e68a543c78ab" // temp used for a test
                            // && s.id != "60661e0b5ce9e5addcabf828" // temp used for a test


                            //   && s.id != energyCheck2(tower, "605a56167f0ddcc115b7b473", 10, 990000000, 298000)
                            //  && s.id != energyCheck2(tower, "605a7be069a76c50003fd64d", 12, 990000000, 298000)
                            //  && s.id != energyCheck2(tower, "605ebd93015f30160f44c2e7", 10, 990000000, 298000)
                            //  && s.id != energyCheck2(tower, "605db0f3eb1a745af3f1d66a", 14, 990000000, 298000)
                            //  && s.id != energyCheck2(tower, "605db0f15e99e41c3fb3b6c1", 16, 990000000, 298000)
                            // && s.id != energyCheck2(tower, "6060d11a1ee4c17968d5a6b6", 10, 995000, 298000)
                            // && s.id != energyCheck2(tower, "6062e471c2c8a52c33f05646", 10, 995000, 298000)
                            && s.id != energyCheck2(tower, Memory.rampart, 10, 995000, 298000)
                            //&& s.id != rampartStack(tower, rampartsArray)




                            && s.id != "5ffe331c9517dc7cfdf982d0"       // W9N34 (42,2) Rampart on link near source2
                            && s.id != skipNukeRampart                  // W8N35 (41,3) container next to Soruce2
                            // && s.id != "5ffeaffdefa97d2aab517cf4"    // W8N35 (41,3) Nuke

                            || s.structureType == STRUCTURE_CONTAINER && s.hits < s.hitsMax
                            && s.id != "6003bbfaf44a12affc149d5c" // E26N3 (5,16) container next to Soruce1
                            && s.id != "6003cfd2773fb20d53bdc34f" // E26N3 (40,20) container next to Soruce2
                        //  && s.id != "5db1ea5ee3a445bb5b59a565" // W8N35 (13,22) container next to Soruce1
                        //  && s.id != "5f4c0b835144efc3ebf188b4" // W8N35 (41,3) container next to Soruce2



                        // || s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(firstSpawn) && s.hits < spawnRampartHits
                        // || s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(firstSpawn.room.storage) && s.hits < spawnRampartHits

                        // // Maintain ramparts on all towers
                        // || s.structureType == STRUCTURE_RAMPART
                        //     && s.pos.lookFor(LOOK_STRUCTURES)[0].structureType == STRUCTURE_TOWER
                        //     && s.hits < towerHits
                        //     && s.id != skipNukeRampart              // W8N35 (41,3) container next to Soruce2

                        // || s.structureType == STRUCTURE_CONTAINER && s.hits < s.hitsMax


                    });
                }
                //  filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL});


                // if one is found...750000
                if (towerTarget != undefined) {

                    //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                    if (towerTarget.hitsMax == 750000 && towerTarget.structureType == STRUCTURE_ROAD && towerTarget.hits < 750000) {
                        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                        status = tower.repair(towerTarget);
                    }
                    else if (towerTarget.structureType == STRUCTURE_RAMPART && towerTarget.hits < maxRampartsHits) {
                        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is ' + structure.hits + " type  is " + structure.structureType);


                        // slow upgrade to max
                        if (Memory.skipCount == undefined) {
                            Memory.skipCount = 0;
                        }

                        // if ((towerTarget.id == "5ffeaffdefa97d2aab517cf4" && Game.time % 10 != 0)) {
                        //     Memory.skipCount++;
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  skipping towerTarget: ' + towerTarget + ' skip Count: ' + Memory.skipCount +'</>');
                        //    //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  Game.time: ' + Game.time +'</>');
                        //     continue;
                        // }

                        Memory.skipCount = 0;
                        // if (debug) {console }
                        //console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + ']  targeting towerTarget: ' + towerTarget +'</>');

                        // if (towerTarget.id == "5ff6de90816e67587ebf07a7") {
                        //     return;
                        // } // asd aswd asd

                        // var rampartPos = new RoomPosition(26, 31, 'W9N34');
                        // var gameDelay = 10;
                        // if (towerTarget.pos.isEqualTo(rampartPos)) {
                        //    if (Game.time % gameDelay == 0 ) {
                        //     //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 1Targeting.pos: ' + towerTarget.pos + '</>');
                        //         status = targetSpecificRampart(towerTarget, tower, rampartPos, gameDelay);
                        //     //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 11status: ' + status +'</>');
                        //    }
                        //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 1status: ' + status +'</>');


                        // }


                        rampartPos = new RoomPosition(44, 16, 'W8N36');
                        gameDelay = 3;
                        if (towerTarget.pos.isEqualTo(rampartPos)) {
                            if (Game.time % gameDelay == 0) {
                                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 1Targeting.pos: ' + towerTarget.pos + '</>');
                                status = targetSpecificRampart(towerTarget, tower, rampartPos, gameDelay);
                                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 11status: ' + status +'</>');
                            }
                            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 1status: ' + status +'</>');


                        }
                        // else if(towerTarget.pos.isEqualTo(new RoomPosition(28, 16, 'W8N35'))){
                        //     status = targetSpecificRampart(towerTarget, tower, rampartPos, gameDelay);

                        // }
                        else {

                            status = tower.repair(towerTarget);
                            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 2Targeting.pos: ' + towerTarget.pos + '</>');
                            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] 2status: ' + status +'</>');

                        }


                    }
                    else if (towerTarget.structureType == STRUCTURE_WALL && towerTarget.hits < maxWallHits) {
                        console.log('[' + fileName + 'line:' + util.LineNumber() + '] Repairing rampart hitz is ' + towerTarget.hits + " type  is " + towerTarget.structureType);
                        status = tower.repair(towerTarget);
                    }
                    else {

                        status = tower.repair(towerTarget);
                        if (status != 0) {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  tower is repairing ' + towerTarget.structureType + '". Repair Status is ' + status);
                        }

                    }

                }
                //  else if ( structure != undefined && struture.structureType == STRUCTURE_RAMPART)
                //  {
                //      if (structure.hits < 75000){
                //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Structure is defined as ' + structure.structureType);
                //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] Tower is repainging rampart  Hits remainging: ' + structure.hits);

                //         var status = tower.repair(structure);
                //      }
                //  }
                else {


                    //    var status = tower.repair(structure);
                    //    if(status != 0){
                    //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']   Repair Status is ' + status);
                    //    }
                }

            }

        }


    }
}


function targetSpecificRampart(towerTarget, tower, rampartRoomPosition, gameDelay) {

    var status = -1;
    if (towerTarget.pos.isEqualTo(rampartRoomPosition)) {
        // console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] towerTarget.pos: ' + towerTarget.pos +'</>');
        if (Game.time % gameDelay == 0) {
            //  console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] Targeting: ' + towerTarget + '</>');
            status = tower.repair(towerTarget);
            return status
        }
    }


    return status;
}



function energyCheck2(tower, structureId, tickInterval, minEnergyInStorage, minEnergyInTerm) {

    if (Game.time % tickInterval == 0) {
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!calling energyCheck ' + '</>');
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + tower.room.name + '] Fire....' + '</>');

        return "";
    }


    //    if (tower.room.storage.store[RESOURCE_ENERGY] <= minEnergyInStorage || tower.room.terminal.store[RESOURCE_ENERGY] <= minEnergyInTerm) {
    if (tower.room.storage.store[RESOURCE_ENERGY] < minEnergyInStorage) {
        return structureId;
    }





    return "";
}


function rampartStack(tower, ramparts) {
    if (ramparts.length > 0) {
        return ramparts.shift;
    }
    return "";
}

// function TargetRepair(extensionHits)
// {
//     if (firstSpawn.memory.extensionHits == undefined) {
//         firstSpawn.memory.extensionHits = extensionHits;
//     }
//     else{
//         extensionHits = firstSpawn.memory.extensionHits;
//     }

//     return extensionHits;
// }

// 6053f6f0434e3bbc31be9458 tower 13,20  E26N3
// 60540ef937ff3948e85e4dc1 tower 13,21  E26N3
// 6027fc073f89d23df71d4d82 tower 15,20  E26N3
// 605405068951753c9fcb861e tower 15,21  E26N3

