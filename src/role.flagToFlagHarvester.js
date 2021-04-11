//minflagToFlagHarvester


var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');


var fileName = "f2fHarvester";


module.exports = {
    // a function to run the logic for this role
    run: function (creep) {


        // if (creep.room.name == "W8N36") {
        //       return;
        // }
  

       
        util.say("f2f",creep,300);


        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        util.repairRoad(creep);

        // if (creep.room.name == "E45S2") {
        //     return;
        // }

    //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' running flag to flag harvester ');

        // var spawn = creep.room.spawn.name;
        // var flagSource = creep.memory.flagSource;
        // var flagContainer = creep.memory.flagContainer;
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ************************************************************************************ ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  spawn is ' + spawn);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  flagSource is ' + flagSource);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  flagContainer is ' + flagContainer);
        // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ************************************************************************************ ');
        // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');




        // if (creep.ticksToLive == 50) {
           
        //     var spawns =  creep.room.find(FIND_MY_STRUCTURES, {
        //          filter: { structureType: STRUCTURE_SPAWN}
        //      });
             
        //      var Spawn1 = spawns[0];
        //      Spawn1.memory.qHarvester = Spawn1.memory.qHarvester + 1;
     
        //     }

        // check to see if engery == 0 and ttl < 75
        //var status = util.SelfSecide(creep);
        //console.log(status);
         //console.log("roleHarverster.js [line " + util.LineNumber() + "] Name: " + creep.name + " (" + creep.memory.role + ")");
       
       
         // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
          //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is false name:" + creep.name + " (" + creep.memory.role + ")");

        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy > 0) {
      //      else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
         //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.working  ' + creep.memory.working);
        }
        

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
        //    console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");
            var flagContainer = Game.flags["Container_" + creep.room.name];
            // energy in room is too low, only supple spawn and extentions. 
            // Skip towers while rooom energy is low.
            if (creep.memory.spawnSourcesOnly == true) {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                        // || s.structureType == STRUCTURE_EXTENSION) 
                        // && s.energy < s.energyCapacity
                });

            }

            // ********************************************************************************//;
            //             // find closest Storage,Terminal,Container to deposit energery
            // ********************************************************************************//;
            else{

                var flagContainer = Game.flags["Container_" + creep.room.name];
         //       console.log('[' + fileName + 'line:' + util.LineNumber() + ']  XXXX flagContainer is ' + flagContainer);

            
            var structure = flagContainer.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE
                         || s.structureType == STRUCTURE_TERMINAL)
                       //  || s.structureType == STRUCTURE_CONTAINER)
                //   //  || (s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 50 ) ) 
                //     || (s.structureType == STRUCTURE_TOWER && s.energy <= s.energyCapacity - _.sum(creep.carry)) ) 
                //     && s.energy < s.energyCapacity
            });

            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+  creep.name +', !!!!!!!!!!!!!! creep._.sum(creep.carry) is ' + _.sum(creep.carry));

            if (creep.room.name == "W9N34") {
                structure = creep.room.storage;
            }


            if (structure !=  null) {
                
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
        }
    }



        if (structure == undefined) {
            //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
            structure = creep.room.storage;
            if (structure == undefined)
            {
                // TODO: Hack
                if( creep.room.name == "E44S2"){    
                    //  console.log("Harvesterstructure is undefined, run as upgrader " + creep.name + " (" + creep.memory.role + ")");
                    console.log('[' + fileName +  util.LineNumber() + '] ' +  creep.name + '  structure is undefined, run as builder. Creep role: ' + creep.memory.role);
                    
                    roleBuilder.run(creep);
                }
                else{
                    roleBuilder.run(creep);
                }
            }

            
        
        }

            // if we found have a structure that needs energy
            if (structure != undefined) {
   
                
                if (creep.lockedTargetId == undefined ) {
                    
                    creep.lockedTargetId = structure.id;
                }

                var transferStatus = creep.transfer(structure, RESOURCE_ENERGY);

                if (creep.room.name =="W9N34") {
                 //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Transfer structure.structureType is ' + structure.structureType +'</>');
                 //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] transferStatus is ' + transferStatus +'</>');
                  }

                //   if (structure.structureType == STRUCTURE_STORAGE) {
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] asdfsadfsadfsadfsadfsdfdsasdsafsfdasdf test '  +'</>');  

                //   }


                if (transferStatus == ERR_NOT_IN_RANGE) {
                    // move towards it

                    if (creep.room.name =="W9N34") {
                        var tempP = new RoomPosition(22,20,"W9N34"); 
                        creep.travelTo(tempP, { visualizePathStyle: { stroke: '#ffaa00' } });
                        
                    }
                    else{
                        creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                     util.repairRoad(creep);
                }    
            }   
        }
        
        
        
        // ********************************************************************************//;
        //                if creep is supposed to harvest energy from source
        // ********************************************************************************//;       
        else {



//            var flagSource = Game.flags["Source_" + creep.room.name];
            let ClosestContainer = undefined;
            flagSource = Game.flags[creep.memory.flagSource.name];    
            if (creep.room.name == "E43S3") {
                    var ClosestContainers = flagSource.room.find(FIND_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: s => s.structureType == STRUCTURE_CONTAINER
                    && s.store[RESOURCE_ENERGY] > 0
                   //filter: {structureType: STRUCTURE_CONTAINER}
                });
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagSource is ' +  flagSource+ '</\>');                
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] typeof (ClosestContainers) is ' +  typeof (ClosestContainers) + '</\>');
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] flagSource.room is ' +  flagSource.room + '</\>');
               // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainers.length ' +  ClosestContainers.length + '</\>');
               
                ClosestContainer = ClosestContainers[0];
            }
            else{

         //   let ClosestContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                ClosestContainer = flagSource.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_CONTAINER &&
                s.store[RESOURCE_ENERGY] > 0
            });
        }
  //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' ClosestContainer engery is ' + ClosestContainer);

            if (creep.room.name == "W9N34") {
                
            }

            if (ClosestContainer != undefined) {
                // try to withdraw energy, if the container is not in range
            

                
            if (creep.room.name == "W9N34") {
                if (ClosestContainer.structureType == STRUCTURE_STORAGE) {
         //           console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] asdfsadfsadfsadfsadfsdfdsasdsafsfdasdf test '  +'</>');  

                }

            }
                var withdrawStatus = creep.withdraw(ClosestContainer, RESOURCE_ENERGY);
            
                // if (creep.room.name =="W9N34") {
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] Withdraw ClosestContainer.structureType is ' + ClosestContainer.structureType +'</>');
                //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] withdrawStatus is ' + withdrawStatus +'</>');
                  
                // }
                

            
                if (withdrawStatus == ERR_NOT_IN_RANGE) {
                    // move towards it
                  
                    if (creep.room.name =="W9N34") {
                        var pos = new RoomPosition(21,19,"W9N34");
                        //creep.travelTo(21,19, { visualizePathStyle: { stroke: '#ffaa00' } });
                        creep.travelTo(pos, { visualizePathStyle: { stroke: '#ffaa00' } });
                            
                        }
                        else{
                            creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                        }

                   // creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                    return;

                } else{
                   // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");
                     roleUpgrader.run(creep);
                     return;
                }   

            }
            else{
           



            var status = creep.harvest(ClosestContainer);

            console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] qweqweqwee status is ' +  status +'</>');
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + creep.room.name + " " +  creep.name + ' current harvest status is ' + status );
            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is  ' + ClosestContainer);
            if (ClosestContainer != undefined || ClosestContainer != null && (creep.harvest(ClosestContainer) == ERR_NOT_IN_RANGE) && (creep.harvest(ClosestContainer) == -7))
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a container ');    
                creep.travelTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                util.repairRoad(creep);
                return;
            }else{
                // find closest source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (source == null) {
                // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") is " + source);
                // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");

                roleUpgrader.run(creep);
                //return;
                }

                if (source == undefined || source == null ) {
                    console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

                    source = creep.room.storage;

                    if (source == undefined || source == null ) {
                       // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + "creep.room.storage is " + source);
                        console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a builder ");
        
                      roleUpgrader.run(creep);
                        return;
                    }

                }

                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards the source

                    // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " travelTo (" + source + ")");

                    creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
            }
        }
        
        }
    }
};