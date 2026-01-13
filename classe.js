class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.level = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques ={
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }
    const ataque = ataques[this.tipo];

    console.log(`O herói ${this.nome} atacou usando ${ataque}.`);
    }       
}

const heroi1 = new Heroi("gandalf", "80", "mago");
const heroi2 = new Heroi("baldur", "56", "guerreiro");
const heroi3 = new Heroi("oden", "70", "monge");
const heroi4 = new Heroi("snakeice", "38", "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

