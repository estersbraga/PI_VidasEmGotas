document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("organizationsCarousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let scrollAmount = 0;
    const scrollStep = 300; // Ajuste conforme o tamanho das imagens
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    function scrollNext() {
        if (scrollAmount >= maxScroll) {
            scrollAmount = 0; // Volta para o começo
        } else {
            scrollAmount += scrollStep;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    function scrollPrev() {
        if (scrollAmount <= 0) {
            scrollAmount = maxScroll; // Vai para o final
        } else {
            scrollAmount -= scrollStep;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    nextBtn.addEventListener("click", scrollNext);
    prevBtn.addEventListener("click", scrollPrev);

    // Auto-scroll a cada 3 segundos
    setInterval(scrollNext, 3000);
});
