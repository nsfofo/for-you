document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const introPage = document.getElementById('intro-page');
    const mainPage = document.getElementById('main-page');
    const backgroundMusic = document.getElementById('background-music');
    
    const square1 = document.querySelector('.square-1');
    const square2 = document.querySelector('.square-2');

    // URLs das imagens - NOVO BANNER DE FUNDO AQUI
    const fullPageBannerUrl = 'https://i.pinimg.com/1200x/9b/bd/eb/9bbdeb8b6f1e723be9c4500158c7df71.jpg'; // <-- NOVO BANNER AQUI
    const rectangleBackgroundUrl = 'https://i.pinimg.com/736x/eb/fa/a9/ebfaa949f6ee18c9e6fef82d5d5b52d8.jpg'; // Fundo dos retângulos
    const photo1Url = 'https://cdn.discordapp.com/attachments/1405847909810835528/1415399834906792028/b2a7b7241c15fabb56fb9e1197be2478.png?ex=68c31151&is=68c1bfd1&hm=e417ccd49488d922bef5f16898a565751f9073f5eee4d58a79c7c16ca82b6361&';
    const photo2Url = 'https://cdn.discordapp.com/attachments/1405847909810835528/1415399835259109427/75c38946369b71d910fa6b36ddf2d003.png?ex=68c31151&is=68c1bfd1&hm=2b79d3b484102ee1562fa6c09268656d856d0a53f2f3df704a590061b5891e73&';
    const musicUrl = 'minha-musica.mp3'; // **LEMBRE-SE DE SUBSTITUIR ESTE CAMINHO**

    mainPage.style.backgroundImage = `url(${fullPageBannerUrl})`;
    
    square1.style.backgroundImage = `url(${rectangleBackgroundUrl})`;
    square2.style.backgroundImage = `url(${rectangleBackgroundUrl})`;
    
    document.getElementById('photo-1').src = photo1Url;
    document.getElementById('photo-2').src = photo2Url;
    backgroundMusic.src = musicUrl;

    function createFallingHeart() {
        const heartFall = document.createElement('div');
        heartFall.classList.add('heart-fall');
        heartFall.style.left = `${Math.random() * 100}vw`;
        heartFall.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartFall.style.opacity = '0';
        document.body.appendChild(heartFall);
        
        setTimeout(() => {
            heartFall.style.opacity = '1';
        }, 50);

        setTimeout(() => {
            heartFall.remove();
        }, parseFloat(heartFall.style.animationDuration) * 1000);
    }
    
    setInterval(createFallingHeart, 200);

    heart.addEventListener('click', () => {
        introPage.style.opacity = '0';
        
        setTimeout(() => {
            introPage.style.display = 'none';
            mainPage.style.display = 'flex';
            
            setTimeout(() => {
                mainPage.style.opacity = '1';
                backgroundMusic.play().catch(e => console.error("Erro ao tentar tocar música:", e)); 
            }, 50);
            
        }, 1500);
    });
});