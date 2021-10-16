export const shorten = (s, n) => {
  if (s.length < n) {
  return s;
  } else if (s.length > n) {
    return s.slice(0, n) + "...";
  }
  return s;
}