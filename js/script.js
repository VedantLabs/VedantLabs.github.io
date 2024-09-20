function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Setting up Handlebars as the view engine
app.set('view engine', 'hbs');

// Define the route for the index page
app.get('/', (req, res) => {
  res.render('index'); // Renders index.hbs from the views directory
});

// Define the route for the Vedant Labs page
app.get('/VedantLabs', (req, res) => {
  res.render('VedantLabs'); // Renders vedant-labs.hbs
});