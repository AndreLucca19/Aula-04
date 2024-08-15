class User {
    constructor(name, age, height, tempo){
        this.name = name;
        this.age = age;
        this.height = height
        this.tempo = tempo
    }
    introduce() {
        console.clear()
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos. Minha altura é ${this.height}, faço DS há ${this.tempo} meses.`);
    }
}
const user1 = new User('André', 17, 1.61, 8);
user1.introduce();

const user2 = new User('João', 16, 1.80, 8);
user2.introduce();
