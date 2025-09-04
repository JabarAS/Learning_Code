let x = ['1', '2', '3', '4', '5', '6']
let y;
console.log(x);
console.log(x[4]);

let fruits = new Array('apple', 'orange', 'berry');
console.log(fruits);
console.log(fruits[1])
fruits[1] = 'banana';
console.log(fruits[1]);

console.log(fruits);

fruits.push('cherry');
console.log(fruits);
console.log(fruits.length);

let a;
for (a in fruits) {
    console.log('index :' + a);
    console.log('name of fruits' + fruits[a]);
}

for (a of fruits) {
    console.log(a);
}
// method araay
fruits.push('lemon'); // menambahkan nilai diakhir
console.log(fruits);
fruits.pop(); // menghilangkan nilai akhir
console.log(fruits);

fruits.shift(); // menghilangkan nilai awal
console.log(fruits);

fruits.unshift('papaya'); // menambahkan nilai awal
console.log(fruits);

delete fruits[1]; // menghilangkan value , tapi index nya tidak berubah
console.log(fruits);

fruits[1] = 'grape'; // merubah index nilai
console.log(fruits)

fruits.splice(0, 2); // no index yg dihapus , sampai berapa index yg dihapus
console.log(fruits);

fruits.splice(1, 0, 'banana', 'lemon') // no index yg akan di isi, brp jumlah index yg dihapus
console.log(fruits)

let fruitsA = fruits.slice(0, 2) // menambil nilai index ke berapa dan berapa index yg diambil
console.log(fruits)
console.log(fruitsA)