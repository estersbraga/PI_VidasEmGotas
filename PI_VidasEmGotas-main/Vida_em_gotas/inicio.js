document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
        showSlide(slideIndex);
    }

    document.getElementById("prev").addEventListener("click", function () {
        prevSlide();
        resetSlideInterval();
    });

    document.getElementById("next").addEventListener("click", function () {
        nextSlide();
        resetSlideInterval();
    });

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); 
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    showSlide(slideIndex);
    startSlideShow();

    function cadastrarDoador() {
        window.location.href = "cadastro-doador.html";
    }

    function cadastrarInstituicao() {
        window.location.href = "cadastro-instituicao.html";
    }

    const btnDoador = document.getElementById("btnCadastrarDoador");
    const btnInstituicao = document.getElementById("btnCadastrarInstituicao");

    if (btnDoador) {
        btnDoador.addEventListener("click", cadastrarDoador);
    }

    if (btnInstituicao) {
        btnInstituicao.addEventListener("click", cadastrarInstituicao);
    }
});

// alterei mas ainda não consegui testar 