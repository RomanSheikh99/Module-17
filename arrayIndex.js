// Array index

var myArray = [1, 2, 3, 4, 5, 6, 7];// 0 theke index number count kora soro hoi


// array output using index number

var myFriend = ["amin", "shubon", "duha", "milon", "tuhin"];
console.log(myFriend[2]);
console.log(myFriend[1]);
console.log(myFriend[0]);

// jodi output dekhar jonno deoya index number er soman value array te na theke tahole undifine dekhabe..............  

console.log(myFriend[6]);


// indexOf use kore kono value er index number jana jay ....

console.log(myFriend.indexOf("milon"));
console.log(myFriend.indexOf("shubon"));

// zodi value ti array te na theke tahole -1 dekhabe.........

console.log(myFriend.indexOf("rimi"));

// abar index number use kore array er value change kora jay

console.log(myFriend);
myFriend[4]= "nahid";
console.log(myFriend);

// abar ekoi vabe array er modde notun value add kora jay 
myFriend[5]= "emam";
myFriend[6]= "prapthy";
console.log(myFriend);