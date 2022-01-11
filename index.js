// code your solution here
const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(symbol) {
    const wrap = function (word = 'special') {
        return `You are ${symbol}${word}${symbol}!`;
    };
    return wrap;
}