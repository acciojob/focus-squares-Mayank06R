document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".focus-sq");

    squares.forEach((sq) => {
        sq.addEventListener("mouseenter", () => {
            squares.forEach((otherSq) => {
                if (otherSq !== sq) {
                    otherSq.style.backgroundColor = "#6F4E37"; // Coffee color
                }
            });
        });

        sq.addEventListener("mouseleave", () => {
            squares.forEach((otherSq) => {
                otherSq.style.backgroundColor = "#E6E6FA"; // Lavender color
            });
        });
    });
});
