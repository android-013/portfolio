document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".skill-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const fullText = el.getAttribute("data-fulltext");
        let i = 0;

        function type() {
          if (i < fullText.length) {
            el.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, 50);
          }
        }

        if (!el.classList.contains("typed")) {
          el.classList.add("typed");
          el.textContent = "";
          type();
        }
      }
    });
  }, { threshold: 0.5 });

  texts.forEach((el) => {
    el.setAttribute("data-fulltext", el.textContent.trim());
    el.textContent = "";
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".skills-section");
    const iconsContainer = document.querySelector(".skill-icons");

    function updateSpacing() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // calculate distance of center of section to center of viewport
    const centerOffset = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

    // normalize: 0 at center, 1 at far
    const normalized = Math.min(centerOffset / (windowHeight / 2), 1);

    let maxGap = 4; // default

    if (window.innerWidth >= 1200) {
    maxGap = 8;
    } else if (window.innerWidth >= 768) {
    maxGap = 6;
    }

    const gap = 1 + maxGap * normalized;

    iconsContainer.style.gap = `${gap}rem`;
  }

  window.addEventListener("scroll", updateSpacing);
  window.addEventListener("resize", updateSpacing);
  updateSpacing(); // init
});