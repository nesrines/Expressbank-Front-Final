$(() => {
    let alert = document.querySelector('.my-alert');
    let orderBtns = document.querySelectorAll('.card-container .card-box .card-content span.my-btn.yellow-btn');
    for (let btn of orderBtns) {
        btn.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart'));
            if (cart.find(x => x.id === btn.parentElement.parentElement.id) === undefined) {
                let specs = [];
                let listItems = btn.previousElementSibling.firstElementChild.children;
                for( let li of listItems) {
                    specs.push({
                        h5: li.firstElementChild.innerHTML,
                        p: li.lastElementChild.innerHTML
                    })
                };
                cart.push({
                    id: btn.parentElement.parentElement.id,
                    img: btn.parentElement.previousElementSibling.firstElementChild.src,
                    title: btn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
                    specs: specs,
                    price: 50,
                    count: 1
                })
                localStorage.setItem('cart', JSON.stringify(cart));
                document.querySelector('#Count small').innerHTML = cart.length;
                alert.className = 'my-alert alert alert-success opacity-100';
                alert.innerHTML = 'Məhsul səbətə əlavə olundu!';
            }
            else {
                alert.className = ('my-alert alert alert-danger opacity-100');
                alert.innerHTML = 'Məhsul səbətdə mövcuddur.';
            }
            setTimeout(() => {
                alert.classList.remove('opacity-100');
                alert.classList.remove('alert-danger');
            }, 3000);
        })
    }
})