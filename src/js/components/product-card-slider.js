import Swiper from 'swiper/bundle';

const productCard = () => {
    $(document).ready(function() {
        let productCardSecondarySwiper = new Swiper(".js--product-card-secondary-slider", {
            spaceBetween: 12,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
        });
        let productCardPrimarySwiper = new Swiper(".js--product-card-primary-slider", {
            spaceBetween: 12,
            navigation: {
                nextEl: ".s-product-card__primary-slider-button--next",
                prevEl: ".s-product-card__primary-slider-button--prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            thumbs: {
                swiper: productCardSecondarySwiper,
            },
        });
    });
}
export default productCard