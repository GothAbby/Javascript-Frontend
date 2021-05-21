function ConvertFahrToCelsius(fahrenheit){
    if (typeof fahrenheit == 'number'){
        let answer;
    let result = "";
    result = (fahrenheit-32) * 5/9;
    answer = result.toFixed(4);
    return answer;
   }  
   
   else if (typeof fahrenheit == 'string'){
       var fahrenheitNumber = Number(fahrenheit);
}
ConvertFahrToCelsius("0");
ConvertFahrToCelsius(0);
