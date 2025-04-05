document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { letter: "A", name: "Ages Calculator", link: "a/index.html" },
        { letter: "B", name: "Bad UI, Worse UX", link: "https://android-013.github.io/bad-ui/" },
        { letter: "C", name: "Card Matching Game", link: " https://android-013.github.io/Card-Game-Front/" },
        { letter: "D", name: "Digital Bangla Clock", link: "https://android-013.github.io/digital-bangla-segment-clock/"},
        { letter: "E", name: "Enigma Machine", link: "e/index.html" },
        { letter: "F", name: "Five Way (Star trek) RPS", link: "https://android-013.github.io/5-way-rps/" },
        { letter: "G", name: "Google Sheet Viewer", link: "https://android-013.github.io/sheet/" },
        { letter: "H", name: "Horoscope Finder", link: "h/index.html" },
        { letter: "L", name: "Loan EMI Calculator", link: "l/index.html" },
        { letter: "M", name: "Math quiz calculator", link: "https://android-013.github.io/Math-Quiz-Front/" },
        { letter: "N", name: "Number base conversion", link: "https://android-013.github.io/number-base-conversion/" },
        { letter: "P", name: "Password Generator", link: "p/pasword.html" },       
        { letter: "Q", name: "Qurey Contact", link: "https://android-013.github.io/query-write-sheet/" },
        { letter: "R", name: "Rock Paper Secissor Game", link: "https://android-013.github.io/rps-front/" },
        { letter: "S", name: "Slot Machine", link: " https://android-013.github.io/Slot-machine-front/" },
        { letter: "T", name: "Tic Tac Toe", link: "https://android-013.github.io/Tic-Tac-Toe/" },
        { letter: "U", name: "Unit Converter", link: "https://android-013.github.io/Unit-Converter/" },
        { letter: "V", name: "Voting System", link: "https://android-013.github.io/Elo-Poll-Front/" },
    ];

    const grid = document.querySelector(".grid");

    projects.forEach(project => {
        const btn = document.createElement("button");
        btn.textContent = `${project.letter} - ${project.name}`;
        btn.onclick = () => window.location.href = project.link;
        grid.appendChild(btn);
    });
});
