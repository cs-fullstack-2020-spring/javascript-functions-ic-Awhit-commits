//Exercise 1
// Define variables used in Exercise 1 
// let answer;
// let sum1;
// let sum2;
// let total;

//Created a function returning the values of two numbers added together
// function sum(number1,number2) {
//     let results = number1 + number2;
//     return results;
// }

//Asked the user what two number they wanted to add
// sum1 = parseInt(prompt("What is your first number?"));
// sum2 = parseInt(prompt("What is your second number?"));

//Storing the return value as variable 
//  answer = sum(sum1,sum2);

//Printing it out to console
// total = `The sum of ${sum1} and ${sum2} is ${answer}`;
// console.log(total);



// //Exercsie 2

//Define a empty list
// let nameList = [];

//Adding elements to the list
// nameList = ["Autmn", "Kevin", "Kenn"];

//writing a for loop in a function to print each element
// function name(nameList){
//     for (let index = 0; index < nameList.length; index++) {
//         const element = nameList[index];
//         console.log(element);
        
//     }

// }

//calling the function and passing the list through the function
// name(nameList)

//Exercise 3 

//Defining the user input
let userInput;

//Asking the user to enter a name
userInput = prompt("Please enter a name");


//Combining functions and conditions
function askUser(newInput){
    
    if ((newInput == "q") || (newInput == "Q")){ //If a user hits q or Q, it exits
        alert("Goodbye!!!")
    }
    else if(newInput == "Kevin"){ //Whenever Kevin is typed cool dude is prompt
        coolDude();
        newInput = prompt("Please enter a name");
        askUser(newInput);

    }

    else{
        newInput = prompt("Plese enter a name"); //Recursive call of askUser input
        askUser(newInput);

    }

    
}
function coolDude(){ // Cool Dudde function whenever is Kevin is typed
    alert("Cool Dude");
}
askUser(userInput);