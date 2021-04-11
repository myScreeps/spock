var util = require('Util'); 
//var fileName = "Upgrader    ";
var fileName = "Prototype   "; ///

module.exports = function () {
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);//
          //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] Role is ' + roleName + ', energy is ' + energy  );
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }


                // create creep with the created body and the given role

            var sp1 = Memory.spawns.Spawn1;
            var namecount = 0;
            var creepNewName = "";

            var newCreep = util.CreateNewScreep(this, roleName, body);

            return newCreep;


            if (roleName == "harvester")
            {

                var newCreep = util.CreateNewScreep(this, roleName, body);
 
                return newCreep;

                //return this.createCreep(body, roleName + namecount, { role: roleName, working: false });

            }
            else if (roleName == "repairer"){

                //namecount = sp1.repairsCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                //}

                //if (newCreep == - 3) {
                //    sp1.repairsCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);

                return newCreep;

            }

            else if (roleName == "repairerRampart"){

                //namecount = sp1.repairsCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                //}

                //if (newCreep == - 3) {
                //    sp1.repairsCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);

                return newCreep;

            }
            else if (roleName == "builder") {

                //namecount = sp1.buildersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                    
                //}

                //if (newCreep == - 3) {
                //    sp1.buildersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);
                return newCreep;

            }

            else if (roleName == "upgrader") {

                //namecount = sp1.buildersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");

                //}

                //if (newCreep == - 3) {
                //    sp1.buildersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);
                return newCreep;

            }





            else if (roleName == "wallRepairer") {

                //namecount = sp1.wallRepairersCount;
                //creepNewName = util.GetRoleName(sp1, roleName);
                //console.log("creating a " + roleName + "(" + creepNewName + ")");
                //var newCreep = this.createCreep(body, creepNewName, { role: roleName, working: false });
                //if (typeof (newCreep) == "string") {
                //    console.log("successfully created a " + roleName + "(" + creepNewName + ")");
                //}

                //if (newCreep == - 3) {
                //    sp1.wallRepairersCount++;
                //    var newCreep = this.createCreep(body, roleName + namecount, { role: roleName, working: false });
                //}

                var newCreep = util.CreateNewScreep(this, roleName, body);

                return newCreep;
            }

            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
               // console.log("creating a " + roleName + "(" + roleName + namecount + ")");

                return this.createCreep(body, roleName + namecount, { role: roleName, working: false });
            }
            else if (roleName == "lorry") {

                namecount = sp1.lorrysCount;
              //  console.log("creating a " + roleName + "(" + roleName + namecount + ")");

                return this.createCreep(body, roleName + namecount, { role: roleName, working: false });
            }
            else if (roleName == "minor" || roleName == "miner") {

               // namecount = sp1.minorsCount;
              //  console.log("creating a " + roleName + "(" + roleName + namecount + ")");
          
                return this.createCreep(body, roleName + namecount, { role: roleName, working: false, gameStartTick: Game.time, respawnOffSet: body *3 });
            }
            
            //return this.createCreep(body, undefined, { role: roleName, working: false });

            // console.log("roleName: " + roleName);
            var newCreep = util.CreateNewScreep(this, roleName,body);
            return newCreep;
        };





        

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLongDistanceHarvester =     function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            // for (let i = 0; i < numberOfWorkParts; i++) {
            //     body.push(WORK);
            // }

            // // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            // energy -= 150 * numberOfWorkParts;

            // var numberOfParts = Math.floor(energy / 100);
            // for (let i = 0; i < numberOfParts; i++) {
            //     body.push(CARRY);
            // }
            // for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //     body.push(MOVE);
            // }


            if (energy < 350 )
            {
                console.log('[' + fileName + 'line:' + util.LineNumber() + '] unable to create a long distance harvester because energy is less than 350. Energy level is ' + energy);
            }
            energy = energy - 500;

            body.push(WORK);
            body.push(WORK);
            body.push(WORK);
            body.push(MOVE);
            body.push(CARRY);
            body.push(MOVE);
            body.push(MOVE);

             var numberOfParts = Math.floor(energy / 100);
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
                body.push(MOVE);
            }

            // create creep with the created body
            return this.createCreep(body, "LDH_" +Game.time, {
                role: 'longDistanceHarvester',
                retreat: false,
                pause: false,
                group1: 'longDistanceHarvester',
                group2: 'builder',
                group3: 'repairer',
                group4: 'updater',
                changeRole: false,
                home: home,
                target: target,
                sourceIndex: sourceIndex,
                working: false
            });
        };
    
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createClaimer =   function (target) {
           // console.log("Creating a claimer");
            return this.createCreep([CLAIM, MOVE], undefined, { role: 'claimer', target: target });
        };


    // create a new function for StructureSpawn
    StructureSpawn.prototype.createReserver =  function (spawn, target) {
     //  console.log(" ************************ Creating a Reserver");
       
    //    try {
            var room = Game.rooms[target];
      //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']   target is ' + target);
       //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']    room is ' + room.name);
            if (room != undefined) {
            //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  room is defined as ' + room.name);
              
               //var controller = room.find(FIND_STRUCTURES,{filter: (s) =>  s.structureType == STRUCTURE_CONTROLLER })
                var controller = room.controller;
          //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] room  controller is' + controller);
         //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] controller.reservation is ' + controller.reservation);


                if (controller.reservation != undefined) 
                {
               //     console.log('[' + fileName + 'line:' + util.LineNumber() + ']  room  controllcontroller[0].reservation is ' + controller.reservation );

                    tte = controller.reservation.ticksToEnd; 

              //      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ' ' + spawn.name + ' controller.ticksToLive is' + tte);
                    if (tte < 4000)
                    {
                     // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + spawn.room.name + ' ' + spawn.name + '  ');
                        return this.createCreep([CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE], "reserverUnder4K_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, tte:  tte });
                    }
                    else{
                        return this.createCreep([CLAIM,MOVE,MOVE], "reserverOver4K_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id});
                    }
                }
                else{
                    return this.createCreep([CLAIM,MOVE,MOVE], "reserverController_undefined_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, test: 'test3' });

                }
                
        }
        else{
//            return this.createCreep([CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE], "reserverUnder4K_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, tte:  tte });

            return this.createCreep([CLAIM,MOVE,MOVE], "reserverRoomUndefined_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, test: 'test3' });
           }
    
//        } catch (e) {

//         console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');    
//         console.log('[' + fileName + 'line:' + util.LineNumber() + '] ***************************************************************************************** ');
//         console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ******** error trapped creating a reserver: ' + e);
//         console.log('[' + fileName + 'line:' + util.LineNumber() + '] ***************************************************************************************** ');
//         console.log('[' + fileName + 'line:' + util.LineNumber() + ']  ');    
//         return this.createCreep([CLAIM,MOVE,MOVE], "reserverRoomERROR_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, test: 'test3' });
     
// //        return this.createCreep([CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE], "reserverFailOver_" + Game.time, { role: 'reserver', target: target, spawnId: spawn.id, test: 'large ' });
      
//     }                   
       

      
           
       
           return (-12);
     
    };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createMiner =  function (spawn, sourceId) {
          //  var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
            var energy = spawn.room.energyCapacityAvailable;

            if (spawn.room.name == "E43S3") {
                energy = energy - 100;
            }


             var allMyCreepsInRoom = spawn.room.find(FIND_MY_CREEPS);
            // array.forEach(element => {
                //energy = 300;
            // });
            var names;
            for (let name in allMyCreepsInRoom ){
                
            }
      
            if(energy <= 300)
            {
                var body = [WORK, WORK, MOVE];
                 return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner',orginalRole: 'miner', sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length *3 });
            } else if(energy <= 400)
            {
                var body =  [WORK, WORK, WORK, MOVE];
                return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner', orginalRole: 'miner',sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length *3  });
            } else if(energy <= 500)
            {
                var body =  [WORK, WORK, WORK, WORK, MOVE];
                 return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner',orginalRole: 'miner', sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length *3  });
            }
            else if(energy <= 600)
            {
                var body =  [WORK, WORK, WORK, WORK, WORK, MOVE];
                 return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner',orginalRole: 'miner', sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length *3  });
            }            else if(energy <= 700)
            {
                var body = [WORK, WORK, WORK, WORK, WORK,MOVE,MOVE];
                 return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner', orginalRole: 'miner', sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length * 3 });
            }
           
           
            else
            {
                var body = [WORK, WORK, WORK, WORK, WORK,MOVE,MOVE];

                return this.createCreep(body, 'miner_' + Game.time,
                                    { role: 'miner', sourceId: sourceId, home: spawn.room.name, target: spawn.room.name, gameStartTick: Game.time, respawnOffSet: body.length *3 });
            }
        };
     
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLorry =    function (energy) {
            // // create a body with twice as many CARRY as MOVE parts
            // var numberOfParts = Math.floor(energy / 150);
            var body = [];
            // for (let i = 0; i < numberOfParts * 2; i++) {
            //     body.push(CARRY);
            // }
            // for (let i = 0; i < numberOfParts; i++) {
            //     body.push(MOVE);
            // }


            
            body.push(CARRY);
            body.push(CARRY);
           // body.push(CARRY);
            body.push(MOVE);
            //body.push(MOVE);

            // create creep with the created body and the role 'lorry'
            return this.createCreep(body, 'lorry_' + Game.time, { role: 'lorry', working: false});
        };


    // create a new function for StructureSpawn
    StructureSpawn.prototype.createStorageToLink = function (energy) {
        // // create a body with twice as many CARRY as MOVE parts
        // var numberOfParts = Math.floor(energy / 150);
        var body = [];
        // for (let i = 0; i < numberOfParts * 2; i++) {
        //     body.push(CARRY);
        // }
        // for (let i = 0; i < numberOfParts; i++) {
        //     body.push(MOVE);
        // }


        
        body.push(CARRY);
        body.push(CARRY);
       // body.push(CARRY);
        body.push(MOVE);
        //body.push(MOVE);

        // create creep with the created body and the role 'lorry'
        return this.createCreep(body, 'StorageToLink_' + Game.time, { role: 'storageToLink', working: false, orginalRole: 'storageToLink' });
    };


    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLinkToTerminal =   function (energy) {
        // // create a body with twice as many CARRY as MOVE parts
        // var numberOfParts = Math.floor(energy / 150);
        var body = [];
        // for (let i = 0; i < numberOfParts * 2; i++) {
        //     body.push(CARRY);
        // }
        // for (let i = 0; i < numberOfParts; i++) {
        //     body.push(MOVE);
        // }


        
        body.push(CARRY);
        body.push(CARRY);
        // body.push(CARRY);
        body.push(MOVE);
        //body.push(MOVE);

        // create creep with the created body and the role 'LinkToterminal'
        return this.createCreep(body, 'LinkToTerminal_' + Game.time, { role: 'linkToTerminal', working: false, orginalRole: 'linkToTerminal' });
    };



    StructureSpawn.prototype.createLongDistanceBuilder = function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            body.push(WORK);  
            body.push(WORK);
           // body.push(WORK);
            //body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            

            // create creep with the created body
            
            return this.createCreep(body, undefined, {
                role: 'longDistanceBuilder',
                home: home,
                target: target,
                // home: "E45S2",
                // target: "E45S2",
                sourceIndex: sourceIndex,
                working: false,
                cachedSource: null
            });
    };


    StructureSpawn.prototype.LD_Upgrader = function (numberOfWorkParts, controlerID, target) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            body.push(WORK);
            body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);

            CreateNewScreep
            // create creep with the created body
            return this.createCreep(body, undefined, {
                role: 'LD_Upgrader',
                home: 'E44S2',
                target: 'E44S2',
                creator: 'Neal R. Noble 1999',
                cachedSource: null
            });
    };        


    StructureSpawn.prototype.createTerminalLorry = function (SpawnObj, roleName) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            //body.push(WORK);
           // body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
           // body.push(CARRY);
           // body.push(CARRY);
          //  body.push(CARRY);

           // body.push(MOVE);
           // body.push(MOVE);
           // body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);


            // create creep with the created body
         //   return util.CreateNewScreep(this, roleName, body, {
             
            
            return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
                role: roleName,
                orginalRole: roleName,
                home: SpawnObj.room.name,
                target: SpawnObj.room.name,
                creator: 'Neal R. Noble 2019',
                cachedSource: null
            });
    }; 

