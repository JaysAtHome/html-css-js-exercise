document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const subject = document.getElementById('inputSubject').value.trim();
    const message = document.getElementById('inputMessage').value.trim();

    // Validation flags
    let isValid = true;

    // Checks if Name is Valid
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Checks if Email is Valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Checks if Subject is Valid
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
         // Show the modal
         var submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'));
         submissionModal.show();
 
         // Clear form fields
         document.getElementById('contactForm').reset();
        // You can also submit the form here using AJAX or similar methods
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all project titles
    const projectTitles = document.querySelectorAll(".card-title-overlay");

    // Iterate over each title and add a click event listener
    projectTitles.forEach(function(title) {
        title.addEventListener("click", function() {
            const projectsSection = document.getElementById("projects");

            // Check the current background color and toggle it
            if (projectsSection.style.backgroundColor === "rgb(208, 225, 249)") {
                projectsSection.style.backgroundColor = ""; // Reset to original
            } else {
                projectsSection.style.backgroundColor = "#d0e1f9"; // Light blue color
            }
        });
    });
});

const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
    
    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
      scrollToTopButton.className = "top-link show";
    } else {
      scrollToTopButton.className = "top-link hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    
    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      // ScrollTo takes an x and a y coordinate.
      // Increase the '10' value to get a smoother/slower scroll!
      window.scrollTo(0, c - c / 10);
    }
  };

  // When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  }
  