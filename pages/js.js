let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelectorAll(".mySlides");
        
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slideIndex++;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0; 
        }

        slides[slideIndex].classList.add("active");

        setTimeout(showSlides, 3000);
    }

    showSlides();
  
