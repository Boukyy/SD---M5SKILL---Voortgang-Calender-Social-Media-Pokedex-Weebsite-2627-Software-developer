const days = document.querySelector(".days");
const date = document.querySelector("#date");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentDate = new Date(2026, 8);


function renderMonth() {

    days.innerHTML = "";


    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);


    let firstDayOfMonthDay = firstDayOfMonth.getDay();

    if (firstDayOfMonthDay === 0) {
        firstDayOfMonthDay = 7;
    }

    const lastDayOfMonth = new Date(year, month + 1, 0);

    const numberOfDays = lastDayOfMonth.getDate();


    for (let i = 1; i < firstDayOfMonthDay; i++) {

        const emptyDay = document.createElement("li");

        emptyDay.classList.add("empty");

        days.appendChild(emptyDay);
    }


    for (let i = 1; i <= numberOfDays; i++) {

        const day = document.createElement("li");

        day.classList.add("day");

        day.textContent = i;

        days.appendChild(day);
    }

    let options = {
        year: 'numeric',
        month: 'short',
    }
    date.textContent = currentDate.toLocaleString("es-ES", options);


}

function nextMonth() {

    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
    );

    renderMonth();


}

function prevMonth() {

    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1
    );

    renderMonth();


}

nextButton.addEventListener("click", nextMonth);

prevButton.addEventListener("click", prevMonth);

renderMonth();