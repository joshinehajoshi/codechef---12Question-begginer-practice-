function Atm(withdraw, amount){
    if(withdraw%5 === 0){
        if(amount>withdraw){
            return amount-withdraw-0.50;
        }else {
            return amount;
        }
    }else {
        return amount;
    }
}