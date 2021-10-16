export const checkSpam = (text, spamKeywords) => {
//   for (let i = 0; i < text.split(" ").length;i++){
//     if (text.toLowerCase().split(' ').includes(spamKeywords[i])) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return checkSpam;
// }

let lowerStr = text.toLowerCase().split(' ');
const yeah = spamKeywords.some(str => lowerStr.includes(str))
if (yeah) {
return true;
} else {
  return false
}
}