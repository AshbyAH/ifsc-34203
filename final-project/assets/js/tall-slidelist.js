var container = document.getElementById("slide-container");
var sliders = document.getElementsByClassName("slider");
const slides = [];
const rightBtns = document.getElementsByClassName("btn-r");
const leftBtns = document.getElementsByClassName("btn-l");

const currPositions = [];
const currMargins = [];
var slidesPerPg = 0;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

var i;

for (i=0; i < sliders.length; i++) {
    currPositions.push(0);
    currMargins.push(0);

    slides[i] = sliders[i].getElementsByClassName("slide").length; // Adds the individual lengths of each slider to the slides array
}

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

    for (i=0; i < sliders.length; i++) {
        if (currPositions[i] > slides[i]) {
        currPositions[i] -= slidesPerPg;
        };

        currMargins[i] = - currPositions[i] * (100);
        sliders[i].style.marginLeft = currMargins[i] + '%';

        if (currPositions[i] > slidesPerPg) {
            leftBtns[i].classList.remove('inactive');
        }

        if (currPositions[i] < slides[i]) {
            rightBtns[i].classList.remove('inactive');
        }

        if (currPositions[i] >= slides[i]) {
            rightBtns[i].classList.add('inactive');
        }
    }
}

checkWidth();
for (i=0; i < sliders.length; i++) {
    currPositions[i] = slidesPerPg;
}

function slideRight(sid) {
    if (currPositions[sid] != slidesPerPg) {
        if (slidesPerPg === 1) {
            sliders[sid].style.marginLeft = currMargins[sid] + (83.333333) + '%';
            currMargins[sid] += (83.333333);
            currPositions[sid] -= slidesPerPg;
        } else {
            sliders[sid].style.marginLeft = currMargins[sid] + (100) + '%';
            currMargins[sid] += (100);
            currPositions[sid] -= slidesPerPg;
        }
    };

    if (currPositions[sid] === slidesPerPg) {
        leftBtns[sid].classList.add('inactive');
    }

    if (currPositions[sid] < slides[sid]) {
        rightBtns[sid].classList.remove('inactive');
    }
    console.log(currPositions[sid])
};

function slideLeft(sid) {
    console.log(slides[sid])
    console.log(currPositions[sid])
    if (currPositions[sid] < slides[sid]) {
        if (slidesPerPg === 1) {
            sliders[sid].style.marginLeft = currMargins[sid] - (83.333333) + '%';
            currMargins[sid] -= (83.333333);
            currPositions[sid] += slidesPerPg;
        } else {
            sliders[sid].style.marginLeft = currMargins[sid] - (100) + '%';
            currMargins[sid] -= (100);
            currPositions[sid] += slidesPerPg;
        }
    }
    if (currPositions[sid] >= slides[sid]) {
        rightBtns[sid].classList.add('inactive');
    }

    if (currPositions[sid] > 0) {
        leftBtns[sid].classList.remove('inactive');
    }
    console.log(currPositions[sid])
    
};