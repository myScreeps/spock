//minRepairRamparts

var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
 
 
var fileName = 'rampart   ';

 
module.exports = {
    run: function (creep) {
 
    util.pickupResources(creep,0);
    util.say(creep,"ram",300); 
    

  //  console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] creep.name is '+creep.name+'</>');

        var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
        var maxRamparts = 10000;
        if (spawn.memory.maxRampartsHits == undefined) {
            spawn.memory.maxRampartsHits = maxRamparts 
        }
        else
        {
            maxRamparts = spawn.memory.maxRampartsHits;
        }
        
        console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] maxRamparts is ' + maxRamparts +'</>');
      // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] spawn is ' + spawn +'</>');

        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // ********************************************************************************//;
        //       if creep is supposed to repair something
        // ********************************************************************************//;
        if (creep.memory.working == true) {

            // check for a specific structure
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.memory.targetStructure is ' + creep.memory.targetStructureId);
            
            if(creep.memory.targetStructureId != undefined){
               //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + '  creep.memory.targetStructure is ' + creep.memory.targetStructureId);
                structure = Game.getObjectById(creep.memory.targetStructureId);
                if (structure.hits == structure.hitsMax) {
                
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' hits = MaxHits. Changing target to undefined  ');
                    creep.memory.targetStructureId = undefined;
                }
               // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' XXXXXXXXXstructure is '  + structure);
                var repairStatus = creep.repair(structure);
                   // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' repair status is ' + repairStatus);
                    if (repairStatus == ERR_NOT_IN_RANGE) {
                        // move towards structure
                       //console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                        creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
            }

            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            
            else      
           {    
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.hits  < maxRamparts && s.structureType == STRUCTURE_RAMPART
            });


  
                // var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                //     // the second argument for findClosestByPath is an object which takes
                //     // a property called filter which can be a function
                //     // we use the arrow operator to define it
                //     filter: (s) => s.hits  < (s.hitsMax ) && s.structureType != STRUCTURE_WALL,ignoreCreeps: true
                // });

                // if we find one
                if (structure != undefined) {
                    // try to repair it, if it is out of range
                    var repairStatus = creep.repair(structure);
                  //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' repair status is ' + repairStatus);
                    if (repairStatus == ERR_NOT_IN_RANGE) {
                        // move towards it
                        // /console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                        creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }

                // else if (structure != undefined && structure.structureType == STRUCTURE_RAMPART && structure.hits < structure.hitsMax * .35){

                //     var repairStatus = creep.repair(structure);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structure.hitsMax * .35 is ' + structure.hitsMax * .35);
                //     console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  structure.hits is ' + structure.hits);
                //     //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name +', ' +  creep.name + ' repairing rampart status is ' + repairStatus);
                //     if (repairStatus == ERR_NOT_IN_RANGE) {
                //         // move towards it
                //         // /console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a road tunnel ');
                //         creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                //     }
                // }
                
                else  if (structure != undefined && structure.structureType != STRUCTURE_RAMPART) {
                    // try to repair it, if it is out of range
                 //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' structure type is ' + structure.structureType);
                    if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.travelTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                    }
                }
                // can't fine one
                else {
                    // look for construction sites
                    

                    roleBuilder.run(creep);
                }
            } // end if

        }


        // ********************************************************************************//;
        // otherwise the creep is supposed to get energy
        // ********************************************************************************//;
        else {
            // find closest container // s.structureType == STRUCTURE_CONTAINER || 
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                    s.store[RESOURCE_ENERGY] > 0
            });
            // if one was found
            if (container != undefined ) {
            
                if (creep.room.name == "W9N34") {
                    var destinationPos = new RoomPosition(24,20,"W9N34");
                    if (creep.pos != destinationPos) {
                        creep.travelTo(destinationPos, { visualizePathStyle: { stroke: '#ffaa00' } });
                    } 
                }
            


                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
 
                        creep.travelTo(container, { visualizePathStyle: { stroke: '#ffaa00' } });
                    
                }
            }
            else {
                // find closest source
                var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    }



 
    
};