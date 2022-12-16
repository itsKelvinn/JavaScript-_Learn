// Closures 

function outerFunc(){
    let test = "test";
    function innerFunc(){
        console.log(test);
    }
    return innerFunc;
}

let outer = outerFunc();
outer(); // Ouput : test

function greet(){
    return function(greeting){
        console.log(`Hello , Selamat ${greeting}`);
    }
}

let greetFunc = greet();
greetFunc("Malam"); // Ouput : Hello , Selamat Malam


// Function Factories
function salamFunc(salam){
    return function(nama){
        console.log(`Hallo ${nama}, Selamat ${salam}`);
    }
}

let selamatPagi = salamFunc("Pagi");
let selamatSiang = salamFunc("Siang");
let SelamatMalam = salamFunc("Malam");

selamatPagi("Kelvin"); // Output : Hallo Kelvin, Selamat Pagi
selamatSiang("David"); // Output : Hallo David, Selamat Siang
SelamatMalam("Alvin"); // Output : Hallo Alvin, Selamat Malam

// Private Method
let count = function(){
    let counter = 0;
    return function(){
        return counter++;
    }
}

let a = count();
console.log(a());
console.log(a());
console.log(a());


// or 

let count1  = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

console.log(count1());
console.log(count1());
console.log(count1());
