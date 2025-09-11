// Crie 3 constantes para o controle do menu hamburger
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const card = document.getElementById("card");

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
    const response = await fetch("https://api.rawg.io/api/games");

    const data = await response.json();


}

function displayGames(games) {
    
}