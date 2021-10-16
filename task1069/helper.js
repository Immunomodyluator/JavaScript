export const formatNumber = (n) => {
    if (n < 1000) {
        return n.toFixed(1);
    }
    if (n > 1000 && n < 1000000) {
        return (n / 1000).toFixed(2) + "K";
    }
    if (n > 1e6 && n < 1e12) {
        return (n / 1000000).toFixed(2) + "M"
    }
    if (n > 1e12 && n < 1e15) {
        return (n / 1e12).toFixed(2) + "T"
    }
    if (n > 1e15) {
        return (n / 1e15).toFixed(2) + "aa"
    }
}