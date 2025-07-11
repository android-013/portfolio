const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            if (entry.boundingClientRect.top > entry.rootBounds.top) {
                entry.target.classList.remove('show');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerBlur = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showBlur');
        } else {
            if (entry.boundingClientRect.top > entry.rootBounds.top) {
                entry.target.classList.remove('showBlur');
            }
        }
    });
});

const hiddenElementsBlur = document.querySelectorAll('.hiddenBlur');
hiddenElementsBlur.forEach((el) => observerBlur.observe(el));




const observerSlider = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.id + '%';
            entry.target.style.transition =  "all 1s";
        } else {
            entry.target.style.width = 0;
            entry.target.style.transition =  "all 0s";
        }
    });
});


function updateProjects() {
    const h = document.querySelectorAll('.hidden');
    h.forEach((el) => observer.observe(el));
}



