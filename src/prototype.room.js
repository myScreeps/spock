//var util = require('Util');
//const Util = require('./Util');
var fileName = "Prototype.room"; ///

module.exports = function () {


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


    Room.prototype.getSource_1 = function () {
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
                if (source2Flag == undefined) {
                    return undefined;
                }
                //  console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag.name is ' + source2Flag.name  + '</>');

                if (source2Flag) {
                    //  console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag.name is ' + source2Flag.name  + '</>');
                    return source2Flag.name;
                }
                else {
                    console.log('<font color = "red">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx source2Flag is missing there maybe not be two sources in room: ' + source2Flag + '</>');
                    return undefined;
                }

            },
            enumerable: false,
            configurable: true
        }),

        Object.defineProperty(Room.prototype, "foo", {
            set: function (val) {
                this.memory.foo = "TEST ME TOOO";
                //   console.log('<font color = "green">[' + fileName + '] xxxxxxxxxxxxxxxxxxxxx this.memory.foo is ' + this.memory.foo + '</>');

                return this.memory.foo;
            },

            get: function () {
                if (this.memory.foo != undefined) {
                    return this.memory.foo;
                }
                else {
                    return undefined;
                }
            },
            enumerable: true,
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



}
