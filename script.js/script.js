
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');

    // Smooth Scroll for Navigation
    document.querySelectorAll('#header div div nav ul div div a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            // Ensure that the element exists before trying to scroll
            if (target) {
                // Adjust for fixed headers if necessary
                const offset = target.offsetTop - document.querySelector('#header').offsetHeight;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');

    // Smooth Scroll for Navigation
    document.querySelectorAll('#home div a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            // Ensure that the element exists before trying to scroll
            if (target) {
                // Adjust for fixed headers if necessary
                const offset = target.offsetTop - document.querySelector('#header').offsetHeight;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    updateDots();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function createDots() {
    const dotsContainer = document.querySelector('.dots');
    const totalSlides = document.querySelectorAll('.slide').length;
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');

    // Initialize slider
    createDots();
    showSlide(currentIndex);
    setInterval(nextSlide, 8000); // Change slide every 5 seconds

    // Filter projects based on category
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Scroll to the portfolio section
            document.querySelector('#portfolio').scrollIntoView({
                behavior: 'smooth'
            });

            // Filter logic
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Automatically scroll to the home section on load
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });

    // Smooth scroll for slider buttons
    document.querySelectorAll('.slide button a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            const targetFilter = this.getAttribute('href').substring(1);
            document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`).click();
        });
    });

    // Dropdown menu functionality
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const cancelButton = document.getElementById('cancel-button');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.remove('hidden');
        dropdownContent.classList.add('visible');
        dropdownButton.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        dropdownContent.classList.remove('visible');
        dropdownContent.classList.add('hidden');
        dropdownButton.style.display = 'block';
    });

    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('visible');
            dropdownContent.classList.add('hidden');
            dropdownButton.style.display = 'block';
        }
    });

});


function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    updateDots();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function createDots() {
    const dotsContainer = document.querySelector('.dots');
    const totalSlides = document.querySelectorAll('.slide').length;
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

document.addEventListener('DOMContentLoaded', () => {
    const projects = {
        'project1': [
            '/IMG/8e2d92612b109a68a102bc10b4a83c04.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-pixabay-262367.jpg',
        ],
        'project2': [
            '/IMG/8e2d92612b109a68a102bc10b4a83c04.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-pixabay-262367.jpg'
        ],
        'project3': [
            '/IMG/8e2d92612b109a68a102bc10b4a83c04.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project4': [
            '/IMG/8e2d92612b109a68a102bc10b4a83c04.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project5': [
            '/IMG/8e2d92612b109a68a102bc10b4a83c04.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project6': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project7': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project8': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project9': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project10': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project11': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project12': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project13': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project14': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project15': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project16': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project17': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project18': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project19': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project20': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project21': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project22': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project23': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project24': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project25': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project26': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project27': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project28': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project29': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project30': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project31': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project32': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project33': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project34': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project35': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project36': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project37': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project38': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project39': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project40': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project41': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project42': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project43': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project44': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project45': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project46': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project47': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project48': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project49': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'project50': [
            '/IMG/some-image.jpg',
            '/IMG/another-image.jpg',
            '/IMG/last-image.jpg'
        ]
    };

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxDotsContainer = document.querySelector('.lightbox-dots');
    let currentImages = [];
    let currentIndex = 0;

    function updateDots() {
        const dots = document.querySelectorAll('.lightbox-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function createDots() {
        lightboxDotsContainer.innerHTML = '';
        currentImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'lightbox-dot';
            dot.addEventListener('click', () => {
                currentIndex = index;
                lightboxImage.src = currentImages[currentIndex];
                updateDots();
            });
            lightboxDotsContainer.appendChild(dot);
        });
        updateDots();
    }

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('id');
            if (projects[projectId]) {
                currentImages = projects[projectId];
                currentIndex = 0;
                lightboxImage.src = currentImages[currentIndex];
                createDots(); // Create dots when opening lightbox
                lightbox.style.display = 'flex';
            }
        });
    });

    document.querySelector('.lightbox .close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    document.querySelector('.lightbox .arrow.left').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
        lightboxImage.src = currentImages[currentIndex];
        updateDots();
    });

    document.querySelector('.lightbox .arrow.right').addEventListener('click', () => {
        currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
        lightboxImage.src = currentImages[currentIndex];
        updateDots();
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".mobile");
    const cancelButton = document.getElementById("cancel-button");
    const dropdownContent = document.getElementById("dropdown-content");

    // Ensure the dropdown menu is hidden initially
    dropdownContent.classList.add("hidden");

    // Show dropdown with sliding effect when the menu is clicked
    dropdownButton.addEventListener("click", () => {
        dropdownContent.classList.remove("hidden"); // Show the element
        setTimeout(() => {
            dropdownContent.classList.add("active"); // Trigger the sliding animation
        }, 10); // Small delay to allow for the display update
    });

    // Hide dropdown with sliding effect when the cancel button is clicked
    cancelButton.addEventListener("click", () => {
        dropdownContent.classList.remove("active"); // Trigger the slide-out animation
        setTimeout(() => {
            dropdownContent.classList.add("hidden"); // Hide the element after the animation
        }, 2000); // Duration matches the CSS transition (0.3s)
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    function checkVisibility() {
        portfolioItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const triggerHeight = window.innerHeight * 0.8; // 80% of the viewport height

            if (rect.top < triggerHeight) {
                item.classList.add('show');
            }
        });
    }

    // Check visibility on scroll and on page load
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


// document.querySelector('.mobile img').addEventListener('click', function() {
// document.getElementById('dropdownn-content').classList.toggle('hidden');

// });
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const loadMoreButton = document.getElementById('loadMore');
    const portfolioContainer = document.querySelector('.portfolio-items');
    
    let visibleItemsCount = 6;
  
    function filterItems(filter) {
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterItems(filter);
      });
    });
  
    loadMoreButton.addEventListener('click', () => {
      const items = Array.from(portfolioItems);
      for (let i = visibleItemsCount; i < visibleItemsCount + 6; i++) {
        if (items[i]) {
          items[i].style.display = 'block';
        }
      }
      visibleItemsCount += 6;
    });
  
    // Initially hide items beyond the first 6
    portfolioItems.forEach((item, index) => {
      if (index >= visibleItemsCount) {
        item.style.display = 'none';
      }
    });
  });
  
  
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        // Get all sections by ID
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul div a');

        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the current scroll position is within the section
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id'); // Get the section's ID
            }
        });

        // Remove active class from all links and then add it to the current one
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel__item');
    const nextBtn = document.querySelector('.carousel__control.right');
    const prevBtn = document.querySelector('.carousel__control.left');

    let currentIndex = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        const offset = -currentIndex * slides[0].offsetWidth;
        document.querySelector('.carousel__inner').style.transform = `translateX(${offset}px)`;

        // Add event listener to the active slide
        slides.forEach(slide => slide.removeEventListener('click', goToServicePage)); // Remove previous listeners
        slides[currentIndex].addEventListener('click', goToServicePage);
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function goToPreviousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function goToServicePage() {
        window.location.href = '/html/service.html';
    }

    // Event listeners for manual control
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPreviousSlide);

    // Initialize the carousel
    updateCarousel();

    // Auto-scroll every 10 seconds (10,000 milliseconds)
    setInterval(goToNextSlide, 10000);
});  



document.addEventListener("DOMContentLoaded", function() {
    const btnHeaderButtons = document.querySelectorAll(".btnheader .filter-btn");
    const portfolioGalleryButtons = document.querySelectorAll(".portfolio-gallery .filter-btn");
    const portfolioFilter = document.getElementById("portfolio-filter");
  
    // Function to update the visibility of .portfolio-gallery buttons based on the active filter
    function updatePortfolioGalleryButtons(activeFilter) {
      portfolioGalleryButtons.forEach(button => {
        if (activeFilter === "all") {
          button.style.display = button.getAttribute("data-filter") === "all" ? "block" : "none"; // Show only "All"
        } else if (button.getAttribute("data-filter") === activeFilter) {
          button.style.display = "block"; // Show button matching filter
        } else {
          button.style.display = "none"; // Hide other buttons
        }
      });
    }
  
    // Function to handle button clicks in .btnheader
    function handleButtonClick(event) {
      const filter = event.target.getAttribute("data-filter");
  
      // Update the button styles in .btnheader
      btnHeaderButtons.forEach(btn => {
        btn.classList.remove("active"); // Remove active class from all buttons
      });
      event.target.classList.add("active"); // Add active class to the clicked button
  
      // Update the visibility of .portfolio-gallery buttons based on the active filter
      updatePortfolioGalleryButtons(filter);
    }
  
    // Attach click event listeners to filter buttons
    btnHeaderButtons.forEach(button => {
      button.addEventListener("click", handleButtonClick);
    });
  
    // Handle click on the portfolio anchor to filter only the "All" button
    portfolioFilter.addEventListener("click", function() {
      // Show only the "All" button in the .portfolio-gallery
      updatePortfolioGalleryButtons("all");
  
      // Optionally, remove active class from other buttons in .btnheader
      btnHeaderButtons.forEach(btn => {
        btn.classList.remove("active");
      });
    });
  
    // Optionally, click the "All" button to show all items by default
    document.querySelector('.btnheader .filter-btn[data-filter="all"]').click();
  });
  
  

  
  
  document.addEventListener('DOMContentLoaded', function() {
    let itemsPerPage = 6;
    let currentItems = 0;
    let currentFilter = 'all';
  
    function showItems(filter) {
      let items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => item.style.display = 'none'); // Hide all items
      let filteredItems = [...items].filter(item => filter === 'all' || item.getAttribute('data-project') === filter);
      filteredItems.slice(0, itemsPerPage).forEach(item => item.style.display = 'block'); // Show the first 6 items
      currentItems = itemsPerPage;
      currentFilter = filter;
  
      if (filteredItems.length > currentItems) {
        document.getElementById('loadMore').style.display = 'block'; // Show the Load More button if more than 6 items
      } else {
        document.getElementById('loadMore').style.display = 'none'; // Hide the Load More button if fewer items than 6
      }
    }
  
    // Initially show 'all' items and show the Load More button
    showItems('all');
  
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', function() {
        let filter = this.getAttribute('data-filter');
        showItems(filter); // Show first 6 filtered items
        // Check if more than 6 items are in the filtered result, and show the Load More button if necessary
      });
    });
  
    document.getElementById('loadMore').addEventListener('click', function() {
      let items = document.querySelectorAll('.portfolio-item');
      let filteredItems = [...items].filter(item => currentFilter === 'all' || item.getAttribute('data-project') === currentFilter);
      let remainingItems = filteredItems.slice(currentItems, currentItems + itemsPerPage);
      remainingItems.forEach(item => item.style.display = 'block'); // Show the next 6 items
      currentItems += itemsPerPage;
  
      if (currentItems >= filteredItems.length) {
        this.style.display = 'none'; // Hide the button when no more items
      }
    });
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log('Response:', data); // Log the server response
            if (data.startsWith('success')) {
                alert("Message sent successfully!");
                form.reset(); // Optionally reset the form
            } else {
                alert("There was an issue sending your message. Please try again.");
            }
        })
        .catch(error => {
            alert("An error occurred. Please try again.");
            console.error('Error:', error);
        });
    });
});