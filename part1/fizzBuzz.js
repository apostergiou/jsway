for (let l = 0; l <= 100; l++) {
    if (l % 3 === 0 && l % 5 ===0) {
        console.log("FizzBuzz");
    }
    else if (l % 3 === 0) {
        console.log("Fizz");
    }
    else if (l % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(l);
    }
}
