function abrirMenu() {

    const abrir = document.querySelector('nav');
    

    abrir.style.width = '35%';
}

function fecharMenu() {

    const fechar = document.querySelector('nav');

    fechar.style.width = '0';
}

function abrirMenuMobile() {

    const abrirMobile = document.querySelector('nav');
    
    abrirMobile.style.width = '100vw';

}

function scrollUP() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sumirBotao() {

    let scrollLateral = document.querySelector('.scrollButton');

    if (window.scrollY == 0){
        scrollLateral.style.display = 'none';
    } else {
        scrollLateral.style.display = 'flex';
    }
}

window.addEventListener('scroll', sumirBotao);