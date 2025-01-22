// Scroll-based Animations
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // Animate specific elements based on scroll position
    const elements = [
        { selector: '.flower', offset: 500 },
        { selector: '.title', offset: 510 },
        { selector: '.opening', offset: 530 },
    ];

    elements.forEach((el) => {
        const element = $(el.selector);
        if (wScroll > element.offset().top - el.offset) {
            element.addClass('muncul');
        } else {
            element.removeClass('muncul');
        }
    });

    // Trigger general animations
    $('.animate-fadeinleft, .animate-fadeinright, .animate-fadeinup, .animate-fadeindown').each(function () {
        if (wScroll > $(this).offset().top - $(window).height() * 0.8) {
            $(this).css('opacity', '1');
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("2025-04-27T12:00:00Z"); // Event date in GMT+5 (Asia/Almaty)
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    } else {
        $("#timer").html("<p>Мереке басталды!</p>");
    }
}

// Initialize Countdown
setInterval(updateCountdown, 1000);
updateCountdown();

// Audio Player Controls
const playerButton = document.querySelector('.player-button');
const audio = document.querySelector('audio');
const playIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>`;
const pauseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>`;

playerButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playerButton.innerHTML = pauseIcon;
    } else {
        audio.pause();
        playerButton.innerHTML = playIcon;
    }
});

// Lightbox Functionality
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

// Navigation Active Class Toggle
const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach((li) => {
        li.classList.remove('active');
        const activeLink = document.querySelector(`nav ul li a[href*=${current}]`);
        activeLink?.classList.add('active');
    });
});

// Cover Animation
document.getElementById('open')?.addEventListener('click', () => {
    const cover = document.querySelector('#cover');
    cover.style.marginTop = "-100rem";
    cover.style.opacity = "0";
    cover.style.transition = "all 1s .1s ease-in-out";
    setTimeout(() => {
        cover.classList.add('hidden');
    }, 2000);
});

