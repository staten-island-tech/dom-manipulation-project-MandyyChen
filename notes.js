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
/* const numsArray = [
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

linearSearch(11, numsArray); */
// searches through something until it finds the wanted value
// takes a long time (thinking going through every student to find Mandy)








// Practice Problem One //
/* let spaces = "7"
let day1 = "CCCCCCC"
let day2 = "C.C.C.C"

function findParking (spaces){
    let a = 0
    for(i=0; i < spaces ; i++){
        if(day1[a] === "C" && day2[a] === "C"){
            a++
            console.log(a)
        }
    }
}

findParking(); */
let num = 6
let n1 = 0
let n2 = 1
let sum =""

function fibonacci (num){

    for(i=2; i < num; i++){
    sum = n1 + n2
    n1 = n2
    n2 = sum
    }
    console.log(sum);
}
fibonacci(num)