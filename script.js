document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.querySelector('.preloader');
  const videoSection = document.querySelector('.slider_section'); // Adjust as per your video section
  const video = document.querySelector('.slider_section video'); // Adjust as per your video element

  // Animation for preloader
  preloader.addEventListener('animationend', function() {
    setTimeout(function() {
      preloader.style.opacity = '0';
      setTimeout(function() {
        preloader.style.display = 'none';
        document.body.classList.add('loaded'); // Add loaded class to body

        // Play the video
        video.play();

        // Restore body overflow to auto after video starts
        setTimeout(function() {
          document.body.style.overflow = 'auto';
        }, 1000); // Adjust timing if needed

        // Delayed scroll to video section
        setTimeout(function() {
          scrollToElement(videoSection);
        }, 100); // Adjust timing if needed
      }, 200); // Adjust timing to match preloader animation duration
    }, 1000); // Adjust timing if needed
  });

  // Function to animate scroll
  function scrollToElement(element) {
    const offsetTop = element.offsetTop; // Get the top offset of the video section
    const distance = offsetTop - window.pageYOffset;
    const duration = 0;
    const increments = 20;
    const incrementTime = duration / increments;

    function animateScroll(currentTime) {
      const progress = currentTime / duration;
      if (progress <= 1) {
        window.scrollBy(0, distance / increments);
        setTimeout(function() {
          animateScroll(currentTime + incrementTime);
        }, incrementTime);
      }
    }

    animateScroll(0);
  }
});

const imageContainers = document.querySelectorAll('.image-container');
const submarinerHeading = document.getElementById('submariner-heading');
const submarinerParagraph = document.getElementById('submariner-paragraph');

imageContainers.forEach((container, index) => {
    container.addEventListener('mouseover', () => {
        switch (index) {
            case 0:
                submarinerHeading.textContent = 'Submariner';
                submarinerParagraph.textContent = 'The Submariner’s Oyster case, guaranteed waterproof to a depth of 300 metres (1,000 feet), provides the movement with optimal protection from water and dust.';
                break;
            case 1:
                submarinerHeading.textContent = 'Submariner';
                submarinerParagraph.textContent = 'The Triplock winding crown – fitted with a triple waterproofness system – screws down securely against the case, ensuring watertight security.';
                break;
            case 2:
                submarinerHeading.textContent = 'Submariner';
                submarinerParagraph.textContent = 'Hour markers in simple shapes – triangle, circle, rectangle – and broad hour and minute hands enable instant and reliable reading to prevent any risk of confusion underwater.';
                break;
            case 3:
                submarinerHeading.textContent = 'Submariner';
                submarinerParagraph.textContent = '"I was wearing a Submariner the first time I saw the Titanic for real through the porthole of a submersible, and I was wearing the same watch in my black tie when I went up on the stage to get the Oscar for directing Titanic" ~James Cameron';
                break;
            default:
                break;
        }
    });
});
