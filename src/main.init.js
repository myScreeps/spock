
var util = require('Util');

var fileName = "init    ";

module.exports.initCode = function () {
    console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] running initilzation code </>');

    //  return;

    // var flags = Object.keys(Game.rooms);
    //rooms.forEach(room => {
    var rooms = Object.keys(Game.rooms);
    for (let roomName in Game.rooms) {
        room = Game.rooms[roomName];


        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(room) is ' + JSON.stringify(room) + '</>');
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 12room.name is ' + room.name + '</>');

        if (room.name == "E26N3") {
            if (Memory.E26N3 == undefined) {
                Memory.E26N3 = new Object();
            }

            if (Memory.time == undefined) {
                Memory.time = [];
            }


            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room.name is ' + room.name + '</>');
        }

        if (room.name == "E26N3") {





            var parameterFlags = room.find(FIND_FLAGS, { filter: s => s.name.startsWith('Parameter') });
            var sortedFlags = _.sortBy(parameterFlags, 'name');

            var points = [];
            var point = [];
            sortedFlags.forEach(flag => {
                //var point = [[flag.pos.x, flag.pos.y]];
                //  point.push(flag.pos.x);
                //  point.push(flag.pos.y);
                // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] point is ' + point + '</>');
                // var x = flag.pos.x;
                // var y = flag.pos.y;
                points.push([flag.pos.x, flag.pos.y]);
                //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] points is ' + points + '</>');
                console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(points) is ' + JSON.stringify(points) + '</>');


            });

            Memory.E26N3.roomParameter = points;
            //  Memory.E26N3.tombstones = [];
            if (Memory.E26N3.tombstones == undefined) {
                var tomestones = [];
                Memory.E26N3.tombstones = tomestones;
            }

            //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] parameterFlags.length is ' + parameterFlags.length + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] sortedFlags.length is ' + sortedFlags.length + '</>');
            // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] JSON.stringify(sortedFlags) is ' + JSON.stringify(sortedFlags) + '</>');



        }


    };

}
