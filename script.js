function processProfiles(data) {
    console.log(data);
    window.profiles = data;
    updateProfileSelect(data);
}

function updateProfileSelect(profiles) {
    const profileSelect = document.getElementById("profile");
    profileSelect.innerHTML = ""; // Clear the select options

    Object.keys(profiles).forEach((profileName) => {
        const option = document.createElement("option");
        option.value = profileName;
        option.text = profileName;
        profileSelect.appendChild(option);
    });

    profileSelect.selectedIndex = 0;

    loadProfile(profiles[profileSelect.value]);
}

document.getElementById("profile").addEventListener("change", loadSelectedProfile);
document.getElementById("generate").addEventListener("click", generateLifeWeeks);

function loadSelectedProfile() {
    const selectedValue = this.value;
    const selectedProfile = profiles[selectedValue];
    loadProfile(selectedProfile)
}

function loadProfile(selectedProfile) {
    console.log(profile);

    document.getElementById("birthDate").value = selectedProfile.birthDate;
    document.getElementById("title").value = selectedProfile.title;
    document.getElementById("yearsToShow").value = selectedProfile.yearsToShow;

    const eventsDataTextarea = document.getElementById("eventsData");
    eventsDataTextarea.value = JSON.stringify(selectedProfile.eventsData, null, 2);

    generateLifeWeeks();
}

async function loadGistJSONP() {
    const gistId = document.getElementById("gistId").value;

    try {
        // Fetch the gist using GitHub API to get the raw URL of the profiles.js file
        let response = await fetch(`https://api.github.com/gists/${gistId}`);
        let data = await response.json();

        // Get the raw_url of the "profiles.js" from the gist's data
        let rawUrl = data.files["profiles.js"].raw_url;

        let fileContent = data.files["profiles.js"].content;
        eval(fileContent);
    } catch (error) {
        console.error("Error loading the JSONP file:", error);
    }
}

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

function updateURLWithGistId(gistId) {
    if (window.history && window.history.pushState) {
        const newURL = new URL(window.location.href);
        newURL.searchParams.set('gistId', gistId);
        window.history.pushState({}, '', newURL.toString());
    }
}

function getGistIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gistId');
}

window.onload = function() {
    const urlGistId = getGistIdFromURL();
    if (urlGistId) {
        document.getElementById("gistId").value = urlGistId;
    }
    loadGistJSONP();
}
