window.onload = () => {
    var premiumCard = document.getElementById('card-pre');
    var ultimateCard = document.getElementById('card-ult');

    setTimeout(() => {
        premiumCard.style.height = '35%'; // Uzunluk artışı
        ultimateCard.style.height = '40%'; // Uzunluk artışı
    }, 1000); // 1000 milisaniye (1 saniye) sonra boyutları değiştir
};