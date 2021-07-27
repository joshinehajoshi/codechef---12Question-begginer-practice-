function LuckyFour(num) {
    count = 0;
    if(typeof num === "number"){
        while(num){
            if(num%10 === 4){
                count +=1;
            }
        num = Math.floor(num/10);
        }
    return count;
    }else {
        return NaN;
    }
}