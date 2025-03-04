document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {  
            squares.forEach((otherSquare) => {
                if (otherSquare !== event.target) {
                    otherSquare.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee color
                }
            });
        });

        square.addEventListener("mouseout", () => {  
            squares.forEach((otherSquare) => {
                otherSquare.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender color
            });
        });
    });
});
