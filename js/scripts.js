// Crie 3 constantes para o controle do menu hamburger
const apiKey = "3d55ae12ae7c4f62987b4da88877fd83"
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const cards = document.getElementById("cards");
const gameImage = document.getElementById("game-image");
const gameTitle = document.getElementById("game-title");

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Alterar o estado do ícone
    hamburger.classList.toggle("open");
});

overlay.addEventListener('click', () =>{
    sideMenu.classList.remove('active');
    overlay.classList.remove('acive');
    // Alterar o estado do ícone
    hamburger.classList.remove('open');
});

async function fetchGames() {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);

    
    const data = await response.json();
    
    console.log(data);

    displayGames(data.results)

}

function displayGames(games) {
    games.forEach(game => {
        const cardCreate = document.createElement("div");
        cardCreate.classList.add("card")
        cardCreate.innerHTML = `
        <img id="game-image" src="${game.background_image}" alt="">
        <h2 id="game-title">${game.name}</h2>
        `
        cards.appendChild(cardCreate);

        console.log(game.name);
    });
}

fetchGames();