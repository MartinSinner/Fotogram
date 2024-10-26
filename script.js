let images = [
    'img/pic1.jpg',
    'img/pic2.jpg',
    'img/pic3.jpg',
    'img/pic4.jpg',
    'img/pic5.jpg',
    'img/pic6.jpg',
    'img/pic7.jpg',
    'img/pic8.jpg',
    'img/pic9.jpg',
    'img/pic10.jpg',
    'img/pic11.jpg',
    'img/pic12.jpg'
];

let currentIndex = 0;   // Speichert Index vom aktuellen Bild was angeklickt wurde


function render() {
    let galleryRef = document.getElementById('gallery');        // Greift auf die ID im Div Container in Zeile 28 zu 
    for (let index = 0; index < images.length; index++) {       //Greift auf Array images zu und zählt runter 
        galleryRef.innerHTML += getPicsHtml(index);         //Bilder werden im HTML Zeile 28 hinzugefügt bzw. hinten dran gehängt 
    }
}

function getPicsHtml(index) {
    let title = `Bild ${index + 1}`;
    return `<div onclick="openOverlay('${images[index]}', '${title}')"><img src="${images[index]}" alt="Bild ${index + 1}" /></div>`;       // Erstellt HTML für ein Bild
}


function openOverlay(src, title) {
    currentIndex = images.indexOf(src);         // aktueller Index wird auf Index des angeklickten Bilds gesetzt


    let overlay = document.getElementById('overlay');
    let overlayImg = document.getElementById('overlay-img');
    let overlayTitle = document.getElementById('overlay-title');

    overlayImg.src = src;
    overlayTitle.textContent = title;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;      //% ist dafür da wenn bei letzten Bild angekommen -> wenn 0 als Ergebnis rauskommt wird index wieder auf 0 zurückgesetzt
    updateOverlay();
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateOverlay();

}


function updateOverlay() {
    let overlayImg = document.getElementById('overlay-img');
    let overlayTitle = document.getElementById('overlay-title');

    overlayImg.src = images[currentIndex];
    overlayTitle.textContent = `Bild ${currentIndex + 1}`;
}

// Rufe die render-Funktion auf, um die Bilder zu zeigen
window.onload = function () {
    render();
};


