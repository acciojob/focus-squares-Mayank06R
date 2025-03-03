//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            squares.forEach(sq => {
                if (sq !== square) {
                    sq.style.backgroundColor = '#6F4E37'; // Coffee color
                }
            });
        });

        square.addEventListener('mouseleave', function() {
            squares.forEach(sq => {
                sq.style.backgroundColor = '#E6E6FA'; // Lavender color
            });
        });
    });
});
