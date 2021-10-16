import { sleep } from "./helper.js";
export const writeLog = async(a, delay) => {
    var i = 0;
    var message = a.split("");
    while (a.length > i) {
        process.stdout.write(message[i]);
        await sleep(delay);
        i++;
    }
    process.stdout.write(`\n`)
}