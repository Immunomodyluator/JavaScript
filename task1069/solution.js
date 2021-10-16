import { formatNumber } from './helper.js';

const numbers = [12352.1, 1234321, 12343210000000, 12343210000000000, 12343210000000000000];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Formatted ${numbers[i]} looks like ${formatNumber(numbers[i])}`);
}