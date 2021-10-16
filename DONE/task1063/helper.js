export const concatenateArraysUnique = (arr1, arr2) => {
    const array = arr1.concat(arr2);
    return Array.from(new Set(array));
}