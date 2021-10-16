import { loadData } from './storage.js';

export const getUser = (userId) => new Promise((resolve, reject) => {
    if (userId === undefined) {
        reject(new Error("No enemies"));
    } else {
        var a;
        var arr = loadData();
        for (var i in arr.users) {
            if (arr.users[i].id == userId) {
                a = arr.users[i];
            }
        }
    }
    resolve(a);

});