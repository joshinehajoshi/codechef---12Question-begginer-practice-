function Reverse(a) {
    let result = [];
    if (typeof a === "number") {
       return parseFloat(a
        .toString()
        .split('')
        .reverse()
        .join(''))
    }else {
        return NaN;
    }
}