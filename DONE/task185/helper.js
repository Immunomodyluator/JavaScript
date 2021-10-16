export const isKeyPresent = (obj, key) => {
  if (key in obj) {
    return true;
  }
  return false;
}