let cnJokes = [
    "Time waits for no man. Unless that man is Chuck Norris.",
    "If you spell Chuck Norris in Scrabble, you win. Forever.",
    "Chuck Norris breathes air ... five times a day.",
    "When God said, “Let there be light!” Chuck Norris said, “Say Please.”",
    "Chuck Norris' tears cure cancer. Too bad he has never cried."
];

function longestStringOfArray (myArr) {
    let maxLenth = 0;
    let longest = 0;
    for(let i = 0; i < myArr.length; i++) {
        
        if(maxLenth < myArr[i].length) {
            maxLenth = myArr[i].length;
            longest = i;
        }
    }
    return myArr[longest];
}

console.log(longestStringOfArray(cnJokes));