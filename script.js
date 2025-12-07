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

// ---------------- FETCH REAL-TIME QUOTE ----------------
document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random?tags=health|wisdom|inspirational');
            
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            quoteText.style.opacity = 0;
            quoteText.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                quoteText.textContent = `"${data.content}" — ${data.author}`;
                quoteText.style.opacity = 1;
                quoteText.style.transform = 'translateY(0)';
            }, 300);
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Stay healthy and motivated! 💪';
        }
    }

    // Fetch quote immediately on page load
    fetchQuote();

    // Refresh quote every 30 seconds
    setInterval(fetchQuote, 30000);
});
