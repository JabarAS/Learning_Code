/******************   Learn If else   ******************/
// learn how to build if else / else if in javascript

/*
  if (kondisi) {
 kode dijalankan kalau kondisi true
  } else {
 kode dijalankan kalau kondisi false
  }
*/


let a = 4; // build variabel
if (a > 7) { // build condition
    console.log('mahal')
} else if (a == 4) { // else first condition
    console.log('hampir mahal')
} else(
    console.log('murah') // else condition
)

let angka = 7;

if (angka % 2 === 0) {
    console.log("Genap");
} else {
    console.log("Ganjil");
}


/*  check nilai dan type data  */
let username = "jabar";
let password = "12345";

if (username === "jabar" && password === "12345") {
    console.log("Login sukses!");
} else {
    console.log("Username atau password salah!");
}