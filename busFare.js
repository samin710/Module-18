// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

let person = "students";

if(person<10){
    console.log("Free");
}
else if(person == "students"){
    console.log("Fare: "+ 800*.5 );
}
else if(person >= 60){
    console.log("Fare: " + (800 - (800 * 0.15)));
}
else{
    console.log("Fare: " + 800);
}