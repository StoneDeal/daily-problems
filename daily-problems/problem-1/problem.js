/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17
*/
//Set variables.
var list = [10, 4, 5, 7];
var k = 17;
var trueCounter = 0;

//Loop through list.
for(i=0; i<list.length; i++){
    for(j=0; j<list.length; j++){ //Loop through for second number.
        if (i==j){ 
            break; //Make sure you are not adding the same list index to itself.
        }
        else{
            var a = list[i] + list[j] //Add numbers together.
            if (a == k){
                console.log("true");
                trueCounter++; //If numbers equal k, log 'true' and adjust counter.
            }
        }
        
    }
}
if (trueCounter == 0){
    console.log("false"); //Return 'false' if trueCounter has not been adjusted.
}
