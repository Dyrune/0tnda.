
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready.');
    
    // Example: Smooth Scroll for Navigation
    document.querySelectorAll('#header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

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

    // Automatically click the "All Projects" button on load
    document.querySelector('.filter-btn[data-filter="all"]').click();

    // Smooth scroll for slider buttons
    document.querySelectorAll('.slide button a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            const targetFilter = this.getAttribute('href').substring(1);
            document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`).click();
        });
    });

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
        'revit': [
            '/IMG/pexels-pixabay-262367.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-pixabay-262367.jpg',
        ],
        'sketchup': [
            '/IMG/pexels-pixabay-262367.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-pixabay-262367.jpg'
        ],
        'autocad': [
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg'
        ],
        'lumion': [
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-yentl-jacobs-43020-157811.jpg'
        ],
        'clearic': [
            '/IMG/pexels-pixabay-262367.jpg',
            '/IMG/pexels-efrem-efre-2786187-19509322.jpg',
            '/IMG/pexels-pixabay-262367.jpg'
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
            const project = item.getAttribute('data-project');
            if (projects[project]) {
                currentImages = projects[project];
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
  