$(() => {
    $('.slider').slick({
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 2800,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    document.querySelector('#InterestBtn').onclick = () => {
        document.querySelector('#InterestBtn').className = "d-inline-block active";
        document.querySelector('#NewsButton').className = "d-inline-block"
        document.querySelector('.interest').className = "interest";
        document.querySelector('.news').className = "news d-none";
    }
    document.querySelector('#NewsButton').onclick = () => {
        document.querySelector('#InterestBtn').className = "d-inline-block";
        document.querySelector('#NewsButton').className = "d-inline-block active"
        document.querySelector('.interest').className = "interest d-none";
        document.querySelector('.news').className = "news";
    }
})