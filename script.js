let currentLang = 'tr';

// Dil Değiştirme Fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;

    // Aktif buton görselini güncelle
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // 'data-tr' ve 'data-en' özniteliklerine sahip tüm elemanları bul ve güncelle
    const elements = document.querySelectorAll('[data-tr]');
    elements.forEach(el => {
        if (lang === 'tr') {
            el.textContent = el.getAttribute('data-tr');
        } else if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        }
    });
}

// Bölüm Değiştirme Fonksiyonu
function showChapter(chapterNumber) {
    const ch1 = document.getElementById('chapter-1');
    const ch2 = document.getElementById('chapter-2');
    const btn1 = document.getElementById('btn-ch1');
    const btn2 = document.getElementById('btn-ch2');

    if (chapterNumber === 1) {
        ch1.classList.remove('hidden');
        ch2.classList.add('hidden');
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else if (chapterNumber === 2) {
        ch1.classList.add('hidden');
        ch2.classList.remove('hidden');
        btn1.classList.remove('active');
        btn2.classList.add('active');
    }
}
