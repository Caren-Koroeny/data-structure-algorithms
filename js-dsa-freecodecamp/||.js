function testLogicOr(val){
    if (val > 20 || val < 10){
        return "Outside";
    }
    return "Inside";
}

testLogicOr(15)