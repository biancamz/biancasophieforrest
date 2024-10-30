let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}


    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000); 

}

function showImage(elemId, imgSrc) {
    const elem = document.getElementById(elemId);
    const popImage = new Image();
    popImage.src = imgSrc; // Using the provided GitHub Pages URL
    popImage.className = "hover-image";
    popImage.style.top = elem.getBoundingClientRect().bottom + window.scrollY + "px"; // Position below the element
    popImage.style.left = elem.getBoundingClientRect().left + window.scrollX + "px"; // Align left with the element
    document.body.appendChild(popImage);
}

function hideImage(elemId) {
    const popImages = document.querySelectorAll('.hover-image');
    popImages.forEach(img => img.remove());
}
  
