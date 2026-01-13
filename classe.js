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
        };
        const ataque = ataques[this.tipo];
        
        // Agora ele atualiza o HTML em vez de só dar log
        const display = document.getElementById("mensagem-ataque");
        display.innerText = `O herói ${this.nome} (${this.tipo}) atacou usando ${ataque}!`;
    }
}
         
const herois = [
    new Heroi("gandalf", "80", "mago"),
    new Heroi("baldur", "56", "guerreiro"),
    new Heroi("oden", "70", "monge"),
    new Heroi("snakeice", "38", "ninja")
];

const container = document.getElementById("hero-selection");

herois.forEach(heroi => {
    const card = document.createElement("div");
    card.className = "card-heroi";
    card.innerHTML = `
        <h2>${heroi.nome}</h2>
        <p>Level: ${heroi.level}</p>
        <p>Classe: ${heroi.tipo}</p>
    `;
    card.onclick = () => heroi.atacar();
    container.appendChild(card);
});

