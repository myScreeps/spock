//return;
/* #region  notes */


// Grunt added Dec 23rd 2019.
// Room W8S36 added Jan 7th, 4:30am
// Room W9S34 added Jan 8th, 3:30am
// Room W9S34, level 5, Jan 10th, 6:45pm
// Room W8S36, level 6, Thurs Jan 16th, 6:20am
// Room E26N3 Claimed Saturday Saturday January 16th 2021
// Room E26N3 level 5 reached Wed January 26th 2021, 9:10pm, Start tick 24994912
// Room E26N3 level 7 reached Sat Feburary 12th 2021, 2:12am, Start tick 25419685
// Room E26N3 Sat Feburary 2/27/21 6:00 PM 5.45 million Tick 25922387
// Room E26N3 Sat Feburary 2/28/21 6:31 PM 6:30 PM 6 million Tick 25955143

// test

/* #endregion */// import modules

/* #region  Required filed */
// if (Memory.pauseAll == true) {
//     return;
// }



require('prototype.spawn')();
require('prototype.creep')();
// var events = require('events');
//const EventEmitter = require('events');
require('Traveler');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleRecycler = require("role.recycler");
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleLongDistanceBuilder = require('role.longDistanceBuilder');
var roleClaimer = require('role.claimer');
var roleReserver = require('role.reserveController');
var roleMiner = require('role.miner');
var roleLorry = require('role.lorry');
var roleTestCreep = require('role.Test');
var roleTerminalLorry = require('role.TerminalLorry');
var roleLDBuilder = require('role.LDBuilder');
var util = require('Util');
var link = require('Link');
var towers = require('Towers');
var testCode = require('role.TestCode');
var roleAttackScout = require('role.attackScout');
var fileName = "Main        ";
var roomE43S3 = require("room.E43S3");
var term = require('terminal');
var roleStorageToLink = require('role.StorageToLink');
var roleLinkToTerminal = require('role.LinkToTerminal');
var roleFlagToFlagHarvester = require('role.flagToFlagHarvester');
var roleStorageToExt = require('role.StorageToExt');
var roleLink1Harvester = require('role.Link1Harvester');
var roleRepairerRampart = require('role.repairerRampart');//
var roleUpgrader2x = require("role.Upgrader2x");//
var roleLink2Harvester = require("role.Link2Harvester");//
var roleBob = require('role.bob');
var roleBobA = require('role.bobAttack');
//const { filter } = require('lodash');
var mainInit = require('main.init');





//Game.cpu.halt();
/* #endregion */

/* #region  Start Main console header */

console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');

console.log('[' + fileName + 'line:' + util.LineNumber() + '] **************************************  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + '] *              Starting Main         *  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + '] **************************************  ');

console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');

const spawn2 = Game.getObjectById("5e147f6bca55d74232700ade");

mainInit.initCode();



// const currentTime = Date.now();
// const currentTick = Game.time;
// const startTime = [];
// startTime.push(currentTime);
// startTime.push(currentTick);
// Game.spawns.Spawn1.memory.startTime = startTime;



/* #endregion */// #myTemplate

/* #region  Create creep tole template steps */

// create role.Function.js file
// add  roleFunction= require('role.Function');
// add  StructureSpawn.prototype.createFunction = function (parm1, parm2, parm2){}
// add  if (creep.memory.role == 'role.Function') { create creep}
// add   else if (creep.memory.role == 'StorageToLink') {
//              roleStorageToLink.run(creep);
//       }
// add  var numberFunction= _.sum(creepsInRoom, (c) => c.memory.role == 'Function');
//

/* #endregion */




let consoleDelay = 5;
let unitsToTransfer = 125000;

//term.transferEnergy("W8N35","W9N34",unitsToTransfer); //
//term.transferEnergy("E44S3","E45S2",unitsToTransfer); //






// err -6 is ERR_NOT_ENOUGH_ENERGY


// injectNAME();

// global.forceInjectNAME = ()=>{global.NAMEInjected = false; injectNAME();}

var roomParemeter = [[6, 25], [6, 35], [43, 35], [43, 13], [7, 13], [7, 16], [0, 16], [0, 25]];



var flags = Object.keys(Game.flags);
var parameterflags = _.filter(flags, s => s.startsWith('Parameter'));

//var insideParameterStatus = util.insideParameter(locationPoint, roomParemeter)

//***************************************** */
// #GameLoop         GAME LOOP
//***************************************** */


