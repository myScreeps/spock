var util = require('Util'); 
var fileName = "link.js   ";
// 5d44be6bea104379d906cbaf
module.exports = {

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


        transferEnergy: function(sourceID, destinationID){
          var  linkSource = Game.getObjectById(sourceID);
          var  linkDestination = Game.getObjectById(destinationID);
         // console.log('[' + fileName + 'line:' + util.LineNumber() + ']  linkSource.cooldown  is '+ linkSource.cooldown );
  //       if(linkSource.energy >= 400 && linkSource.cooldown == 0){
        

            if (linkSource.cooldown  > 0) {
                
                return - 11;
            }

         if(linkSource.cooldown == 0){
                var transferUnits = 200;
                if (transferUnits < linkSource.energy) {
                    transferUnits = linkSource.energy;
                }
                
        

                var status = linkSource.transferEnergy(linkDestination, transferUnits);
                if (status == -8) {
                    transferUnits = linkSource.energy - linkDestination;
                    status = linkSource.transferEnergy(linkDestination, transferUnits+25);
                }
                return status;
     
            }

            return -1;
    }
}