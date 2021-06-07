
gsap.from(
    '.bottom-image-1',
{
    delay: 1,
    duration: 3, 
    x: -30, 
    opacity: 0,
    ease: "power2.out"
})

gsap.from(
    '.bottom-image-2',
{
    delay: 1,
    duration: 3, 
    x: 30, 
    opacity: 0,
    ease: "power2.out"
})

gsap.from(
    '.img-current',
{
    delay: 1,
    duration: 3, 
    y: -30, 
    opacity: 0,
    ease: "power2.out"
})

gsap.from('.desktop-actions, .top-actions',
{
    delay: 1,
    duration: 3, 
    y: 20, 
    opacity: 0,
    ease: "power2.out"
})

gsap.from(".content h1, .bottom-inner-container h2",
{
    delay: 2,
    duration: 3, 
    x: 20, 
    opacity: 0,
    ease: "power1.out"
})

gsap.from(".content p, .bottom-inner-container p",
{
    delay: 2.75,
    duration: 2, 
    x: 20, 
    opacity: 0,
    ease: "power1.out"
})

gsap.from(".cta",
{
    delay: 3.5,
    duration: 2, 
    x: 20, 
    opacity: 0,
    ease: "power1.out"
})

gsap.from(".top-nav",
{
    delay: 3.5,
    duration: 2, 
    x: -30, 
    opacity: 0,
    ease: "power2.out"
})






// CAROUSELL 
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const desktop_prev = document.getElementById('desktop_prev');
const desktop_next = document.getElementById('desktop_next');

const slides = document.querySelectorAll('.top-image > img');
const desktop_slides = document.querySelectorAll('.desktop-image > img');

const contents = document.querySelectorAll('.top-content .content');
const desktop_contents = document.querySelectorAll('.desktop-content .content');


prev.addEventListener('click', function(){
    currentIndex = getIndex();
    prevSlide(currentIndex);
})

desktop_prev.addEventListener('click', function(){
    currentDesktopIndex = getDesktopIndex();
    desktop_prevSlide(currentDesktopIndex);
    console.log('desktop prev');
})

next.addEventListener('click', function(){
    currentIndex = getIndex();
    nextSlide(currentIndex);
})

desktop_next.addEventListener('click', function(){
    currentDesktopIndex = getDesktopIndex();
    desktop_nextSlide(currentDesktopIndex);
})

function prevSlide(currentIndex) {

    // remove class 'img-current' from current index
    slides[currentIndex].classList.remove('img-current');

    contents[currentIndex].classList.add('hide');

    // if reaches first image, add class 'img-current' to the last slide
    if(currentIndex === 0){
        // console.log('first image reached');
        slides[currentIndex].classList.remove('img-current');
        slides[slides.length-1].classList.add('img-current');

        contents[currentIndex].classList.add('hide');  
        contents[contents.length-1].classList.remove('hide');
    }
    else{
        // add class 'img-current' on the next index
        slides[currentIndex-1].classList.add('img-current');

        contents[currentIndex-1].classList.remove('hide');
    }
}

function desktop_prevSlide(currentDesktopIndex) {

    // remove class 'img-current' from current index
    desktop_slides[currentDesktopIndex].classList.remove('img-current');

    desktop_contents[currentDesktopIndex].classList.add('hide');

    // if reaches first image, add class 'img-current' to the last slide
    if(currentDesktopIndex === 0){
        // console.log('first image reached');
        desktop_slides[currentDesktopIndex].classList.remove('img-current');
        desktop_slides[slides.length-1].classList.add('img-current');

        desktop_contents[currentDesktopIndex].classList.add('hide');  
        desktop_contents[contents.length-1].classList.remove('hide');
    }
    else{
        // add class 'img-current' on the next index
        desktop_slides[currentDesktopIndex-1].classList.add('img-current');

        desktop_contents[currentDesktopIndex-1].classList.remove('hide');
    }
}

function nextSlide(currentIndex) {

    // remove class 'img-current' from current index
    slides[currentIndex].classList.remove('img-current');

    contents[currentIndex].classList.add('hide');

    // if last image reached, add class 'img-current' on index 0
    if(currentIndex === slides.length-1){
        // console.log('last image reached');
        slides[currentIndex].classList.remove('img-current');
        slides[0].classList.add('img-current');


        contents[currentIndex].classList.add('hide');  
        contents[0].classList.remove('hide');

    }
    else{
        // add class 'img-current' on the next index
        slides[currentIndex+1].classList.add('img-current');

        contents[currentIndex+1].classList.remove('hide');
    }
}

function desktop_nextSlide(currentDesktopIndex) {

    // remove class 'img-current' from current index
    desktop_slides[currentDesktopIndex].classList.remove('img-current');

    desktop_contents[currentDesktopIndex].classList.add('hide');

    // if last image reached, add class 'img-current' on index 0
    if(currentDesktopIndex === desktop_slides.length-1){
        // console.log('last image reached');
        desktop_slides[currentDesktopIndex].classList.remove('img-current');
        desktop_slides[0].classList.add('img-current');

        desktop_contents[currentDesktopIndex].classList.add('hide');  
        desktop_contents[0].classList.remove('hide');

    }
    else{
        // add class 'img-current' on the next index
        desktop_slides[currentDesktopIndex+1].classList.add('img-current');

        desktop_contents[currentDesktopIndex+1].classList.remove('hide');
    }
}

function getIndex(){

    var currentIndex;
    // loop through nodelist
    for (var i=0; i < slides.length; i++){
        // get index of class="img-current"
        if (slides[i].classList.value === "img-current"){
            currentIndex = i;
        }
    }
    return currentIndex;
}

function getDesktopIndex(){

    var currentDesktopIndex;
    // loop through nodelist
    for (var i=0; i < desktop_slides.length; i++){
        // get index of class="img-current"
        if (desktop_slides[i].classList.value === "img-current"){
            currentDesktopIndex = i;
        }
    }
    return currentDesktopIndex;
}


// NAV BAR
let burger = document.querySelector('.top-burger');
let close = document.querySelector('.top-close');
let navLinks = document.querySelector('.top-links');

burger.addEventListener('click', function(){
    // toggle nav bar
    navLinks.classList.add('active');

    burger.classList.add('hide');


    close.classList.remove('hide');
    close.classList.add('show');
})

close.addEventListener('click', function(){
    // close nav bar
    navLinks.classList.remove('active');


    burger.classList.add('show');
    burger.classList.remove('hide');

    close.classList.remove('show');
    close.classList.add('hide');
})




