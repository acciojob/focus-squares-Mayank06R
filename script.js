document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((sq) => {
        sq.addEventListener("mouseenter", function () {
            squares.forEach((otherSq) => {
                if (otherSq !== this) {
                    otherSq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee color
                }
            });
        });

        sq.addEventListener("mouseleave", function () {
            squares.forEach((otherSq) => {
                otherSq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender color
            });
        });
    });
});
