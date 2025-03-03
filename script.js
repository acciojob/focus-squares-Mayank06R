document.addEventListener("DOMContentLoaded", function() {
  const squares = document.querySelectorAll('.square');
  
  squares.forEach(square => {
    square.addEventListener('mouseenter', function() {
      squares.forEach(sq => {
        if (sq !== square) {
          sq.style.backgroundColor = '#6F4E37'; // Coffee color
        }
      });
      logBackgroundColors(); // Log background colors for debugging
    });

    square.addEventListener('mouseleave', function() {
      squares.forEach(sq => {
        sq.style.backgroundColor = '#E6E6FA'; // Lavender color
      });
      logBackgroundColors(); // Log background colors for debugging
    });
  });

  function logBackgroundColors() {
    squares.forEach(sq => {
      console.log(`${sq.id} background color: ${window.getComputedStyle(sq).backgroundColor}`);
    });
  }
});