module.exports.loop = function () {
    // console.log("test1");
    //  return;

    // if (Memory.pauseAll == true) {
    //     return;
    // }

    // if (Game.time % 250 == 0) {
    //     Game.spawns.Spawn3.createBob();
    // }

    /* #region TestCode */
    // var locationPoint = Memory.locationPoint;
    // var flag_Point = Game.flags.Point.pos
    // locationPoint = [flag_Point.x, flag_Point.y]
    // var insideParameterStatus = util.insideParameter(locationPoint, roomParemeter);
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] insideParameterStatus is ' + insideParameterStatus + '</>');
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] locationPoint is ' + locationPoint + '</>');
    // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(flag_Point) is ' + JSON.stringify(flag_Point) + '</>');
    /* #endregion TestCode */


    //************************************** */
    // console override. Filter
    //************************************** */

    (function () {
        // Save the original method in a private variable
        var _privateLog = console.log;
        // Redefine console.log method with a custom function
        console.log = function (message, filter) {
            // Here execute something with the given message or arguments variable
            // alert("Our Custom Log Says: " + message);
            // message = message;

            if (message == undefined) {
                message = " ";
            }

            if (Memory.consoleFilter && message != undefined) {
                if (!message.includes(Memory.consoleFilter)) {
                    // message = "foo2";
                    return;

                }
            }


            //      console.log("test1");


            /**
                Note: If you want to preserve the same action as the original method does
                then use the following line :

                we use apply to invoke the method on console using the original arguments.
                Simply calling _privateLog(message) would fail because LOG depends on the console
               */
            _privateLog.apply(console, arguments);
        };
    })();

    //var flags = _.filter(Game.Flags, s => s.name.startsWith('T'));
    //var allFlags = Object.keys(Game.flags);

    //var flags = _.filter(allFlags, s => s.startsWith('T'));
    //  var flags2 = _.sortByOrder(flags);
    //var flags2 = _.orderBy(flags);
    //flags.sort();
    //flag = Game.flags[flags[0]]
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + Game.spawns.Spawn1.name + '] JSON.stringify(flags) is ' + JSON.stringify(allFlags) + '</>');
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + Game.spawns.Spawn1.name + '] JSON.stringify(flags) is ' + JSON.stringify(flags) + '</ > ');
    //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + Game.spawns.Spawn1.name + '] JSON.stringify(flag) is ' + JSON.stringify(flag) + '</ > ');

    /* #region  dead tower code */




    //************************************** */
    // Clear dead creeps from game
    //************************************** */
    clearMemory();

    //************************************** */
    // loop through rooms
    //************************************** */
    for (let roomName in Game.rooms) {
        var room = Game.rooms[roomName];
        if (room.name == "E26N3") {





            // var tombstone = creep.pos.findClosestByRange(FIND_TOMBSTONES, { filter: s => s.store > 0 });
            var tombstone = room.find(FIND_TOMBSTONES)[0];
            // Memory.E26N3.tombstones = new Set();

            // JSON.stringify([...s]);
            // JSON.stringify([...s.keys()]);
            // JSON.stringify([...s.values()]);
            // JSON.stringify(Array.from(s));
            // JSON.stringify(Array.from(s.keys()));
            // JSON.stringify(Array.from(s.values()));


            var myMemSet1 = new Set();
            // myMemSet1.add(1);
            // myMemSet1.add(2);
            // myMemSet1.add("605a7be069a76c50003fd64d");
            // myMemSet1.add("605a7be069a76c50003fd64d");
            // myMemSet1.add("601ed502f7632d034285b9b8");
            // Memory.E26N3.tombstones = [...myMemSet1];
            //Memory.test = JSON.stringify([...myMemSet1]);
            // Memory.test = [...myMemSet1];

            //  var myArray = new Array(Memory.test);
            //var myArray = Memory.test;
            // var myArray = [1, 2, "test", "test2"];

            //  var myMemSet2 = new Set(myArray);

            var myArray = [];
            myArray.push(1);
            myArray.push(2);
            myArray.push(3);

            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myArray.shift() is ' + myArray.shift() + '</>');
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myArray.shift() is ' + myArray.shift() + '</>');
            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myArray.shift() is ' + myArray.shift() + '</>');

            var myMemSet2 = new Set(Memory.E26N3.tombstones);
            //  var tombstone = Game.rooms["E26N3"].pos.findClosestByRange(FIND_TOMBSTONES, { filter: s => _.sum(s.store) > 0 })
            //    var tombstone = room.find(FIND_TOMBSTONES, { filter: s => _.sum(s.store) > 0 })[0]

            //   var mydate = new Date(1617822072824);
            // var mydate = new Date(1617804076373);
            var mydate = new Date(1617834778765);


            var options = { timeZone: 'America/Vancouver', timeZoneName: 'short' };
            if (Game.time % 1161 == 0) {

                var currentTimeTick = {}
                currentTimeTick.currentTick = Game.time;
                currentTimeTick.currentTimeMs = Date.now();
                currentTimeTick.currentTime = new Date(currentTimeTick.currentTimeMs).toLocaleTimeString('en-US', options);
                Memory.time.push(currentTimeTick);
            }



            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mydate.toLocaleTimeString(en-US, options)  is ' + mydate.toLocaleTimeString('en-US', options) + '</>');


            var tombstone = room.find(FIND_TOMBSTONES)[0]
            if (tombstone != undefined) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstone is ' + tombstone + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstone.id is ' + tombstone.id + '</>');
                var myTombStone = {};
                myTombStone.id = tombstone.id;
                myTombStone.timeStamp = Date.now();
                myTombStone.localTime = new Date(myTombStone.timeStamp).toLocaleTimeString('en-US', options)
                myTombStone.gameTime = Game.time;
                Memory.E26N3.lastTombstone = myTombStone;
                var hasId = myMemSet2.has(myTombStone.id);
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] hasId is ' + hasId + '</>');
                if (hasId == false) {
                    myMemSet2.add(myTombStone.id);
                    // myMemSet2.add(myTombStone.timeStamp);
                    // myMemSet2.add(Game.time);
                    myMemSet2.add(myTombStone);
                    Memory.E26N3.tombstones = [...myMemSet2];
                    //Memory.E26N3.lastTomeStone = [...myMemSet2];

                }


                // myTombStone.date = new Date();
            }



            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1JSON.stringify(...myMemSet1) is ' + JSON.stringify([...myMemSet1]) + '</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1JSON.stringify(...myMemSet2) is ' + JSON.stringify([...myMemSet2]) + '</>');
            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myArray is ' + myArray + '</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(Memory.E26N3.tombstones) is ' + JSON.stringify(Memory.E26N3.tombstones) + '</>');
            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(Memory.test)  is ' + JSON.stringify(Memory.test) + '</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myMemSet2.has("605a7be069a76c50003fd64d") is ' + myMemSet2.has("605a7be069a76c50003fd64d") + '</>');
            //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myMemSet2.has("605a7be069a76c50003fd64dx") is ' + myMemSet2.has("605a7be069a76c50003fd64dx") + '</>');


            // var myMemSet = Object.assign(Memory.E26N3.tombstones, myMemSet1)
            // if (Memory.E26N3.tombstones1 != undefined) {
            //     var myMemSet1 = new Set();
            //     myMemSet1.add(1);
            //     Memory.E26N3.tombstones = myMemSet;
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2JSON.stringify(myMemSet1) is ' + JSON.stringify(myMemSet1) + '</>');

            //     var myMemSet = Memory.E26N3.tombstones;
            //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Memory.E26N3.tombstones.has(1) is ' + Memory.E26N3.tombstones.has(1) + '</>');
            //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] myMemSet.has(1) is ' + myMemSet.has(1) + '</>');
            //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Memory.E26N3.tombstones is ' + Memory.E26N3.tombstones + '</>');
            //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(Memory.E26N3.tombstones) is ' + JSON.stringify(JSON.stringify(Memory.E26N3.tombstones)) + '</>');
            // }
            // else {
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Memory.E26N3.tombstones is not defined in memory' + "" + '</>');

            // }

            //  Memory.E26N3.tombstones.forEach(elem => console.log(`Element is ${elem}`));
            //   Memory.E26N3.tombstones.add(tombstone);
            if (tombstone != undefined) {

                const keysInStore = Object.keys(tombstone.store)
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] keysInStore is ' + keysInStore + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(keysInStore) is ' + JSON.stringify(keysInStore) + '</>');


                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstone.id is ' + tombstone.id + '</>');
                const tombstones = new Set()
                tombstones.add(1);
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  tombstones.has(1) is ' + tombstones.has(1) + '</>');

                tombstones.add(2);
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  tombstones.has(2) is ' + tombstones.has(2) + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  tombstones.has(99) is ' + tombstones.has(99) + '</>');

                tombstones.add('test');

                tombstones.add(tombstone.id)
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  tombstones.has(tombstone.id)  is ' + tombstones.has(tombstone.id) + '</>');

                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(tombstones) is ' + JSON.stringify(tombstones) + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] tombstones is ' + tombstones + '</>');
                Game.spawns.Spawn1.memory.myset = tombstones;
                const mySet = Game.spawns.Spawn1.memory.myset
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] mySet.has(1) is ' + mySet.has(1) + '</>');

                //  Memory.E26N3.tombstones = tombstones;
                // var check = Memory.E26N3.tombstones.has(tombstone);
                // if (check == false) {
                //     Memory.E26N3.tombstones.add(tombstone.id);
                // }
            }

            // let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
            //     filter: s => s.structureType == STRUCTURE_CONTAINER
            // });
            ///startsWith
            //  var flags = _.filter(flags, s => s.startsWith('T'));

            //      var parameterFlags = room.find(FIND_FLAGS, { filter: s => s.name.startswith("Parameter") });



            // var parameterFlags = room.find(FIND_FLAGS, { filter: s => s.name.startsWith('Parameter') });
            // var sortedFlags = _.sortBy(parameterFlags, 'name');

            // var points = [];
            // var point = [];
            // sortedFlags.forEach(flag => {
            //     //var point = [[flag.pos.x, flag.pos.y]];
            //     //  point.push(flag.pos.x);
            //     //  point.push(flag.pos.y);
            //     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] point is ' + point + '</>');
            //     // var x = flag.pos.x;
            //     // var y = flag.pos.y;
            //     points.push([flag.pos.x, flag.pos.y]);
            //     //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] points is ' + points + '</>');
            //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(points) is ' + JSON.stringify(points) + '</>');


            // });




            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] parameterFlags.length is ' + parameterFlags.length + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] sortedFlags.length is ' + sortedFlags.length + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(sortedFlags) is ' + JSON.stringify(sortedFlags) + '</>');




            // #roomVisual
            {
                //  var spawn = Game.spawns.Spawn1;
                new RoomVisual(room.name).text(Game.cpu.bucket, 2, 1, { color: 'green', font: 0.8 });
                var container1 = Game.getObjectById("6003bbfaf44a12affc149d5c");
                new RoomVisual(room.name).text("container1: " + container1.store[RESOURCE_ENERGY], 17, 17, { color: 'green', font: 0.6, align: 'left' });

                var container2 = Game.getObjectById("6003cfd2773fb20d53bdc34f");
                new RoomVisual(room.name).text("container2: " + container2.store[RESOURCE_ENERGY], 42, 20, { color: 'green', font: 0.6, align: 'left' });


                var source1 = Game.getObjectById("5bbcae719099fc012e6390f1");
                new RoomVisual(room.name).text("Source1: " + source1.energy + " / " + source1.ticksToRegeneration, 16, 16, { color: 'green', font: 0.6, align: 'left' });


                var source2 = Game.getObjectById("5bbcae719099fc012e6390f2");
                new RoomVisual(room.name).text("Source2: " + source2.energy + " / " + source2.ticksToRegeneration, 42, 21, { color: 'green', font: 0.6, align: 'left' });

                // //  var roomController = Game.getObjectById("5bbcae719099fc012e6390f3");
                // //   new RoomVisual(spawn.room.name).text("Controller: " + util.numberWithCommas(roomController.progress) + " / " + util.numberWithCommas(roomController.progressTotal), 26, 29, { color: 'green', font: 0.6, align: 'left' });

                //  var minerEnergy = spawn.memory.EnergyManagement.minerEnergy;
                new RoomVisual(room.name).text("Game.time: " + Game.time, 26, 31, { color: 'green', font: 0.6, align: 'left' });

                var storageEnergy = room.storage.store[RESOURCE_ENERGY];
                new RoomVisual(room.name).text("storageEnergy: " + storageEnergy, 7, 14, { color: 'green', font: 0.6, align: 'left' });

                new RoomVisual(room.name).text("Game.time: " + Game.time, 2, 7, { color: 'Yellow', font: 0.6, align: 'left' });

            }


        }


        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] roomName is ' + roomName + '</>');
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room.name is ' + room.name + '</>');
    }


    //************************************** */
    // loop through creeps
    //************************************** */
    /* #region loop through creeps */



    for (let name in Game.creeps) {
        //  console.log(name);
        // get the creep object
        var creep = Game.creeps[name];


        if (creep.room.name == "E26N3") {
            var x9y22 = new RoomPosition(9, 22, creep.room.name);
            if (creep.pos.isEqualTo(x9y22)) {
                if (creep.store[RESOURCE_ENERGY] != 0) {
                    creep.move(LEFT);
                }
                else {
                    creep.move(TOP_RIGHT);
                }
            }

            var x10y21 = new RoomPosition(10, 21, creep.room.name);
            if (creep.pos.isEqualTo(x10y21)) {
                if (creep.store[RESOURCE_ENERGY] != 0) {
                    creep.move(BOTTOM_LEFT);
                }
                else {
                    creep.move(TOP_RIGHT);
                }
            }

            var x8y22 = new RoomPosition(8, 22, creep.room.name);
            if (creep.pos.isEqualTo(x8y22)) {
                if (creep.store[RESOURCE_ENERGY] != 0) {
                    var moveStatus = creep.move(TOP_LEFT);
                    if (moveStatus != 0) {
                        var moveStatus = creep.move(LEFT);
                    }
                }
                else {
                    creep.move(BOTTOM);
                }
            }

            var x7y21 = new RoomPosition(7, 21, creep.room.name);
            if (creep.pos.isEqualTo(x7y21)) {
                if (creep.store[RESOURCE_ENERGY] != 0) {
                    var moveStatus = creep.move(TOP_LEFT);
                    if (moveStatus != 0) {
                        var moveStatus = creep.move(LEFT);
                    }
                }
                else {
                    creep.move(BOTTOM);
                }
            }

            // var reservedPos = new RoomPosition(6, 20, creep.room.name);
            // var moveStatus = forceMove(creep, reservedPos, LEFT);

            // //            var reservedPos = new RoomPosition(5, 20, creep.room.name);
            // var moveStatus = forceMove(creep, creep.roomPosition(5, 20), LEFT);

            // var moveStatus = forceMove(creep, creep.roomPosition(4, 20), TOP_LEFT);
            // var moveStatus = forceMove(creep, creep.roomPosition(3, 19), LEFT);
            // var moveStatus = forceMove(creep, creep.roomPosition(2, 19), BOTTOM);
            // //    var moveStatus = forceMove(creep, creep.roomPosition(2, 20), BOTTOM);
            // var moveStatus = creep.forceMove(creep.roomPosition(2, 20), BOTTOM);
            // var moveStatus = creep.forceMove(creep.roomPosition(2, 21), RIGHT);
            // var moveStatus = creep.forceMove(creep.roomPosition(3, 21), RIGHT);




            // var reservedPos = new RoomPosition(4, 20, creep.room.name);
            // var moveStatus = forceMove(creep, reservedPos, LEFT);


        }

        if (creep.room.name == "W9N34") {

            //      console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Date.now() is ' + Date.now() +'</>');


            if (Memory.startTick == undefined) {
                Memory.startTick = Game.time;
                Memory.startTime = Date.now();
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Memory.startTick is ' + Memory.startTick + '</>');
            }

            //            reservedPos = new RoomPosition(22,18,"W9N34");
            reservedPos = new RoomPosition(23, 18, "W9N34");

            reservedPos1 = new RoomPosition(23, 18, "W9N34");
            reservedPos2 = new RoomPosition(24, 18, "W9N34");
            reservedPos3 = new RoomPosition(25, 18, "W9N34");
            reservedPos4 = new RoomPosition(26, 18, "W9N34");
            reservedPos5 = new RoomPosition(22, 19, "W9N34");


            if (creep.name.includes("builder_")) {
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos + '</>');

            }

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] reservedPos is ' + reservedPos +'</>');
            if (creep.pos.y == reservedPos.y && creep.pos.x == reservedPos.x & !creep.name.includes("flagToFlagHarvester")) {
                //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
                var tempP = new RoomPosition(23, 18, "W9N34");

                creep.travelTo(tempP);
            }

            if (creep.pos.y == reservedPos1.y && creep.pos.x == reservedPos1.x & !creep.name.includes("flagToFlagHarvester")) {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
                var tempP = new RoomPosition(24, 18, "W9N34");

                creep.travelTo(tempP);
            }


            if (creep.pos.y == reservedPos2.y && creep.pos.x == reservedPos2.x & !creep.name.includes("flagToFlagHarvester")) {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
                var tempP = new RoomPosition(24, 17, "W9N34");
                creep.travelTo(tempP);
            }


            if (creep.pos.y == reservedPos3.y && creep.pos.x == reservedPos3.x & !creep.name.includes("flagToFlagHarvester")) {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
                var tempP = new RoomPosition(26, 18, "W9N34");

                creep.travelTo(tempP);
            }

            if (creep.pos.y == reservedPos4.y && creep.pos.x == reservedPos4.x & !creep.name.includes("flagToFlagHarvester")) {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');

                var tempP = new RoomPosition(24, 17, "W9N34");

                creep.travelTo(tempP);
            }

            if (creep.pos.y == reservedPos5.y && creep.pos.x == reservedPos5.x) {
                //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.pos is ' + creep.pos +'</>');
                var tempP = new RoomPosition(22, 20, "W9N34");

                creep.travelTo(tempP);
            }
        }








        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  creep.room.name room is ' + creep.room.name);
        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Game.time '+ Game.time );
        //    if(creep.memory.lockedTargetId != undefined)
        //    {
        //         lockedTargetIds.push(lockTargetId);
        //    }
        // TODO HACK. For reasons unknown, screep wander into this room.
        if (creep.room.name == "E44S2") {

            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx creep(pos) is ' + creep.pos);
            const pos = new RoomPosition(39, 3, 'E44S2');
            const reserveredLocation = new RoomPosition(35, 1, 'E44S2');

            if ((creep.pos.y < 3 || creep.pos > 35) && creep.memory.role == "minor" && creep.memory.role == "link1Harvester") {

                creep.travelTo(pos);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] Reservered location. Most move somewhere else '  + creep.name);
            }

            if (creep.pos.isEqualTo(reserveredLocation) && creep.memory.role != "link1Harvester") {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx need to move ');
                creep.travelTo(pos);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxx Reservered location. Most move somewhere else '  + creep.name);
            }

            if (creep.pos.isEqualTo(reserveredLocation && creep.memory.role == "miner")) {
                const minerLocation = new RoomPosition(34, 2, 'E45S2');
                creep.travelTo(minerLocation);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Reservered location. Most move somewhere else ' + creep.name);
            }

            // if (creep.pos()) {

            // }


            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' is in the wrong room ' + creep.room.name);
            //     creep.memory.home = "E45S2";
            //     creep.memory.target = "E44S2";
            //    creep.memory.role = "longDistanceBuilder";
            // var exit = creep.room.findExitTo(creep.memory.home);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' exit is ' + exit);

            // //   console.log('LD Builder ' + util.LineNumber() + '] ' +  creep.name + ' Test');
            //    // move to exit
            //    var status =  creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' moving toward exit. Status is ' + status);


        }






        // if( creep.room.name == "E45S2"){

        //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' room name is ' + creep.room.name);
        //     return;
        // }else
        // {
        //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' room name is ' + creep.room.name);
        // }

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }








        // if creep is attackScout, call harvester script
        else if (creep.memory.role == 'attackScout') {
            roleAttackScout.run(creep);
        }
        else if (creep.memory.role == 'bob') {
            roleBob.run(creep);
        }
        else if (creep.memory.role == 'bobA') {
            roleBobA.run(creep);
        }

        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }

        else if (creep.memory.role == 'upgrader2x') {
            roleUpgrader2x.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }

        else if (creep.memory.role == 'recycler') {
            roleRecycler.run(creep);
        }

        // if creep is wallRepairer, call wallRepairer script
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        // if creep is longDistanceHarvester, call longDistanceHarvester script
        else if (creep.memory.role == 'longDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
        }
        // if creep is claimer, call claimer script
        else if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        // if creep is reserver, call reserver script
        else if (creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }
        // if creep is miner, call miner script
        else if (creep.memory.role == 'miner') {
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running miner ');
            roleMiner.run(creep);
        }
        // if creep is lorry, call miner lorry
        else if (creep.memory.role == 'lorry') {
            roleLorry.run(creep);
        }
        else if (creep.memory.role == 'linkToTerminal') {
            roleLinkToTerminal.run(creep);
        }
        else if (creep.memory.role == 'storageToLink') {
            roleStorageToLink.run(creep);
        }
        else if (creep.memory.role == 'longDistanceBuilder') {
            // console.log("Main [line " + util.LineNumber() + "] running roleLongDistanceBuilder: " + creep.name);
            roleLongDistanceBuilder.run(creep);
        }
        else if (creep.memory.role == 'roleTestCreep') {
            // console.log("[Main line " + util.LineNumber() + "] running TestCreep: " + creep.name);
            var sourceStorageId = "5d252e5a2aba2447ced2a570";
            var targetStorageID = "5d3d74d7576a94745c39de30";

            roleTestCreep.run(creep, sourceStorageId, targetStorageID);
        }
        else if (creep.memory.role == 'LDBuilder') {
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running HDBuilder ');
            //testCode.run(creep);
            roleLDBuilder.run(creep);

        }
        else if (creep.memory.role == 'flagToFlagHarvester') {
            roleFlagToFlagHarvester.run(creep);

        }

        else if (creep.memory.role == 'flagToFlagHarvester2') {
            roleFlagToFlagHarvester.run(creep);

        }

        else if (creep.memory.role == 'link1Harvester') {
            roleLink1Harvester.run(creep);
        }

        else if (creep.memory.role == 'link2Harvester') {
            roleLink2Harvester.run(creep);
        }



        else if (creep.memory.role == 'repairRampart') {
            roleRepairerRampart.run(creep);
        }

        else if (creep.memory.role == 'terminalLorry') {
            roleTerminalLorry.run(creep);
        }
        else if (creep.memory.role == 'storageToExt' || creep.memory.role == 'storageToExtMini') {
            roleStorageToExt.run(creep);
        }
        // run for every creep

        if (Game.time % 5) {
            if (false) {

                console.log();
                console.log("********************************************************************************");

                testCode.run(creep);

                console.log("********************************************************************************");
                console.log();

            }
        }




    }

    /* #endregion */


    //************************************** */
    // All towers
    //************************************** */

    //  console.log("run towers");

    if (Memory.runTowers != false) {
        towers.run();
    }





    //************************************** */
    // iterate over all the spawns
    //************************************** */
    /* #region iterate over all the spawns  */

    for (let spawnName in Game.spawns) {
        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawn loop start: ' + spawnName);



        /** @type {Spawn} */
        let spawn = Game.spawns[spawnName];


        //  renewStatus = renewCreepsNextToSpawn(spawn, renewStatus);

        spawn.renewCreepsNextToSpawn(spawn, 1454);

        if (spawnName == "Spawn2") {


        }

        let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);



        // toString


        //  util.overlayInfo(spawn);
        //   new RoomVisual(spawn.room.name).text(Date.now(), 2, 5, { color: 'green', font: 0.8 });


        // var startTime = Memory.startTime;
        // var startTick = Memory.startTick;

        //  var currentTime = Date.now();



        //var status = spawn.spawning.remainingTime;
        //     var status = spawn.spawning;
        //    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@@@@@@@@@@@@@@@@ spawn.Spawning.name is ' + status);

        //     if (status != null) {
        //       //  var status =  spawn.spawning.name.includes("upgrader2x");
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@@@@@@@@@@@@@@@@ spawn.Spawning.name is ' + spawn.spawning.name.includes("LDH"));
        //     }

        var progress = spawn.room.controller.progress;
        var progressTotal = spawn.room.controller.progressTotal;
        let room1 = spawn.memory.room1;
        let room2 = spawn.memory.room2;
        let room3 = spawn.memory.room3;

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX');






        // if (spawnName == "Spawn1") {
        //    //  term.throttledTransfer("E44S3","E44S2",500, 60000,15600, true);
        //    // term.throttledTransfer("E44S3","E45S3",500, 60000 ,50500, false);
        //    // link next to storage 5d46b9cad16c4b73af5c1269
        //    // link next to controller 5d9fd0108fad390001e30945
        //    var storageLinkObj = "5d46b9cad16c4b73af5c1269";
        //    var controllerLinkObj = "5d9fd0108fad390001e30945";
        //    var source1LinkObj ="5da2f14886db5e00019fbf17";
        //    var source2LinkObj ="5da2f8adb541ee0001bf98ab";


        //     var storageEnergy = spawn.room.storage.store[RESOURCE_ENERGY];
        //     var storageEnergy = spawn.room.storage.store.energy;

        //   //  console.log('<font color ="yellow" >[' + fileName + 'line:' + util.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxxxxstorageEnergy is ' + storageEnergy+ '</>');

        //     var storageLink = Game.getObjectById(storageLinkObj);
        //     var controllerLink = Game.getObjectById(controllerLinkObj);
        //     var source1Link = Game.getObjectById(source1LinkObj);
        //     var source2Link = Game.getObjectById(source2LinkObj);


        //     var controllerLinkEngery = controllerLink.energy;
        //     var storageLinkEngery = storageLink.energy;

        //     var TargetLinkobj = storageLinkObj;
        //     var backupTargetLinkObj = controllerLinkObj;
        //     if (controllerLinkEngery < 600) {
        //         TargetLinkobj = controllerLinkObj;
        //         //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxxxxx setting taget to ControllerLink </>');
        //     }

        //     //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']    source1Link.cooldown is ' + util.pad (source1Link.cooldown,3) + ', controllerLinkEngery is ' + util.pad(controllerLinkEngery,3) + '</>' );

        //     //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']    source2Link.cooldown is ' + util.pad (source2Link.cooldown,3) + ',    storageLinkEngery is ' + util.pad (storageLinkEngery,3) + '</>');



        //     if (storageEnergy > 105000) {
        //         var status1 = link.transferEnergy(source1LinkObj,TargetLinkobj);
        //         if (status1 == -7 || status1 == -8 || status1 == -11) {
        //           //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status1 is ' + status1 + '</>');
        //              var status2 = link.transferEnergy(source1LinkObj,backupTargetLinkObj);
        //          //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status2 is ' + status2 + '</>');
        //         }

        //         var status4 = link.transferEnergy(source2LinkObj,TargetLinkobj);
        //         if (status4 == -7 || status4 == -8 || status4 == -11 ) {
        //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status4 is ' + status4 + '</>');
        //              var status3 = link.transferEnergy(source2LinkObj,backupTargetLinkObj);
        //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');
        //         }

        //     }
        //     else{
        //         var status3 = link.transferEnergy(source2LinkObj,TargetLinkobj);
        //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');

        //     }






        //   // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');



        // }

        if (spawn.room.name == "E26N3") {

            // if (Game.spawns.Spawn1.room.storage.store.getUsedCapacity(RESOURCE_ENERGY) < 924000 || Game.spawns.Spawn1.room.terminal.store.getUsedCapacity(RESOURCE_ENERGY) < 200000) {
            //     Game.spawns.Spawn1.memory.minWallRepairers = 0;
            // }

            // if (Game.spawns.Spawn1.room.storage.store.getFreeCapacity(RESOURCE_ENERGY) == 0 && Game.spawns.Spawn1.room.terminal.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            //     Game.spawns.Spawn1.memory.minWallRepairers = 2;
            // }

            // var buildparts = Game.spawns.Spawn2.memory.EnergyManagement.upgrader2xBuildParts;
            // var numberOfBuildParts = buildparts.length


            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] numberOfBuildParts is ' + numberOfBuildParts + '</>');

            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] WORK is ' + WORK + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] buildparts is ' + buildparts + '</>');
            // //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Game.spawns.Spawn2.Memory.EnergyManagement is ' + JSON.stringify(Game.spawns.Spawn2.memory.EnergyManagement) + '</>');

            var link1Flag = Game.flags.Link1_E26N3;
            var link2Flag = Game.flags.Link2_E26N3;
            var ControllerLinkFlag = Game.flags.Controler_Link_E26N3;

            var controlerLinkObjId = "60285cefa2201a2a5e18b53d"; // E26E3 24,24
            var sourceLinkObjId = "60091a986bc6db40323e0d1e"; // E26E3 39,20
            var storageLinkId = "60092042139c13b79ebd6a9d"; // E26E3 14,18

            var controllerLink = Game.getObjectById(controlerLinkObjId);
            var transferStatusToController;
            if (controllerLink.store.getFreeCapacity(RESOURCE_ENERGY) >= 200) {
                transferStatusToController = link.transferEnergy(sourceLinkObjId, controlerLinkObjId);
            }
            //            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] TransferToConrollerLink status is ' + transferStatusToController + '</ > ');
            else {
                transferStatusToController = link.transferEnergy(sourceLinkObjId, storageLinkId);
            }
            //var transferStatusToController = link.transferEnergy(sourceLinkObjId, storageLinkId);
        }


        // if (spawn.room.name == "W8N36x") {
        //     //    var spawn2
        //     if ((spawn.room.controller.ticksToDowngrade < 170000)) {
        //         //   var spawn2 = Game.getObjectById("5e147f6bca55d74232700ade");

        //         if (spawn2.memory.minUpgrader2xs == 0) {
        //             spawn2.memory.minUpgrader2xs = 1;
        //             console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn11.memory.minUpgrader2xs = 1 </>');
        //         }
        //     }
        //     else {
        //         //        spawn2 = Game.getObjectById("5e87300f4541e5d1c6a8cda1");
        //         spawn2.memory.minUpgrader2xs = 0;
        //     }

        // }


        // if (spawn.room.name == "W8N35x") {
        //     //5d4f7683b5e0621e0bbb07b6 is link by storage
        //     //5d836db1128ef459c47e20af is link by energy source



        //     var source2LinkObjId = "5db8ff80f70a0b48fafa171e";

        //     var controllerLinkObjId = "5db90400dfc511374975a2d9";
        //     var controllerLink = Game.getObjectById(controllerLinkObjId);
        //     var controllerLinkEnergy = controllerLink.energy;
        //     var storageEnergy = spawn.room.storage.store.energy;

        //     var Source1LinkObjId = "5f648aad24c9ea1ee14a8c2c";
        //     var Source1LinkObj = Game.getObjectById(Source1LinkObjId);
        //     //     var Source1LinkObjEnergy = Source1LinkObj.storage[RESOURCE_ENERGY];
        //     var Source1LinkObjEnergy = Source1LinkObj.energy;

        //     if (controllerLinkEnergy <= 700 && Source1LinkObjEnergy >= 100) {
        //         var status1 = link.transferEnergy(Source1LinkObjId, controllerLinkObjId);
        //     }


        //     // If storage over 400K, and controller link energy under 400 then transfer energy
        //     // if (storageEnergy > 400000 && controllerLinkEnergy < 400) {

        //     //     var status1 = link.transferEnergy(source2LinkObjId, controllerLinkObjId);
        //     // }


        //     // only transfer energy to link #2 when controler linke is not 85% full
        //     if (controllerLinkEnergy > 725) {
        //         var status1 = link.transferEnergy(Source1LinkObjId, source2LinkObjId);
        //     }


        //     //  var status1 = link.transferEnergy(source2LinkObjId,controllerLinkObjId);

        //     // spawn.memory.W8N35 = spawn.memory.W8N35 - 1;
        //     // var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        //     if (spawn.memory.W8N35 <= 0) {
        //         //   spawn.memory.minHarvesters = 1;

        //     }




        //     //   var status2 = link.transferEnergy(sourceLinkObjId,sourceLinkObjId);

        //     // 5d836db1128ef459c47e20af -->5d4f7683b5e0621e0bbb07b6

        // }


        // if (spawnName == "Spawn2x") {
        //     //     //5d4f7683b5e0621e0bbb07b6 is link by storage
        //     //     //5d836db1128ef459c47e20af is link by energy source
        //     //     var status1 = link.transferEnergy("5d836db1128ef459c47e20af","5d4f7683b5e0621e0bbb07b6");

        //     //     var status2 = link.transferEnergy("5d92bc8e0232ef0001c8b5ba","5d4f7683b5e0621e0bbb07b6");

        //     //    // 5d836db1128ef459c47e20af -->5d4f7683b5e0621e0bbb07b6

        // }


        // if (spawnName == "Spawn3x") {
        //     var sourceLinkObjId = "5f646d8a58788dcc66f8c6a4";
        //     var storageLinkId = "5e1776a127eb8233e871edd8";
        //     var transferStatusToController = link.transferEnergy(sourceLinkObjId, storageLinkId);

        //     //     var controllerLinkObj = "5d5542d8f0e41373bf60b75e";
        //     //     var source1LinkObj = "5d88c2f732a61a437872fb20";
        //     //     var source2LinkObj = "5d99e0fba33c040001cfced0";
        //     //     var storageLinkObj = "5d6b7e3252d12c73f0332b33";
        //     //     var backupTargetLinkObj = controllerLinkObj;

        //     //     var controllerLink = Game.getObjectById(controllerLinkObj);
        //     //     var source1Link = Game.getObjectById(source1LinkObj);
        //     //     var source2Link = Game.getObjectById(source2LinkObj);
        //     //     var storageLink = Game.getObjectById(storageLinkObj);

        //     //     var controllerLinkEngery = controllerLink.energy;
        //     //     var storageLinkEngery = storageLink.energy;

        //     //     var TargetLinkobj = storageLinkObj;

        //     //     if (controllerLinkEngery < 601) {
        //     //         TargetLinkobj = controllerLinkObj;
        //     //         //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] xxxxxx setting taget to ControllerLink </>');
        //     //     }

        //     //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  E45S2 source1Link.cooldown is ' + util.pad (source1Link.cooldown,3) + ', controllerLinkEngery is ' + util.pad(controllerLinkEngery,3) + '</>' );
        //     //   //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  E45S2 source2Link.cooldown is ' + util.pad (source2Link.cooldown,3) + ',    storageLinkEngery is ' + util.pad (storageLinkEngery,3) + '</>');

        //     //     if (storageEnergy > 76000) {
        //     //         var status1 = link.transferEnergy(source1LinkObj,TargetLinkobj);
        //     //         if (status1 == -7 || status1 == -8 || status1 == -11) {
        //     //           //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status1 is ' + status1 + '</>');
        //     //              var status2 = link.transferEnergy(source1LinkObj,backupTargetLinkObj);
        //     //          //    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status2 is ' + status2 + '</>');
        //     //         }

        //     //         var status4 = link.transferEnergy(source2LinkObj,TargetLinkobj);
        //     //         if (status4 == -7 || status4 == -8 || status4 == -11 ) {
        //     //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status4 is ' + status4 + '</>');
        //     //              var status3 = link.transferEnergy(source2LinkObj,backupTargetLinkObj);
        //     //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');
        //     //         }

        //     //     }
        //     //     else{
        //     //         var status3 = link.transferEnergy(source2LinkObj,storageLinkObj);
        //     //            //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] status3 is ' + status3 + '</>');

        //     //     }


        // }



        // if (spawnName == "Spawn4x") {

        //     //

        //     var sourceLinkObjId = "5f648212019ba9817ee3c69d";
        //     var storageLinkId = "5e193cc26b3129355d57c9a4";
        //     var transferStatusToController = link.transferEnergy(sourceLinkObjId, storageLinkId);

        //     // const terminalEnergyE45S3 = spawn.room.terminal.store.energy;
        //     // //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] 1XXXXXXXXXXXXXXXXXXXXX terminalEnergyE45S3 is ' + terminalEnergyE45S3);
        //     // //  const terminalEnergyE45S3 = _.sum(Game.rooms['E45S3'].terminal.store);
        //     // //  const terminalEnergyE45S3 = creep.room.terminal.store.energy;

        //     // if (terminalEnergyE45S3 < 54500) {
        //     //     // transfer to link next to terminal
        //     //     link.transferEnergy("5d99ba677069c70001aba38d", "5d99b0a69c30e60001320810");
        //     // }

        // }


        // if (spawnName == "Spawn5x") {
        //     var storageLink = "5da30daa2f9e9b0001a77901";
        //     var controlLink = "5da33a7b86db5e00019fe09c";
        //     var transferStatusToController = link.transferEnergy(storageLink, controlLink);
        //     // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] transferStatus is '  + transferStatus + '</>');
        //     var constructionSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
        //     //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + ']  constructionSites.length is ' + constructionSites.length +  '</>');
        //     if (constructionSites == 0) {
        //         // var havesterCreepsInRoom  = spawn.room.find(FIND_MY_CREEPS, {filter: s =>( s.memory.role == 'builder')});
        //         spawn.memory.minBuilders = 0;

        //     }
        // }




        /** @type {Room} */
        let room = spawn.room;

        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);F3
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creepsInRoom is ' + creepsInRoom);

        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role

        //#numberOf
        spawn.memory.creepsInRoom = creepsInRoom;
        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfUpgrader2xs = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader2x');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');
        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry'); //createCustumReparier
        var numberOfTerminalLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'terminalLorry');
        var numberOfStorageToLink = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToLink');
        var numberOfLinkToTerminals = _.sum(creepsInRoom, (c) => c.memory.role == 'linkToTerminal');
        var numberOfFlagToFlagHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester');
        var numberOfFlagToFlagHarvesters2 = _.sum(creepsInRoom, (c) => c.memory.role == 'flagToFlagHarvester2');
        var numberOfStorageToExtMinis = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExtMini');//
        var numberOfLink1Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link1Harvester');//
        var numberOfLink2Harvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'link2Harvester');//
        var numberOfRepairRamparts = _.sum(creepsInRoom, (c) => c.memory.role == 'repairRampart');//
        var numberOfRecyclers = _.sum(creepsInRoom, (c) => c.memory.role == 'recycler');//
        var numberOfBobs = _.sum(creepsInRoom, (c) => c.memory.role == 'bob');//
        var numberOfBobAs = _.sum(creepsInRoom, (c) => c.memory.role == 'bobA');//




        var numberOfStorageToExt = _.sum(creepsInRoom, (c) => c.memory.role == 'storageToExt');//


        var numberOflongDistanceBuildersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceBuilder' && c.memory.home == room1);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']   numberOflongDistanceBuildersE44S2 is ' + numberOflongDistanceBuildersE44S2);
        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']   spawn.memory.minLongDistanceBuildersE44S2 is ' + spawn.memory.minLongDistanceBuildersE44S2);
        //   spawn.memory.minLongDistanceBuildersE44S2

        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1);
        var numberOfLongDistanceHarvestersroom2 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room2);
        var numberOfLongDistanceHarvestersroom3 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room3);
        var numberOfReservers = _.sum(Game.creeps, (c) => c.memory.role == 'reserver' && c.memory.target == room3);


        var numberOfScouts = _.sum(Game.creeps, (c) => c.memory.role == 'scout');
        var numberOfTargetedReparier = _.sum(creepsInRoom, (c) => c.memory.role == 'targetedReparier');

        var numberOfTestScreeps = _.sum(creepsInRoom, (c) => c.memory.role == 'roleTestCreep');
        // var numberOfReservers = _.sum(creepsInRoom, (c) => c.memory.role == 'Reserver');


        var numberOfLDBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'LDBuilder');

        // if (Game.time % 5 == 0) {

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfUpgraders is ' + numberOfUpgraders);
        //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] 0spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);



        // numberOfUpgraders
        //     console.log('[' + fileName + 'line:' +
        //         util.LineNumber() +
        //         '] ' + spawn.name +
        //         ',  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3 +
        //         ", Reservers: " + numberOfReservers +
        //         ', Harvesters: ' + numberOfHarvesters +
        //         ', Builders: ' + numberOfBuilders +
        //         ', Upgraders: ' + numberOfUpgraders +
        //         ', Repairers: ' + numberOfRepairers +
        //         ', WallRepairers: ' + numberOfWallRepairers +
        //         ', Miners: ' + numberOfMiners +
        //         ', Lorries: ' + numberOfLorries +
        //         ', numberOfTestScreeps: ' + numberOfTestScreeps +
        //         ', cpu.bucket: ' + Game.cpu.bucket) +
        //         ', Game.time: ' + util.numberWithCommas(Game.time);

        // }


        // var roomx = Game.rooms['E43S3']
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + 'DDDDDDDDDDDDD roomx ' + roomx.controller);



        //        var testController = Game.rooms["E45S3"].controller;
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  observer status: ' + status);
        //        console.log('[' + fileName + 'line:' + util.LineNumber() + ']  testController: ' + testController);

        //#energy management
        var energy = spawn.room.energyCapacityAvailable;
        //#energy
        //var energy = 800;
        var energy = 600;
        //       energy = EnergyManagement.room



        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] room name is ' + room);
        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);




        if (room == 'room1') {

            if (spawn.room.energyCapacityAvailable < energy) {
                energy = spawn.room.energyCapacityAvailable;
            }
            else {

                energy = 300;
            }
        }






        var name = undefined;


        // ********************************************************************************//;
        //    This code only gets triggered when there no miner creep in room
        // ********************************************************************************//;

        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] 2room name is ' + room);
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] 2spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] room energy is ' + energy);

        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ');


        var abc = true;
        //#miner

        //      console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawnMinor is ' + spawnMinor +'</>');
        if ((numberOfMiners == 1 || numberOfMiners == 0))
        // if (abc)
        {
            {
                // if (spawn.name == "Spawn3_2") {
                //     spawn = Game.spawns["Spawn3"];
                // }
                // check if all sources have miners
                let sources = spawn.room.find(FIND_SOURCES);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + ' sources = spawn.room.find(FIND_SOURCES) is' + sources);
                // iterate over all sources
                for (let source of sources) {
                    //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name +'  '+ creep.name + '');
                    // if the source has no miner
                    if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {


                        // check whether or not the source has a container
                        let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                            filter: s => s.structureType == STRUCTURE_CONTAINER
                        });
                        // if there is a container next to the source


                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  hack hack hack ');
                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

                        if (containers.length > 0) {
                            // spawn a miner

                            if (spawn.room.name == "E45S2") {



                            }


                            //#createMiner
                            //#cm
                            name = Game.spawns.Spawn1.createMiner(spawn, source.id);

                            console.log("[Main line " + util.LineNumber() + "] " + spawnName + " is try to create create miner with the name of " + name);
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + " is try to create create miner with the name of " + name);
                            if (name == -4) {
                                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.spawning.name  is ' + spawn.spawning.name +'</>');

                                // if (spawn.spawning.name.includes("miner")) {
                                //     spawn.memory.spawnMinor = false; //     return;
                                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + spawn.room.name + '] spawn.spawning.name  is ' + spawn.spawning.name +'</>');

                                // }
                            }
                            break;
                        }

                    }
                }

            }
        }


        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfLorries == 0) {
            // // if there are still miners left
            // if (numberOfMiners > 0 ||
            //     (spawn.room.storage != undefined && spawn.room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
            //     // create a lorry
            //     name = spawn.createLorry(450);
            // }
            // // if there is no miner left
            // else {
            //

            //     // create a harvester because it can work on its own
            //    // name = spawn.createCustomCreep(energy, 'harvester');
            //   //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name +' new creeep spawned: ' +  name + ' is a harvester');
            // }
        }
        // if no backup creep is required
        else {
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] 4room name is ' + room);
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] 4spawn.room.energyCapacityAvailable is ' + spawn.room.energyCapacityAvailable);

            // check if all sources have miners
            let sources = spawn.room.find(FIND_SOURCES);
            //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + spawn.name + 'XOXOXOXOXOXOOXOOX  sources = spawn.room.find(FIND_SOURCES) is' + sources);
            // iterate over all sources
            for (let source of sources) {
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] XOXOXOXOXOXOOXOOX  ' + spawn.name +'  '+ creep.name + '');
                // if the source has no miner
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {


                    // check whether or not the source has a container
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source


                    //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  hack hack hack ');
                    //   console.log('[' + fileName + 'line:' + util.LineNumber() + ']  spawn.room.name is  ' + spawn.room.name);

                    if (containers.length > 0) {
                        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] XOXOXOXOXOXOXOXOX  containers.length is'+ containers.length);

                        name = spawn.createMiner(spawn, source.id);

                        if (Game.time % consoleDelay == 0) {
                            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' is trying to create create miner. Time: ' + name);
                        }
                        if (!(name < 0)) {
                            // delete the claim order
                            //  spawn.memory.qMiner = spawn.memory.qMiner -1;
                        }


                        break;
                    }

                }
            }
        }



        // ********************************************************************************//
        // if none of the above caused a spawn command check for other roles
        // ********************************************************************************//
        var spawnMinor = spawn.memory.spawnMinor;

        if (name == undefined && (spawnMinor == false || spawnMinor == undefined)) {
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + ']   if (name == undefined && (spawnMinor == false || spawnMinor == undefined)) {');

            //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);
            //    if  (numberOfLongDistanceHarvestersroom3  < spawn.memory.minLDHroom3)
            //    {
            //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] aasdklfjas;ldfjka;lsdfjka;lsdfj;alsdfkja;ldkfja;lsdkfja;lsdfjkas;dlk ');
            //    }

            // console.log("[line " + util.LineNumber() + "] Starting:" + name);
            // util.debug(1, util.LineNumber(), "Starting", name);
            //    console.log("line 153 name == undefined");


            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' numberOfWallRepairers is ' + numberOfWallRepairers);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' minWallRepairers is ' + minWallRepairers);

            if (spawn.memory.attackScout != undefined) {
                // try to spawn a

                name = spawn.createAttackScout(spawn.Id, "E45S3");
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ' ' + spawn.name + '  creating an attack scout ' + name);

                // if that worked
                if ((typeof name) == "string") {
                    // delete from memory so that it does not spawn another creep
                    delete spawn.memory.attackScout;
                }

            }


            // }
            else if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                // if (spawn.memory.EnergyManagement.storageToExt != undefined) {
                //     energy = spawn.memory.energyManagement.storageToExt
                // }

                energy = 800;
                name = spawn.createStorageToExt(spawn, "storageToExt", energy);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + "]" + spawnName + "  is creating a StorageToExt creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            // if not enough harvesters
            else if (numberOfHarvesters < spawn.memory.minHarvesters) {
                // try to spawn one
                // util.debug(1, util.LineNumber(), "spawn.memory.minHarvesters", spawn.memory.minHarvesters);
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'harvester');
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  numberOfHarvesters is ' + numberOfHarvesters);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' ' +  creep.name + '  spawn.memory.minHarvesters is ' + spawn.memory.minHarvesters);
                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + " is creating harvester: " + name);
                }
            }
            // if not enough lorries
            else if (numberOfLorries < spawn.memory.minLorries) {
                console.log("[line " + util.LineNumber() + "] @SAASDSADASD numberOfLorries < spawn.memory.minLorries");
                // try to spawn one
                console.log("[Main line " + util.LineNumber() + "] createLorry: " + name);
                name = spawn.createLorry(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log("[Main line " + util.LineNumber() + "]" + spawnName + "  is creating a createLorry: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qLorry = spawn.memory.qLorry -1');
                    spawn.memory.qLorry = spawn.memory.qLorry - 1;
                }

            }

            else if (numberOfStorageToExt < spawn.memory.minStorageToExt) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createStorageToExt(spawn, "storageToExt", energy);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + "]" + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            else if (numberOfFlagToFlagHarvesters < spawn.memory.minflagToFlagHarvester) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');  //



                //  var flagSource = Game.flags[flagSource];
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minflagToFlagHarvester = 0;
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createFlagToFlagHarvester(spawn, "flagToFlagHarvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            else if (numberOfFlagToFlagHarvesters2 < spawn.memory.minflagToFlagHarvester2) {
                var flagSource = Game.flags["Source2_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minflagToFlagHarvester2 = 0;
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createFlagToFlagHarvester2(spawn, "flagToFlagHarvester2", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a flagToFlagHarvester2 creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            else if (numberOfLink1Harvesters < spawn.memory.minLink1Harvesters) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Link1_" + spawn.room.name];

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minLink1Harvesters = 0;
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']    Resetting minLink1Harvesters to ' + spawn.memory.minLink1Harvesters);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createLink1Harvester(spawn, "link1Harvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a link1Harvester creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            else if (numberOfLink2Harvesters < spawn.memory.minLink2Harvesters) {
                var flagSource = Game.flags["Source2_" + spawn.room.name];
                var flagContainer = Game.flags["Link2_" + spawn.room.name];

                //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                if (flagSource == undefined || flagContainer == undefined) {
                    spawn.memory.minLink2Harvesters = 0;
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']    Resetting minLink1Harvesters to ' + spawn.memory.minLink2Harvesters);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                    return;
                }



                name = spawn.createLink2Harvester(spawn, "link2Harvester", energy, flagSource, flagContainer);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + "  is creating a link2Harvester creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }

            else if (numberOfStorageToLink < spawn.memory.minStorageToLink) {

                // try to spawn one

                name = spawn.createStorageToLink(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' is creating a StorageToLink creep. Status is ' + name);

                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }

            }
            // if there is a claim order defined
            //  console.log("[line " + util.LineNumber() + "] spawn.memory.claimRoom != undefined: " spawn.memory.claimRoom != undefined);

            else if (spawn.memory.claimRoom != undefined) {
                // try to spawn a claimer
                console.log("[line " + util.LineNumber() + "] createClaimer");
                name = spawn.createClaimer(spawn.memory.claimRoom);
                console.log("[line " + util.LineNumber() + "] create Claimer:" + spawn.remainingTime);
                // if that worked
                if ((typeof name) == "string") {
                    // delete the claim order
                    delete spawn.memory.claimRoom;
                }
                /// console.log("line 177");
            }

            // // if not enough upgraders
            // //console.log("line 180 spawn.memory.minUpgraders: " + spawn.memory.minUpgraders);
            else if (numberOfUpgraders < spawn.memory.minUpgraders || (spawn.memory.qUpgrader > 0 && numberOfUpgraders < spawn.memory.minUpgraders + spawn.memory.qUpgrader)) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] numberOfUpgraders < spawn.memory.minUpgraders: ");
                // console.log("[Main line " + util.LineNumber() + "] energy: " + energy);
                name = spawn.createCustomCreep(energy, 'upgrader');


                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    spawn.memory.qUpgrader = spawn.memory.qUpgrader - 1;
                }


            }


            else if (numberOfRecyclers < spawn.memory.minRecyclers) {
                //    return;
                //  try to spawn one
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] numberOfRecyclers is ' + numberOfRecyclers + '</>');
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] Spawning a Recycler ' + '</>');
                //                          SpawnObj, roleName, energy
                name = spawn.createRecycler(spawn, "recycler", 200);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating  Recycler: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "created a Recycler", name);

                }

            }


            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers || (spawn.memory.qRepairer > 0 && (numberOfRepairers < spawn.memory.minRepairers + spawn.memory.qRepairer))) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairer');
                // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                    //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qRepairer = spawn.memory.qRepairers -1');
                    spawn.memory.qRepairer = spawn.memory.qRepairer - 1;
                }
            }


            else if (numberOfRepairRamparts < spawn.memory.minRepairerRamparts) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairRampart');
                // console.log("[Main line " + util.LineNumber() + "] create repairer: " + name );
                if ((typeof name) == "string") {
                    //   console.log("[Main line " + util.LineNumber() + "] create repairer: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qRepairer = spawn.memory.qRepairers -1');
                    spawn.memory.qRepairer = spawn.memory.qRepairer - 1;
                }
            }

            // if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders) {
                // try to spawn one
                // "[line " + util.LineNumber() + "]
                // console.log("[Main line " + util.LineNumber() + "] create builder: " + name);

                name = spawn.createCustomCreep(energy, 'builder');
                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + " is try to create create builder. Status is " + name);
                }
                //  console.log("[Main      line " + util.LineNumber() + "] create builder: " + name);
                if ((typeof name) == "string") {

                    console.log("[line " + util.LineNumber() + "] create builder: " + name);
                }
                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name);

                }
            }

            // if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {

                name = spawn.createCustomCreep(energy, 'wallRepairer');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + ' room 3 is XX-' + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);



                console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " is Creating a wall repairer " + name);

                if ((typeof name) == "string") {

                    //util.debug(1, util.LineNumber(), "a WallRepairer has been created named:", name);
                    console.log("[Main      line " + util.LineNumber() + "] " + spawnName + " a WallRepairer has been created named:" + name);

                }
            }

            else if (numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1) {
                // try to spawn one

                name = Game.spawns.Spawn1.createLongDistanceBuilder(energy, 5, room1, room2, 0);

                if (name == -4 || name == -6) {
                    console.log("[Main        line " + util.LineNumber() + "] " + spawnName + " is Creating a LongDistanceBuilder " + name);
                    return;
                }

                //return;

            }

            else if (numberOfTerminalLorries < Memory.spawns.Spawn1.minTerminalLorry) {
                // try to spawn one

                name = Game.spawns.Spawn1.createTerminalLorry(sp1, "terminalLorry");
                console.log("Main [line " + util.LineNumber() + "] Create TerminalLorry " + name);
            }
            //  else if (numberOfTestScreeps < Memory.spawns.Spawn1.minTesters) {
            else if (numberOfTestScreeps < spawn.memory.minTesters) {

                // try to spawn one
                name = spawn.createTestCreep(spawn, "roleTestCreep");
                //  console.log("Main [line " + util.LineNumber() + "] Create createTestCreep1 T" + name );
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.name + '  Create createTestCreep ' + name);

            }

            // if not enough longDistanceHarvesters for room1
            else if (numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom1) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + spawn.name + " numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom1 < spawn.memory.minLDHroom2);

                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + '  numberOfLongDistanceHarvestersroom1 is' + numberOfLongDistanceHarvestersroom1);
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] type: " + (typeof name));
                name = spawn.createLongDistanceHarvester(energy, 2, spawn.room.name, room1, 0);
                util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room1", name);
                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room1", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }

            // if not enough longDistanceHarvesters for room2
            else if (numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + spawn.name + " numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2" + numberOfLongDistanceHarvestersroom2 < spawn.memory.minLDHroom2);
                // try to spawn one
                // console.log("[Main    line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                console.log('[' + fileName + util.LineNumber() + '] ' + creep.name + '  create LongDistanceHarvester ' + name);
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room2, 0);


                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room2", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }

            //            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3) {
                // try to spawn one
                //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfLongDistanceHarvestersroom3 is ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, room3, 0);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating a LongDistanceHarvester: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LongDistanceHarvester for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }
            else if (numberOfLDBuilders < spawn.memory.minLDBuilder) {
                // try to spawn
                name = spawn.createLDBuilder(energy, 1, spawn.room.name, room3, 0);
                console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + creep.name + ' create LDBuilder: ' + name);


                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "create LDBuilder for room3", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }//            else if (numberOfLongDistanceHarvestersroom3 < spawn.memory.minLDHroom3)
            else if (numberOfScouts < spawn.memory.minScouts) {
                //  try to spawn one
                //  console.log("[line " + util.LineNumber() + "] create Scout: " + name);
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ', ' + spawn.name + ' room 3 is XX-'  + room3 + '-XX,  Current number of LDH: ' + numberOfLongDistanceHarvestersroom3);
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ------------------------ spawn: ' + spawn.name + '  energy is ' + energy );
                name = spawn.createScout(energy, 1, spawn.room.name, room3, 0);

                if (Game.time % consoleDelay == 0) {
                    console.log('[' + fileName + 'line ' + util.LineNumber() + '] ' + spawn.name + ' is creating a Scout: ' + name);
                }

                if ((typeof name) == "string") {

                    util.debug(1, util.LineNumber(), "created a scout", name);
                    //console.log("[line " + util.LineNumber() + "] create LongDistanceHarvester: " + name);
                }

            }
            else if (numberOfLinkToTerminals < spawn.memory.minLinkToTerminal) {

                // try to spawn one
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!!!!!!!!!!!!!!!!!!!!!!!!numberOfLinkToTerminals is ' + numberOfLinkToTerminals);
                name = spawn.createLinkToTerminal(energy);

                if (Game.time % consoleDelay == 0) {
                    console.log("[Main line " + util.LineNumber() + "]" + spawnName + "  is creating a LinkToTerminal creep: " + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }



            else if (numberOfStorageToExtMinis < spawn.memory.minStorageToExtMinis) {
                var flagSource = Game.flags["Source_" + spawn.room.name];
                var flagContainer = Game.flags["Container_" + spawn.room.name];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "   Source_" + creep.room.name is ' + "Source_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] !!!! !!!!!          flagSource is ' + flagSource);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] "Container_" + creep.room.name is ' + "Container_" + spawn.room.name);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] @@@@@@@@@@       flagContainer is ' + flagContainer);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');



                //  var flagSource = Game.flags[flagSource];
                //    var flagContainer = Game.flags[flagContainer];

                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.room.name is ' + creep.room.name);

                //  if (flagSource == undefined || flagContainer == undefined) {
                //      spawn.memory.minflagToFlagHarvester = 0;
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] Resetting minflagToFlagHarvester to ' + spawn.memory.minflagToFlagHarvester);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                       flagSource is ' + flagSource);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']                    flagContainer is ' + flagContainer);
                //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ****************************************************************************');

                //      return;
                //  }


                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] numberOfFlagToFlagHarvesters  is ' + numberOfFlagToFlagHarvesters);

                name = spawn.createStorageToExt(spawn, "storageToExtMini", energy / 2);

                if (Game.time % consoleDelay == 0) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] is creating a storageToExtMini creep: ' + name);
                }

                if ((typeof name) == "string") {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawnName + ' ' + creep.name + ' has been created');
                }
            }
            // #Upgrader2xs

            else if (numberOfUpgrader2xs < spawn.memory.minUpgrader2xs) {
                // try to spawn one

                // if(creep.room.name == "W8N35"){
                //     energy = 1000;
                // }

                energy = energy * 2;

                if (spawn.memory.EnergyManagement.upgrader2xEnergy != undefined) {
                    energy = spawn.memory.EnergyManagement.upgrader2xEnergy;
                }

                name = spawn.createCustomCreep(energy, 'upgrader2x');

                if (Game.time % 5 == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating upgader2x  name: ' + name);
                }

                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    // spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }


            }

            else if (numberOfBobs < spawn.memory.minBobs) {

                name = spawn.createBob();

                if (Game.time % 5 == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating upgader2x  name: ' + name);
                }

                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memory.qUpgrader = spawn.memory.qUpgrader -1');
                    // spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }
            }

            else if (numberOfBobAs < spawn.memory.minBobAs) {

                name = spawn.createBobA();
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating BobA  name: ' + name);

                if (Game.time % 5 == 0) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' creating BobA  name: ' + name);
                }

                if ((typeof name) == "string") {
                    // console.log("[line " + util.LineNumber() + "] create upgrader: " + name);
                }

                if (!(name < 0)) {

                    //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn.memor = spawn.memory.qUpgrader -1');
                    // spawn.memory.qUpgrader = spawn.memory.qUpgrader -1;
                }
            }

            else {

                // else try to spawn a builder
                // console.log("[line " + util.LineNumber() + "] energy:" + energy);
                //console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);


                //     if (spawn.room.energyCapacityAvailable > 8000) {

                //         console.log("[line " + util.LineNumber() + "] room total energy " + spawn.room.energyCapacityAvailable);
                //         var createtype = "builder";
                //         //console.log("Main [line " + util.LineNumber() + "] Creating createtype:" + energy);
                //    //  name = spawn.createCustomCreep(1000, createtype);
                //         console.log("Main [line " + util.LineNumber() + "] " + createtype +", "+ name);
                //      }

                // console.log("creating builder: " + name);
                // console.log("[line " + util.LineNumber() + "] name:"  + name);
                // name = -1;
                //numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1
                /// console.log("Main [line " + util.LineNumber() + "] numberOflongDistanceBuildersroom1 < spawn.memory.minLongDistanceBuildersroom1 " + spawn.memory.minLongDistanceBuildersroom1);

                //   console.log("[" + fileName + "Line " + util.LineNumber() + "] " + spawn.name + " is idle. Game Time: " + util.numberWithCommas(Game.time));
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawn.name + ' spawn.memory.minLinkToTerminal is ' + spawn.memory.minLinkToTerminal);
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + ']'+ spawn.name + ' numberOfLinkToTerminals is ' + numberOfLinkToTerminals);
            }
        }

        //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Name ' + name);
        // util.debug(1, util.LineNumber(), "Name Check", name); // ("[line " + util.LineNumber() + "] Name Check: " + name);

        //if (name !== undefined) {
        //    util.debug(1, util.LineNumber(), "Name Check", name); // ("[line " + util.LineNumber() + "] Name Check: " + name);
        //}


        // print name to console if spawning was a success
        // name > 0 would not work since string > 0 returns false
        if (typeof (name) == "string") {
            console.log("[line " + util.LineNumber() + "] Name Check: " + name);
            console.log(spawnName + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            console.log("Harvesters    : " + numberOfHarvesters);
            console.log("Upgraders     : " + numberOfUpgraders);
            console.log("Builders      : " + numberOfBuilders);
            console.log("Repairers     : " + numberOfRepairers);
            console.log("WallRepairers : " + numberOfWallRepairers);
            console.log("Miners        : " + numberOfMiners);
            console.log("Lorries       : " + numberOfLorries);
            console.log("LDH room1     : " + numberOfLongDistanceHarvestersroom1);
            console.log("LDH room2     : " + numberOfLongDistanceHarvestersroom2);
            console.log("LDH room3     : " + numberOfLongDistanceHarvestersroom3);

        }

        //   console.log('end loop1');
    }

    /* #endregion */

};


