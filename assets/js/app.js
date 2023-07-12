$(() => {
    let tabButtonsFunction = btn => {
        let button = document.querySelector(btn);
        button.addEventListener('click', () => {
            button.parentElement.querySelector(".active").classList.remove("active");
            button.classList.add("active");
            let div = document.querySelector(btn.replace('-btn', ''));
            let siblingDivs = div.parentElement.querySelectorAll(':scope > :not(.buttons)');
            for (let siblingDiv of siblingDivs) {
                if (!(siblingDiv.className.includes('d-none')))
                {siblingDiv.classList.add('d-none');}
            }
            if (div.className.includes('d-none')) {div.classList.remove('d-none');}
        })
    }
    let btns = document.querySelectorAll(".buttons p");
    let btnClassNames = [];
    for (let btn of btns) {btnClassNames.push('.' + btn.classList[0]);}
    for (let btn of btnClassNames) {tabButtonsFunction(btn);}
})