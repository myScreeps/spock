//var util = require('Util')


const Util = util = require('./Util');
//const util = require('./Util');

var fileName = "Room.prototype"

module.exports = function () {


    // console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] **************************************************</>');
    // console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] ERROR: ' + error +'</>');
    // console.log('<font color = "red">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] **************************************************</>');

    Room.prototype.error = function (message, lineNumber) {
        console.log('<font color = "red">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        console.log('<font color = "red">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] ERROR: ' + message + '</>');
        console.log('<font color = "red">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        return;
    }

    Room.prototype.warning = function (message, lineNumber) {
        console.log('<font color = "orange">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        console.log('<font color = "orange">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] WARNING: ' + message + '</>');
        console.log('<font color = "orange">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        return;
    }


    Room.prototype.message = function (message, lineNumber) {
        console.log('<font color = "greem">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        console.log('<font color = "greem">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] message: ' + message + '</>');
        console.log('<font color = "greem">[' + fileName + 'line:' + lineNumber + '] room[' + creep.room.name + '] **************************************************</>');
        return;
    }

    Room.prototype.overlayText = function (overlayText, x, y, overlayColor) {

        if (x == undefined) {
            x = 1;
        }

        if (y == undefined) {
            y = 1;
        }

        if (overlayColor == undefined) {
            overlayColor = "yellow";
        }
        new RoomVisual(this.name).text(overlayText, x, y, { color: overlayColor, font: 0.6, align: 'left' });
    }

    Room.prototype.terminalOverlay = function (x, y, overlayColor, overlayText) {
        var terminal = this.terminal;
        if (terminal != undefined) {
            if (overlayText == undefined) {
                this.overlayText("terminal: " + terminal.store[RESOURCE_ENERGY], x, y, overlayColor)
                return
            }

            this.overlayText(overlayText, x, y, overlayColor);

        }
        // new RoomVisual(room.name).text("container1: " + container1.store[RESOURCE_ENERGY], x, y, { color: 'yellow', font: 0.6, align: 'left' });
    }

    Room.prototype.storageOverlay = function (x, y, overlayColor, overlayText) {
        var storage = this.storage;
        if (storage != undefined) {
            this.overlayText("storage: " + storage.store[RESOURCE_ENERGY], x, y, overlayColor)
        }
        // new RoomVisual(room.name).text("container1: " + container1.store[RESOURCE_ENERGY], x, y, { color: 'yellow', font: 0.6, align: 'left' });
    }

    Room.prototype.container1Overlay = function (x, y, overlayColor, overlayText) {
        var container1 = this.getSource1Container();
        if (container1 != undefined) {
            this.overlayText("container1: " + container1.store[RESOURCE_ENERGY], x, y, overlayColor)
        }
        // new RoomVisual(room.name).text("container1: " + container1.store[RESOURCE_ENERGY], x, y, { color: 'yellow', font: 0.6, align: 'left' });
    }

    Room.prototype.container2Overlay = function (x, y, overlayColor, overlayText) {
        var container2 = this.getSource2Container();
        if (container2 != undefined) {
            this.overlayText("container2: " + container2.store[RESOURCE_ENERGY], x, y, overlayColor)
        }
    }

    Room.prototype.source2Overlay = function (x, y, overlayColor, overlayText) {
        //  var source2 = this.Source2;
        if (this.Source2 != undefined) {
            this.overlayText("Source2: " + this.Source2.energy + " / " + this.Source2.ticksToRegeneration, x, y, overlayColor)
        }

    }


    Room.prototype.source1Overlay = function (x, y, overlayColor, overlayText) {


        if (overlayText == undefined) {
            overlayText = "Source1: " + this.Source1.energy + " / " + this.Source1.ticksToRegeneration
        }
        this.overlayText(overlayText, x, y, overlayColor)

    }



    Room.prototype.getControllerLink = function (_optionalFlagOrPos) {
        var pos = undefined;
        if (_optionalFlagOrPos != undefined) {
            pos = _optionalFlagOrPos;
        }

        if (pos == undefined) {
            pos = Game.flags["Controller_Link_" + this.name]
            if (pos == undefined) {
                return undefined;
            }
            return this.getLinkAtPos(pos);
        }


    }

    Room.prototype.getSource2Link = function (_optionalFlagOrPos) {
        var pos = undefined;
        if (_optionalFlagOrPos != undefined) {
            pos = _optionalFlagOrPos;
        }

        if (pos == undefined) {
            pos = Game.flags["Source2_Link_" + this.name]
            if (pos == undefined) {
                return undefined;
            }
            return this.getLinkAtPos(pos);
        }


    }

    Room.prototype.getSource1Link = function (_optionalFlagOrPos) {
        var pos = undefined;
        if (_optionalFlagOrPos != undefined) {
            pos = _optionalFlagOrPos;
        }

        if (pos == undefined) {
            pos = Game.flags["Source1_Link_" + this.name]
            if (pos == undefined) {
                return undefined;
            }
            return this.getLinkAtPos(pos);
        }


    }

    Room.prototype.getSource1Container = function (_optionalFlagOrPos) {
        var pos = undefined;
        if (_optionalFlagOrPos != undefined) {
            pos = _optionalFlagOrPos;
        }

        if (pos == undefined) {
            pos = Game.flags["Source1_Container_" + this.name]
            if (pos == undefined) {
                return undefined;
            }
            return this.getContainerAtPos(pos);
        }


    }

    //Source2_Link_E21S55
    Room.prototype.getSource2Container = function (_optionalFlagOrPos) {
        var pos = undefined;
        if (_optionalFlagOrPos != undefined) {
            pos = _optionalFlagOrPos;
        }

        if (pos == undefined) {
            pos = Game.flags["Source2_Container_" + this.name]
            if (pos == undefined) {
                return undefined;
            }
            return this.getContainerAtPos(pos);
        }


    }

    Room.prototype.getContainerAtPos = function (FlagOrPos) {
        var pos = undefined;
        if (FlagOrPos != undefined) {
            pos = FlagOrPos;
        }

        if (pos == undefined) {
            return undefined;
        }


        return this.getObjAtPos(pos, LOOK_STRUCTURES, STRUCTURE_CONTAINER)


    }

    Room.prototype.getLinkAtPos = function (FlagOrPos) {
        var pos = undefined;
        if (FlagOrPos != undefined) {
            pos = FlagOrPos;
        }

        if (pos == undefined) {
            return undefined;
        }


        return this.getObjAtPos(pos, LOOK_STRUCTURES, STRUCTURE_LINK)


    }


    Room.prototype.getResource = function (pos) {

        return this.getObjAtPos(pos, LOOK_RESOURCES, LOOK_RESOURCES);

    }

    Room.prototype.getStructureByType = function (pos, _structureType) {
        //console.log('<font color = "greem">room[' + this.name + '] _structureType is ' + _structureType + '</>');

        return this.getObjAtPos(pos, LOOK_STRUCTURES, _structureType)
    }

    Room.prototype.getObjAtPos = function (pos, _looktype, _objType) {
        //  console.log('<font color = "greem">room[' + this.name + ']xxxxxxxxxxxxxxxxxxxxxxxxxx _objType is ' + _objType + '</>');

        // var source1Flag = this.find(FIND_FLAGS, {filter: s=> s.name.includes(sourceFlagName)})[0];
        //  console.log('<font color = "green">[' + fileName + '] [line:'+ this.LineNumber()+ '] xxxxxxxxxxxxxxxxxxxx sourceFlagName is ' + sourceFlagName  + '</>');
        // console.log('<font color = "green">[' + fileName + '] JSON.stringify(sourceFlagName) is ' + JSON.stringify(sourceFlagName) + '</>');
        //   console.log('<font color = "pink">room[' + this.name + '] _looktype is ' + _looktype + '</>');

        if (pos == undefined) {
            return undefined;
        }

        const look = this.lookAt(pos);
        // console.log('<font color = "green">[' + this.name + '] look is ' + look+ '</>');

        //    return Game.getObjectById("c44207728e621fc");
        // return Game.getObjectById(Memory.W7N4.source1Id);c44207728e621fc
        var itemObj
        look.forEach(function (lookObject) {
            //console.log('<font color = "greem">room[' + this.name + '] lookObject.type is ' + lookObject.type + ' lookObject[_objType] '+lookObject[_objType] +' </>');




            if (lookObject.type == _looktype) {

                if (lookObject.type == _objType) {
                    itemObj = lookObject[_objType]
                    return itemObj;
                }

                if (lookObject[LOOK_STRUCTURES].structureType == _objType) {
                    //     console.log('<font color = "red"> room[' + this.name + '] lookObject[' + LOOK_STRUCTURES + '].structureType is ' + lookObject[LOOK_STRUCTURES].structureType + '</>');

                    itemObj = lookObject[LOOK_STRUCTURES];
                    return itemObj;
                }
                //   console.log('<font color = "pink">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');
                //   console.log('<font color = "pink">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');

                //    console.log('<font color = "pink"> room[' + this.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');
                //  itemObj = lookObject[_objType]
                //    console.log('<font color = "greem"> room[' + this.name + '] lookObject[_looktype] is ' + lookObject[_looktype] + '</>');

                // return lookObject;
                //  return lookObject[LOOK_SOURCES]
            }

            //    if(lookObject.type == _objType) {
            //    // console.log('<font color = "pink">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');
            //    // console.log('<font color = "pink">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');

            //    // console.log('<font color = "pink"> room[' + this.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');
            //     itemObj = lookObject[_objType]
            //  //  console.log('<font color = "greem"> room[' + this.name + '] lookObject[_looktype] is ' + lookObject[_looktype] + '</>');

            //    // return lookObject;
            //   //  return lookObject[LOOK_SOURCES]
            //      }

            //  if (lookObject.type == LOOK_STRUCTURES) {
            //     console.log('<font color = "greem">room[' + this.name + '] start -----------------------------------------</>');

            //     console.log('<font color = "greem">room[' + this.name + '] _objType is ' + _objType + '</>');
            //     console.log('<font color = "greem">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');
            //    console.log('<font color = "pink">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');

            //     console.log('<font color = "greem"> room[' + this.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');
            //     console.log('<font color = "greem"> room[' + this.name + '] lookObject[' + LOOK_STRUCTURES + '].structureType is ' + lookObject[LOOK_STRUCTURES].structureType + '</>');
            //     console.log('<font color = "greem"> room[' + this.name + '] lookObject[ _objType is ' + _objType + '</>');

            //     if (lookObject[LOOK_STRUCTURES].structureType == _objType) {
            //         console.log('<font color = "red"> room[' + this.name + '] lookObject[' + LOOK_STRUCTURES + '].structureType is ' + lookObject[LOOK_STRUCTURES].structureType + '</>');

            //        itemObj = lookObject[LOOK_STRUCTURES];
            //        return itemObj;
            //     }
            //    itemObj = lookObject[LOOK_STRUCTURES][_objType]

            //    console.log('<font color = "greem"> room[' + this.name + '] should be a container is ' + itemObj + '</>');
            //    console.log('<font color = "greem">room[' + this.name + '] end -----------------------------------------</>');


            //  }

        });

        //           console.log('<font color = "red"> room[' + this.name + '] Major error unable to locate source1 in room:' +this.name+ '</>');
        //    console.log('<font color = "greem"> room[' + this.name + '] JSON.stringify(source) is ' + JSON.stringify(source) + '</>');
        //console.log('<font color = "yellow"> room[' + this.name + '] returning itemObj is ' + itemObj + '</>');


        return itemObj;

    }


    Room.prototype.getSourcesInRoom = function () {
        return this.find(FIND_SOURCES);
    },


        Room.prototype.getNumberOfSourcesInRoom = function () {
            return this.getSourcesInRoom().length;
        },


        Room.prototype.getSource = function (sourceFlagName) {
            var source1Flag = this.find(FIND_FLAGS, { filter: s => s.name.includes(sourceFlagName) })[0];
            //  console.log('<font color = "green">[' + fileName + '] [line:'+ this.LineNumber()+ '] xxxxxxxxxxxxxxxxxxxx sourceFlagName is ' + sourceFlagName  + '</>');
            // console.log('<font color = "green">[' + fileName + '] JSON.stringify(sourceFlagName) is ' + JSON.stringify(sourceFlagName) + '</>');

            if (source1Flag == undefined) {
                return undefined;
            }

            const look = this.lookAt(source1Flag.pos);
            // console.log('<font color = "green">[' + this.name + '] look is ' + look+ '</>');

            //    return Game.getObjectById("c44207728e621fc");
            // return Game.getObjectById(Memory.W7N4.source1Id);c44207728e621fc
            var source
            look.forEach(function (lookObject) {
                if (lookObject.type == LOOK_SOURCES) {
                    // console.log('<font color = "greem">room[' + this.name + '] lookObject.type is ' + lookObject.type + '</>');
                    // console.log('<font color = "greem"> room[' + this.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');
                    source = lookObject.source;
                    // return lookObject;
                    //  return lookObject[LOOK_SOURCES]
                }
            });

            //           console.log('<font color = "red"> room[' + this.name + '] Major error unable to locate source1 in room:' +this.name+ '</>');
            //    console.log('<font color = "greem"> room[' + this.name + '] JSON.stringify(source) is ' + JSON.stringify(source) + '</>');

            return source;

        }



    Room.prototype.getFirstSpawn = function () {
        var spawns = this.find(FIND_MY_SPAWNS);
        for (let index = 0; index < spawns.length; index++) {
            const spawn = spawns[index];


            if (spawn.memory.firstSpawn != undefined) {
                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn is ' + spawn +'</>');
                return spawn;

            }

            if (spawn.name == "FirstSpawn_" + this.name) {
                return spawn;
            }

        }



        if (spawns.length > 0) {
            return spawns[0];
        }

    }

    Room.prototype.getTowers = function () {
        let towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER && s.room.name == this.name);
        return towers;
    },

        Object.defineProperty(Room.prototype, "towers", {
            get: function () {
                return this.getTowers();
            },
            enumerable: false,
            configurable: true
        }),


        Room.prototype.getSource1 = function () {
            if (this.source1FlagName == undefined) {
                return undefined;
            }

            // console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '] this is ' + this  + '</>');
            //  console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '] JSON.stringify(this) ' + JSON.stringify(this)  + '</>');
            //      console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '] source1FlagName is ' + this.source1FlagName  + '</>');


            var sourceFlagName = this.source1FlagName
            //console.log('<font color = "green">[' + fileName + '][line:' + '0083'+ '] room[' + this.name + '] this.source1FlagName is ' +this.source1FlagName  + '</>');

            var sourceFound = this.getSource(sourceFlagName);
            //console.log('<font color = "green">[' + fileName + '][line:' + '0086'+ '] room[' + this.name + '] this.getSource (sourceFlagName); is ' + this.getSource (sourceFlagName) + '</>');

            return this.getSource(sourceFlagName);
        },

        Room.prototype.getSource_1 = function () {
            if (this.source1FlagName == undefined) {
                console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '<font color = "red"></font>] CRITICAL ERROR: source1FlagName is not defined.</>');
                return undefined;
            }

            //  console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '] JSON.stringify(this) ' + JSON.stringify(this)  + '</>');
            //      console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + this.name + '] source1FlagName is ' + this.source1FlagName  + '</>');


            var sourceFlagName = this.source1FlagName
            //console.log('<font color = "green">[' + fileName + '][line:' + '0083'+ '] room[' + this.name + '] this.source1FlagName is ' +this.source1FlagName  + '</>');

            var sourceFound = this.getSource(sourceFlagName);
            //console.log('<font color = "green">[' + fileName + '][line:' + '0086'+ '] room[' + this.name + '] this.getSource (sourceFlagName); is ' + this.getSource (sourceFlagName) + '</>');

            return this.getSource(sourceFlagName);
        },

        Room.prototype.getSource1Spawn = function (sourceFlagName) {
            var source1 = this.getSource_1();
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + Util.LineNumber() + '] room[' + this.name + '] source1 is ' + source1 +'</>');
            //   console.log('<font color = "yellow">[' + fileName + 'line:' + Util.LineNumber() + '] room[' + this.name + '] this.Source1 is ' + this.Source1 +'</>');

            try {

                const spawns = source1.pos.findInRange(FIND_MY_STRUCTURES, 3, { filter: { structureType: STRUCTURE_SPAWN } });
                if (spawns != undefined) {

                    if (spawns.length > 0) {
                        return spawns[0]
                    }
                }

            } catch (error) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + Util.LineNumber() + '] room[' + this.name + '] trapped error: ' + error + '</>');

            }


            return undefined;

        }

    Room.prototype.getSource2Spawn = function (sourceFlagName) {
        var source2 = this.Source2
        const spawns = source2.pos.findInRange(FIND_MY_STRUCTURES, 3, { filter: { structureType: STRUCTURE_SPAWN } });
        if (spawns.length > 0) {
            return spawns[0]
        }

        return undefined;

    }

    Room.prototype.getIsSourceDepleted = function (source) {
        if (source != undefined) {
            if (source.energy > 0) {
                return false
            }
            return true;
        }

        // var sourceFlagName = this.source2FlagName
        // return this.getSource (sourceFlagName);
    },

        Object.defineProperty(Room.prototype, "isSource2Depleted", {
            get: function () {
                let source2 = this.Source2;
                //let source2 = this.getSource_2();

                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] source2 is ' + source2 +'</>');

                var returnStatus = this.getIsSourceDepleted(source2);
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] returnStatus is ' + returnStatus +'</>');
                return returnStatus;
                // if (source2 != undefined) {
                //     if (source2.energy > 0) {
                //         return false
                //     }
                //     return true;
                // }

            },
            enumerable: false,
            configurable: true
        }),

        Room.prototype.getSource_2 = function () {
            var sourceFlagName = this.source2FlagName
            return this.getSource(sourceFlagName);
        },


        Object.defineProperty(Room.prototype, "Source_1", {
            get: function () {
                //   return Game.getObjectById("c44207728e621fc")
                var source1Flag = this.find(FIND_FLAGS, { filter: s => s.name.includes("Source_") })[0];
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] source1Flag.name is ' + source1Flag.name  + '</>');
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] JSON.stringify(source1Flag) is ' + JSON.stringify(source1Flag) + '</>');

                if (source1Flag == undefined) {
                    return undefined;
                }

                const look = this.lookAt(source1Flag.pos);
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + room.name + '] look is ' + look+ '</>');

                var s1
                look.forEach(function (lookObject) {
                    if (lookObject.type == LOOK_SOURCES) {
                        //   console.log('<font color = "yellow">room[' + util.name + '] lookObject.type is ' + lookObject.type + '</>');
                        //   console.log('<font color = "yellow"> room[' + util.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');

                        s1 = lookObject.source
                    }
                });

                return s1;

            },
            enumerable: false,
            configurable: true
        }),

        Object.defineProperty(Room.prototype, "firstSpawn", {
            get: function () {
                let spawn = this.getFirstSpawn();
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] spawn.memory.firstSpawn is ' + spawn.memory.firstSpawn +'</>');
                return spawn;
            },
            enumerable: false,
            configurable: true
        }),


        Object.defineProperty(Room.prototype, "xSource_2", {
            get: function () {
                //    return Game.getObjectById("80d207728e6597b")

                var source2Flag = this.find(FIND_FLAGS, { filter: s => s.name.includes("Source2_") })[0];
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] source1Flag.name is ' + source1Flag.name  + '</>');
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + this.name + '] JSON.stringify(source1Flag) is ' + JSON.stringify(source1Flag) + '</>');

                if (source2Flag == undefined) {
                    return undefined;
                }

                const look = this.lookAt(source2Flag.pos);
                //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + room.name + '] look is ' + look+ '</>');

                var s2
                look.forEach(function (lookObject) {
                    if (lookObject.type == LOOK_SOURCES) {
                        //   console.log('<font color = "yellow">room[' + util.name + '] lookObject.type is ' + lookObject.type + '</>');
                        //   console.log('<font color = "yellow"> room[' + util.name + '] JSON.stringify(lookObject) is ' + JSON.stringify(lookObject) + '</>');

                        s2 = lookObject.source
                    }
                });

                return s2;


            },
            enumerable: false,
            configurable: true
        }),


        Object.defineProperty(Room.prototype, "Source_2", {
            get: function () {
                return this.getSource_2()
            },
            enumerable: false,
            configurable: true
        }),


        Object.defineProperty(Room.prototype, "Source1", {
            get: function () {
                //  return Game.getObjectById("c44207728e621fc");
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + Util.LineNumber() + '] room[' + this.name + '] this.getSource_1() is ' + this.getSource_1() +'</>');
                //  /   console.log('<font color = "yellow">[' + fileName + 'line:' + Util.LineNumber() + '] room[' + this.name + '] this.Source1 is ' + this.Source1 +'</>');

                return this.getSource_1()
            },
            enumerable: false,
            configurable: true
        }),

        Object.defineProperty(Room.prototype, "Source2", {
            get: function () {

                // return Game.getObjectById("80d207728e6597b");
                return this.getSource_2()
            },
            enumerable: false,
            configurable: true
        }),


        Object.defineProperty(Room.prototype, "numberOfSources", {
            get: function () {
                return this.find(FIND_SOURCES).length;
                // return this.getSourcesInRoom().length;
            },
            enumerable: false,
            configurable: true
        }),

        Object.defineProperty(Room.prototype, "source1FlagName", {
            get: function () {

                var source1Flag = this.find(FIND_FLAGS, { filter: s => s.name.includes("Source_" + this.name) })[0];
                ///  return "Source_W7N4";
                //    console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source1Flag.name is ' + source1Flag.name  + '</>');

                if (source1Flag) {
                    return source1Flag.name;
                }
                else {
                    return undefined;
                }

            },
            enumerable: false,
            configurable: true
        }),


        Object.defineProperty(Room.prototype, "source2FlagName", {
            get: function () {
                //       return "Source2_W7N4";
                var source2Flag = this.find(FIND_FLAGS, { filter: s => s.name.includes("Source2_" + this.name) })[0];
                //    console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag.name is ' + source2Flag.name  + '</>');

                if (source2Flag == undefined) {
                    return undefined;
                }
                //  console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag.name is ' + source2Flag.name  + '</>');

                if (source2Flag) {
                    //  console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag.name is ' + source2Flag.name  + '</>');
                    return source2Flag.name;
                }
                else {
                    //  console.log('<font color = "red">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag is missing there maybe not be two sources in room: ' + source2Flag  + '</>');
                    return undefined;
                }

            },
            enumerable: false,
            configurable: true
        }),



        Object.defineProperty(Room.prototype, "invaderCount", {

            get: function () {

                let invaders = this.find(FIND_HOSTILE_CREEPS);

                if (invaders == undefined) {
                    return 0;

                }



                if (invaders != undefined) {
                    return invaders.length;

                }


                Memory[this.name].invaderCount = this.find(FIND_HOSTILE_CREEPS).length
                //Memory[this.name].invaderCount = 1;
                if (condition) {

                }


                if (Memory[this.name].invaderCount != undefined) {
                    return Memory[this.name].invaderCount;
                }
                else {
                    return undefined;
                }
            },
            false: true,
            configurable: true
        });


    Room.prototype.LineNumber = function () {
        var e = new Error();
        if (!e.stack)
            try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e;
            } catch (e) {
                if (!e.stack) {
                    return 0; // IE < 10, likely
                }
            }
        var stack = e.stack.toString().split(/\r\n|\n/);
        // We want our caller's frame. It's index into |stack| depends on the
        // browser and browser version, so we need to search for the second frame:
        var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
        do {
            var frame = stack.shift();
        } while (!frameRE.exec(frame) && stack.length);
        return frameRE.exec(stack.shift())[1];

        //return this.pad(frameRE.exec(stack.shift())[1], 4);
    }


    Room.prototype.LineNumber = function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }


    Room.prototype.getConstructionSites = function () {

        const constructionSites = this.find(FIND_CONSTRUCTION_SITES);
        if (constructionSites == undefined) {
            return undefined
        }

        return constructionSites;

    }


    Object.defineProperty(Room.prototype, "constructionSiteCount", {

        get: function () {


            const constructionSites = this.getConstructionSites()
            if (constructionSites == undefined) {
                return undefined;
            }

            return constructionSites.length;
        },
        false: true,
        configurable: true
    });

}
