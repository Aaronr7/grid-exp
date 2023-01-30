const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(entry.target.classList.add('show'), 1000);
        }
        // else {
        //     setTimeout(entry.target.classList.remove('show'), 10000);
        // }

        // We're not intersecting, so remove the class!
        // square.classList.remove('square-animation');
    });
});
// observer.disconnect();
const hiddenElements = document.querySelectorAll('.tile.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenImages = document.querySelectorAll('img');
hiddenImages.forEach((el) => observer.observe(el));