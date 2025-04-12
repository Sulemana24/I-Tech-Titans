const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line": "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Update footer year automatically
document.getElementById('footer-year').textContent = new Date().getFullYear();


window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    document.getElementById("backToTop").style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
};

function topFunction() {
    document.documentElement.scrollTop = 0;
};

document.addEventListener("DOMContentLoaded", () =>{
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let targetValue = counter.getAttribute("data-target");
        let target;
        if( targetValue.includes('K')){
          target =  targetValue.replace('K','') * 1000;
    }else{
        target = +targetValue;
    };
    let count = 0;
    let speed = target / 100;

    const formatNumber = (number) =>{
        if(number >= 1000){
            return (number / 1000) + "K";
        }else{
            return number;
        };
    };

    let updateCounter = () => {
        if (count < target){
            count += Math.ceil(speed);
            counter.textContent = formatNumber(count);
            setTimeout(updateCounter, 50);
        }else{
            counter.textContent = formatNumber(target);
        };
    };
    updateCounter();
    });
});


    const swiper = new Swiper('.wrapper', {
        loop: true,
        spaceBetween: 30,
      
        autoplay:{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', 
        },
      
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      
      });

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
    box.classList.toggle('active');
    });
});

/* document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
  
    let currentIndex = 0;
    const itemWidth = sliderItems[0].offsetWidth;
  
    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      updateSlider();
    });
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      updateSlider();
    });
  
    // Handle responsiveness
    window.addEventListener('resize', function() {
    const newWidth = sliderItems[0].offsetWidth;
      sliderTrack.style.transform = `translateX(-${currentIndex * newWidth}px)`;
    });
});
 */