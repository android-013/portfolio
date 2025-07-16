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


const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        } else {
            if (entry.boundingClientRect.top > entry.rootBounds.top) {
                entry.target.classList.remove('show1');
            }
        }
    });
});

const hidden1Elements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            if (entry.boundingClientRect.top > entry.rootBounds.top) {
                entry.target.classList.remove('show2');
            }
        }
    });
});

const hidden2Elements = document.querySelectorAll('.hidden2');
hiddenElements.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            if (entry.boundingClientRect.top > entry.rootBounds.top) {
                entry.target.classList.remove('show3');
            }
        }
    });
});

const hidden3Elements = document.querySelectorAll('.hidden3');
hiddenElements.forEach((el) => observer3.observe(el));



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



function updateProjects() {
    const h = document.querySelectorAll('.hidden');
    h.forEach((el) => observer.observe(el));
    const h1 = document.querySelectorAll('.hidden1');
    h1.forEach((el) => observer1.observe(el));
    const h2 = document.querySelectorAll('.hidden2');
    h2.forEach((el) => observer2.observe(el));
    const h3 = document.querySelectorAll('.hidden3');
    h3.forEach((el) => observer3.observe(el));
}



