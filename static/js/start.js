$('.docs-slider-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});


let progress_line_wrapper = document.getElementById('docs-progress-line');
let orange_progress_line = document.getElementById('orange-progress-line');
let width = parseFloat(getComputedStyle(orange_progress_line).width);
let parent_width = parseFloat(getComputedStyle(progress_line_wrapper).width);

// On before slide change
$('.docs-slider-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (width > (parent_width - ((parent_width / 100) * 16.666))) {
        width = 0;
        let line_width = `${width}px`;
        orange_progress_line.style.width = line_width;

    } else {
        width = (parent_width / 100) * 16.666 + width;
        let line_width = `${width}px`;
        orange_progress_line.style.width = line_width;
    }

    return width;

});