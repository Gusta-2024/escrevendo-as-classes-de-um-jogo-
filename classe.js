class Heroi{
    constructor(nome, idade, tipo, imagemUrl){
        this.nome = nome;
        this.level = idade;
        this.tipo = tipo;
        this.imagem = imagemUrl;
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

        display.style.opacity = 0;
        setTimeout(() => display.style.opacity = 1, 100);
    }
}
         
const herois = [
    new Heroi("Gandalf", "80", "mago", ""),
    new Heroi("Ichigo", "56", "guerreiro", ""),
    new Heroi("Oden", "70", "monge", ""),
    new Heroi("Snakeice", "38", "ninja", "")
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

