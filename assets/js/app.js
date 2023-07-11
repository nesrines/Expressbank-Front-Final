$(() => {
    $('.slider').slick({
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 2800,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    let btns = document.querySelectorAll(".buttons p");
    for (let btn of btns) {
        btn.addEventListener("click", () => {
            btn.parentElement.querySelector(".active").classList.remove("active");
            btn.classList.add("active");
        })
    }
    document.querySelector('.interest-btn').addEventListener("click", () => {
        document.querySelector('.interest').className = "interest";
        document.querySelector('.news').className = "news d-none";
    })
    document.querySelector('.news-button').addEventListener("click", () => {
        document.querySelector('.interest').className = "interest d-none";
        document.querySelector('.news').className = "news";
    })

    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {month = `0${month}`;}
    let currentDate = `${date.getDate()}-${month}-${date.getFullYear()}`;
    document.querySelector(".current-date").innerHTML = currentDate;
})