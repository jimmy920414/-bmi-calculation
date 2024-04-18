function bmi(){
    let height = document.querySelector('.inputHeight').value;
    height = Number(height);
    height /= 100;
    console.log(height*height);

    let weight = document.querySelector('.inputWeight').value;
    weight = Number(weight);

    let bmi = weight / (height*height);
    bmi = Math.round(bmi * 10 ) / 10;
    document.querySelector('.convertHeight').innerHTML = `
        BMI: ${bmi}`

        var str ="";
        if(bmi<18.5){
            str=bmi+'體重過輕';
        }
        else if(bmi< 24){
            str=bmi+'體重正常';
        }
        else if($bmi < 27){
            str=bmi+'體重過重';
        }
        else{
            str=bmi+'肥胖';
        }
    document.querySelector('.convertHeight').innerHTML = str;
    
           
}
