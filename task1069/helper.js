export const formatNumber = (n) => {
    var arr = ["K", "M", "B", "T"];
    for (let d = 97; d < 123; d++) {
        for (let i = 97; i < 123; i++) {
            arr.push(String.fromCharCode(d, i))
        }
    }
    if (n >= 1000) {
        let numLen = n.toFixed(0).length - 1;
        let indexNum = Math.floor(numLen / 3);
        let char = arr[indexNum - 1];
        let num = (n / Math.pow(1000, indexNum));
        console.log(indexNum, char, num);
        num = (num + '').slice(0, (num + '').indexOf('.') + 3);
        return num + char;
    } else if ((/^(\-)?\d*(\.\d*)?$/).test(n + "")) {
        return n.toFixed(1);
    } else {
        let n_num = n.match(/(\d+)/g).join(".");
        let n_str = n.replace(n_num, "");
        console.log(n_num);
        console.log(n_str);
        let index_str = arr.indexOf(n_str, 0);
        console.log(index_str);
        let numLen = Number(n_num).toFixed(0).length - 1;
        let indexNum = Math.floor(numLen / 3);
        let char = arr[indexNum + (index_str + 1) - 1];
        let num = (n_num / Math.pow(1000, indexNum));
        console.log(indexNum, char, num);
        num = (num + '').slice(0, (num + '').indexOf('.') + 3);
        return num + char;
    }

}