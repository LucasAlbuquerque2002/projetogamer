// Script Responssavel Pela automação do menu hamburguer

const btnMobile =  document.getElementById('btn-mobile');
// const >> declara a nossa variavel, no uso do decorrer do código

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefalt();
    const nav = document.getElementById(nav);
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile;addEventListener('touchstart', toggleMenu)