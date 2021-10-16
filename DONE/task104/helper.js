const toLowerCase = (s) => {
  return s.toLowerCase();
}

const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
  let sl = toLowerCase(s);
  let su = toUpperCase(s);
  return sl + su;
}