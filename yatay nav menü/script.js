let menuVisible = false;

function toggleMenu() {
    const menu = document.getElementById('menu');
    menuVisible = !menuVisible;

    if (menuVisible) {
        menu.classList.add('open'); // Menü açıldığında 'open' sınıfını ekle
    } else {
        menu.classList.remove('open'); // Menü kapandığında 'open' sınıfını kaldır
    }
}

// Menü öğesine tıklanınca menüyü aç/kapat
document.getElementById('menu').addEventListener('click', (event) => {
    event.stopPropagation(); // Tıklamanın dışarıya yayılmasını engelle
    toggleMenu();
});

// Dışarıya tıklanınca menüyü kapat
document.addEventListener('click', () => {
    if (menuVisible) {
        menuVisible = false; // Menü görünürlüğünü kapat
        document.getElementById('menu').classList.remove('open'); // Menü kapat
    }
});

// Menü öğesinin dışındaki alanlara tıklayınca menüyü kapat
document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu');
    if (menuVisible && !menu.contains(event.target)) {
        menuVisible = false; // Menü görünürlüğünü kapat
        menu.classList.remove('open'); // Menü kapat
    }
});
