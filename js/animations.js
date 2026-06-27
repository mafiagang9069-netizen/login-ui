/**
 * Animations and Micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for blobs
    const blobs = document.querySelectorAll('.blob');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) * speed / 1000;
            const yOffset = (window.innerHeight / 2 - e.pageY) * speed / 1000;
            
            // Apply a slight transform based on mouse position
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1)`;
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary-gradient');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.className = 'ripple';
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });
});
