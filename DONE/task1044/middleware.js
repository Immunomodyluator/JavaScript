import { getFormattedDate } from "./functions.js";
export const logger = (configString) => {
    return function(req, res, next) {
        let loggerText = '';
        if (configString.includes(':date')) {
            loggerText = loggerText + getFormattedDate();
        }
        if (configString.includes(':method')) {
            loggerText = loggerText + req.method;
        }
        if (configString.includes(':url')) {
            loggerText = loggerText + req.url;
        }
        console.log(loggerText);
        next();
    }
}