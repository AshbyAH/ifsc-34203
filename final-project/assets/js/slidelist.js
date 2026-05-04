var container = document.getElementById("slide-container");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var btns = document.getElementsByClassName("btn");

var currPos = 0;
var currMargin = 0;
var slidesPerPg = 0;
var slidesCnt = slides - slidesPerPg;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}



function setParams(w) {
    console.log(w)
    if (w < 421) {
        slidesPerPg = 1;
    } else {
        if (w < 901) {
            slidesPerPg = 2;
        } else {
            if (w < 1325) {
                slidesPerPg = 3;
            } else {
                if (w < 1751) {
                    slidesPerPg = 4;
                } else {
                    if (w < 2177) {
                        slidesPerPg = 5;
                    } else {
                        slidesPerPg = 6;
                    }
                }
            }
        }
    }

    slidesCnt = slides - slidesPerPg;
    if (currPos > slides) {
        currPos -= slidesPerPg;
    };

    currMargin = - currPos * (100);
    slider.style.marginLeft = currMargin + '%';

    if (currPos > 0) {
        btns[0].classList.remove('inactive');
    }

    if (currPos < slides) {
        btns[1].classList.remove('inactive');
    }

    if (currPos >= slides) {
        btns[1].classList.add('inactive');
    }
}

checkWidth();

function slideRight() {
    if (currPos != 0) {
        slider.style.marginLeft = currMargin + (100) + '%';
        currMargin += (100);
        currPos -= slidesPerPg;
    };

    if (currPos === 0) {
        btns[0].classList.add('inactive');
    }

    if (currPos < slides) {
        btns[1].classList.remove('inactive');
    }
};

function slideLeft() {
    console.log(currPos)
    if ((currPos < slides)) {
        slider.style.marginLeft = currMargin - (100) + '%';
        currMargin -= (100);
        currPos += slidesPerPg;
    }
    if (currPos >= slides) {
        btns[1].classList.add('inactive');
    }

    if (currPos > 0) {
        btns[0].classList.remove('inactive');
    }
    console.log(currPos)
};