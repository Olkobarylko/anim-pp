import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

const contentCardsSlider = () => {
    $(document).ready(function() {
        if($('.js--content-cards-slider').length !== 0) {
            const contentCardsSliderBox = $('.js--content-cards-slider');
            const cardsSlider = $('.js--cards-slider-wrap');
            
            contentCardsSliderBox.each(function() {
                const contentSlider = $(this).find('.js--content-slider');
                const cardsSlider = $(this).find('.js--cards-slider');
                
                const mainSlider = new Splide(contentSlider[0], {
                    type: 'fade',
                    pagination: false,
                    arrows: false,
                    cover: true,
                }).mount();
            
                const thumbnailSlider = new Splide(cardsSlider[0], {
                    perPage: 1.23,
                    gap: 28,
                    isNavigation: true,
                    focus: 'center',
                    pagination: false,
                    cover: true,
                    arrows: false,
                    breakpoints: {
                        767: {
                            perPage: 1.29,
                        },
                        1023: {
                            perPage: 2.2,
                        },
                        1440: {
                            perPage: 1.41,
                            gap: 28,
                        },
                        1920: {
                            perPage: 1.41,
                        },
                        2560: {
                            perPage: 1.89,
                            gap: 45,
                        }
                    }
                }).mount();
        
                const updateButtons = () => {
                    $('.js--content-cards-slider-prev').toggleClass('disabled', mainSlider.index === 0);
                    $('.js--content-cards-slider-next').toggleClass('disabled', mainSlider.index === mainSlider.length - 1);
                };
        
                updateButtons();
            
                $('.js--content-cards-slider-prev').on('click', () => {
                    if (!$(this).hasClass('disabled')) {
                        mainSlider.go('<');
                        thumbnailSlider.go('<');
                    }
                    updateButtons();
                });
        
                $('.js--content-cards-slider-next').on('click', () => {
                    if (!$(this).hasClass('disabled')) {
                        mainSlider.go('>');
                        thumbnailSlider.go('>');
                    }
                    updateButtons();
                });
        
                mainSlider.on('moved', () => {
                    updateButtons();
                    thumbnailSlider.go(mainSlider.index);
                });
    
                thumbnailSlider.on('moved', () => {
                    updateButtons();
                    mainSlider.go(thumbnailSlider.index);
                });
                
            });
    
            function setCardsSliderWidth() {       
                const blockOffsetLeft = cardsSlider.offset().left;
                const windowWidth = $(window).width();
                const distanceFromLeftToRight = windowWidth - blockOffsetLeft;
        
                cardsSlider.css('width', `${distanceFromLeftToRight}px`);
            }
            
            setCardsSliderWidth();
        
            $(window).on('resize', setCardsSliderWidth);
        }
    });
}
export default contentCardsSlider;