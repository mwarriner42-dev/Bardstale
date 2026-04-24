// ------------------------------
// BASIC STATE
// ------------------------------
let journalOpen = false;
let currentPage = 1;
const totalPages = 10;

// ------------------------------
// ELEMENT HOOKS
// ------------------------------
const introScreen = document.getElementById("intro-screen");
const journalClosed = document.getElementById("journal-closed");
const journalOpenEl = document.getElementById("journal-open");
const pageLeft = document.getElementById("page-left");
const pageRight = document.getElementById("page-right");
const bardSprite = document.getElementById("bard-sprite");

// ------------------------------
// BARD IDLE ANIMATION (simple placeholder)
// ------------------------------
setInterval(() => {
    bardSprite.style.opacity = 0.7 + Math.random() * 0.3;
    bardSprite.style.transform = `translateY(${Math.sin(Date.now() / 500) * 5}px)`;
}, 100);

// ------------------------------
// FAKE NOD-TO-OPEN (for now)
// ------------------------------
document.getElementById("nod-to-open").addEventListener("click", () => {
    openJournal();
});

// ------------------------------
// OPEN JOURNAL
// ------------------------------
function openJournal() {
    journalClosed.style.display = "none";
    journalOpenEl.style.display = "flex";
    journalOpen = true;
    loadPages();
}

// ------------------------------
// PAGE TURNING
// ------------------------------
document.getElementById("turn-left").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage -= 2;
        loadPages();
        emberFlare();
    }
});

document.getElementById("turn-right").addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
        currentPage += 2;
        loadPages();
        emberFlare();
    }
});

// ------------------------------
// LOAD PAGES
// ------------------------------
function loadPages() {
    pageLeft.innerText = `Page ${currentPage}`;
    pageRight.innerText = `Page ${currentPage + 1}`;
}

// ------------------------------
// BARD EMBER FLARE (placeholder)
// ------------------------------
function emberFlare() {
    bardSprite.style.filter = "brightness(2)";
    setTimeout(() => {
        bardSprite.style.filter = "brightness(1)";
    }, 200);
}
