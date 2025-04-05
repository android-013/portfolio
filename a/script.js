const calendarEl = document.getElementById("calendar");
const currentMonthYear = document.getElementById("current-month-year");
const currentYearEl = document.getElementById("current-year");
const dateInfo = document.getElementById("date-info");
let currentDate = new Date();

function renderCalendar() {
    calendarEl.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    currentMonthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })}`;
    currentYearEl.textContent = year;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendarEl.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDate; i++) {
        const dateCell = document.createElement("div");
        dateCell.textContent = i;
        dateCell.addEventListener("click", () => calculateDays(year, month, i));
        calendarEl.appendChild(dateCell);
    }
}

function calculateDays(year, month, day) {
    const selectedDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) {
        dateInfo.textContent = `${diffDays} days to come`;
    } else if (diffDays < 0) {
        dateInfo.textContent = `${Math.abs(diffDays)} days have passed`;
    } else {
        dateInfo.textContent = "Today!";
    }
}

document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});
document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
document.getElementById("prev-year").addEventListener("click", () => {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    renderCalendar();
});
document.getElementById("next-year").addEventListener("click", () => {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    renderCalendar();
});

renderCalendar();
