class User {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height
    }
    introduce() {
        console.clear()
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos. Minha altura é ${this.height}`);
    }
}
const User1 = new User('André', 17, 1.61);
User1.introduce();