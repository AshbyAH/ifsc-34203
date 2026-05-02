const cItems = document.querySelectorAll(".carousel-item");
let index = 0;
const prevBtn = document.querySelector(".cPrev")
const nextBtn = document.querySelector(".cNext")

function showSlide (idx) {
    for (let i = 0; i < cItems.length; i++) {
        cItems[i].classList.remove('active')    // Find and deactivate the currently active slide
    }
    cItems[idx].classList.add('active');    // Activate selected slide
}

showSlide(index)

prevBtn.addEventListener('click', function () {
    index--;    // Move to previous slide
    
    if (index < 0) {
        index = cItems.length-1;    // If first slide active when cPrev pressed, move to last slide
    }

    showSlide(index);
})

nextBtn.addEventListener('click', function () {
    index = index+1;    // Move to next slide

    if (index > cItems.length-1) {
        index = 0;    // If last slide active when cNext pressed, move to first slide
    }

    showSlide(index);
})