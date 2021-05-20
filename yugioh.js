function checkYuGiOh(number){
    for(var n=0; n<number; n++) 
    { if(n % 2 === 0 && n % 3 === 0 && n % 5 === 0){console.log("YuGiOh");
} 
    else if (n % 2 === 0){console.log("yu");
}
else if (n % 3 === 0){console.log("gi");
}
else if (n % 5 === 0){console.log("oh");
}
else if (n==="fizzbuzz is meh"){console.log("fizzbuzz is meh:invalid parameter");
}
else{ console.log("value of n is" + n);}
}
}

 checkYuGiOh(10);
 checkYuGiOh(5);
 checkYuGiOh("fizzbuzz is meh");