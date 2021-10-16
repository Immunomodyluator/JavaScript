export const extractNumber = (s) => {
  let r = /[\d|,|.|\+]+/g;
  return Number(s.match(r));
}