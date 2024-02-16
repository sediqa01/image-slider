window.addEventListener('load', function(){

    const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';

    const slider = document.querySelector('#slider-wrapper ul');
    const next = tdocument.querySelector("#next");
    const previous = tdocument.querySelector("#prev");

    let leftPosition = 0;
    let counter = 0;

    slider.style.width = totalWidth;





});