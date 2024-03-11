import readlineSync from "readline-sync";

export const welcomeMessage = () => {
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`)
}
