// One of the simplest ways you can begin to organize your code is by grouping things into objects.
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMaker = "X";
const playerTwoMaker = "O";

// EXAMPLE ONE
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function printName(player){
    console.log(player.name);
}