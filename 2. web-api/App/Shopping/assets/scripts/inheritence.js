

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`제 이름은 ${this.name}이구요. 나이는 ${this.age}에요.`);
    }
}

class Dog extends Pet{
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}

class Cat extends Pet{
    constructor(name, age, sleep) {
        this.name = name;
        this.age = age;
        this.sleep = sleep;
    }
}

const dog = new Dog('해피', 4, '돌아다니기');
const cat = new Cat('야옹', 6, '캣타워에 잠자기');

dog.introduce();
cat.introduce();