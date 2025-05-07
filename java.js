document.body.scrollHeight;







// Example: Increment Counter Animation
function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let current = start;
    const increment = Math.ceil((end - start) / (duration / 100));

    const counter = setInterval(() => {
        current += increment;
        if (current > end) {
            current = end;
            clearInterval(counter);
        }
        obj.textContent = current + "+";
    }, 100);
}

// Animate Stats
animateCounter("users-served", 0, 1000, 2000);
animateCounter("products-listed", 0, 500, 2000);