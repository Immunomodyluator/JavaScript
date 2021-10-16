export const setEasyTimeout = (func, time) => {
  setTimeout(func, (time.hours*3600000)+(time.minutes*60000)+(time.seconds*1000));
}

// export const setEasyTimeout = (func, time) => {
//   setTimeout(() => {
//     func()},
//     (time.hours*3600000)+(time.minutes*60000)+(time.seconds*1000));
// }