const sumAll = function(num1, num2) {
    if (
        (num1 < 0 || num2 < 0) ||
        (!Number.isInteger(num1) || !Number.isInteger(num2))
    ) {
        return 'ERROR';
    }

    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let sum = 0;
    for (let index = num1; index <= num2; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
