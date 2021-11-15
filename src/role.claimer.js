var util = require('Util');
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');


var fileName = "Claimer     ";



module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // if in target room
        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.travelTo(creep.pos.findClosestByRange(exit));
        }
        else {

            // room E45S2 controller ID = 5bbcafa89099fc012e63af8e
            creep.memory.cachedSource = "5bbcafa89099fc012e63af8e";
            // try to claim controller
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' Claiming room');
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' creep.room is ' + creep.room);
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' creep.room.controller is ' + creep.room.controller);
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' creep.travelTo(creep.room.controller)');
                creep.travelTo(creep.room.controller);
                //   myTestPos = new RoomPosition(42, 7, 'E45S2');

                // move towards the controller
                // creep.travelTo(creep.room.controller);
                //   creep.travelTo(myTestPos);
                var claimstatus = creep.reserveController(creep.room.controller);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' claimstatus is ' + claimstatus);

                //myTestPos = new RoomPosition(42, 8, 'E45S2');
                //creep.travelTo(myTestPos);
                //creep.upgradeController(creep.room.controller);
            }
            else {

                var claimstatus = creep.claimController(creep.room.controller);
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.name + ' claimstatus is ' + claimstatus);
                //  myTestPos = new RoomPosition(42, 8, 'E45S2');
                //  creep.travelTo(myTestPos);
                //upgradeStatus =  creep.upgradeController(creep.room.controller);
                //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' upgradeStatus  is ' + upgradeStatus);
                // if (upgradeStatus != 0)
                // {
                //   //  roleHarvester.run(creep);

                //   //  creep.harvest();

                //     if (creep.carry.energy == creep.carryCapacity)
                //     {

                //     }

                // }

            }
        }
    }
};
