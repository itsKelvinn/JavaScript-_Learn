// Using Prototype

function person(name,id){
    this.name = name;
    this.id = id;
}

person.prototype.getname = function (){
    return this.name;
}

person.prototype.setname = function (name){
    this.name = name;
}

person.prototype.showname = function (){
    console.log(this.name);
}

let person1 = new person("Kelvin",1231234);

person1.setname("Andika");          // Set Andika as Name
person1.showname();                 // Output : Andika
console.log(person1.getname());     // return Andika as Output


