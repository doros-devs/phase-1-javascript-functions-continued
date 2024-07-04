// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun();
saturdayFun("play soccer");

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork();
mondayWork("be studying");

function wrapAdjective(symbol = "*"){
    return function (character = "special") {
        return `You are ${symbol}${character}${symbol}!`
    }
    
}

console.log(wrapAdjective("%")("a dedicated programmer"));