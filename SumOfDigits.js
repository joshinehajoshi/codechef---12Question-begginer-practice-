function  SumOfDigits(a) {
    let count = 0;
    if(typeof a === "number"){
        while(a) {
       count += a%10;
       a = Math.floor(a/10); 
        }
        return count;
    }else{
        return NaN;
    }
}