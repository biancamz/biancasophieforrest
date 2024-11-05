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

        setTimeout(showSlides, 4000);
    }

    showSlides();
  function accordion(){
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                button.classList.toggle('active');

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    });
  }
  accordion();
