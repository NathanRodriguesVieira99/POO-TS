/*
CLASSES

-> para criar objetos
*/

class MyFirstClass {
    // atributos
    name: string;
    age: number;

    // constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // métodos
    method() {
        console.log('Hello World');
    }
}

/*
ENCAPSULAMENTO

-> controla a visibilidade dos atributos e métodos de uma classe
-> public = acessível de qualquer lugar
-> private = acessível apenas dentro da própria classe
-> protected = acessível na classe e em suas subclasses
*/

class Programmer {
    private name: string;
    private age: number;
    private stack: string[];

    constructor() {
        this.name = 'Nathan';
        this.age = 19;
        this.stack = ['JS', 'TS', 'React', 'React Native'];
    }

    sayHello() {
        console.log('Hello!');
    }
}

const programmer = new Programmer();
programmer.sayHello();

/*
HERANÇA

-> permite que uma classe herde atributos e métodos de outra 
-> extends para herdar uma classe
*/
class Aves {
    private especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }

    public voar() {
        console.log('Voando');
    }
    public comer() {
        console.log('Voando');
    }
}

class Pato extends Aves {
    constructor() {
        // serve para 'alimentar' o constructor da classe herdada com os atributos
        super('Pato');
    }
    nadar() {
        console.log('Nadando');
    }
}

const pato = new Pato();
pato.nadar();

/*
POLIMORFISMO

-> permite que classes filhas sobrescrevam métodos da classe pai
*/

class Galinha extends Aves {
    constructor() {
        super('Galinha');
    }

    public voar() {
        console.log('Galinha não voa');
    }
}

const galinha = new Galinha();
galinha.voar();

/*
ABSTRAÇÃO

-> define métodos que devem ser implementados pelas subclasses
-> não pode ser instanciada diretamente
-> abstract para criar classes e métodos abstratos
*/

abstract class UserRepository {
    abstract find(): Promise<void>;
    abstract update(): Promise<void>;
    abstract delete(): Promise<void>;
    abstract create(): Promise<void>;
}

class PrismaUserRepository extends UserRepository {
    async find() {
        console.log('Find');
    }
    async update(): Promise<void> {
        console.log('Update');
    }
    async delete(): Promise<void> {
        console.log('Delete');
    }
    async create(): Promise<void> {
        console.log('Create');
    }
}

/*
INTERFACE

-> define um contrato de tipagem que uma classe precisa seguir
-> implements para usar a interface
*/

interface IUserRepository {
    find(): Promise<void>;
    update(): Promise<void>;
    delete(): Promise<void>;
    create(): Promise<void>;
}

class PostgresUserRepository implements IUserRepository {
    async find() {
        console.log('Find');
    }
    async update(): Promise<void> {
        console.log('Update');
    }
    async delete(): Promise<void> {
        console.log('Delete');
    }
    async create(): Promise<void> {
        console.log('Create');
    }
}
