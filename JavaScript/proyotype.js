// Parent Constructor (induk)
function Animal(name) {
    this.name = name; // property 'name'
}

// Tambahkan method ke prototype Animal
Animal.prototype.speak = function() {
    return this.name + " makes a sound.";
};

// Child Constructor (anak)
function Dog(name) {
    // panggil constructor Animal supaya Dog punya 'name'
    Animal.call(this, name);
}

// Hubungkan prototype Dog ke Animal (inheritance)
Dog.prototype = Object.create(Animal.prototype);

// Set constructor Dog lagi (karena ketimpa waktu pakai Object.create)
Dog.prototype.constructor = Dog;

// Override method 'speak' khusus untuk Dog
Dog.prototype.speak = function() {
    return this.name + " barks.";
};

// =========================
// UJI COBA
// =========================

// Buat object dari Animal
const animal = new Animal("Cow");
console.log(animal.speak());
// Output: Unknown makes a sound.

// Buat object dari Dog
const dog = new Dog("Buddy");
console.log(dog.speak());
// Output: Buddy barks.