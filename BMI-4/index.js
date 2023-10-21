

function openPage(page) {
    window.location.href = page;
}

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
    item.addEventListener("click", () => {
        const link = item.querySelector("a");
        if (link) {
            window.location.href = link.href;
        }
    });
});

gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1.0)";
    });
});

