export const pow = (x, y) => {
  let pow;
  if (y === 0) {
    return 1;
  } else if (x === 0) {
    return 0;
  } else {
      pow = x ** y;
  }
  return pow;
}