function testElse(val){
    let result = "";

    if (val > 5){
        result = "Bigger than 5";
    } else {
        result = "5 or smaller"
    }
    return result;
}

testElse(4);