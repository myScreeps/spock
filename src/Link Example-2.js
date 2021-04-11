

//test

link(current_link){
        if(current_link.memory.source_range == null){
            var nearest_source = current_link.pos.findClosestByRange(FIND_SOURCES);
            current_link.memory.source_range = current_link.pos.getRangeTo(nearest_source);
        }else{
            var target_link = current_link.room.find(FIND_STRUCTURES, {
                filter : (s) => s.structureType == STRUCTURE_LINK && 
                                s.memory.source_range > current_link.memory.source_range
                });
            if(target_link != null){ 
                current_link.memory.is_receiver = false;
				
				//I get the memory is undefined error on the line below
                target_link.memory.is_receiver = true;
                
				if(current_link.energy == current_link.energyCapacity && current_link.cooldown == 0){
                    current_link.transferEnergy(target_link, current_link.energyCapacity);
                }
            }
        }       
    }