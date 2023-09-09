document.addEventListener("DOMContentLoaded", function () {
  generateLifeWeeks(); // Generate the table on startup
  document
    .getElementById("generate")
    .addEventListener("click", generateLifeWeeks);
});

function generateLifeWeeks() {
  const table = document.getElementById("weeksTable");
  table.innerHTML = ""; // Clear the table

  const birthDateValue = new Date(document.getElementById("birthDate").value);
  const yearsToShow = document.getElementById("yearsToShow").value;
  let eventsData = JSON.parse(document.getElementById("eventsData").value);

  // Normalize the events data. If there's only a date property, set begin and end to that date.
  eventsData.events.forEach((event) => {
    if (event.date && !event.begin && !event.end) {
      event.begin = event.date;
      event.end = event.date;
    }
  });

  const today = new Date();

  // Create header with week numbers
  const headerRow = document.createElement("tr");
  const emptyCell = document.createElement("td"); // empty cell for aligning the year label
  headerRow.appendChild(emptyCell);

  const weekGroups = [9, 10, 10, 10, 10, 3]; // colspans
  weekGroups.forEach((colspan, idx) => {
    const weekCell = document.createElement("td");
    weekCell.setAttribute("colspan", colspan);
    weekCell.innerText = (idx * 10).toString(); // week numbers 0, 10, 20, ...
    headerRow.appendChild(weekCell);
  });
  table.appendChild(headerRow);

  for (let y = 0; y < yearsToShow; y++) {
    const yearRow = document.createElement("tr");

    // Year label
    const yearCell = document.createElement("td");
    yearCell.innerText = y;
    if (y % 5 === 0) {
      yearCell.style.fontWeight = "bold";
    }
    yearRow.appendChild(yearCell);

    for (let w = 1; w <= 52; w++) {
      const weekCell = document.createElement("td");

      // Set the weekCell styles and attributes
      weekCell.classList.add("week");
      weekCell.setAttribute("data-year", y);
      weekCell.setAttribute("data-week", w);

      const cellDateBegin = addWeeks(birthDateValue, y * 52 + w - 1);
      const cellDateEnd = addWeeks(birthDateValue, y * 52 + w);

      // Gray out the square from birthdate to today
      if (cellDateBegin >= birthDateValue && cellDateEnd <= today) {
        weekCell.style.backgroundColor = "#eee";
      }

      // Event overlay
      eventsData.events.forEach((event) => {
        const eventBegin = event.begin ? new Date(event.begin) : birthDateValue;
        const eventEnd = event.end ? new Date(event.end) : today;

        if (
          (eventBegin <= cellDateEnd && eventEnd >= cellDateBegin) ||
          (eventBegin <= cellDateBegin && eventEnd >= cellDateEnd)
        ) {
          weekCell.style.backgroundColor = event.color;
          weekCell.title =
            (weekCell.title ? weekCell.title + "\n" : "") + event.description;
        }
      });

      yearRow.appendChild(weekCell);
    }

    table.appendChild(yearRow);
  }
}

function addWeeks(date, weeks) {
  const newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + 7 * weeks);
  return newDate;
}