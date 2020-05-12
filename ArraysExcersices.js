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
 let students=[];
 students.push(await askQuestion("what is your name? "));
 students.push(await askQuestion("what is your name? "));
 students.push(await askQuestion("what is your name? "));
 students.push(await askQuestion("what is your name? "));
}
Program().then(
    () => {
        process.exit()
    }
) 
