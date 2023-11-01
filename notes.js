/* for(let i = 0; i <= 7; i++){
    console.log(i);
    for (let j = 0; j < 5; j++){
        console.log(j);
    }
}
//for loop is a function accepting three inputs (value, if, increment)
// i++ means return the value of i + one
//used more frequently in js 
let i = 10;
while(i<3){
    console.log(i);
    i++;
}

let money = 100;
while(money>0){
    console.log(money);
    money--;
} */
const numsArray = [
    1,2,3,4,5,6,7,8,9,10,
];

function linearSearch(num, arr){
    let found = null;
    for(i=0; i < arr.length; i++){
        if(arr[i] === num){
            found = arr[i];
            break;
        } else{
            console.log("still looking");
        }
    }
if (found === null) {
    console.log("Sorry couldn't find that")
} else {
    console.log(found);
    return found;
    }
}

linearSearch(11, numsArray);
// searches through something until it finds the wanted value
// takes a long time (thinking going through every student to find Mandy)

let dayOne =
}
let dayTwo =

function findParking (occupied, dayOne){
    for(i=0; i < dayOne ; i++){
        if(arr[i] === "C"){
            
        }
    }
}