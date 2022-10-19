let prime= 0;
    for(var x = 1; x <= num; x++){
        if(num % x === 1){
            prime+2;
        }
    }if(prime===2){
        console.log("Yes");
    }else{
         console.log("No");
    }