let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(3, 4));

let greet = (name) => {
    return "Hello, " + name + "!";
}

console.log(greet("Henk"))

let x = 2
let double = (x) => {
    return (x * 2)
}
console.log(double(x));

let array = [1, 2, 3, 4, 5, 6];
let filterevens = (array) => {
    return array.filter(num => num % 2 === 0)
}
console.log(filterevens(array));

