function Remainder(a,b=1) {
    if(typeof a === "number" && typeof b === "number"){
        return a%b;
    }else {
        return NaN;
    }
}