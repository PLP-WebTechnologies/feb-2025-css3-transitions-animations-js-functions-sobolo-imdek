// Get references to the elements in the HTML
const themeButton = document.getElementById('themeButton');
const animateButton = document.getElementById('animateButton');
const animatedImage = document.getElementById('animatedImage');

// Check if there's a saved theme in localStorage
const currentTheme = localStorage.getItem('theme');

// If a theme is saved, apply it to the body
if (currentTheme) {
  document.body.classList.add(currentTheme); // Apply the saved theme class
}

// Add an event listener to the theme button
themeButton.addEventListener('click', () => {
  // Toggle between 'dark' and 'light' theme
  let theme = document.body.classList.contains('dark') ? 'light' : 'dark';
  
  // Toggle the dark class on the body element
  document.body.classList.toggle('dark');
  
  // Save the selected theme in localStorage for future visits
  localStorage.setItem('theme', theme);
});

// Add an event listener to the animate button
animateButton.addEventListener('click', () => {
  // Add the 'bounce' class to the image, triggering the animation
  animatedImage.classList.add('bounce');
});
