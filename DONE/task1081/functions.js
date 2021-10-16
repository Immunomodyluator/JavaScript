import { getUserCount } from './db.js';

export const printUserCount = () => {
    return getUserCount().then((mes) => {
        console.log(mes);
    })
}