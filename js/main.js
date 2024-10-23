// Toggle sidebar visibility
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
    sidebar.style.right = '0';  // Slide in from the right
    menuToggle.classList.add('hide');  // Hide the menu button
});

closeBtn.addEventListener('click', () => {
    sidebar.style.right = '-250px';  // Hide it to the right again
    menuToggle.classList.remove('hide');  // Show the menu button again
});



