$(() => {
    $('.slider').slick({
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 2800,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {month = `0${month}`;}
    let currentDate = `${date.getDate()}-${month}-${date.getFullYear()}`;
    document.querySelector(".current-date").innerHTML = currentDate;
})