// /minflagToFlagHarvester
    StructureSpawn.prototype.createFlagToFlagHarvester =  function (SpawnObj, roleName, energy, _flagSource,_flagContainer) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
    
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        var body = [];
        var numberOfParts = Math.floor(energy / 100);
        for (let index = 0; index < numberOfParts; index++) {
            //  const element = array[index];
            body.push(CARRY);
            body.push(MOVE);
        }

        //body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);

        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);




        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            working: true,
            flagSource: _flagSource,
            flagContainer: _flagContainer,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 


    StructureSpawn.prototype.createFlagToFlagHarvester2 = function (SpawnObj, roleName, energy, _flagSource,_flagContainer) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
    
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        var body = [];
        // var numberOfParts = Math.floor(energy / 100);
        // for (let index = 0; index < numberOfParts; index++) {
        //   //  const element = array[index];
        //     body.push(CARRY);
        //     body.push(MOVE);
        // }

        //body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        //  body.push(CARRY);

        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            working: true,
            flagSource: _flagSource,
            flagContainer: _flagContainer,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 

    StructureSpawn.prototype.createLink1Harvester = function (SpawnObj, roleName, energy, _flagSource, _flagLink) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
    
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        var body = [];
        // var numberOfParts = Math.floor(energy / 100);
        // for (let index = 0; index < numberOfParts; index++) {
        //   //  const element = array[index];
        //     body.push(CARRY);
        //     body.push(MOVE);
        // }

        //body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
      //  body.push(CARRY);
     //   body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        //  body.push(CARRY);

        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
      //  body.push(MOVE);
       // body.push(MOVE);
        // // body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            working: true,
            flagSource: _flagSource,
            flagContainer: _flagLink,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 

    StructureSpawn.prototype.createLink2Harvester = function (SpawnObj, roleName, energy, _flagSource, _flagLink) {


        var body = [];
        // var numberOfParts = Math.floor(energy / 100);
        // for (let index = 0; index < numberOfParts; index++) {
        //   //  const element = array[index];
        //     body.push(CARRY);
        //     body.push(MOVE);
        // }

        //body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
      //  body.push(CARRY);
     //   body.push(CARRY);
        // body.push(CARRY);
        // body.push(CARRY);
        //  body.push(CARRY);

        // body.push(MOVE);
        // body.push(MOVE);
        // body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
      //  body.push(MOVE);
       // body.push(MOVE);
        // // body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            working: true,
            flagSource: _flagSource,
            flagContainer: _flagLink,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 


    StructureSpawn.prototype.createTestCreep = function (SpawnObj, roleName) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            var body = [];
            //for (let i = 0; i < numberOfWorkParts; i++) {
            //    body.push(WORK);
            //}

            //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            //energy -= 150 * numberOfWorkParts;

            //var numberOfParts = Math.floor(energy / 100);
            //for (let i = 0; i < numberOfParts; i++) {
            //    body.push(CARRY);
            //}
            //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            //    body.push(MOVE);
            //}

            //body.push(WORK);
           // body.push(WORK);
           // body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);
           // body.push(CARRY);
           // body.push(CARRY);
          //  body.push(CARRY);

           // body.push(MOVE);
           // body.push(MOVE);
           // body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);


            // create creep with the created body
         //   return util.CreateNewScreep(this, roleName, body, {
             
            
            return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
                role: 'roleTestCreep',
                home: SpawnObj.room.name,
                target: SpawnObj.room.name,
                creator: 'Neal R. Noble 2019',
                cachedSource: null
            });
    }; 

    StructureSpawn.prototype.createTerminalToStorage = function (SpawnObj, roleName) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        //body.push(WORK);
       // body.push(WORK);
       // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
       // body.push(CARRY);
       // body.push(CARRY);
      //  body.push(CARRY);

       // body.push(MOVE);
       // body.push(MOVE);
       // body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);


        // create creep with the created body
     //   return util.CreateNewScreep(this, roleName, body, {
         
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
}; 


    StructureSpawn.prototype.createStorageToExt = function (SpawnObj, roleName, energy) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        var numberOfParts = Math.floor(energy / 100);
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
            body.push(MOVE);

        }


    //     //body.push(WORK);
    //    // body.push(WORK);
    //    // body.push(WORK);
    //     body.push(CARRY);
    //     body.push(CARRY);
    //     body.push(CARRY);
    //    // body.push(CARRY);
    //    // body.push(CARRY);
    //   //  body.push(CARRY);

    //    // body.push(MOVE);
    //    // body.push(MOVE);
    //    // body.push(MOVE);
    //     body.push(MOVE);
    //     body.push(MOVE);
    //     body.push(MOVE);


    //     // create creep with the created body
    //  //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            working: true,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 
    
    StructureSpawn.prototype.createUpgrader2x = function (SpawnObj, roleName, energy) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];


        var numberOfParts = undefined;

        if (SpawnObj.room.name == "E45S3" || SpawnObj.room.name == "E46S3") {
            body.push(WORK);
            body.push(WORK);
            body.push(WORK);
            body.push(WORK);
            body.push(WORK);
            body.push(WORK);
            body.push(CARRY);
            body.push(CARRY);
            body.push(CARRY);            
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);


        }
        else{
            numberOfParts = Math.floor(energy / 50);
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
                body.push(MOVE);

            }


    }

        // var numberOfParts = Math.floor(energy / 50);
        // for (let i = 0; i < numberOfParts; i++) {
        //     body.push(CARRY);
        //     body.push(MOVE);

        // }

            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            working: true,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 

    StructureSpawn.prototype.createUpgraderTargetedSource = function (SpawnObj, roleName, energy, SourceObjectId) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        var hackSource = "5dd744506630d0129c98220d" // room E46S1 ruin object of a storage with over 500K energy
        //energy= energy *2;
        var numberOfParts = Math.floor(energy / 200);
       // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] energy is ' + energy +'</>');
       // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] numberOfParts is ' + numberOfParts +'</>');
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
            body.push(CARRY);
            body.push(MOVE);

        }

            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            working: true,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            SourceObjId: SourceObjectId,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }; 

    StructureSpawn.prototype.createCustomeBuilder = function (SpawnObj, roleName, energySource, targetStructure) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(CARRY);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);
        body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            home: SpawnObj.room.name,
            targetstructure: targetStructure,
            engerysource: energySource,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    };
    

    StructureSpawn.prototype.createTargetReparier = function (SpawnObj, roleName, energySource, targetStructure) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        //for (let i = 0; i < numberOfWorkParts; i++) {
        //    body.push(WORK);
        //}

        //// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        //energy -= 150 * numberOfWorkParts;

        //var numberOfParts = Math.floor(energy / 100);
        //for (let i = 0; i < numberOfParts; i++) {
        //    body.push(CARRY);
        //}
        //for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //    body.push(MOVE);
        //}

        body.push(WORK);
        // body.push(WORK);
        // body.push(WORK);
        body.push(CARRY);
        body.push(CARRY);
      //  body.push(CARRY);
      //  body.push(CARRY);
        body.push(CARRY);
        body.push(MOVE);
        body.push(MOVE);
      // body.push(MOVE);
      // body.push(MOVE);
        // body.push(MOVE);
       // body.push(MOVE);


        // create creep with the created body
        //   return util.CreateNewScreep(this, roleName, body, {
            
        
        return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            home: SpawnObj.room.name,
            targetstructure: targetStructure,
            engerysource: energySource,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    };  
        
        
    StructureSpawn.prototype.createLDBuilder = function (energy, numberOfWorkParts, home, target, sourceIndex) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];



        if (energy < 350 )
        {
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] unable to create a long distance harvester because energy is less than 350. Energy level is ' + energy);
        }
        energy = energy - 350;

        body.push(WORK);
        body.push(WORK);
        body.push(MOVE);
        body.push(CARRY);
        body.push(MOVE);

         var numberOfParts = Math.floor(energy / 100);
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body
        return this.createCreep(body, "LDHBuilder_" +Game.time, {
            role: 'LDBuilder',
            pause: false,
            buildTarget: null,
            SourceTarget: null,
            home: home,
            target: target,
            sourceIndex: sourceIndex,
            working: false
        });
    };
   

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createAttackScout = function (spawn, target) {
           // console.log("Creating a attack Scout");
            return this.createCreep([TOUGH,TOUGH,TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK], undefined, { role: 'attackScout', spawn: spawn, target: target });
        // return this.createCreep([TOUGH, MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK], undefined, { role: 'attackScout', spawn: spawn, target: target });
    
    
        };

        
    // create a new function for StructureSpawn
    StructureSpawn.prototype.scout = function (energy, numberOfWorkParts, home, target, sourceIndex) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        // for (let i = 0; i < numberOfWorkParts; i++) {
        //     body.push(WORK);
        // }

        // // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        // energy -= 150 * numberOfWorkParts;

        // var numberOfParts = Math.floor(energy / 100);
        // for (let i = 0; i < numberOfParts; i++) {
        //     body.push(CARRY);
        // }
        // for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //     body.push(MOVE);
        // }


        if (energy < 350 )
        {
            console.log('[' + fileName + 'line:' + util.LineNumber() + '] unable to create a long distance harvester because energy is less than 350. Energy level is ' + energy);
        }
        energy = energy - 350;

        body.push(WORK);
        body.push(WORK);
        body.push(MOVE);
        body.push(CARRY);
        body.push(MOVE);

         var numberOfParts = Math.floor(energy / 100);
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body
        return this.createCreep(body, "LDH_" +Game.time, {
            role: 'scout',
            retreat: false,
            pause: false,
            group1: 'longDistanceHarvester',
            group2: 'builder',
            group3: 'repairer',
            group4: 'updater',
            changeRole: false,
            home: home,
            target: target,
            sourceIndex: sourceIndex,
            working: false
        });
    };


    StructureSpawn.prototype.createRecycler = function (SpawnObj, roleName, energy){

          // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
          var body = [];
          // for (let i = 0; i < numberOfWorkParts; i++) {
          //     body.push(WORK);
          // }
  
          // // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
          // energy -= 150 * numberOfWorkParts;
  
          // var numberOfParts = Math.floor(energy / 100);
          // for (let i = 0; i < numberOfParts; i++) {
          //     body.push(CARRY);
          // }
          // for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
          //     body.push(MOVE);
          // }
  
  
        //   if (energy < 350 )
        //   {
        //       console.log('[' + fileName + 'line:' + util.LineNumber() + '] unable to create a long distance harvester because energy is less than 350. Energy level is ' + energy);
        //   }

        body.push(WORK);
        body.push(MOVE);
        body.push(CARRY);
        
        
        // var workCost = BODYPART_COST[WORK];
        // var carryCost = BODYPART_COST[CARRY];
        // var moveCost = BODYPART_COST[MOVE];
        
        energy = energy - BODYPART_COST[WORK] + BODYPART_COST[CARRY];
        if (energy >= 50) {
            var numberOfParts = Math.floor(energy / (BODYPART_COST[WORK] + BODYPART_COST[CARRY]));
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
                body.push(MOVE);
    
            } 
        }


  
        //    var numberOfParts = Math.floor(energy / 100);
        //   for (let i = 0; i < numberOfParts; i++) {
        //       body.push(CARRY);
        //   }
        //   for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
        //       body.push(MOVE);
        //   }
  
          // create creep with the created body
          return this.createCreep(body, util.GetRoleName(SpawnObj, roleName), {
            role: roleName,
            orginalRole: roleName,
            working: true,
            home: SpawnObj.room.name,
            target: SpawnObj.room.name,
            creator: 'Neal R. Noble 2019',
            cachedSource: null
        });
    }
};