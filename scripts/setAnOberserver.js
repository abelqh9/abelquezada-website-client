export function setAnOberserver(elements, handler) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handler(entry.target);
            }
        })
    }, { threshold: '0.35' })
    
    elements.forEach(element => observer.observe(element));
}