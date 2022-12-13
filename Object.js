// Object Literal
let node = {
    name : "Kelvin",
    age : 21,
    showname : function (){
        console.log(this.name);
    }
};

console.log(node.age);      // Output : 21
console.log(node.name);     // Output : Kelvin
node.showname();            // Output : Kelvin


// Function Declaration 

// Function Declaration #1
function mahasiswa(name,nim){
    let mhs = {};
    mhs.name = name;
    mhs.nim = nim;
    mhs.showname = function (){
        console.log(this.name);
    }

    return mhs;
}

// Function Declaration #2
function person (name,id){
    this.name = name;
    this.id = id;
    this.showname = function (){
        console.log(this.name);
    }
}


let mhs1 = mahasiswa("Kelvin",111111);
let person1 = new person("Alvin",222222);

mhs1.showname();        // Output : Kelvin
person1.showname();     // Output : Alvin


// Function Declaration Menghemat memori 
let methods = {
    getname : function (){
        return this.name;
    },

    setname : function (name){
        this.name = name;
    },

    showname : function (){
        console.log(this.name);
    }
}

function names(name){
    this.name = name;
    this.getname = methods.getname;
    this.setname = methods.setname;
    this.showname = methods.showname;
}

let name1 = new names("David");
name1.setname("Anjing");        // replace name property's Values with anjing 
name1.showname();               // Output : Anjing
console.log(name1.getname());   // Output : Anjing


// Using Object.create();
function dog (name,age){
    let node = Object.create(methods);
    node.name = name;
    node.age = age;
    node.sound = function (){
        console.log("Woof woof woof .. ");
    }
    return node;
}

function cat (name,age){
    let node = Object.create(methods);
    node.name = name;
    node.age = age;
    node.sound = function (){
        console.log("Meoow meeow ...");
    }
    return node;
}

let dog1 = new dog("Alex",5);
let cat1 = new cat("Tom",3);

dog1.showname();       // Output : Alex
dog1.sound();          // Output : Woof woof woof .. 

cat1.showname();       // Output : Tom
cat1.sound();          // Output : Meoow meeow ...