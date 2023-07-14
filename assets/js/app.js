$(() => {
    window.onscroll = () => {
        if (window.scrollY >= 160)
        {document.querySelector('header, header *').style.position = 'fixed';}
        else {document.querySelector('header, header *').style.position = 'static';}
    };
    let sidebtn = document.querySelector('.side-menu-btn');
    sidebtn.addEventListener('click', () => {
        if (sidebtn.firstElementChild.src === 'https://expressbank.az/img/close_menu.svg') {
            sidebtn.firstElementChild.src = 'https://expressbank.az/img/menu.svg';
            document.querySelector('.nav-1, .nav-2').style.display = 'block';
            document.querySelector('main').style.display = 'block';
            document.querySelector('footer').style.display = 'block';
        }
        else {
            sidebtn.firstElementChild.src = 'https://expressbank.az/img/close_menu.svg';
            document.querySelector('.nav-1, .nav-2').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
        }
        document.querySelector('.side-menu').classList.toggle('d-none');
    });
    let tabButtonsFunction = btn => {
        let button = document.querySelector(btn);
        button.addEventListener('click', () => {
            button.parentElement.querySelector('.active').classList.remove('active');
            button.classList.add('active');
            let div = document.querySelector(btn.replace('-btn', ''));
            let siblingDivs = div.parentElement.querySelectorAll(':scope > :not(.buttons, .my-btn, .exchange-alert)');
            for (let siblingDiv of siblingDivs) {
                if (!(siblingDiv.className.includes('d-none')))
                {siblingDiv.classList.add('d-none');}
            }
            if (div.className.includes('d-none')) {div.classList.remove('d-none');}
        });
    };
    let btns = document.querySelectorAll('.buttons p');
    let btnClassNames = [];
    for (let btn of btns) {btnClassNames.push('.' + btn.classList[0]);}
    for (let btn of btnClassNames) {tabButtonsFunction(btn);}
})