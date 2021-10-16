import { updateGold } from "./functions.js";
export const handleKeyPress = (term, state) => {
    console.log("нажатие активировано!");
    return (name, matches, data) => {
        if (
            String.fromCharCode(data.code) === "g" ||
            String.fromCharCode(data.code) === "G"
        ) {
            console.log("нажали g");
            state.gold++;
            updateGold(term, state);
            return handleKeyPress;
        }
    }
}