for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}
for (let i = 0; i <= 20; i += 5) {
    console.log(i);
}
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = 1; i <= 5; i++) {
    let row = "x";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}