const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set fist img opacity //
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {

    // rest for opacity 
    imgs.forEach(img => (img.style.opacity = 1));

    // change current image to src of click image //
    current.src = e.target.src;
    
    // Add fade class //
    current.classList.add('fade-in');

    // remove fade-In class after .5 seconds//
    setTimeout(() => current.classList.remove('fade-in'),500); 

    // change  the opacity to opacity var //
    e.target.style.opacity = opacity;
}

