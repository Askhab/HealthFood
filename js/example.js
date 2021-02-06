const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log("basic", "random", "operator", "usage");

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ненадежный вариант
    console.log(number * basis);
}

calcOrDouble(3);