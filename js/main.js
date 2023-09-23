// document.addEventListener('DOMContentLoaded', function () {
//   const menuOpenBtn = document.querySelector('menu-open-btn');
//   const menuCloseBtn = document.querySelector('menu-close-btn');
//   const offCanvasMenu = document.querySelector('offcanvas-menu');

//   menuCloseBtn.addEventListener('click', function () {
//     offCanvasMenu.classList.remove('translate-x-0');
//     offCanvasMenu.classList.add('translate-x-full');
//   });

//   menuOpenBtn.addEventListener('click', function () {
//     offCanvasMenu.classList.remove('translate-x-0');
//     offCanvasMenu.classList.add('translate-x-0');
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.getElementById('menu-open-button');
  const closeButton = document.getElementById('menu-close-btn');
  const mobileMenu = document.getElementById('offcanvas-menu');

  // Function to open the mobile menu
  function openMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
  }

  // Add event listeners to open and close the mobile menu
  openButton.addEventListener('click', openMobileMenu);
  closeButton.addEventListener('click', closeMobileMenu);
});
