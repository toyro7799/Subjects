document.addEventListener('DOMContentLoaded', function () {
    // Select all the card headers
    const cardHeaders = document.querySelectorAll('.card-header');

    // Add a click event listener to each header
    cardHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Find the parent .subject-card element
            const card = header.parentElement;

            // Toggle the 'active' class on the card
            // The CSS handles the animation and visibility
            card.classList.toggle('active');
        });
    });
});
