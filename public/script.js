// ---------------- NAVBAR TOGGLE ----------------
const menuIcon = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });
}

// ---------------- HEADER SCROLL EFFECT ----------------
window.addEventListener('scroll', () => {
    if (menuIcon) menuIcon.classList.remove('fa-times');
    if (navbar) navbar.classList.remove('nav-toggle');

    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

// ---------------- QUOTE API ---------------------------
let quote = document.querySelector(".quote-text");
let author = document.querySelector(".quote-author");

// Fetch quotes from your backend endpoint
fetch("/quotes")
  .then(res => res.json())
  .then(data => {
      // Pick a random quote from the returned array
      const random = data[Math.floor(Math.random() * data.length)];
      quote.textContent = random.quote;
      author.textContent = random.author;
  })
  .catch(err => console.log(err));
