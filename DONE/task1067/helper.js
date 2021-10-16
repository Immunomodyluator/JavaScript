export const isPalindrome = (s) => {
    return s.split("").reverse().join("") === s;
}