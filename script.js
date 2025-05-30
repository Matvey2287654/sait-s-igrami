document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('.download-btn');
    const modal = document.getElementById('download-modal');
    const closeBtn = document.querySelector('.close-btn');
    const gameNameSpan = document.getElementById('game-name');
    const downloadLink = document.getElementById('download-link');

    // Ссылки на скачивание (замени на реальные)
    const gameLinks = {
        minecraft: "https://www.minecraft.net/ru-ru/download",
        amongus: "https://among-us.en.softonic.com/",
        gtav: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
    };

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const game = btn.getAttribute('data-game');
            gameNameSpan.textContent = btn.parentElement.querySelector('h2').textContent;
            downloadLink.href = gameLinks[game];
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
