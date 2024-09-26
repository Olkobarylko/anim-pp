const videoButton = () => {
    $(document).ready(function() {
        const videoBlock = $('.js--grids');
        const playBtn = videoBlock.find('.js--grids-video-button');

        playBtn.on('click', function () {
            $(this).closest(videoBlock).addClass('video-playing');
            $(this).addClass('hidden');
            const videoIframe = $(this).closest(videoBlock).find('iframe');
            if (videoIframe.attr('src').indexOf('autoplay=0') !== -1) {
                videoIframe.attr('src', videoIframe.attr('src').replace('autoplay=0', 'autoplay=1'));
            } else {
                videoIframe.attr('src', videoIframe.attr('src') + '&autoplay=1');
            }
        });
    });
}

export default videoButton;