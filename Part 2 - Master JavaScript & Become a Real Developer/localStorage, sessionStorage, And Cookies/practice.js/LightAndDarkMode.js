document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleTheme');
  const body = document.body;

  // 1. Load saved theme or fallback to system
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    body.className = savedTheme;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.className = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', body.className);
  }

  // 2. Toggle theme on button click
  toggleButton.addEventListener('click', function () {
    const newTheme = body.classList.contains('light') ? 'dark' : 'light';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});






// DeepS. AI suggestions
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('toggleTheme');
//     const body = document.body;
    
//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         body.className = savedTheme;
//     }
    
//     // Toggle theme function
//     toggleButton.addEventListener('click', function() {
//         if (body.classList.contains('light')) {
//             body.classList.replace('light', 'dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             body.classList.replace('dark', 'light');
//             localStorage.setItem('theme', 'light');
//         }
//     });
// });