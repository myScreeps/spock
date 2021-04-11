var util = require('Util'); 
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');


var fileName = "Reserver    ";
//C:\Users\Neal\AppData\Local\Screeps\scripts\screeps.com\default\role.reserveController.js


module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if in target room

        
        // room E45S2 controller ID = 5bbcafa89099fc012e63af8e
        // room E43S3 controller ID = 5bbcaf869099fc012e63ab6c    
        // room E44S3 Spawn1 = 5d1314a8f1c8960c5d83fec7
       // creep.memory.spawnId = "5d1314a8f1c8960c5d83fec7"; 
      //  creep.memory.cachedSource = "5bbcaf869099fc012e63ab6c";
        // The 'cachedSource' is the unreserved controller
        if (creep.room.name == "E44S3" || creep.room.name == "E43S3") {
            creep.memory.spawnId = "5d1314a8f1c8960c5d83fec7"; 
            creep.memory.cachedSource = "5bbcaf869099fc012e63ab6c";   
        }

        if (creep.room.name == "E45S3" || creep.room.name == "E45S2") {
            creep.memory.spawnId = "5d4c4994d2b64f7a1b14871f"; 
            creep.memory.cachedSource = "5bbcafa89099fc012e63af93";   
        }

        let controller = creep.room.controller;

        try {
            
            
            var ttl = creep.ticksToLive;
            // make sure no more than two reservers have been spawned already.
            var reserverCount = creep.room.find(FIND_MY_CREEPS,  {filter: s=> s.memory.role == "reserver" }).length;
            if (ttl == 100 && reserverCount <= 2){
                spawn =  Game.getObjectById(creep.memory.spawnId);
                spawn.memory.reserveroom = controller.room.name;
                
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] Adding reserve creep to queque');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                
                // if (creep.room.name == "E43S3") {
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                
                // }
                
               // creep.suicide();     
            }
        
            
        } catch (error) 
        {
           console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped Error in role.reserveController' + error); 
        }

        // if (controller.ticksToLive < 3800) {
            
        //     var ttl = creep.ticksToLive;
        //     if (ttl < 5) {
        //         spawn =  Game.getObjectById(creep.memory.spawnId);
        //         spawn.memory.reserveroom = controller.room.name;
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                
        //         if (creep.room.name == "E43S3") {
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
        //             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' ERROR ERROR ERROR. This should not happen in this room. Reserve room is in build up mode to Max 5000 hits. Current controller hits is ' + controller.ticksToLive);
                
        //         }
                
        //         creep.suicide();     
        //     }
        // }


        if (creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {



            if (creep.reserveController(controller) == ERR_NOT_IN_RANGE) {
                //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.moveTo(controller)');
                // creep.moveTo(creep.room.controller);
                // myTestPos = new RoomPosition(42, 7, 'E45S2');
                // myTestPos = new RoomPosition(17, 27, 'E43S3');

                    
                // move towards the controller
                creep.moveTo(controller);
                // creep.moveTo(myTestPos);
                var reserveStatus = creep.reserveController(controller);
                // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserve status is ' + reserveStatus );

                //myTestPos = new RoomPosition(42, 8, 'E45S2');
                //creep.moveTo(myTestPos);
                //creep.upgradeController(creep.room.controller);
            }
            else
            {

                var claimstatus = creep.reserveController(controller);
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' reserve controller status is ' + claimstatus );
              //  myTestPos = new RoomPosition(42, 8, 'E45S2');
              //  creep.moveTo(myTestPos);
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