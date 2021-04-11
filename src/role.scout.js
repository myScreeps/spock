var util = require('Util'); 
var fileName = "LD Harvester ";
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);

        if (creep.ticksToLive == 50) {
           
            var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
                 filter: { structureType: STRUCTURE_SPAWN}
             });
     
             var Spawn1 = spawns[0];
           //  Spawn1.memory.qLDH = Spawn1.memory.qLDH + 1;
     
            }


            // if (creep.memory.retreat == true) {
                
            //     var spawn = Game.getObjectById (creep.memory.spawnId)
            //     var status = moveTo(creep.memory.spawn);

            //     // var exit = creep.room.findExitTo(creep.memory.home);
            //     // // and move to exit
            //     // creep.moveTo(creep.pos.findClosestByRange(exit));
            //     // var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     //     // the second argument for findClosestByPath is an object which takes
            //     //     // a property called filter which can be a function
            //     //     // we use the arrow operator to define it
            //     //     filter: (s) => s.hits  < (s.hitsMax ) && s.structureType != STRUCTURE_WALL,ignoreCreeps: true
            //     // });



            // }

        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' +  creep.name + ' pos.x is ' + creep.pos.x);
        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' +  creep.name + ' pos.y is ' + creep.pos.y);

        // var structures = null;
        // try{
        //     structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
        //     structures.forEach(function(element) {
        //     console.log(++count + ". " +JSON.stringify (element))});
        //     console.log();

        // }

        // catch(e)
        // {

        // }

        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ' + JSON.stringify(structures));
        // var count = 0;
        // structures.forEach(function(element) {
        // console.log(++count +". " +JSON.stringify (element))});
        // console.log();

        //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);   
        if(creep.memory.pause == true){ return}

        // var ttl = creep.ticksToLive;
        // var energyRemaining = creep.carry.energy;

        // if(creep.ticksToLive < 85 && creep.room.name == "E44S3" && creep.carry.energy == 0)
        // {
        //     console.log("Time to die: " + creep.name + "(Long Distantance Harvester)");
        //     creep.suicide();
        // }

        // can't make a full round trip if less than 160 ticks. 35 travel to souce, + 75 mining + 40 travel to link. + 10 ticks padding
        if(creep.ticksToLive < 160 && creep.room.name == "E44S3" && creep.carry.energy == 0)
        {
            creep.memory.target = "E44S3"
           // creep.memory.role = "harvester";
          
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + "Switching from LD harvester to upgrader");
            return;
        }



        // if ((creep.ticksToLive < 110) && (creep.carry.energy == 0)) {

        //     //this.debug(1, this.lineNumber(), "time to Die", creep.name);
        //  //   console.log("Time to die: " + creep.name + "Under 110 (Long Distantance Harvester)");
        

        // }


        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
            // if in home room
            if (creep.room.name == creep.memory.home) {
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_SPAWN
                        || s.structureType == STRUCTURE_EXTENSION
                        || s.structureType == STRUCTURE_LINK
                        || s.structureType == STRUCTURE_CONTAINER
                        || s.structureType == STRUCTURE_TOWER)
                        && s.energy < s.energyCapacity
                });

                
 
                if (structure == undefined) {
                    structure = creep.room.storage;
                }

                // if we found one
                if (structure != undefined) {
                    // try to transfer energy, if it is not in range
                    if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure);
                        
                    //     var repairStatus = creep.repair(creep.room.lookAt(creep));
                    //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  ' + JSON.stringify(creep.room.lookAt(creep)) );
                    //  //   console.log(JSON.stringify(Room.deserializePath(creep.memory._move.path)));
                    //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.room.name + ' ' +  creep.name + ' repairStatus is ' + repairStatus + ', creep.pos.look() is ' + creep.room.lookAt(creep) );
                    }
                   // console.log('[' + fileName + 'line:' + util.LineNumber() + '] aasdfasdfasdfasdfasdfsadf structure is ' + structure);
                }
            }
            // if not in home room...
            else {
                // find exit to home room
                var exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
                var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => s.hits  < (s.hitsMax ) && s.structureType != STRUCTURE_WALL,ignoreCreeps: true
                });
               
               // var repairStatus = creep.repair(structure);
                //var repairStatus = creep.repair(creep.room.lookAt(creep)[1].structure);

                var structures = null;
              //  var count = 0;
            //  var repairStatus = creep.repair(creep.room.lookAt(creep)[1].structure);
            //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Creep square repairStatus is ' + repairStatus);      
              
            //   try{
                    
            //         structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
            //         structures.forEach(function(structure) {
            //         var road =  structure.structure
            //         if (road.hits < road.hitsMax) {
            //             var repairStatus = creep.repair(road);
            //            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);

            //           //  break;
            //         }
            //        // var repairStatus = creep.repair(structure.structure);
            //        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
            //        // console.log(++count + ". " +JSON.stringify (structure.structure));
            //     });
            //     //    console.log();

            //     }
        
            //     catch(e)
            //     {
            //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' e is ' + e);
            //     }
                

                try {
                    structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y-1, creep.pos.x-1, creep.pos.y+1, creep.pos.x+1, true);
                    for (let i = 0; i < structures.length; i++) {
                        var road =  structures[i].structure
  
                        if (road.hits < road.hitsMax) {
                            var repairStatus = creep.repair(road);
                           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                          break;
                        }
                         
                      }
                } catch (e) {
                
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
                }



               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '     LookAt is ' + JSON.stringify(creep.room.lookAt(creep)[1].structure) );
               //// console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  structure is ' + JSON.stringify(structure) );
                
             //   console.log(JSON.stringify(Room.deserializePath(creep.memory._move.path)));
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.room.name + ' ' +  creep.name + ' repairStatus is ' + repairStatus + ', creep.pos.look() is ' + creep.room.lookAt(creep)[1] );
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name == creep.memory.target) {
                // find source
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' is in target room ' + creep.room.name);
                var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];
                var sourcePos = source.pos;
                if (source != null){}
                {
                    //exit = new RoomPosition(24, 21, 'E44S2'); 
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' sourcePos is ' + sourcePos);
                    sourcePos = source.pos;
                }
               
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' source in room is ' + source);
             // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' BEFORE HARVEST creep.carry.energy is ' +  creep.carry.energy);
                
              status = creep.harvest(source);
              //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' AFTER HARVEST creep.carry.energy is ' + creep.carry.energy + " harvest status is " + status);
                // // If creep is full, add collected amout to total amount collected
                // if (creep.carry.energy >= 300) {
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.carry.energy >= 300 is true');
                // }
             
             
                if (creep.carry.energy >= creep.carryCapacity-5){
                    if (creep.memory.totalEngeryCollected == undefined || creep.memory.totalEngeryCollected == null) {
                       // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' setting memory for totalEngeryCollected  to zero');

                        creep.memory.totalEngeryCollected = 0;
                    //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.totalEngeryCollected is now ' + creep.memory.totalEngeryCollected);
                    }
                    //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' creep.memory.totalEngeryCollected is now ' + creep.memory.totalEngeryCollected);
                        creep.memory.totalEngeryCollected = creep.memory.totalEngeryCollected +  creep.carry.energy;
                }

                //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.harvest(source) status is ' + status);
                // try to harvest energy, if the source is not in range
                if (status == ERR_NOT_IN_RANGE) {
                    // move towards the source
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  moving towards source that is ' + source);
                    //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' SourcePos is ' + sourcePos);
                    status = creep.moveTo(source);
                //    var repairStatus = creep.repair(creep.pos.look());
                    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' MoveTo Status is ' + status );    

                }else
                {
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + '  '+  creep.name + ' unable to move. Status is ' );
                    status = creep.moveTo(source);
                   // var repairStatus = creep.repair(creep.pos.look());
                }
            }
            // if not in target room
            else {
                // find exit to target room
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Trying to move toward exit ');
                var exit = creep.room.findExitTo(creep.memory.target);
               // console.log("roleLDHarvester [line " + util.LineNumber() + "] exit: " + exit);
                // move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
              //  var repairStatus = creep.repair(creep.pos.look());
            }
        }
    }

   


};


