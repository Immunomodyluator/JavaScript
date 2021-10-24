import { sleep } from "./helper.js";
export const writeLog = async(a, randomized, delay) => {
    var i = 0;
    var message = a.split("");
    while (a.length > i) {
        if (randomized === false) {
            process.stdout.write(message[i]);
            await sleep(delay);
            i++;
        } else if (randomized === true) {
            process.stdout.write(message[i]);
            await sleep(
                Math.floor(
                    Math.random() * delay)
            );
            i++;
        }
    }
    process.stdout.write(`\n`)
}