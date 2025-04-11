document.addEventListener('DOMContentLoaded', () => {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    gsap.from('.navbar', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
    gsap.from('.SCC', { duration: 1, x: -200, opacity: 0, delay: 0.5 });
    gsap.from('.Estoya', { duration: 1, x: 200, opacity: 0, delay: 0.5 });
    gsap.from('.about', { duration: 1, scale: 0.5, opacity: 0, delay: 1 });
    gsap.from('.container', { duration: 1, y: 100, opacity: 0, delay: 1.5 });

    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = "0"; 
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = percentage; 
        }, 200); 
    });
});
