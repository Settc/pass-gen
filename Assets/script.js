//Defining variables containing the essential strings that make up the users input criteria
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var passNumbers = "0123456789";
var passSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var password = "";

//This variable collects the strings corresponding to the users choices at the start of the program, and then will be iterated over to generate the final password
var passString = "";

//Assignment Code - Finds the element with id #generate and assigns it to the variable generateBtn
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generic random number generating function
function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit));
}

//This function takes the string of compiled criteria strings (uppercase, lowercase, etc) and randomly selects characters to push into the final password 
function random(choices) {
    var index = randomInt(choices.length);
    return choices[index]
}
 
//This function is initiated by clicking the 'generate password' button. It prompts the user for how long they would like the password to be, as well as specifying the criteria for what characters the password should be composed of. The confirm booleans are stored within an object which is then iterated over, checking for how many false choices there are. If all properties of the object are false, it will alert the user and restart the function.
function writePassword() {

    passLength = prompt("How long would you like the password to be? The minimum is 8, and the maximum is 128")

if (passLength < 8 || passLength > 128) {
    alert("Your password is outside the acceptable range!")
    writePassword()
}   else {
    userConfirm();
    return passLength;
}
}

function userConfirm() {

promptObj = {
    confirmUpperCase: false,
    confirmLowerCase: false,
    confirmNumbers: false,
    confirmSpecChars: false,
}

promptObj.confirmUpperCase = confirm("Would you like to use upper case letters?");
promptObj.confirmLowerCase = confirm("How about lower case letters?");
promptObj.confirmNumbers = confirm("Do you like numbers in your password?");
promptObj.confirmSpecChars = confirm("Finally, do you prefer your password with special characters or without?");

var falsePrompts = 0;
var values = Object.values(promptObj)
values.forEach(value => {
    if (value === false) {
        falsePrompts ++;
    }
    if (falsePrompts === 4) {
        alert("You must select a criteria!")
        userConfirm();
    }
});

//These if statements are checking for true statements regarding the confirms. Each true statement adds the corresponding string of characters (uppercase, lowercase, etc), then concats to the master string from which characters are randomly pulled and then pushed into the final password.

if (promptObj.confirmUpperCase) {
    passString = passString.concat(upCase);

}

if (promptObj.confirmLowerCase) {
    passString = passString.concat(lowCase);

}

if (promptObj.confirmNumbers) {
    passString = passString.concat(passNumbers);

}

if (promptObj.confirmSpecChars) {
    passString = passString.concat(passSpecial);
}

for (var i = 0; i <= passLength; i++) {
    password += random(passString);
}

alert(password);

}



