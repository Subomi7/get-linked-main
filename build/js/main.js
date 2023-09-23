function openMobileMenu() {
  const openButton = document.getElementById('menu-open-button');
  const closeButton = document.getElementById('menu-close-btn');
  const mobileMenu = document.getElementById('offcanvas-menu');

  // Function to open the mobile menu
  function openMobileButton() {
    mobileMenu.style.display = 'flex';
    console.log('menuButton clicked');
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    mobileMenu.style.display = 'none';
  }

  // Add event listeners to open and close the mobile menu
  openButton.addEventListener('click', openMobileButton);
  closeButton.addEventListener('click', closeMobileMenu);
}
