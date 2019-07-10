window.addEventListener("mousemove", event => {
    document
        .querySelectorAll(".parallax")
        .forEach(elem => {
            let speed = elem.getAttribute("data-speed");
            elem.style.transform = `translateY(${event.clientY * speed / 500}px)`;
        });
});