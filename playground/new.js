/*class person  {
    constructor(name =  "anonymous", age = 0, major = "fashion") {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    getGreeting(){
        return `Hi. Iam ${this.name} and am ${this.age} years`;
    }
    getDescription(){
        return `Hi. Iam ${this.name} am ${this.age} years and am a ${this.major} designer`;
    }
}


const person1 = new person("anonymous",29 , "fashion");
const person2 = new person("reina",39);
const person3 = new person();
console.log(person1.getGreeting());
console.log(person1.getDescription());*/

const design = {
    place:"milan",
    company:"versace",
    scale:"europe",
    niche:"fashion",
};

console.log(design.scale);

const{place, company, scale, niche } = design;
console.log(niche)