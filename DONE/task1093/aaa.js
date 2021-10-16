export const loadData = () => ({
    users: [{
        id: 1,
        name: 'Jack',
        friends: [23, 125],
    }, {
        id: 23,
        name: 'Jane',
        friends: [125],
    }, {
        id: 125,
        name: 'Jill',
        friends: [1],
    }]
})

var value = 1;

var arr = loadData();

for (var i in arr.users) {
    if (arr.users[i].id == value) {
        console.log(arr.users[i]); // {a: 5, b: 6}
    }
}