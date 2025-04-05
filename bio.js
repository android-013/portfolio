document.addEventListener("DOMContentLoaded", () => {
    const profileBio = document.querySelector('.profile-bio');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileBio.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(profileBio);
});