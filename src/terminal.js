//terminal.js
var util = require('Util'); 
var fileName = "terminal.js   ";
// 5d44be6bea104379d906cbaf
module.exports = {

    // var util = require('Util'); 
    // var fileName = "Upgrader    ";
    // var fileName = "Prototype   ";
    
    // module.exports = function () {
    //     // create a new function for StructureSpawn
    //     StructureSpawn.prototype.createCustomCreep =
    //         function(energy, roleName) {
    

    // transferEnergy: function(current_link){
    //     if(current_link.source_range == null || current_link.source_range == undefined){
    //        console.log('[' + fileName + 'line:' + util.LineNumber() + '] current_link.source_range is  '  + current_link.source_range);
    //         var nearest_source = current_link.pos.findClosestByRange(FIND_SOURCES);

    //         current_link.source_range = current_link.pos.getRangeTo(nearest_source);
    //         console.log('[' + fileName + 'line:' + util.LineNumber() + '] current_link.source_range is  '  + current_link.source_range);
    //     }else{
    //         var target_link = current_link.room.find(FIND_STRUCTURES, {
    //             filter : (s) => s.structureType == STRUCTURE_LINK && 
    //                             s.memory.source_range > current_link.source_range
    //             });
    //         if(target_link != null){ 
    //             current_link.is_receiver = false;
				
	// 			//I get the memory is undefined error on the line below
    //             target_link.is_receiver = true;
                
	// 			if(current_link.energy == current_link.energyCapacity && current_link.cooldown == 0){
    //                var status = current_link.transferEnergy(target_link, current_link.energyCapacity);
    //                console.log('[' + fileName + 'line:' + util.LineNumber() + ']  transferEnergy status is ' + status);
    //             }
    //         }
    //     }       
    // }


        throttledTransfer: function(sourceRoom,destinationRoom,transferQuantity = 100,minSource = 1000,minDestination = 1000, debug = false)
        {
            if (sourceRoom == undefined || destinationRoom == undefined) {
                return -1;
            }
        
            var  destinationTerminal = Game.rooms[destinationRoom].terminal;
            var  sourceTerminal = Game.rooms[sourceRoom].terminal;

                
             //   const total = _.sum(Game.rooms['W1N1'].terminal.store);
                const sourceTerminalEnergy = _.sum(sourceTerminal.store);
                const destinationTerminalEnergy = _.sum(destinationTerminal.store);
               
                if (debug == true)  {
                    console.log('[' + fileName + 'line:' + util.LineNumber() + '] destinationTerminalEnergy is ' + destinationTerminalEnergy + ", minDestination is " + minDestination);     
                }

                if (destinationTerminalEnergy < minDestination && sourceTerminal > minSource) {
                  return  this.transferEnergy(sourceRoom,destinationRoom,transferQuantity);     
                }
        },


        transferEnergy: function(sourceRoom, destinationRoom, quantity){
        //   var  terminalSource = Game.getObjectById(sourceID);
        //   var  terminalDestination = Game.getObjectById(destinationID);


        var  terminalSource = Game.rooms[sourceRoom].terminal;
     //   var  terminalDestination = Game.rooms[destinationRoom].terminal;
         // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  linkSource.cooldown  is '+ linkSource.cooldown );
  //       if(linkSource.energy >= 400 && linkSource.cooldown == 0){
        
         if(terminalSource.cooldown == 0){
                var status = terminalSource.send(RESOURCE_ENERGY, quantity, destinationRoom,'trade contract #1');
                return status;
                if(Game.time % 10 == 0){
              //      console.log('[' + fileName + 'line:' + util.LineNumber() + ']  transferEnergy status is ' + status);
                }
            }
    }
}