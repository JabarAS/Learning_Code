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
} else {
    console.log('murah') // else condition
}

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


//challage
//no 1
/** 
Buat program for loop dari 1 sampai 10.
Gunakan if else untuk cek:
Kalau angkanya genap → cetak "Angka X adalah Genap"
Kalau angkanya ganjil → cetak "Angka X adalah Ganjil" */

for (let a = 1; a <= 10; a++) {
    if (a % 2 === 0) {
        console.log('angka ' + a + ' adalah genap');
    } else {
        console.log('angka ' + a + ' adalah ganjil');
    }
}

//no2
let nilai = [95, 82, 67, 45, 100];

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 90) {
        console.log(nilai[i] + " Grade A");
    } else if (nilai[i] >= 75) {
        console.log(nilai[i] + " Grade B");
    } else if (nilai[i] >= 60) {
        console.log(nilai[i] + " Grade C");
    } else {
        console.log(nilai[i] + " Grade D");
    }
}