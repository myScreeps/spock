//  role.terminalToStorage.js

 var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 
var fileName = 'term2Stor';
 
 
 
module.exports = {
    run: function (creep) {
        //  return;
        
   
    
            // if resouces are nearby, attempt to pickup.
            util.pickupResources(creep,0);
            util.say(creep,"tst ",300);
    
    

    
    
            if (creep.memory.working == undefined) {
                creep.memory.working = false;
            }
            
             // if creep is bringing energy to a structure but has no energy left
            checkIfWorking(creep);
            

            // if creep is supposed to transfer energy to a structure
            if (creep.memory.working == true) {
               // console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is true: " + creep.name + " (" + creep.memory.role + ")");
    
                // energy in room is too low, only supple spawn and extentions. 
                // Skip towers while rooom energy is low.
                if (creep.memory.spawnSourcesOnly == true) {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  creep.memory.spawnSourcesOnly is set to ' + creep.memory.spawnSourcesOnly);
                    // find closest spawn, extension or tower which is not full
                    var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                     //  filter: (s) => (s.structureType == STRUCTURE_STORAGE) 
                        filter: (s) => (s.structureType == STRUCTURE_TERMINAL) 

                       // && s.store < s.storeCapacity
                    });
    
                }
                
            else{
           
             //   console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] test ' + '</>');
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
              
                // filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL || s.structureType == STRUCTURE_CONTAINER  || s.structureType == STRUCTURE_EXTENSION) 
                //     && s.store < s.storeCapacity
            //    filter: (s) => (s.structureType ==  STRUCTURE_TERMINAL) 
               filter: (s) => (s.structureType ==  STRUCTURE_STORAGE) 
                
            });
    
            
     
                if (structure !=  null) {
                    
            //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
                }
            }
    
    
    
            if (structure == undefined) {
                //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");

            }

    
                if (structure != undefined) {
                    // try to transfer energy, if it is not in range
                    // console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");
    
                 //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  SSSSSSSSSSSSSSSSSSSSSSSSstructure is ' + structure);
                    if (creep.lockedTargetId == undefined ) {
                        
                        creep.lockedTargetId = structure.id;
                    }
    
    
                //    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' transfer energy.......... ');
                   var creepEnergy = creep.carry.energy;
  
    
                   var status = creep.transfer(structure, RESOURCE_ENERGY);
    
                //    if (util.isRoom(creep,"E45S2")) {
                //         console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' +creep.room.name +' creepEnergy after transfer is '+ creepEnergy +'</>');
                //     }
                    if (status  == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                         util.repairRoad(creep);
                    }
                    else
                    {
                      return; // does this cause any problems by blocking executing of any code below
                  
                        // if (util.isRoom(creep,"E45S2")) {
                        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room: ' +creep.room.name +' Else Transfer status is '+ status +'</>');
                        // }
                    }
                }
            }

            else {
    

                let ClosestContainer = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    // filter: s => s.structureType == STRUCTURE_CONTAINER &&
                    // s.store[RESOURCE_ENERGY] > 75
                     filter: s => s.structureType == STRUCTURE_TERMINAL
                
                });
    
                if (ClosestContainer != undefined) {
                    // try to withdraw energy, if the container is not in range
                    
                    if (creep.withdraw(ClosestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                        util.repairRoad(creep);
    
                    } else{
                       // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " SSSSSSSSSSSSSSSSSSSSSSSSS running as a upgrader ");
                       //  roleUpgrader.run(creep);
                       //  return;
                    }     
                }


            //     else{

            //     var status = creep.harvest(ClosestContainer);
            //    // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + creep.room.name + " " +  creep.name + ' current harvest status is ' + status );
            //     //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is  ' + ClosestContainer);
            //     if (ClosestContainer != undefined || ClosestContainer != null && (creep.harvest(ClosestContainer) == ERR_NOT_IN_RANGE) && (creep.harvest(ClosestContainer) == -7))
            //     {
            //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a container ');    
            //         creep.moveTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
            //         util.repairRoad(creep);
            //         return;
            //     }else{
            //         // find closest source
            //         var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            //         if (source == null) {
            //         // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") is " + source);
            //         // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");
    
            //         roleUpgrader.run(creep);
            //         //return;
            //         }
    
            //         if (source == undefined || source == null ) {
            //             //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");
    
            //             source = creep.room.storage;
    
            //             if (source == undefined || source == null ) {
            //                 console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + "creep.room.storage is " + source);
            //                 console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a builder ");
            
            //               roleUpgrader.run(creep);
            //                 return;
            //             }
    
            //         }
    
            //         // try to harvest energy, if the source is not in range
            //         if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            //             // move towards the source
    
            //             // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source + ")");
    
            //             creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
            //             util.repairRoad(creep);
            //         }
            //     }
            // }
            
            }
        }
};

function checkIfWorking(creep) {
    if (creep.memory.working == true && creep.carry.energy == 0) {
        // switch state
        creep.memory.working = false;
        //  console.log("roleHarverster.js [line " + util.LineNumber() + "] Working is false name:" + creep.name + " (" + creep.memory.role + ")");
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.carry.energy > 0) {
        // switch state
        creep.memory.working = true;
    }
}
