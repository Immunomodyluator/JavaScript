export const isKeyPresent = (obj, key) => {
  for (let i = 0; i < Object.keys(obj).length;i++) {
    if (obj[key]){
      return true;
    } else {
      return false;
    }
  }
}