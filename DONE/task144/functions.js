export const capitalizeEachWord = (s) => {
  return s.replace(/(^|\s)\S/g,function(a){return a.toUpperCase()})
}