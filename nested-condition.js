// Multi stage condition.

// just see the output by incres or decres the myBudget value

var myBudget = 15;
var pizza = 55;
var burger = 45;
var muglay = 40;
var fuska = 30;
var fuskaWithtok = true;

if(myBudget > pizza){
    console.log("ami pizza khamo");
}
else if(myBudget > burger){
    console.log("ami burger khamo");
}
else if(myBudget > muglay){
    console.log("ami muglay khamo");
}
else if(myBudget > fuska){
    if(fuskaWithtok == true){  // nested condition
        console.log("ami fuska khamo");
    }
}
else{
    console.log("ami kisoi khaite parlam na ");
}