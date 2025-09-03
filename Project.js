/* Mariam & Toqa */

document.querySelectorAll('.home-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('.home').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.home-list li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

let menu = document.querySelector('.home-icons .fa-bars');
let homelist = document.querySelector('.home-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    homelist.classList.toggle('open');
};
/* Mariam & Toqa */


/* Mariam */
function myfunction() {
    document.body.classList.toggle("dark");
}
/* Mariam */

/* Amr */

/* Amr */

/* Marwan*/
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#testimonialCarousel');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const texts = document.querySelectorAll('.testimonial-quote');
    let currentIndex = 0;

    function updateText() {
        texts.forEach((text, index) => {
            text.style.display = 'none';
        });

        texts[currentIndex].style.display = 'block';
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    function changeText(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % texts.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        }
        updateText();
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateText();
        });
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => changeText('next'));
    document.querySelector('.carousel-control-prev').addEventListener('click', () => changeText('prev'));

    updateText();
});


/* Marwan*/



/* Peter */

function validateForm() {
    let name = document.forms["myForm"]["fName"].value
    if (name.length == 0) {
        alert("Please Enter A Valid Name");
        return false;
    }
    for (var i = 0; i < name.length; ++i)/*checks if name contains any letter that's not in the alphabet then it's not valid*/ {
        if (!(name[i] >= 'a' && name[i] <= 'z' || name[i] >= 'A' && name[i] <= 'Z')) {
            alert("Please Enter A Valid Name");
            return false;
        }
    }
    return true;
}

/* Peter */

document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkMode = document.querySelector('#toggleDarkMode');
    const darkModeIcon = document.querySelector('#darkModeIcon');

    function applyDarkMode(isDarkMode) {
        const sofaMode = document.getElementById("footer-sofa");
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            sofaMode.src = "sofa_1-removebg-preview.png";
            darkModeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.classList.remove('dark-mode');
            sofaMode.src = "sofa 1.png";
            darkModeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // Check localStorage to apply the saved mode
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    applyDarkMode(darkMode);

    // Toggle dark mode on button click
    if (toggleDarkMode) {
        toggleDarkMode.addEventListener('click', function () {
            const isDarkMode = !document.body.classList.contains('dark-mode');
            applyDarkMode(isDarkMode);
            localStorage.setItem('dark-mode', isDarkMode);
        });
    }
});


