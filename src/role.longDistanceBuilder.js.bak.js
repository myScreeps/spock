var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var util = require('Util'); 

module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        console.log("roleLDBuilder [line " + util.LineNumber() + "] name: " + creep.name + "    LD Builder creep.room.name: " + creep.room.name);
        console.log("roleLDBuilder [line " + util.LineNumber() + "] name: " + creep.name + '  LD Builder creep.memory.home: ' + creep.memory.home);
        
        if (creep.carry.energy < creep.carryCapacity)
        {
            console.log("roleLDBuilder [line " + util.LineNumber() + "] " + creep.name + " energy is low " + creep.carry.energy);
            if (creep.room.name == creep.memory.home) {
                var exit = creep.room.findExitTo('E45S2');
                // and move to exit
                console.log("roleLDBuilder [line " + util.LineNumber() + "] " + creep.name + " is looking for exit: " + exit);
    
              // var status = creep.moveTo(creep.pos.findClosestByRange(exit));
              var myFlag = Game.flags.Flag1;
               var status = creep.moveTo(myFlag);
                console.log("roleLDBuilder [line " + util.LineNumber() + "]  Game.flags.Flag1: " + Game.flags.Flag1);
                console.log("roleLDBuilder [line " + util.LineNumber() + "]  MoveTo status: " + status);
    
            }
        }



    //     //console.log("roleLDBuilder [line " + util.LineNumber() + "] name: " + creep.name + "    LD Builder creep.room.name: " + creep.room.name);
    //     // console.log("roleLDBuilder [line " + util.LineNumber() + "] name: " + creep.name + '  LD Builder creep.memory.home: ' + creep.memory.home);
    //     if (creep.room.name == creep.memory.home) {
    //         var exit = creep.room.findExitTo('E44S2');
    //         // and move to exit
    //         console.log("roleLDBuilder [line " + util.LineNumber() + "] " + creep.name + " is looking for exit: " + exit);

    //        var status = creep.moveTo(creep.pos.findClosestByRange(exit));
    //         console.log("roleLDBuilder [line " + util.LineNumber() + "]  MoveTo status: " + status);
            


    //     }

    //     // var pickupresult = creep.pickup(creep.pos);

    //     // const targets = creep.room.find(FIND_DROPPED_RESOURCES);
    //     // console.log ("LDH targets: " + targets);
    //      console.log('Start of LDB');

    //     // if creep is bringing energy to a structure but has no energy left
    //     if (creep.memory.working == true && creep.carry.energy == 0) {
    //         // switch state
    //         console.log('setting creep.memory.working = false');
    //         creep.memory.working = false;
    //     }
    //     // if creep is harvesting energy but is full
    //     else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
    //         // switch state
    //         console.log('setting creep.memory.working = true;');
    //         creep.memory.working = true;
    //     }

    //     console.log("roleLDBuilder [line " + util.LineNumber() + "] creep.memory.working is " + creep.memory.working);
    //     if (creep.memory.working == true) {

    //         console.log('creep.memory.working == true');
    //         ///roleHarvester.run(creep);
    //         // find closest constructionSite
    //         var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    //         // if one is found
    //         if (constructionSite != undefined) {
    //             // try to build, if the constructionSite is not in range
    //             if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
    //                 // move towards the constructionSite
    //                 creep.moveTo(constructionSite);
    //                 console.log("roleLDBuilder [line " + util.LineNumber() + "]creep.moveTo(" +  constructionSite + ")");

    //             }
    //         }
    //         // if no constructionSite is found
    //         else {
    //             // find exit to home room
    //             console.log('Switching roleRepairer.run(' + creep.name + ');');
    //             //roleUpgrader.run(creep);
    //             roleRepairer.run(creep);

    //             // var exit = creep.room.findExitTo('W2N1');
    //             // console.log('exit' + exit);

    //             // and move to exit
    //             //creep.moveTo(creep.pos.findClosestByRange(exit));
    //         }
    //     }
    //     // if creep is supposed to harvest energy from source
    //     else {
    //         // find closest source
    //         //var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    //         var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];
    //         // try to harvest energy, if the source is not in range
    //         console.log("roleLDBuilder [line " + util.LineNumber() + "] " + creep.name + " findClosestByPath(" + FIND_SOURCES_ACTIVE + ") = " + source);

    //         if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
    //             // move towards the source
    //             var status = creep.moveTo(source);
    //             console.log("creep.moveTo(" + source + ") status: " + status);

    //         }
    //     }
    }
};