function forceMove(creep, reservedlocation, moveDirection) {
    var moveStatus;
    if (creep.pos.isEqualTo(reservedlocation)) {
        if (creep.store[RESOURCE_ENERGY] != 0) {
            moveStatus = creep.move(moveDirection);
            if (moveStatus != 0) {
                var moveStatus = creep.move(moveDirection++);
                if (moveStatus != 0) {
                    var moveStatus = creep.move(moveDirection++);
                    if (moveStatus != 0) {
                        var moveStatus = creep.move(moveDirection++);
                    }
                }
            }
        }
        else {
            creep.move(BOTTOM);
        }
    }
    return moveStatus;
}

function renewCreepsNextToSpawn(spawn) {
    const target = spawn.pos.findInRange(FIND_MY_CREEPS, 1, {
        filter: s => s.ticksToLive < 1454
    })[0];

    if (target != undefined) {
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] RenewCreep target is ' + target + '</>');
        var renewStatus = spawn.renewCreep(target);
    }
    return renewStatus;
}

function overlayInfo(spawn) {
    new RoomVisual(spawn.room.name).text(spawn.room.storage.store[RESOURCE_ENERGY], 2, 2, { color: 'green', font: 0.8 });
    new RoomVisual(spawn.room.name).text(spawn.room.name, 2, 3, { color: 'green', font: 0.8 });
}

/* #endregion */

/* #region  local functions */

function errorObjectTest() {
    var thisError = new Error("This is a new error");
    //  var stack = new Error().stack;
    console.log(' ');
    console.log('thisError: ' + thisError);
    console.log('stack: ' + thisError.stack);
    console.log('JSON.stringify (thisError): ' + JSON.stringify(thisError));
    // console.log('lineNumber: ' + thisError.lineNumber );
}

function clearMemory() {
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  name + ' is undefined. Clearing from memory');
            delete Memory.creeps[name];
        }
    }
}
/* #endregion */
