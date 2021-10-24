import { formatNumber } from './helper.js';

const numbers = [9999999999999999];


for (let i = 0; i < numbers.length; i++) {
    console.log(`Formatted ${numbers[i]} looks like ${formatNumber(numbers[i])}`);
}