

var util = require('Util'); 
var fileName = "Test        ";

 ///creep.carry.energy == creep.carryCapacity

module.exports = {
    // a function to run the logic for this role
    run: function (creep,sourceStorageId, targetStorageId) {

      // var
      // var room = Game.rooms[target];
      // var controller = room.find(FIND_STRUCTURES,{filter: (s) =>  s.structureType == STRUCTURE_CONTROLLER })
      // var ttl = controller.ticksToLive

      return;
    

        // }

       // console.log('Test ' + util.LineNumber() + '] ' +  creep.name + 'creep.carry.energy == creep.carryCapacity IS' + creep.carry.energy == creep.carryCapacity);

        // myTestPos = new RoomPosition(28, 33, 'E44S2');
        
        
     //   var engergySource_E45S2S = Game.getObjectById("5bbcafa89099fc012e63af8f") //ENERGY SOURCE in room E45S2
    //    var engergySource_E45S2S = Game.getObjectById("5bbcafa89099fc012e63af8f") //ENERGY SOURCE in room E45S2
    //    var roomcontroller_E44S2 = Game.getObjectById("5bbcaf979099fc012e63ad56"); //room controller for E44S2

      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' engergySource_E45S2S ' + engergySource_E45S2S);
      //  console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' +  creep.name + ' roomcontroller_E44S2 ' + roomcontroller_E44S2);

        //creep.harvest(engergySource_E45S2S);
       
        // set home room
       if(creep.memory.home == undefined){
        creep.memory.home = creep.room.name;
       }
       
       if (creep.memory.sourceStorageId == undefined) {
        creep.memory.sourceStorageId = sourceStorageId;
       }

       if (creep.memory.targetStorageID == undefined) {
        creep.memory.targetStorageId = targetStorageId;
       }


       // get storeage objects
       var sourceStorageObj = Game.getObjectById(sourceStorageId);
       var targetStorageObj = Game.getObjectById(targetStorageId);


        if (creep.carry.energy == 0 )
       {

            if(creep.withdraw(sourceStorageObj, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sourceStorageObj);
            }

        }
        

        if (creep.carry.energy != 0) {
          if(creep.transfer(targetStorageObj, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targetStorageObj);
        }
      }
          // goto storage source
          // transfer engery
          // exit room
          // goto store in target room
          // transfer storage
          // exit room
          // repeat


        //    var path = creep.pos.findClosestByPath(engergySource_E45S2S);
        //     myTestPos = new RoomPosition(27, 24, 'E45S2');
        //     //console.log("[" + fileName + "Line " + util.LineNumber() + "]  " + creep.name + ' path:' + path);
        //     //var status = creep.moveTo(engergySource_E45S2S.pos); 
        //     var status = creep.moveTo(myTestPos); 
            
        //  //   console.log("[" + fileName + "Line " + util.LineNumber() + "]  " +  creep.name + ' status: ' + status);
           
       }
      }
//        creep.harvest(engergySource_E45S2S);
       
       
       
//        // myTestPos = new RoomPosition(27, 24, 'E45S2');
//         if (creep.carry.energy == creep.carryCapacity)
//         {
           
//             var status = creep.moveTo(roomcontroller_E44S2.pos);
            
//         }
//           var roomcontroller = Game.getObjectById("5bbcaf979099fc012e63ad56");  //room controller fpr E44S2
//           creep.upgradeController(roomcontroller);  







//     }
// }