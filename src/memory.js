var util = require('Util'); 
var fileName = "memory";

module.exports = {
    // a function to run the logic for this role
    init: function (spawnObj) {
    
    Game.spawns['Spawn1'].memory.foo = test    
    
    if (spawnObj.memory == undefined)
    {
        spawnObj.memory = new Object();
    }


    if (spawnObj.memory.init == true)
    {
        return;
    }
    
    spawnObj.memory.init = true;

    spawnObj.memory.minHarvesters	= 3;
    spawnObj.memory.minUpgraders = 1;
    spawnObj.memory.minBuilders = 1;
    spawnObj.memory.minLorries = 0;
    spawnObj.memory.minWallRepairers = 0;
    spawnObj.memory.minRepairers = 0;
    


    
    spawnObj.memory.debug	= false;
    spawnObj.memory.debuglevel = 1;
    spawnObj.memory.E44S3 = 0;
    
    spawnObj.memory.count = 0;
    spawnObj.memory.HarverstersCount = 0;
    spawnObj.memory.upgradersCount = 0;
    spawnObj.memory.repairsCount = 0;
    spawnObj.memory.buildersCount	=	0;
    spawnObj.memory.wallRepairsCount = 0;
    spawnObj.memory.minerCount = 0;
    spawnObj.memory.lorrysCount =	0;
    spawnObj.memory.wallRepairersCount = 0;
    spawnObj.memory.minLongDistanceBuildersE44S2 = 0;
    spawnObj.memory.testCreepCount = 0;
    spawnObj.memory.minLDE43S3 = 0;
    spawnObj.memory.foo = "test";
    spawnObj.memory.creepCount = 0;
   
    spawnObj.memory.home = "";   
    spawnObj.memory.room1 = "";
    spawnObj.memory.room2 = "";
    spawnObj.memory.room3 = "";
    
 
    
        
    // Game.spawns.Spawn1.memory.minLDHroom1 = 0;
    // Game.spawns.Spawn1.memory.minLDHroom2 = 0;
    // Game.spawns.Spawn1.memory.minLDHroom3 = 0;


    // Game.spawns.Spawn2.memory.home = ""
    // Game.spawns.Spawn2.memory.room1 = ""
    // Game.spawns.Spawn2.memory.room2 = ""
    // Game.spawns.Spawn2.memory.room3 = ""

    Game.creeps.LDH_10098030.memory.sourceTarget = "5d54123bbbfeab73fabe5c65";
    Game.creeps.LDH_10098030.memory.buildTarget = "5d6a2e444a1ceb4af6ec201e";
    Game.creeps.LDH_10098030.memory.role = "LDBuilder";
    
    //  buildTarget	:	5d6a2e444a1ceb4af6ec201e
    
    // Game.spawns.Spawn2.memory.minLDHroom1 = 0
    // Game.spawns.Spawn2.memory.minLDHroom2 = 0
    // Game.spawns.Spawn2.memory.minLDHroom3 = 0
   
   Game.spawns.Spawn1.home = E44S3
   Game.spawns.Spawn1.target = E44S3
   Game.spawns.Spawn1.role = builder 
   console.log('[' + fileName + 'line:' + util.LineNumber() + '] spawnObj.memory.home  is ' + spawnObj.memory.home);
    }
}