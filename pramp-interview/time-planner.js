function meetingPlanner(slotsA, slotsB, dur) {
    // your code goes here
    
    let pointerA = 0;
    
    let pointerB = 0;
    
    const slotALength = slotsA.length;
    
    const slotBLength = slotsB.length;
    
    // iterate over both pointers
    while (pointerA < slotALength && pointerB < slotBLength ){
  
  
      //try to find a match with the max start
      const maxStart = Math.max(slotsA[pointerA][0], slotsB[pointerB][0]);
      // find the min possible end
      const minEnd = Math.min(slotsA[pointerA][1], slotsB[pointerB][1]) ;
      
      // check if there is a duration fit
      if ( minEnd -  maxStart >= dur){
        return [maxStart,maxStart+dur];
      }
      
      //SA [10, 50], [60, 120]
      
      //SB [0, 15], [60, 70]
      
      //pA = 0, pB = 0
      
      // always move the pointer where the end value has seen the least (smallest ) amount
      if ( slotsA[pointerA][1] <= slotsB[pointerB][1]){
        pointerA += 1;
      }
      else{
        pointerB += 1;
      }
    }
  
    // return empty array
    return new Array();
  }