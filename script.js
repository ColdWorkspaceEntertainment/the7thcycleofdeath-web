// Basit bir "arama" simülasyonu
const statusText = document.getElementById('status');
let count = 0;

setInterval(() => {
    // Yazıyı periyodik olarak gizleyip göstererek yanıp sönme efekti veriyoruz
    if(count % 2 === 0) statusText.style.visibility = 'hidden';
    else statusText.style.visibility = 'visible';
    count++;
}, 3000);

console.log("Hazırlıklar yükleniyor... Sistem hazır.");
