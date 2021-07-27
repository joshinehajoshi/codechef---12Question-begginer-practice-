function FirstLastDigit(a){
    let arr = []
    let count = 0;
    let sum = a%10; 
    if(typeof a === "number"){
        while(a){
            count += a%10
            a = Math.floor(a/10);
            arr.push(a);
        }
        console.log(arr)
        sum += arr[arr.length-2]; 
        return sum
    }else {
        return NaN;
    }
}
