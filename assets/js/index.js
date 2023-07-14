$(() => {
    $('.slider').slick({
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 2800,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    let select = document.querySelector('select');
    let percent = document.querySelector('#Percent');
    let amountSlider = document.querySelector('#AmountSlider');
    let amount = document.querySelector('#Amount');
    let monthSlider = document.querySelector("#MonthSlider");
    let month = document.querySelector("#Month");
    let Calculate = () => {
        let amountValue = parseFloat(amount.innerHTML);
        total = amountValue + amountValue * (percent.innerHTML / 100);
        document.querySelector('#Total').innerHTML = total + ' ' + 'AZN';
        document.querySelector('#Monthly').innerHTML = (total / month.innerHTML).toFixed(2);
    }
    select.addEventListener('change', () => {
        percent.innerHTML = select.value;
        Calculate();
    });
    amountSlider.addEventListener('input', () => {
        amountSlider.style.background = `linear-gradient(90deg, #f9c20a ${amountSlider.value / 1500}%, #e2e2e2 0)`;
        amount.innerHTML = amountSlider.value;
        Calculate();
    });
    monthSlider.addEventListener('input', () => {
        monthSlider.style.background = `linear-gradient(90deg, #f9c20a ${monthSlider.value / 3.6}%, #e2e2e2 0)`;
        month.innerHTML = monthSlider.value;
        Calculate();
    });
    let date = new Date();
    let currentMonth = date.getMonth() + 1;
    if (currentMonth < 10) {currentMonth = `0${currentMonth}`;}
    let currentDate = `${date.getDate()}-${currentMonth}-${date.getFullYear()}`;
    document.querySelector('.current-date').innerHTML = currentDate;
});