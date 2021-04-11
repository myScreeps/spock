var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 
var fileName = 'E43S3   ';
 
 
module.exports = {
    run: function () {
        // add code here
    },

    // makes sure there is always a reserver spawn in room
    reserverSpawnCheck: function (){

        try {
            room =  Game.rooms["E43S3"];
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] room is ' + room);
            controller = room.controller;
            var reserverCount = room.find(FIND_MY_CREEPS,  {filter: s=> s.memory.role == "reserver" }).length;
            var reserveRoom =  Game.spawns.Spawn1.memory.reserveroom;
            if (reserverCount == 0 && reserveRoom == undefined)
            {
                tte = controller.reservation.ticksToLive;
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  tte  is ' + tte);
                if (tte < 3900) {
                    Game.spawns.Spawn1.memory.reserveroom = "E43S3";
                }
            }
        }
        catch (e) {
            console.log('[' + fileName + 'line:' + util.LineNumber() + ']  trapped error ' + e );
        }

     }

};



