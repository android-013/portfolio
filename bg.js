// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 750) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeMatrix(); // Reinitialize after resizing
    }
});

// Matrix code logic
const characters = 'AZIZRIFAT@013(){}[]/|azizrifat@013';
const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

//function initializeMatrix() {
  //  drops.length = Math.floor(canvas.width / fontSize);
    //drops.fill(1);
//}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop to the top
        }
        
        drops[i]++;
    }
}

//initializeMatrix();

setInterval(drawMatrix, 50);
