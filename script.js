/* using recursion */

// function sum(i) {
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(i - 1);
// }
// console.log(sum(6));

/* function mul(i) {
    if (i == 6) {
        return 6;
    }
    return i * mul(i + 1);
}
console.log(mul(1)); */

/* const fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo); */

/* function fibonacci(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}
console.log(fibonacci(6)); */

/* const information = [
    { name: 'arafat', intake: 38, section: 1, selary: 10000 },
    { name: 'kalam', intake: 38, section: 1, selary: 1000 },
    { name: 'mohit', intake: 38, section: 1, selary: 100 },
    { name: 'rofik', intake: 38, section: 1, selary: 30000 },
    { name: 'kolimulla', intake: 38, section: 1, selary: 9000 }
];
function info(info, searchItem) {
    let search = [];
    for (const item of info) {
        const name = item.name;
        if (name.indexOf(searchItem.toLowerCase()) != -1) {
            search.push(name);
        }
    }
    return search;
}
const result = info(information, 'ARAFAT');
console.log(result); */







