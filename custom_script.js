// Get elements from the DOM
const menuBtn = document.querySelector('.menuu-btn');
const menu = document.querySelector('.menu-containerr');
const dropdowns = document.querySelectorAll('.dropdownn > div');
const subDropdowns = document.querySelectorAll('.sub-dropdownn > div');

// Toggle variable
let menuOpen = false;

// Set click event to menu button
menuBtn.addEventListener('click', ()=>{
    // Toggle mega menu show class
    menu.classList.toggle('mega-menuu-show');
    // If the menu open variable is false
    if(menuOpen===false){
        // Set the close icon to the menu button
        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            close
        </span>
        `;
        // Set menu open to true
        menuOpen = true;
    }
    else{
        // Set the menu icon to the menu button
        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            menu
        </span>
        `;
        // Set menu open to false
        menuOpen = false;
    }
});

// Select all dropdowns
dropdowns.forEach(dropdown1=>{
    // Add click event
    dropdown1.addEventListener("click", (e)=>{
        // Toggle dropdown menu show class
        dropdown1.nextElementSibling.classList.toggle('menuu-show');
        // Toggle icon rotated class
        dropdown1.lastElementChild.classList.toggle('icon-rotated');
    });
});

// Select all sub dropdowns
subDropdowns.forEach(subDropdown=>{
    // Add click event
    subDropdown.addEventListener('click', (e)=>{
        // Toggle sub dropdown menu show class
        subDropdown.nextElementSibling.classList.toggle('sub-menu-show');
        // Toggle icon rotated class
        subDropdown.lastElementChild.classList.toggle('icon-rotated');
    });
});

// scrolled

window.addEventListener('scroll', function() {
    const nav = document.getElementById('navnav'); 
    const menuTexts = document.querySelectorAll('#menu-txt'); // Select all elements with the same ID

    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
        menuTexts.forEach(function(menuText) {
            menuText.style.color = '#175e5f'; // Change text color to black
        });
    } else {
        nav.classList.remove('nav-scrolled');
        menuTexts.forEach(function(menuText) {
            menuText.style.color = ''; // Reset text color (or set to the original color if needed)
        });
    }
});

// toast

document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons with the class 'toast-trigger'
    const toastTriggers = document.querySelectorAll('.toast-trigger');
    const toastElement = document.getElementById('liveToast');

    if (toastElement) {
        const toastBootstrap = new bootstrap.Toast(toastElement, {
            delay: 1000 // Set the delay for 4 seconds (or as needed)
        });

        // Add click event listener to each button to trigger the same toast
        toastTriggers.forEach(button => {
            button.addEventListener('click', function () {
                toastBootstrap.show();
            });
        });
    }
});
