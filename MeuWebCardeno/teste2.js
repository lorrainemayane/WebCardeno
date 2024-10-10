const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthAndYear = document.getElementById("monthAndYear");
const calendarBody = document.getElementById("calendarBody");

let events = [];

function renderCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthAndYear.textContent = monthNames[month] + " " + year;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td"); // Cria a célula fora das condições

            if (i === 0 && j < firstDay) {
                cell.textContent = ""; // Célula vazia para dias antes do início do mês
            } else if (date > daysInMonth) {
                cell.textContent = ""; // Célula vazia para dias após o último dia do mês
            } else {
                cell.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                // Verificar se há eventos nessa data
                let eventForDate = events.find(event => event.date === cell.dataset.date);
                if (eventForDate) {
                    let eventLabel = document.createElement("div");
                    eventLabel.textContent = eventForDate.description;
                    eventLabel.style.color = 'blue';
                    cell.appendChild(eventLabel);
                }

                cell.addEventListener("click", function () {
                    this.classList.toggle("active");
                });

                date++; // Incrementa a data
            }
            row.appendChild(cell); // Adiciona a célula à linha
        }
        calendarBody.appendChild(row); // Adiciona a linha ao corpo do calendário
    }
}

document.getElementById("addEventButton").addEventListener("click", function () {
    const date = document.getElementById("eventDate").value;
    const description = document.getElementById("eventDescription").value;

    if (date && description) {
        events.push({ date: date, description: description });
        renderCalendar(currentMonth, currentYear);
        document.getElementById("eventDescription").value = ""; // Limpa o campo após adicionar o evento
    }
});

document.getElementById("prevMonth").addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById("nextMonth").addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});





// Renderiza o calendário inicial
renderCalendar(currentMonth, currentYear);