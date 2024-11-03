document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        const triggerHeight = 1; // Set a specific scroll threshold, if needed
        if (window.scrollY > triggerHeight) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
