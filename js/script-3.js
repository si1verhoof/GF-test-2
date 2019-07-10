window.addEventListener("scroll", event => {
    document
        .querySelectorAll(".parallax")
        .forEach(elem => {
            const speed = elem.getAttribute("data-speed");

            elem.style.transform = `
                translateY(${-(window.pageYOffset * speed / 250)}px)
            `;
        });
});