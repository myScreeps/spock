var util = require('Util');


module.exports = function () {

    var fileName = "creep Proto ";
    var debugRoomName = "E27S51";
    var debugColor = "Red";

    Creep.prototype.debug = function (textColor, fileName, lineNumber, debugText) {
        console.log('<font color = "' + textColor + '">[' + fileName + 'line:' + lineNumber + '] ' + debugText + '</>');
    }

    // function Unit() {
    //     this._data; // just temp value
    // }
    // Unit.prototype = {
    //     get accreation() {
    //         return this._data;
    //     },
    //     set accreation(value) {
    //         this._data = value
    //     },
    // }

    // Creep.prototype.defineProperty(Creep, 'property1', {
    //     value: 42,
    //     writable: false
    // });



    // Creep.prototype.controller = Creep.room.controller;


    // Creep.prototype = {
    //     get controller() {
    //         return this.room.controller;
    //     }
    // }


    // Creep.prototype = {
    //     get accreation() {
    //         return this._data;
    //     },
    //     set accreation(value) {
    //         this._data = value
    //     },
    // }

    // obj.__defineSetter__(prop, fun)
    Creep.__defineSetter__('value', function (val) {

        // this.value = "setter Test";
        this.value++;
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] this.value is ' + this.value + '</>');

    });

    // Object.defineProperty(Creep, 'valuey', {
    //     set: function (val) {
    //         this.anotherValue = val + 1;
    //         this.valuey = val + 10;
    //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] this.valuey is ' + this.valuey + '</>');
    //     }
    // });




    // var o = {};
    // o.__defineSetter__('value', function (val) {
    //     this.anotherValue = 13;
    //     this.value = val;
    // });


    Creep.prototype.storage = function () {
        if (this.room.storage == undefined) {
            return undefined;
        }
        return this.room.storage;
    }


    Creep.prototype.terminal = function () {
        if (this.room.terminal == undefined) {
            return undefined
        }
        return this.room.terminal;
    }


    //   var containerUnderMiner = creep.room.lookAt(creepCurrentPos)[0];
    Creep.prototype.getObjectAtCreepPos = function (myStructureType) {
        const look = this.room.lookAt(this.pos);
        returnValue = undefined;
        look.forEach(function (lookObject) {
            if (lookObject[LOOK_STRUCTURES] == undefined) {
                return;
            }

            //   console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] lookObject[LOOK_STRUCTURES]  is ' + lookObject[LOOK_STRUCTURES]  +" structureType:"+ lookObject[LOOK_STRUCTURES].structureType +'</>');

            //console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + '] lookObject[LOOK_STRUCTURES]  is ' + JSON.stringify(lookObject[LOOK_STRUCTURES]) + '</>');

            if (lookObject.type == LOOK_STRUCTURES &&
                lookObject[LOOK_STRUCTURES].structureType == myStructureType) {
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] debug  is ' + lookObject[LOOK_STRUCTURES].structureType  +'</>');
                returnValue = lookObject[LOOK_STRUCTURES];

            }
        });

        return returnValue;

    }

    Creep.prototype.getObjectAtCreepPos2 = function (myStructureType) {
        const look = this.room.lookAt(this.pos);

        return look.forEach(function (value, index, _look) {
            if (value.structureType === myStructureType) {
                return value;
            }

            // return value;


        });

        //   return;


    }

    Creep.prototype.findConstructionSite = function (range) {
        const constructionTargets = this.pos.findInRange(FIND_CONSTRUCTION_SITES, range);
        if (constructionTargets.length > 0) {
            return constructionTargets[0];
        } else {
            return undefined;
        }
    }

    Creep.prototype.repairNearByStructures = function (range) {

        // if (this.room.name == debugRoomName) {
        //     console.log('<font color = '+ debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] findNearestStructureToRepair </>');

        //  }
        var structures = this.room.lookForAtArea(LOOK_STRUCTURES, this.pos.y - range, this.pos.x - range, this.pos.y + range, this.pos.x + range, true);

        if (structures == undefined) {
            return undefined;
        }

        try {
            //   var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
            //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);

            var workParts = this.getActiveBodyparts(WORK);
            if (workParts == 0) {
                return -1;
            }

            if (structures == undefined || structures == []) {
                return;
            }




            for (let i = 0; i < structures.length; i++) {

                var targetRepairStructure = structures[i].structure;

                if (targetRepairStructure.structureType != STRUCTURE_ROAD
                    && targetRepairStructure.structureType != STRUCTURE_CONTAINER
                    && targetRepairStructure.structureType != STRUCTURE_SPAWN
                    && targetRepairStructure.structureType != STRUCTURE_LINK
                    && targetRepairStructure.structureType != STRUCTURE_TERMINAL
                    && targetRepairStructure.structureType != STRUCTURE_RAMPART
                ) {

                    if (this.room.name == debugRoomName) {
                        console.log('<font color = ' + 'yellow ' + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] Skipping targetRepairStructure.structureTyp: ' + targetRepairStructure.structureType + ' </>');

                    }
                    continue;
                    return;
                }

                // console.log ("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                // if (this.room.name == debugRoomName) {
                //     console.log('<font color = '+ 'yellow '  + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + '] targetRepairStructure: ' + targetRepairStructure +' </>');

                //  }

                var hitsMax = targetRepairStructure.hitsMax;
                if (targetRepairStructure.structureType == STRUCTURE_RAMPART) {

                    hitsMax = 1890000;
                }

                if (targetRepairStructure.hits < hitsMax) {
                    var repairStatus = this.repair(targetRepairStructure);
                    if (this.room.name == debugRoomName) {
                        console.log('<font color = ' + 'green' + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + ']  Miner is repairing structure: ' + targetRepairStructure + '</>');

                    }

                    //    if (this.room.name == "E46S1") {
                    //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
                    // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                    //    }

                    //  break;

                    return;

                }
                else {
                    if (this.room.name == debugRoomName) {
                        console.log('<font color = ' + debugColor + '>[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.room.name + ']  Miner is NOT repairing structure: ' + targetRepairStructure + '</>');

                    }
                }



            }
        } catch (e) {

            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + this.room.name + ' ' + this.name + ' Trapped error while repairing roads is ' + e);
        }



    }

    Creep.prototype.findNearestLink = function (range) {
        const constructionTargets = this.pos.findInRange(FIND_MY_STRUCTURES, range, { filter: { structureType: STRUCTURE_LINK } });
        if (constructionTargets.length > 0) {
            return constructionTargets[0];
        } else {
            return undefined;
        }
    }


    // *************************************************************************************
    // Could return undefined or null of creep is in a unclaimed room.
    // *************************************************************************************
    Creep.prototype.findNearestSpawn = function (range) {
        // spawn could be undefined or null of creep is in a unclaimed room.
        // const spawn = this.pos.findClosestByRange(FIND_MY_SPAWNS,range);
        // return spawn;

        const spawns = this.pos.findInRange(FIND_MY_STRUCTURES, range, { filter: { structureType: STRUCTURE_SPAWN } });
        if (spawns.length > 0) {
            return spawns[0];
        } else {
            return undefined;
        }
    }

    Creep.prototype.pause = function () {
        if (this.memory.pause != undefined) {
            return this.memory.pause;
        }
    }

    Creep.prototype.pickupResources = function pickupResources(range) {
        util.pickupResources(this, range);
    }

    Creep.prototype.repairRoad = function repairRoad() {
        util.repairRoad(this);
    }

    Creep.prototype.energy = function energy() {
        return this.store[RESOURCE_ENERGY];
    }


    Creep.prototype.findNearestStructureByType = function (spawnOrCreep, structureType, range) {
        return util.findNearestStructureByType(spawnOrCreep, structureType, range);
    }

    Creep.prototype.renew = function (ticksToLive) {

        // do not renew creep if ignoreNew == true
        if (this.memory.ignoreRenew != undefined) {
            if (this.memory.ignoreNew == true) {
                return false;
            }
        }

        if (this.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            if (this.ticksToLive <= ticksToLive) {
                this.memory.renew = true;
            }
        }

        if (this.memory.renew == true) {

            var closestSpawn = this.pos.findClosestByPath(FIND_MY_SPAWNS);
            var isNextToSpawn = this.pos.isNearTo(closestSpawn);
            if (!isNextToSpawn) {
                var travelToStatus = this.travelTo(closestSpawn);
                return this.memory.renew;
            }
            closestSpawn.renewCreep(this);
            if (this.ticksToLive >= 1450) {
                this.memory.renew = false;
            }

            return this.memory.renew;
            //var travelToStatus = creep.travelTo(closestSpawn);
        }
    }

    Creep.prototype.nearestLinkToController = function (range) {
        this.signController;
    };

    Creep.prototype.roomPosition = function (x, y) {
        var pos = new RoomPosition(x, y, "E26N3");
        return pos;
    };

    Creep.prototype.parkIt = function () {
        if (this.pos.isEqualTo(this.memory.parkItPos) == false) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1this.memory.parkItPos is ' + this.memory.parkItPos + '</>');
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] this.pos.isEqualTo(this.memory.parkItPos) is ' + this.pos.isEqualTo(this.memory.parkItPos) + '</>');

            var moveStatus = this.travelTo(this.memory.parkItPos);
            return false; if (creep.pos.isNearTo(Game.spawns.Spawn2.pos)
                && creep.store.getFreeCapacity() > 0
                && Game.spawns.Spawn2.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                creep.transfer(Game.spawns.Spawn2, RESOURCE_ENERGY);
            } if (creep.pos.isNearTo(Game.spawns.Spawn2.pos)
                && creep.store.getFreeCapacity() > 0
                && Game.spawns.Spawn2.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                creep.transfer(Game.spawns.Spawn2, RESOURCE_ENERGY);
            }
        }
    }


    Creep.prototype.goto = function (pos) {
        if (this.pos.isNearTo(pos) != true) {
            var moveStatus = this.travelTo(pos);
            return false;
        }
        return true
    }

    Creep.prototype.gotoXY = function (x, y) {
        var pos = new RoomPosition(x, y, this.room.name)
        if (this.pos.isEqualTo(pos) != true) {
            var moveStatus = this.travelTo(pos);
            return false;
        }
        return true;
    }



    Creep.prototype.forceMove = function (reservedlocation, moveDirection) {
        var moveStatus;
        if (this.pos.isEqualTo(reservedlocation)) {
            if (this.store[RESOURCE_ENERGY] != 0) {
                moveStatus = this.move(moveDirection);
                if (moveStatus != 0) {
                    var moveStatus = this.move(moveDirection++);
                    if (moveStatus != 0) {
                        var moveStatus = this.move(moveDirection++);
                        if (moveStatus != 0) {
                            var moveStatus = this.move(moveDirection++);
                        }
                    }
                }
            }
            else {
                this.move(BOTTOM);
            }
        }
        return moveStatus;
    }



    Object.defineProperty(Creep.prototype, "color", {
        set: function (val) {
            this._color = val.toUpperCase();
            return this._color;
        },

        get: function () {
            return this._color;

        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Creep.prototype, "terminal", {
        get: function () {
            if (this.room.terminal != undefined) {
                return this.room.terminal;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Creep.prototype, "storage", {
        get: function () {
            if (this.room.terminal != undefined) {
                return this.room.storage;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Creep.prototype, "ignoreRenew", {
        set: function (val) {
            this.memory.ignoreRenew = val;
            return this.memory.ignoreRenew;
        },

        get: function () {
            return this.memory.ignoreRenew;

        },
        enumerable: true,
        configurable: true
    });

    // Creep.prototype.findNearestSource(){

    // }




}
