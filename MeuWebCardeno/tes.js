const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthAndYear = document.getElementById("monthAndYear");
const calendarBody = document.getElementById("calendarBody");

function renderCalendar(month, year) {
  calendarBody.innerHTML = "";
  monthAndYear.textContent = monthNames[month] + " " + year;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        cell.textContent = "";
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        cell.textContent = date;
        cell.addEventListener("click", function() {
          document.querySelectorAll(".calendar-table td").forEach(td => td.classList.remove("active"));
          this.classList.add("active");
        });
        row.appendChild(cell);
        date++;
      }
    }

    calendarBody.appendChild(row);
  }
}

document.getElementById("prevMonth").addEventListener("click", function() {
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
  renderCalendar(currentMonth, currentYear);
});

document.getElementById("nextMonth").addEventListener("click", function() {
  currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);