// Obtener la imagen y los botones por su ID
const image = document.getElementById('imagen');

const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// Funciones para cambiar el tamaño de la imagen
if (xSmallBtn) {
    xSmallBtn.addEventListener('click', () => {
        image.style.width = '75px';
        image.style.height = 'auto';
    });
}

if (smallBtn) {
    smallBtn.addEventListener('click', () => {
        image.style.width = '150px';
        image.style.height = 'auto';
    });
}

if (mediumBtn) {
    mediumBtn.addEventListener('click', () => {
        image.style.width = '300px';
        image.style.height = 'auto';
    });
}

if (largeBtn) {
    largeBtn.addEventListener('click', () => {
        image.style.width = '450px';
        image.style.height = 'auto';
    });
}

if (xLargeBtn) {
    xLargeBtn.addEventListener('click', () => {
        image.style.width = '600px';
        image.style.height = 'auto';
    });
}