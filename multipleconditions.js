// multiple conditions 

var haveJob = true;
var yearlySave = 50000;
var haveFlat = true;
var haveCar = false;

// and && operator

if(haveJob == true && yearlySave > 100000){
    console.log("Bolbo kotha basorGore");
}
else{
    console.log("dure jaiya mor");
}

// Or || operator

if(haveCar == true || haveFlat == true){
    console.log("tumakei to ami khujsi");
}
else{
    console.log("tumar gari bari kisoi nai ami jabo na tumar sathe");
}