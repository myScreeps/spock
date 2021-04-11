//minflagToFlagHarvester


var util = require('Util'); 
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');


var fileName = "f2fHarvester";


module.exports = {
    // a function to run the logic for this role
    run: function (creep,debug = false) {

        var sourceflagName = creep.memory.sourceflagName;
        var destinationFlagName =creep.memory.destinationFlagName;

        if (sourceflagName == undefined || destinationFlagName == undefined) {
            return;
        }


        let flagSource = Game.flags[sourceflagName];
        let destinationFlag= Game.flags[destinationFlagName];    

        if (destinationFlag == undefined || sourceflag == undefined) {
            return;
        }




        util.say("f2f",creep,300);


        // if resouces are nearby, attempt to pickup.
        util.pickupResources(creep,0);
        util.repairRoad(creep);

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
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
         //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] creep.memory.working  ' + creep.memory.working);
        }
        

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
          //  var flagContainer = Game.flags[sourceflag];


            // ********************************************************************************//;
            //             // Use flag location to find closest Storage,Terminal,Container to deposit energery
            // ********************************************************************************//;

            //   var flagContainer = Game.flags["Container_" + creep.room.name];
            //    console.log('[' + fileName + 'line:' + util.LineNumber() + ']  XXXX flagContainer is ' + flagContainer);

            // OK for Source to be empty
            var structure = flagContainer.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE
                         || s.structureType == STRUCTURE_TERMINAL
                         || s.structureType == STRUCTURE_CONTAINER
                         || s.structureType == STRUCTURE_LINK) 
                //     && s.energy < s.energyCapacity
            });

            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+  creep.name +', !!!!!!!!!!!!!! creep._.sum(creep.carry) is ' + _.sum(creep.carry));

            if (structure !=  null) {
                
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Supple Target is ' + structure.structureType);
            }
        


        // if No structure can be found, there is somekind of problem
        if (structure == undefined) {
            //  console.log("structure structure is undefined " + creep.name + " (" + creep.memory.role + ")");
            structure = creep.room.storage;
            if (structure == undefined)
            {
                 // do nothing.    
              
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] WARNING WARNING WARNING No source structure can be found at flag ');
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] ********************************************************************************');
                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');
                
              return;
                
                
                
                
                 // // TODO: Hack
                // if( creep.room.name == "E44S2"){    
                //     //  console.log("Harvesterstructure is undefined, run as upgrader " + creep.name + " (" + creep.memory.role + ")");
                //     console.log('[' + fileName +  util.LineNumber() + '] ' +  creep.name + '  structure is undefined, run as builder. Creep role: ' + creep.memory.role);
                    
                //     roleBuilder.run(creep);
                // }
                // else{
                //     roleBuilder.run(creep);
                // }
            }

            
        
        }

            // if we found have a structure that needs energy
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                // console.log("roleHarverster.js [line " + util.LineNumber() + "] " + creep.name + " (" + creep.memory.role + ")");
                
                
                if (creep.lockedTargetId == undefined ) {
                    
                    creep.lockedTargetId = structure.id;
                }



                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure, { visualizePathStyle: { stroke: '#ffaa00' } });
                     util.repairRoad(creep);
                }
            }
        }
        
        
        
        // ********************************************************************************//;
        //          if creep is supposed to harvest energy from source
        // ********************************************************************************//;
        else {

            
     //       console.log('[' + fileName + 'line:' + util.LineNumber() + ']  XXXX flagContainer is ' + flagContainer);


            //  if (creep.room.name != "E45S2") {
            //     let xcontainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //         filter: s => s.structureType == STRUCTURE_CONTAINER});
            //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' Test xcontainer is ' + xcontainer);
            //         //console.log('[' + fileName + 'line:' + util.LineNumber() + '] Test xcontainer is ' + xcontainer);
            // console.log('[' + fileName + 'line:' + util.LineNumber() + '] Test ClosestContainer is ' + ClosestContainer);
  
            // }

//            var flagSource = Game.flags["Source_" + creep.room.name];    
            var flagSource = Game.flags[creep.memory.flagSource.name];    


         //   let ClosestContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            
            const targets = flagSource.pos.findInRange(FIND_STRUCTURES, 3);
         
         
         
            let ClosestContainer = flagSource.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: s => s.structureType == STRUCTURE_CONTAINER &&
                s.store[RESOURCE_ENERGY] > 0
            });

        //   console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' ClosestContainer engery is ' + ClosestContainer);

            if (ClosestContainer != undefined) {
                // try to withdraw energy, if the container is not in range
                
                if (creep.withdraw(ClosestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);

                } else{
                   // console.log("[" + fileName + "line:" + util.LineNumber() + "]  "+ creep.name + " running as a upgrader ");
                     roleUpgrader.run(creep);
                     return;
                }   

            }
            else{
           



            var status = creep.harvest(ClosestContainer);
           // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '  + creep.room.name + " " +  creep.name + ' current harvest status is ' + status );
            //console.log('[' + fileName + 'line:' + util.LineNumber() + '] ClosestContainer is  ' + ClosestContainer);
            if (ClosestContainer != undefined || ClosestContainer != null && (creep.harvest(ClosestContainer) == ERR_NOT_IN_RANGE) && (creep.harvest(ClosestContainer) == -7))
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] moving towards a container ');    
                creep.moveTo(ClosestContainer, { visualizePathStyle: { stroke: '#ffaa00' } });
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
                    //console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " Source is set to creep.room.storage;");

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

                    // console.log("roleHarvester [line " + util.LineNumber() + "]  " + creep.name + " moveTo (" + source + ")");

                    creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
                    util.repairRoad(creep);
                }
            }
        }
        
        }
    }
};