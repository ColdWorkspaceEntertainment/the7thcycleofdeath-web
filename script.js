document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.content-box');
    box.style.opacity = '0';
    box.style.transition = 'opacity 1.5s ease-in, transform 1.5s ease-out';
    box.style.transform = 'translateY(20px)';
    
    // Yumuşak giriş animasyonu
    setTimeout(() => {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
    }, 100);

    console.log("Cold Works Production: 7CoD System Ready.");
});