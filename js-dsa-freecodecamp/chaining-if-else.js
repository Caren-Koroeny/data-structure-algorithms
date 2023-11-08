function testSize(num) {
    if(num < 5){
      return "Tiny"
    } else if(num < 10){
      return "Small"
    } else if (num < 15){
      return "Medium"
    } else if (num < 20){
      return "Large"
    } else if(num >= 20){
      return "Huge"
    } else
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);