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
    new Heroi("Gandalf", "80", "mago", "https://i.pinimg.com/736x/8f/c2/f7/8fc2f727d925d57b44f2d59d2e1b1d7d.jpg"),
    new Heroi("Baldur", "56", "guerreiro", "https://i.pinimg.com/564x/0f/60/da/0f60da867c2657d42817351dfdf2929e.jpg"),
    new Heroi("Oden", "70", "monge", "https://i.pinimg.com/564x/9c/0b/22/9c0b22f033c4df29da68487707e7774d.jpg"),
    new Heroi("Snakeice", "38", "ninja", "https://i.pinimg.com/564x/e7/7e/16/e77e169c2889988137356c5267023363.jpg")
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

