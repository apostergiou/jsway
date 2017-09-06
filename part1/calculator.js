const calculate = (param1, operator, param2) =>  {
    let result = 0;
    switch (operator) {
        case  "+":
            result = param1 + param2;
            break;
        case "-":
            result = param1 - param2;
            break;
        case "*":
            result = param1 * param2;
            break;
        case "/":
            result = param1 / param2;
            break;
    }

    return result;
};

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
