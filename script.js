// Wait for a keypress to remove the start screen and show the portfolio
document.addEventListener('keydown', function () {
    const startScreen = document.getElementById('start-screen');
    const portfolio = document.getElementById('portfolio');

    // Hide the start screen
    startScreen.style.display = 'none';

    // Show the portfolio
    portfolio.style.display = 'block';
});
