var timer;
export const startCountdown = (n) => {
  let i = 0;
  timer = setInterval(() => {
    if (i < n) {
      console.log(n - i);
      i++;
    } else {
      console.log('GO!');
      timer = clearInterval(timer);
    }
  }, 100)
}

// let i = 0;
// var timer;
// export const startCountdown = (n) => {
//   timer = setInterval(() => {
//     if (i < n) {
//       console.log(n - i);
//       i++;
//     } else {
//       console.log('GO!');
//       timer = clearInterval(timer);
//     }
//   }, 100)
// }