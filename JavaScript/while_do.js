let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

let countdown = 5;
while (countdown > 0) {
    console.log("Timer:", countdown);
    countdown--;
}

let dice;
do {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log("Hasil lempar dadu:", dice);
} while (dice !== 6);


// Example: do...while loop
let answer;
const correct = "kopi";
do {
    answer = "kopi";
    console.log("Jawaban anda:", answer);
} while (answer !== correct);

console.log("Jawaban benar!");