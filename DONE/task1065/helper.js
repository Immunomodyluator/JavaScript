export const hasUpperCaseLetters = (s) => {
    console.log(s.length);
    for (let i = 0; i < s.length; i++) {
        var myArr = s.split('');
        var myA = myArr[i].toString('');
        if (myA.search(/^[a-zA-Z\u00C0-\u00ff]+$/) === 0) {
            var a = myArr[i] === myArr[i].toUpperCase();
            if (a === true) {
                break;
            }
        }
    }
    if (a === undefined) {
        a = false;
    }
    return a;
}