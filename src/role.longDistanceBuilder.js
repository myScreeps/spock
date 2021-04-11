var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');

var util = require('Util'); 
var fileName = "LD Builder  "; //Test //test


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        

    



        

         // if resouces are nearby, attempt to pickup.
         util.pickupResources(creep,0);
       //  util.TimeToDie(creep,300,0);

        //  // var ttl = creep.ticksToLive;
        //  // var energyRemaining = creep.carry.energy;
 
        //  if (creep.carry.energy == 0 && creep.ticksToLive < 310 ) {
 
        //      //this.debug(1, this.lineNumber(), "time to Die", creep.name);
        //      console.log("Time to die: " + creep.name + "(Long Distantance Harvester)");
        //      return creep.suicide();
 
        //  }



         if (creep.carry.energy == 0 && creep.memory.target != "E45S2")
         {
             creep.memory.target = "E45S2";
             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Switching target to ' + creep.memory.target);
 
         }
 
 
                 
         if (creep.carry.energy == creep.carryCapacity && creep.memory.target != "E45S2")
         {
             creep.memory.target = "E45S2";
             console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Switching target to ' + creep.memory.target);
 
         }

         
        if (creep.room.name == "E44S2")
        {
           // let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);
            let creepsInRoom = creep.room.find(FIND_MY_CREEPS);
            var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');    
            var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');    
            var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');  
            var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');    

         //  console.log("[line " + util.LineNumber() + "] " + ' number of builders in room ' + numberOfRepairers);
          // console.log("[line " + util.LineNumber() + "] " + ' creep.memory.role  is ' + creep.memory.role);


          if (numberOfHarvesters < 2)
          {
              console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' changing role to harverter');
              Game.creeps[creep.name].memory.role = 'harvester';
              Game.creeps[creep.name].memory.target = "E44S2";

              console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' target is now XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' + creep.memory.target );
             
              roleHarvester.run(creep);
          } else if (numberOfRepairers < 1){
                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' changing role to repairer');
                Game.creeps[creep.name].memory.role = 'repairer';
                Game.creeps[creep.name].memory.target = "E44S2";

                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' role is now ' + creep.memory.role );
                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' target is now ' + creep.memory.target );
               // roleRepairer.run(creep);
            } else if (numberOfBuilders < 1)
            {
                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' changing role to builder');
                Game.creeps[creep.name].memory.role = 'builder';
                Game.creeps[creep.name].memory.target = "E44S2";

                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' role is now ' + creep.memory.role );
                console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' target is now ' + creep.memory.target );
               
               // roleHarvester.run(creep);
            } else if (numberOfMiners < 1)
            {


            //     console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' changing role to builder');
            //     Game.creeps[creep.name].memory.role = 'miner';
            //     Game.creeps[creep.name].memory.target = "E44S2";

            //     console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' role is now ' + creep.memory.role );
            //     console.log("[line " + util.LineNumber() + "] " +  creep.name  + ' target is now ' + creep.memory.target );
               
            //    // roleHarvester.run(creep);
            }


        }



        
        
        
        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
         
          
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
         //   console.log('LD Builder ' + util.LineNumber() + '] ' +  creep.name + ' Test');
            // move to exit
            creep.travelTo(creep.pos.findClosestByRange(exit), { visualizePathStyle: { stroke: '#ffaa00' } });
           // console.log('LD Builder ' + util.LineNumber() + '] ' +  creep.name + ' Test');
            // return the function to not do anything else
            return;
        }

        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to complete a constructionSite
        if (creep.memory.working == true) {
          

            // find closest constructionSite
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.travelTo(constructionSite, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }

            // if no constructionSite is found
            else {
                // go to target room
                 if (creep.memory.home == creep.memory.target) {
                   // roleHarvester.run(creep);
                   // roleRepairer.run(creep);
                    roleBuilder.run(creep);
                    return;
                   // roleRepairer.run(creep);

                }


                    //exit = new RoomPosition(24, 21, 'E44S2'); 
                   // console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " creep.memory.room is " + creep.room.name );
                 //   console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " creep.pos is " + creep.pos  );
                if (creep.carry.energy == creep.carryCapacity) {
                 //   console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " creep.pos is " + creep.pos  );
                   

         

                   // console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " creep.carry.energy == creep.carryCapacity is " + creep.carry.energy == creep.carryCapacity);
 
                    // ind exit to target room
                    var exit = creep.room.findExitTo(creep.memory.home);
                    exit = new RoomPosition(24, 21, 'E44S2'); 
                   //  exit = new RoomPosition(35, 3, 'E44S2');
                     exit = new RoomPosition(24, 21, 'E44S2');
                   // console.log(" [LD Builder " + util.LineNumber() + "] " +  creep.name + ", creep.memory.home is " + creep.memory.home);
                   // console.log(" [LD Builder " + util.LineNumber() + "] " + creep.name + " is exiting current room: " + creep.room.name);
                   // console.log(' [LD Builder ' + util.LineNumber() + '] ' +  creep.name + ' exit: ' + exit);
                    //move to exit
                    var status = creep.travelTo(exit,{ visualizePathStyle: { stroke: '#ffaa00' } });
                    var status = creep.travelTo(creep.pos.findClosestByRange(exit,{ visualizePathStyle: { stroke: '#ffaa00' } }));
                    if (status < 0)
                    {
                        console.log(" [LD Builder " + util.LineNumber() + "] " + creep.name + " travelTo status: " + status);
                    }
                } 
                else {
         
                    // go upgrading the controller
                   // console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " Nothing to build switching to LD repair");
                    roleRepairer.run(creep);
                }

                // var exit = creep.room.findExitTo(creep.memory.home);
                // exit = new RoomPosition(35, 3, 'E44S2');
                // var status = creep.travelTo(creep.pos.findClosestByRange(exit,{ visualizePathStyle: { stroke: '#ffaa00' } }));
                // console.log(" [LD Builder " + util.LineNumber() + "] " + creep.name + " travelTo status: " + status);
                
            }
        }
        // if creep is supposed to get energy
        else {
          


            // find closest container
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                    s.store[RESOURCE_ENERGY] > 0
            });
            // if one was found

            
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            } 

            else {
                // find closest source
               // E44S2 = 5bbcaf979099fc012e63ad55]
               // E45S2 5bbcafa89099fc012e63af8f

                    creep.memory.cachedSource = "5bbcafa89099fc012e63af8f";

                    var myRoomSource = Game.getObjectById("5bbcafa89099fc012e63af8f")
                   // console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " myRoomSource (" + myRoomSource + ")");

                    
                    
                    //var source = creep.memory.cachedSource;
                /// console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source.Id + ")");
                    // if (source == null)
                    // {
                    //     source = new RoomPosition(35, 3, 'E44S2');
                    // }
                    // try to harvest energy, if the source is not in range
                

                    if (creep.harvest(myRoomSource) == ERR_NOT_IN_RANGE) {
                        // move towards it
                  //  console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " is moving closer to source in room:  " + myRoomSource.room.name);
                  //  console.log("[LD Builder line " + util.LineNumber() + "]  " + creep.name + " is moving closer to source in room with source ");
                 //   console.log(JSON.stringify(myRoomSource));
                    

                        creep.travelTo(myRoomSource, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                
            }
        }
    }
};