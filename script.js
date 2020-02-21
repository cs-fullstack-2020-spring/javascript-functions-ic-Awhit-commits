//Exercise 1

// let answer;
// let sum1;
// let sum2;
// let total;

// function sum(number1,number2) {
//     let results = number1 + number2;
//     return results;
// }

// sum1 = parseInt(prompt("What is your first number?"));
// sum2 = parseInt(prompt("What is your second number?"));

//  answer = sum(sum1,sum2);
// total = `The sum of ${sum1} and ${sum2} is ${answer}`;
// console.log(total);

// //Exercsie 2
// let nameList = [];

// nameList = ["Autmn", "Kevin", "Kenn"];
// function name(nameList){
//     for (let index = 0; index < nameList.length; index++) {
//         const element = nameList[index];
//         console.log(element);
        
//     }

// }
// name(nameList)

//Exercise 3 
let userInput;
userInput = prompt("Please enter a name");

function askUser(newInput){
    
    if ((newInput == "q") || (newInput == "Q")){
        alert("Goodbye!!!")
    }
    else if(newInput == "Kevin"){
        coolDude();
        newInput = prompt("Please enter a name");
        askUser(newInput);

    }

    else{
        newInput = prompt("Plese enter a name");
        askUser(newInput);

    }

    
}
function coolDude(){
    alert("Cool Dude");
}
askUser(userInput);