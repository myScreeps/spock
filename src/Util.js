

var fileName = "Util        ";

module.exports =
{

    LineNumber: function () {
        var e = new Error();
        if (!e.stack)
            try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e;
            } catch (e) {
                if (!e.stack) {
                    return 0; // IE < 10, likely
                }
            }
        var stack = e.stack.toString().split(/\r\n|\n/);
        // We want our caller's frame. It's index into |stack| depends on the
        // browser and browser version, so we need to search for the second frame:
        var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
        do {
            var frame = stack.shift();
        } while (!frameRE.exec(frame) && stack.length);

        return this.pad(frameRE.exec(stack.shift())[1], 4);
    },

    debug: function (level, linenumber, message, somevar) {
        if (level < 10) {
            //  var linenumber = this.LineNumber();
            console.log("[line " + linenumber + "] " + message + ", " + somevar);
            return;
        }

    },

    SelfSecide: function (creep) {
        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if ((ttl < 25) && (energyRemaining == 0)) {

            //this.debug(1, this.lineNumber(), "time to Die", creep.name);
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },

    TimeToDie: function (creep, ticksRemaining, energyLevel) {
        var ttl = creep.ticksToLive;
        var energyRemaining = creep.carry.energy;

        if ((ttl < ticksRemaining) && (energyRemaining <= energyLevel)) {
            console.log("Time to die: " + creep.name + "(" + creep.role + ")");
            return creep.suicide();

        }
    },

    TimeToDie2: function (creep, roomName, ticksRemaining, energyLevel) {
        if (creep.room.name == roomName) {
            var ttl = creep.ticksToLive;
            var energyRemaining = creep.carry.energy;

            if ((ttl < ticksRemaining) && (energyRemaining <= energyLevel)) {
                console.log("Time to die: " + creep.name + "(" + creep.role + ")");
                return creep.suicide();
            }
        }

        return;
    },



    GetCreepCountObj: function (roleName) {
        var sp1 = Memory.spawns.Spawn1;
        var creepName = "";

        if (roleName == "harvester") {
            sp1.HarverstersCount++;
            return sp1.HarverstersCount;
        }

        else if (roleName == "upgrader") {
            sp1.upgradersCount++;
            return sp1.upgradersCount;
        }

        else if (roleName == "repairer") {
            sp1.repairsCount++;
            return sp1.repairsCount;
        }
        else if (roleName == "builder") {
            sp1.buildersCount++;
            return sp1.buildersCount;

        }

        else if (roleName == "wallRepairer") {
            sp1.wallRepairersCount++;
            return sp1.wallRepairersCount;
        }

        else if (roleName == "lorry") {
            sp1.lorrysCount++;
            return sp1.lorrysCount;
        }

        else if (roleName == "lorry") {
            sp1.lorrysCount++;
            return sp1.lorrysCount;
        }

        else if (roleName == "minor") {
            sp1.minorsCount++;
            return sp1.minorsCount;
        }
        else if (roleName == "roleTestCreep") {
            sp1.testCreepCount++;
            return sp1.testCreepCount;
        }
    },


    GetRoleName: function (SpawnObj, roleName) {

        var name = roleName + " _" + Game.time;
        return name;

        SpawnObj = Memory.spawns.Spawn1;
        console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj is ' + SpawnObj.creepCount);
        console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj.creepCount is ' + SpawnObj.creepCount);


        if (SpawnObj.creepCount == null || SpawnObj.creepCount == undefined) {
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] SpawnObj.creepCount is ' + SpawnObj.creepCount + " reseting count to zero");
            Game.spawns.Spawn1.memory.creepCount = 0;
        }

        var postFixCount = Game.spawns.Spawn1.memory.creepCount

        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] calling GetRoleName ');
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] postFixCount is  ' + postFixCount);
        // postFixCount++;
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] postFixCount = Game.spawns.Spawn1.memory.creepCount is  ' + Game.spawns.Spawn1.memory.creepCount);

        console.log('[' + fileName + 'line:' + this.LineNumber() + '] Game.time ' + Game.time);

        if (Game.creeps[roleName].name) {
            var newCreepName = roleName + "_" + SpawnObj.creepCount++;
            var whileCount = 0;
            while (Game.creeps[newCreepName]) {
                whileCount++;
                var newCreepName = roleName + "_" + SpawnObj.creepCount++;
                if (whileCount++ > 36) {
                    console.log('[' + fileName + 'line:' + this.LineNumber() + '] Breaking out if while loop. Investigate!! ');
                    break;
                }
            }
            console.log('[' + fileName + 'line:' + this.LineNumber() + ']  New Creep name is ' + newCreepName);
            return newCreepName;
        }

        console.log('[' + fileName + 'line:' + this.LineNumber() + ']  New Creep name is ' + newCreepName);
        return roleName;

    },

    GetRoleNameold: function (SpawnObj, roleName) {
        var sp1 = Memory.spawns.Spawn1;
        var creepName = "";
        if (roleName == "harvester") {
            namecount = sp1.HarverstersCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }

        else if (roleName == "upgrader") {

            namecount = sp1.upgradersCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }
        else if (roleName == "repairer") {

            namecount = sp1.repairsCount;
            creepName = roleName + "_" + namecount;
            return creepName;

        }
        else if (roleName == "builder") {

            namecount = sp1.buildersCount;
            creepName = roleName + "_" + namecount;
            return creepName;

        }

        else if (roleName == "wallRepairer") {

            namecount = sp1.wallRepairersCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }

        else if (roleName == "lorry") {

            namecount = sp1.lorrysCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }
        else if (roleName == "lorry") {

            namecount = sp1.lorrysCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }
        else if (roleName == "miner") {

            namecount = sp1.minerCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }
        else if (roleName == "Test") {

            namecount = sp1.testCreepCount;
            creepName = roleName + "_" + namecount;
            return creepName;
        }
    },

    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    CreateNewScreep: function (SpawnObj, roleName, body) {

        var creepNewName = this.GetRoleName(SpawnObj, roleName);

        var newCreep = new Object;
        // this.debug(1, this.LineNumber(), "creating a " + roleName + "(" + creepNewName + ")", creepNewName);
        newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, home: SpawnObj.room.name, target: SpawnObj.room.name, working: false, gameStartTick: Game.time, respawnOffSet: body.length * CREEP_SPAWN_TIME });
        if (typeof (newCreep) == "string") {
            console.log("successfully created a " + roleName + "(" + creepNewName + ")");
        }
        if (newCreep == - 3) {
            console.log("Name use trying a new name for role: " + roleName);

            var creepCountObj = this.GetCreepCountObj(roleName);
            // creepCountObj = creepCountObj + 1;
            // console.log(creepCountObj);
            // console.log("this.GetCreepCountObj(roleName): " + this.GetCreepCountObj(roleName));
            //this.GetCreepCountObj(roleName) = this.GetCreepCountObj(roleName) + 1;
            //  creepNewName = this.GetRoleName(SpawnObj, roleName);
            newCreep = SpawnObj.createCreep(body, creepNewName, { role: roleName, home: creep.room.name, target: creep.room.name, orginalRole: roleName, working: false, gameStartTick: Game.time, respawnOffset: body.length * CREEP_SPAWN_TIME });
            console.log("creating a " + roleName + "(" + creepNewName + ")");
        }

        return newCreep;

    },

    pickupResources2: function (creep, scanRange, minAmount) {
        //TODO: scan for resources in a limited rangesuch as within 3-5 squares
        droppedEngeryTarget = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);

        status = creep.pickup(droppedEngeryTarget);

        return creep.pickup(droppedEngeryTarget);
    },


    pickupResources: function (creep, range) {
        //TODO: scan for resources in a limited rangesuch as within 3-5 squares
        var droppedEngeryTarget = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);

        if (droppedEngeryTarget != undefined) {
            //        console.log('[' + fileName + 'line:' + this.LineNumber() + '] YYYYYYYYYYYYYYY droppedEngeryTarget is ' + droppedEngeryTarget);
            var status = creep.pickup(droppedEngeryTarget);
        }

        //   //  console.log('[' + fileName + 'line:' + this.LineNumber() + '] xxxxxxxxxxxxxxxxxxxxxx droppedEngeryTarget status ' + status);
        //     if (droppedEngeryTarget !=undefined && status == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(droppedEngeryTarget);
        //     }

        this.pickupResourcesFromTombstone(creep, 3);
        return;
    },

    pickupResourcesFromTombstone: function (creep, range) {
        //TODO: scan for resources in a limited rangesuch as within 3-5 squares
        var droppedEngeryTarget = creep.pos.findInRange(FIND_TOMBSTONES, range);
        //var droppedEngeryTarget = creep.pos.findInRange(FIND_RUINS, range); FIND_RUINS
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + ']  JSON.stringify(droppedEngeryTarget) is: ' + JSON.stringify(droppedEngeryTarget) + '</>');

        if (droppedEngeryTarget.length != 0) {
            // if (droppedEngeryTarget != undefined && creep.carry < creep.carryCapacity) {
            var status = creep.withdraw(droppedEngeryTarget);
            console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] withdraw status from tombstone ' + status + '</>');
            if (status == ERR_NOT_IN_RANGE) {
                creep.moveTo(droppedEngeryTarget);
            }
            //}
        }


        return creep.withdraw(droppedEngeryTarget);
    },

    runCreeps(Creeps) {
        for (let name in Game.creeps) {
            // get the creep object
            var creep = Game.creeps[name];


            // if creep is harvester, call harvester script
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            // if creep is upgrader, call upgrader script
            else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            // if creep is builder, call builder script
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            // if creep is repairer, call repairer script
            else if (creep.memory.role == 'repairer') {
                roleRepairer.run(creep);
            }
            // if creep is wallRepairer, call wallRepairer script
            else if (creep.memory.role == 'wallRepairer') {
                roleWallRepairer.run(creep);
            }
            // if creep is longDistanceHarvester, call longDistanceHarvester script
            else if (creep.memory.role == 'longDistanceHarvester') {
                roleLongDistanceHarvester.run(creep);
            }
            // if creep is claimer, call claimer script
            else if (creep.memory.role == 'claimer') {
                roleClaimer.run(creep);
            }
            // if creep is miner, call miner script
            else if (creep.memory.role == 'miner') {
                roleMiner.run(creep);
            }
            // if creep is lorry, call miner lorry
            else if (creep.memory.role == 'lorry') {
                roleLorry.run(creep);
            }
            else if (creep.memory.role == 'longDistanceBuilder') {
                // console.log("Main [line " + util.LineNumber() + "] running roleLongDistanceBuilder: " + creep.name);
                roleLongDistanceBuilder.run(creep);
            }
            else if (creep.memory.role == 'roleTestCreep') {
                // console.log("[Main line " + util.LineNumber() + "] running TestCreep: " + creep.name);
                roleTestCreep.run(creep);
            }
        }

    },

    link: function (current_link) {
        if (current_link.memory.source_range == null) {
            var nearest_source = current_link.pos.findClosestByRange(FIND_SOURCES);
            current_link.memory.source_range = current_link.pos.getRangeTo(nearest_source);
        } else {
            var target_link = current_link.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LINK &&
                    s.memory.source_range > current_link.memory.source_range
            });
            if (target_link != null) {
                current_link.memory.is_receiver = false;

                //I get the memory is undefined error on the line below
                target_link.memory.is_receiver = true;

                if (current_link.energy == current_link.energyCapacity && current_link.cooldown == 0) {
                    current_link.transferEnergy(target_link, current_link.energyCapacity);
                }
            }
        }
    },


    structuresInRoom: function (spawn, structureType) {

        // var numberOfLongDistanceHarvestersroom1 = _.sum(Game.creeps, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );
        // var numberOfLongDistanceHarvestersroom1 = _.sum(Game.structures, (c) => c.memory.role == 'longDistanceHarvester' && c.memory.target == room1 );

        // var room = Game.spawns.Spawn1.room;
        var room = spawn.room;
        //console.log('[' + fileName + 'line:' + this.LineNumber() + ']  spawn is '  + JSON.stringify(spawn));

        // console.log('[' + fileName + 'line:' + this.LineNumber() + ']  room is '  + room.name);
        var structuresFound = room.find(FIND_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_LINK });
        // console.log('[' + fileName + 'line:' + this.LineNumber() + ']  structuresFound is '  + structuresFound);

        var count = structuresFound.length;
        return count;
    },

    repairRoad: function (creep) {

        try {
            var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y - 1, creep.pos.x - 1, creep.pos.y + 1, creep.pos.x + 1, true);
            //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);

            if (structures == undefined || structures == []) {
                return;
            }

            for (let i = 0; i < structures.length; i++) {
                var road = structures[i].structure;

                if (road.structureType, {
                    filter: s =>
                        s.structureType != STRUCTURE_ROAD
                        || s.structureType != STRUCTURE_CONTAINER
                }) {
                    continue;
                }

                if (road.hits < road.hitsMax) {
                    var repairStatus = creep.repair(road);
                    // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                    break;
                }

            }
        } catch (e) {

            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
        }
    },

    numberWithCommas: function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    pad: function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    },

    stayInTargetRoom: function (creep) {
        if (creep.memory.target != creep.room.name) {
            //    return;
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' For some reason creep is not in target room: ' + creep.memory.target);

            var exit = creep.room.findExitTo(creep.memory.target);
            var status = creep.moveTo(creep.pos.findClosestByRange(exit));

            if (creep.memory.orginalRole != undefined) {
                creep.memory.role = creep.memory.orginalRole;
            }
            else {

                // if (creep.name.includes ("link1")) {
                //     creep.memory.role = "link1Harvester";
                // }
                // if (creep.name.includes ("miner")) {
                //     creep.memory.role = "miner";
                // }

                // creep.memory.role = "harvester";
            }
            //   console.log('[' + fileName + 'line:' + this.LineNumber() + '] !!!!!!!!!!!!!!!!!!!!!! creep.moveTo(exit) is ' + status);
            return 0;
        }
        else {
            return -1;
        }
    },

    runOnlyOnce: function () {
        // place holder
    },

    assignTerminalIdstoRoom: function () {
        // for (let roomName in Game.rooms) {

        //     let room = Game.rooms[roomName];
        //     let structuresInRoom = room.find(FIND_MY_STRUCTURES, );
        //        // var LDHs = controller.room.find(FIND_MY_CREEPS, {filter: s=> s.memory.role == "longDistanceHarvester"});
        //     var terminals = room.find(FIND_MY_STRUCTURES,   {filter: s=> s.structureType == STRUCTURE_TERMINAL});

        //    //var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        //  //   var terminalCount =_.sum(structuresInRoom, (s)=> s.structureType == STRUCTURE_TOWER);
        //     var terminalCount = terminals.length;
        //     var terminal = terminals[0];
        //     if (terminalCount == 1 ) {
        //          // console.log('[' + fileName + 'line:' + util.LineNumber() + '] structuresInRoom is ' + structuresInRoom);
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminalCount is ' + terminalCount);
        //         // console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ spawnName + ', JSON.stringify(terminal) is ' + JSON.stringify(terminals));
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminal.id is ' + terminal.id);//
        //         room.memory.terminalId = terminal.id;
        //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] '+ roomName + ', terminal.id is ' + room.memory.terminalId);//

        //     }
        // }
    },

    say: function (creep, say, ticksToLive) {
        if (ticksToLive != undefined) {
            if (creep.ticksToLive < ticksToLive) {
                creep.say(say + creep.ticksToLive);
            }

        }
        else {

            creep.say(say);
        }

    },


    findFlagByName: function (spawn, flagName) {

        var allFlagsInRoom = spawn.room.find(FIND_FLAGS);

        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] allFlagsInRoom.length is ' + allFlagsInRoom.length + '</>');
        //   console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] flagName is ' + flagName + '</>');
        for (let index = 0; index < allFlagsInRoom.length; index++) {
            const flag = allFlagsInRoom[index];
            if (flag.name.includes(flagName)) {
                //         console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + xxxxxx flag.name is ' + flag.name + '</>');
                //       console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawn.room.name + '] + flag ' + JSON.stringify(flag) + '</>');

                return flag;

            }

        }
        return undefined;
    },

    findNearestLinkToStorage: function (creep, range) {

        var link;
        var roomStorage = creep.room.storage;
        if (roomStorage == undefined) {
            return undefined
        }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomStorage.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link;
    },

    findNearestLinkToSource1: function (spawnOrCreep, range) {
        console.log("calling util.findNearestLinkToSource1: function (spawnOrCreep, range)")
        var link;


        var source1Flag = this.findFlagByName(spawnOrCreep, "Source_" + spawnOrCreep.room.name)
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag + '</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length + '</>');
        if (links.length > 0) {
            link = links[0];
        }
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link + '</>');

        return link;
    },

    findNearestLinkToSource2: function (spawnOrCreep, range) {

        var link;


        var source2Flag = this.findFlagByName(spawnOrCreep, "Source2_" + spawnOrCreep.room.name)


        links = source2Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link;
    },



    buildIt: function (creep, debug = false) {

        if (debug) { console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] debugging BuildIt function</>'); }

        // try {
        var constructionSitesFound = creep.room.lookForAtArea(LOOK_CONSTRUCTION_SITES, creep.pos.y - 3, creep.pos.x - 3, creep.pos.y + 3, creep.pos.x + 3, true);

        if (constructionSitesFound == undefined || constructionSitesFound == [] || constructionSitesFound.length == 0) {
            // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] no construction Sites Found:' + constructionSitesFound +'</>');
            return;
        }



        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);

        //console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] repairContainers  start ' + '' +'</>');

        var workParts = creep.getActiveBodyparts(WORK);
        if (workParts == 0) {
            //console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] no work parts found unable to repair ' + '' +'</>');

            return -1;
        }


        //console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] construction Sites Found: ' + JSON.stringify(constructionSitesFound) +'</>');
        // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] constructionSitesFound.length: ' + constructionSitesFound.length +'</>');

        for (let i = 0; i < constructionSitesFound.length; i++) {

            //                console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            //         if (constructionSitesFound[i].structure.structureType != STRUCTURE_CONTAINER) {
            //  //       if (structures[i].structureType != "container") {

            //       //   console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i]) +'</>');
            //        // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i].structure.structureType) +'</>');


            //             continue;
            //         }

            var constructionSiteToBuild = constructionSitesFound[i].constructionSite;
            //       console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] constructionSiteToBuild: ' + JSON.stringify(constructionSiteToBuild) + '</>');

            var buildStatus = creep.build(constructionSiteToBuild);

            //  console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] buildStatus: ' + buildStatus + '</>');
            //  console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            // if (constructionSiteToBuild.hits < constructionSiteToBuild.hitsMax) {
            //     var repairStatus = creep.build(constructionSiteToBuild);
            //    if (creep.room.name == "E46S1") {
            //   //     console.log('<font color = "blue">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
            //     // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
            //    }

            //     break;
            // }

        }
        // } catch (e) {

        //     console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
        // }
    },

    repairRamparts: function (creep, rampartSize, repairRange = 1, debug = false, debugColor = "yellow") {

        var debugFunctionName = this.getMyName() //.split(".")[1];
        // var debugTest = debugFunctionName.split(".")[1];
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + creep.room.name + '] repairRange is ' + repairRange +'</>');
        // console.log("*******************************************************************************************************************");

        // try {
        var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y - repairRange, creep.pos.x - repairRange, creep.pos.y + repairRange, creep.pos.x + repairRange, true);
        if (debug) { console.log('<font color = "' + debugColor + '">[' + fileName + 'line:' + this.LineNumber() + '] debugging "repairRamparts" function is set to: ' + debug + '</>'); }

        if (debug) {
            console.log('<font color = "' + debugColor + '">[' + fileName + 'line:' + this.LineNumber() + '] debug ' + debugFunctionName + ': structures is' + structures + '</>');
            console.log('<font color = "' + debugColor + '">[' + fileName + 'line:' + this.LineNumber() + '] debug ' + debugFunctionName + ': ' + rampartSize + '</>');
        }

        // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] repairContainers  start ' + '' +'</>');

        var workParts = creep.getActiveBodyparts(WORK);
        if (workParts == 0) {
            console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] WARNING miner has no work parts found unable to repair ' + '' + '</>');

            return -1;
        }

        if (structures == undefined || structures == []) {
            console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] WARNING no structures found in area around creep No repairs to be performed my miner during this tick. structure found:' + structures + '</>');
            return;
        }

        if (debug) {
            console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] debugFunctionName is ' + debugFunctionName + '</>');
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' rampartSize is ' + rampartSize);
            console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures.length is ' + structures.length);
        }


        for (let i = 0; i < structures.length; i++) {

            //    console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            if (structures[i].structure.structureType != STRUCTURE_RAMPART) {
                //       if (structures[i].structureType != "container") {

                //   console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] skipping structure :' + structures[i].structure.structureType +'</>');

                //   console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i]) +'</>');
                // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i].structure.structureType) +'</>');


                continue;
            }

            var structureToBeRepaired = structures[i].structure;

            if (structureToBeRepaired.hits >= rampartSize) {
                if (debug) {
                    console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] skipping structure repair[' + structures[i].structure.structureType + '] it has ' + structures[i].structure.hits + ' hits </>');
                    console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] skipping structure.hits :' + structures[i].structure.hits + '</>');
                }

                continue;
            }
            console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] debug ' + this.getMyName() + ': structureToBeRepaired is ' + structureToBeRepaired + '</>');
            // console.log('<font color = "green">[' + fileName + 'line:' + this.LineNumber() + '] structureToBeRepaired: ' + structureToBeRepaired +'</>');
            //  console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            if (structureToBeRepaired.hits < rampartSize) {
                var repairStatus = creep.repair(structureToBeRepaired);
                //    if (creep.room.name == "E46S1") {
                //        console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
                //     // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                //    }
                return;
                break;
            }

        }
        // } catch (e) {

        //     console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
        // }
    },

    repairContainers: function (creep) {



        // try {
        var structures = creep.room.lookForAtArea(LOOK_STRUCTURES, creep.pos.y - 1, creep.pos.x - 1, creep.pos.y + 1, creep.pos.x + 1, true);
        // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' structures is ' + structures);

        //console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] repairContainers  start ' + '' +'</>');

        var workParts = creep.getActiveBodyparts(WORK);
        if (workParts == 0) {
            //console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] no work parts found unable to repair ' + '' +'</>');

            return -1;
        }

        if (structures == undefined || structures == []) {
            // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] no structures found in area around creep. structures:' + structures +'</>');
            return;
        }



        for (let i = 0; i < structures.length; i++) {

            //                console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            if (structures[i].structure.structureType != STRUCTURE_CONTAINER) {
                //       if (structures[i].structureType != "container") {

                //   console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i]) +'</>');
                // console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i]):' + JSON.stringify(structures[i].structure.structureType) +'</>');


                continue;
            }

            var structureToBeRepaired = structures[i].structure;
            //  console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] structureToBeRepaired' + structureToBeRepaired +'</>');
            //  console.log('<font color = "orange">[' + fileName + 'line:' + this.LineNumber() + '] JSON.stringify(structures[i] to repaired):' + JSON.stringify(structures[i].structure.structureType) +'</>');

            if (structureToBeRepaired.hits < structureToBeRepaired.hitsMax) {
                var repairStatus = creep.repair(structureToBeRepaired);
                if (creep.room.name == "E46S1") {
                    //     console.log('<font color = "blue">[' + fileName + 'line:' + this.LineNumber() + '] repairStatus is ' + repairStatus +'</>');
                    // console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  repairStatus is ' + repairStatus);
                }

                break;
            }

        }
        // } catch (e) {

        //     console.log('[' + fileName + 'line:' + this.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' Trapped error is ' + e);
        // }
    },

    getMyName: function () {
        var e = new Error('dummy');
        var stack = e.stack
            .split('\n')[2]
            // " at functionName ( ..." => "functionName"
            .replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        return stack.split(".")[1];
        // return stack

    },

    statOverlay: function (spawn, x, y, displayColor) {
        var startObj = spawn.memory.startObj
        var startTime = startObj[0];
        var startTick = startObj[1];
        var startProgress = startObj[2];
        //console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 1 startProgress is ' + startProgress +'</>');
        startProgress = startProgress >>> 0;
        // console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] 2 startProgress is ' + startProgress +'</>');

        var currentTime = Date.now();
        var currentTick = Game.time;
        var currentProgress = spawn.room.controller.progress;
        currentProgress = currentProgress >>> 0;
        //  currentProgress = Game.spawns.Spawn1.room.controller.progress;
        //  currentProgress = spawn.room.controller.progress;
        const level8energy = spawn.room.controller.progressTotal; // 10935000;
        //  currentProgress = level8energy - currentProgress



        //    const iProgress = currentProgress - startProgress;
        var iProgress = currentProgress - startProgress; iProgress = iProgress >>> 0;
        var iRemainingProgress = level8energy - currentProgress; iRemainingProgress >>> 0;
        var iTime = currentTime - startTime; iTime = iTime >>> 0;


        const iSeconds = iTime / 1000;
        const iMinutes = iSeconds / 60;
        const iHours = iMinutes / 60;
        const iTicks = currentTick - startTick;
        const remainTicksToCompleteLevel = iRemainingProgress / (iProgress / iTicks)
        const remainingMinutesToCompleteLevel = remainTicksToCompleteLevel / (iTicks / iMinutes)
        var remainingMilsecToCompleteLevel = remainingMinutesToCompleteLevel * 60 * 1000;
        remainingMilsecToCompleteLevel = remainingMilsecToCompleteLevel >>> 0;


        let myOffSet = new Date(3600000 * 7);
        // start time in milliseconds = 1589134000166
        let UTC = new Date();
        let now = new Date() - UTC;

        let myDate = new Date(startTime - myOffSet);
        //  let myDate = new Date (startTime);

        let iDate = new Date(remainingMilsecToCompleteLevel);
        //    let iDate = new Date (iTime);

        let month = iDate.getMonth();
        // let year = myDate.getFullYear();
        let day = iDate.getDate() - 1;
        let hours = iDate.getHours();
        let minutes = iDate.getMinutes();
        let seconds = iDate.getSeconds();


        seconds = formatNumber(seconds);
        minutes = formatNumber(minutes);
        hours = formatNumber(hours);
        day = formatNumber(day);




        // let offSet = myDate.getTimezoneOffset();


        // formatDate =  myDate.toLocaleString();

        //   var iformatDate = month + "." + day + ":" + year + " " + hours + ":" + minutes + ":" + seconds + " (" + offSet + ")";
        var iformatDate = month + "m :" + day + "d :" + hours + "h :" + minutes + "m :" + seconds + "s"; // + seconds +"s"
        var formatDate = myDate.toLocaleString();
        var xnow = Date.now();
        var estCompleteDate = new Date(Date.now() + (remainingMilsecToCompleteLevel - (3600000 * 7)));

        //var iformatDate =  iDate.toLocaleString();


        // var storageRampart = spawn.pos.findClosestByPath(FIND_STRUCTURES, {
        //     filter:
        //     (s) => s.structureType == STRUCTURE_RAMPART && s.pos.isEqualTo(spawn.room.storage)
        // });


        var storageRampart = getRampartAt(spawn.room.storage);
        var terminalRampart = getRampartAt(spawn.room.terminal);

        //iiProgress   iRemainingProgress level8energy currentProgress

        //new RoomVisual(Game.spawns.Spawn1.room.name).text(formatDate,                                                                                       x, y++, { color: 'green', font: 0.8, align: "right"  });
        new RoomVisual(spawn.room.name).text(formatDate, x, y++, { color: displayColor, font: 0.8, align: "right" });
        new RoomVisual(spawn.room.name).text("Energy Per Hour: " + util.numberWithCommas(Math.trunc(iProgress / iHours)), x, y++, { color: displayColor, font: 0.8, align: "right" });
        new RoomVisual(spawn.room.name).text("Energy Per Tick: " + util.numberWithCommas((iProgress / iTicks).toFixed(2)), x, y++, { color: displayColor, font: 0.8, align: "right" });
        new RoomVisual(spawn.room.name).text("Ticks Per Min: " + util.numberWithCommas((iTicks / iMinutes).toFixed(2)), x, y++, { color: displayColor, font: 0.8, align: "right" });
        //  new RoomVisual(spawn.room.name).text("iProgress: "                      + util.numberWithCommas(Math.trunc(iProgress)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
        // new RoomVisual(spawn.room.name).text("iHours: "                         + util.numberWithCommas(Math.trunc(iHours)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
        // new RoomVisual(spawn.room.name).text("Current Progress: "                   + util.numberWithCommas(Math.trunc(level8energy)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });
        // new RoomVisual(spawn.room.name).text("iHours: "                         + util.numberWithCommas(Math.trunc(currentProgress)),                              x, y++, { color: displayColor, font: 0.8, align: "right"  });

        // new RoomVisual(spawn.room.name).text("TicksToCompleteLevel: "           + util.numberWithCommas(Math.trunc(remainTicksToCompleteLevel)),            x, y++, { color: displayColor, font: 0.8, align: "right"  });
        // new RoomVisual(spawn.room.name).text("MinutesToCompleteLevel: "         + util.numberWithCommas(Math.trunc(remainingMinutesToCompleteLevel)),       x, y++, { color: displayColor, font: 0.8, align: "right"  });
        // new RoomVisual(spawn.room.name).text("MilsecToCompleteLevel: "          + util.numberWithCommas(Math.trunc(remainingMilsecToCompleteLevel)),        x, y++, { color: displayColor, font: 0.8, align: "right"  });
        //new RoomVisual(spawn.room.name).text("iRemainingProgress: "             + util.numberWithCommas(Math.trunc(iRemainingProgress)),                    x, y++, { color: displayColor, font: 0.8, align: "right"  });
        //new RoomVisual(spawn.room.name).text(iformatDate                        + " (" + util.numberWithCommas(iRemainingProgress) + ")",                                x, y++, { color: displayColor, font: 0.8, align: "right"  });
        new RoomVisual(spawn.room.name).text(iformatDate + " (" + util.numberWithCommas(remainingMilsecToCompleteLevel) + ")", x, y++, { color: displayColor, font: 0.8, align: "right" });
        new RoomVisual(spawn.room.name).text(estCompleteDate.toLocaleString(), x, y++, { color: displayColor, font: 0.8, align: "right" });
        if (storageRampart != undefined) {
            new RoomVisual(spawn.room.name).text("Storage Rampart: " + util.numberWithCommas((storageRampart.hits).toFixed(2)), x, y++, { color: displayColor, font: 0.8, align: "right" });
        }
        if (terminalRampart != undefined) {
            new RoomVisual(spawn.room.name).text("terminal Rampart: " + util.numberWithCommas((terminalRampart.hits).toFixed(2)), x, y++, { color: displayColor, font: 0.8, align: "right" });
        }
        console.log('<font color = "green">[' + fileName + 'line:' + util.LineNumber() + ']============== The very end   (' + util.numberWithCommas(Game.cpu.bucket) + ') ============== </>');
        console.log();
    },

    findNearestLinkToStorage: function (creep, range) {

        var link;
        var roomStorage = creep.room.storage;
        if (roomStorage == undefined) {
            return undefined
        }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomStorage.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link;
    },

    findNearestLinkToController: function (creepOrSpawn, range) {

        var link;
        var roomController = creepOrSpawn.room.controller;
        if (roomController == undefined) {
            return undefined
        }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = roomController.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link;
    },

    findNearestSpawnToController: function (creepOrSpawn, range) {

        var spawns;
        var spawn;

        var roomController = creepOrSpawn.room.controller;
        if (roomController == undefined) {
            return undefined
        }


        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        spawns = roomController.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_SPAWN)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (spawns.length > 0) {
            spawn = spawns[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return spawn;
    },


    findNearestSpawnToSource1: function (creepOrSpawn, range) {

        var spawns;
        var spawn;
        var source1Flag = this.findFlagByName(creepOrSpawn, "Source_" + creepOrSpawn.room.name)
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + creepOrSpawn.room.name + '] asdfsadfsdsadfsdfasdfsdafsd source1Flag is ' + source1Flag + '</>');
        // var roomController = creepOrSpawn.room.controller;
        // if (roomController == undefined) {
        //     return undefined
        // }


        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        spawns = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_SPAWN)
        });

        console.log('<font color = "red">[' + fileName + 'line:' + this.LineNumber() + '] asdfasdfdsadfssdaf spawns.length is ' + spawns.length + '</>');

        if (spawns.length > 0) {
            spawn = spawns[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] spawn is ' + spawn +'</>');

        return spawn;
    },


    findNearestLinkByFlag: function (spawnOrCreep, flagName, range) {

        var link = undefined;

        var source1Flag = this.findFlagByName(spawnOrCreep, flagName)

        //  var source1Flag = this.findFlagByName(spawnOrCreep,"Source_" + spawnOrCreep.room.name)
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag +'</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link +'</>');

        return link;
    },


    findNearestStructureByFlag: function (spawnOrCreep, structureType, flagName, range) {

        var nearestStructureFound = undefined;

        var source1Flag = this.findFlagByName(spawnOrCreep, flagName)

        //  var source1Flag = this.findFlagByName(spawnOrCreep,"Source_" + spawnOrCreep.room.name)
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag +'</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        var structuresInRange = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == structureType)
        });
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (structuresInRange.length > 0) {
            nearestStructureFound = structuresInRange[0];
        }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link +'</>');

        return nearestStructureFound;
    },


    findNearestStructureByType: function (spawnOrCreep, structureType, range) {

        var nearestStructureFound = undefined;

        // var source1Flag = this.findFlagByName(spawnOrCreep,flagName)

        //  var source1Flag = this.findFlagByName(spawnOrCreep,"Source_" + spawnOrCreep.room.name)
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag +'</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        var structuresInRange = spawnOrCreep.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == structureType)
        });
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (structuresInRange.length > 0) {
            nearestStructureFound = structuresInRange[0];
        }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link +'</>');

        return nearestStructureFound;
    },



    findNearestLinkToSource1: function (spawnOrCreep, range) {

        var link = undefined;


        var source1Flag = this.findFlagByName(spawnOrCreep, "Source_" + spawnOrCreep.room.name)
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag +'</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        links = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link +'</>');

        return link;
    },

    findNearestContainerToSource1: function (spawnOrCreep, range) {

        var container = undefined;
        var containers = undefined;

        var source1Flag = this.findFlagByName(spawnOrCreep, "Source_" + spawnOrCreep.room.name)
        //   console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] room[' + spawnOrCreep.room.name + '] source1Flag is ' + source1Flag +'</>');
        // var roomStorage = creep.room.storage;
        // if (roomStorage == undefined) {
        //     return undefined
        // }

        //    const targets = creep.pos.findInRange(FIND_STRUCTURES, range);
        //     console.log('<font color = "yellow">[' + fileName + 'line:' + util.LineNumber() + '] room[' + creep.room.name + '] targets is ' + targets +'</>');
        containers = source1Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_CONTAINER)
        });
        //  console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');

        //     var sortedContainers = _.sortBy(containers,s=>s.store[RESOURCE_ENERGY]);
        var sortedContainers = _.sortByOrder(containers, s => s.store[RESOURCE_ENERGY], 'desc');

        if (sortedContainers.length > 0) {
            container = sortedContainers[0];
        }
        //    console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storage is ' + link +'</>');

        return container;
    },

    findNearestLinkToSource2: function (spawnOrCreep, range) {

        var link;


        var source2Flag = this.findFlagByName(spawnOrCreep, "Source2_" + spawnOrCreep.room.name)


        links = source2Flag.pos.findInRange(FIND_STRUCTURES, range, {
            filter: s => (s.structureType == STRUCTURE_LINK)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (links.length > 0) {
            link = links[0];
        }
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] storagre is ' + link +'</>');

        return link;
    },


    findStructureAtFlag: function (spawnOrCreep, flagName, _strutureType) {

        //   var hackLab = Game.getObjectById("6065a99007bf761524f126ec");
        //   return hackLab;
        var link;


        //  var structureAtFlag = this.findStrucureAtFlag(spawnOrCreep, flagName, strutureType, range )

        var _flag = Game.flags[flagName];
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] _flag' + _flag + ' </>');

        var foundStructure = undefined;
        structuresFound = _flag.pos.findInRange(FIND_MY_STRUCTURES, 0, {
            filter: s => (s.structureType == _strutureType)
        });
        // console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] links.length is ' + links.length +'</>');
        if (structuresFound.length > 0) {
            foundStructure = structuresFound[0];
        }
        console.log('<font color = "yellow">[' + fileName + 'line:' + this.LineNumber() + '] foundStructure is ' + foundStructure + '</>');

        return foundStructure;
    },


    insideParameter: function (point, vs) {
        // ray-casting algorithm based on
        // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

        var x = point[0], y = point[1];

        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }

}



