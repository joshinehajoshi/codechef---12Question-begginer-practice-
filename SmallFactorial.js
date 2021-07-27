function Factorial(num) {
    if(typeof num === "number"){
        let prod = 1;
        while(num){
            prod *= num;
            num = num-1;
        }
        return prod;
    }else {
        return NaN;
    }

}