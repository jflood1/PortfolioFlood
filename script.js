//  JavaScript code for toggling classes
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Get the button elements by their ids
const aboutMeButton = document.getElementById('aboutMeButton');
const portfolioButtons = {
    'portfolio-button-flickr': 'https://www.flickr.com/photos/199025028@N06/albums/72177720310696152',
    'portfolio-button-layouts': 'layouts.html',
    'portfolio-button-ux': 'ux.html',
    'portfolio-button-term': 'termproject.html'
};

// Add a click event listener to the aboutMeButton
aboutMeButton.addEventListener('click', function() {
    
    // Redirect to the aboutme.html page when the button is clicked
    window.location.href = 'aboutme.html';
});

// Add click event listeners to the portfolio buttons
for (const buttonId in portfolioButtons) {
    if (portfolioButtons.hasOwnProperty(buttonId)) {
        const buttonElement = document.getElementById(buttonId);
        buttonElement.addEventListener('click', function() {
            // Redirect to the corresponding URL when the button is clicked
            window.location.href = portfolioButtons[buttonId];
        });
    }
}