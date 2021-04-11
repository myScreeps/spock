

var util = require('Util'); 
var fileName = "TestCode        ";



module.exports = {
    // a function to run the logic for this role
    run: function (creep) {

        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXtesting 123 ');

        
      var target = "E45S3";
      var room = Game.rooms[target];
      var controller = room.find(FIND_STRUCTURES,{filter: (s) =>  s.structureType == STRUCTURE_CONTROLLER})
      console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' controller is ' + JSON.stringify(controller[0].reservation.ticksToEnd));
      
      if (controller[0].reservation != undefined) 
      {
        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' controller is ' + controller);
        var  tte = controller[0].reservation.ticksToEnd; 
        console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + ' controller.reservation.ticksToEnd is ' + tte + " atest");
     
      // var ttl = controller[0].ticksToLive
     //   var tte = controller.reservation.ticksToEnd;

     // console.log('[' + fileName + 'line:' + util.LineNumber() + '] ' + creep.room.name + ' ' + creep.name + '  controller.reservation.ticksToEnd is ' + tte );
      }
    }
}