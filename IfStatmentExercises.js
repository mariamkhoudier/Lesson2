const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});






function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })

    });
}


async function Program() {

    let firstNumber = await askQuestion("what is your number?");
    let secoundNumber = await askQuestion("what is your secound number?");

    let intfirstNumber = parseInt(firstNumber)
    let intsecoundtNumber = parseInt(secoundNumber)

    // print largest number
    if (intfirstNumber > intsecoundtNumber) {
        console.log(`The largest number is ${firstNumber}`);
    } else {
        console.log(`The largest number is ${secoundNumber}`);
    }

    // sort desc and print numbers
    if (intfirstNumber > intsecoundtNumber) { // true
        console.log(`${firstNumber}, ${secoundNumber}`);
    } else { // false
        console.log(`${secoundNumber}, ${firstNumber}`);
    }

    // sort asc and print numbers
    if (intfirstNumber < intsecoundtNumber) { // true
        console.log(`${firstNumber}, ${secoundNumber}`);
    } else { // false
        console.log(`${secoundNumber}, ${firstNumber}`);
    }
}
Program().then(
    () => {
        process.exit()
    }
) 
