// Object 

// Object Literal 
let objectLiteral = {
    name: "Kelvin",
    age : 21,
    ChangeName : function(name){
        this.name = name;
    }
};

// Function Declaration
function mahasiswa(name,age){
    let node = {};
    node.name = name;
    node.age = age;
    node.showname = function (){
        console.log(this.name);
    }

    return node;
}

let mhs1 = new mahasiswa("Kelvin",21);
mhs1.showname();