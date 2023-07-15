$(() => {
    let alert = document.querySelector('.my-alert');
    let alertBasket = document.querySelector('.alert-warning');
    let order = document.querySelector('.btn-success');
    let CalculateTotal = () => {
        let total = 0;
        document.querySelectorAll('.price').forEach(price => {
            total += parseFloat(price.innerHTML);
        })
        order.querySelector('#Total').innerHTML = total;
    }
    let Check = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart.length === 0) {
            alertBasket.classList.remove('d-none');
            order.classList.add('d-none');
            document.querySelector('#Cart .cards .container-n').innerHTML = '';
        }
        else {
            let cards = ''
            cart.forEach(card => {
                let cardSpecs = '';
                card.specs.forEach(spec => {
                    cardSpecs += `<li><h5>${spec.h5}</h5><p>${spec.p}</p></li>`
                })
                cards += `
                <div class="card-container">
                    <div id=${card.id} class="card-box">
                        <img src=${card.img}>
                        <div class="card-content">
                            <h4>${card.title}</h4>
                            <div class="list-container">
                                <ul>
                                    ${cardSpecs} 
                                </ul>
                            </div>
                        </div>
                        <div class="cart-content">
                            <div class="product-count">
                                <input type="number" value="${card.count}" min="1">
                                <div class="icons">
                                    <i class="fas fa-chevron-up"></i>
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                            <p class="price">${(card.price * card.count).toFixed(2)} AZN</p>
                            <span class="delete-btn">SİLİN &nbsp;<i class="fas fa-trash"></i></span>
                        </div>
                    </div>
                </div>`
                CalculateTotal();
            });
            document.querySelector('#Cart .cards .container-n').innerHTML = cards;
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.onclick = () => {
                    cart.splice(cart.indexOf(cart.find(x => x.id === btn.parentElement.parentElement.id)), 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    setTimeout(() => {
                        document.querySelector('#Count small').innerHTML = cart.length;
                        alert.classList.add('opacity-100');
                        alert.innerHTML = 'Uğurla silindi!';
                        Check();
                        setTimeout(() => {
                            alert.classList.remove('opacity-100');
                        }, 3000);
                        CalculateTotal();
                    }, 500);
                }
            });
            document.querySelectorAll('input').forEach(input => {
                input.oninput = () => {
                    if (input.value < 1) input.value = 1
                    cart.find(x => x.id === input.parentElement.parentElement.parentElement.id).count = input.value;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    Check();
                }
                CalculateTotal();
            })
            document.querySelectorAll('.fa-chevron-up').forEach(up => {
                up.onclick = () => {
                    let input = up.parentElement.previousElementSibling;
                    input.value = parseInt(input.value) + 1;
                    cart.find(x => x.id === input.parentElement.parentElement.parentElement.id).count = input.value;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    Check();
                }
                CalculateTotal();
            })
            document.querySelectorAll('.fa-chevron-down').forEach(down => {
                down.onclick = () => {
                    let input = down.parentElement.previousElementSibling;
                    input.value = parseInt(input.value) - 1;
                    if (input.value < 1) input.value = 1
                    cart.find(x => x.id === input.parentElement.parentElement.parentElement.id).count = input.value;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    Check();
                }
                CalculateTotal();
            })
        }
    }
    Check();
    order.onclick = () => {
        localStorage.setItem('cart', JSON.stringify([]));
        alert.className = 'my-alert alert alert-success opacity-100';
        alert.innerHTML = 'Sifarişiniz təsdiqləndi!';
        document.querySelector('#Count small').innerHTML = JSON.parse(localStorage.getItem('cart')).length;
        Check();
        setTimeout(() => {
            alert.classList.remove('opacity-100');
        }, 3000);
    }
})