const data = {
    "Oslo": {
        "Endring siste måned": 0.2,
        "Endring sesongjustert siste måned": 0.2,
        "Endring hittil i år": "6,9 %",
        "Endring siste år": 2.5,
        "Endring siste 5 år": 27.8,
        "Endring siste 10 år": 88,
        "Gjennomsnitt kvm. pris": "97 418",
        "Gjennomsnittspris": "6 802 890"
    },
    "Bergen": {
        "Endring siste måned": 1.4,
        "Endring sesongjustert siste måned": 1,
        "Endring hittil i år": "11,0 %",
        "Endring siste år": 4.3,
        "Endring siste 5 år": 26.2,
        "Endring siste 10 år": 43.8,
        "Gjennomsnitt kvm. pris": "56 450",
        "Gjennomsnittspris": "4 454 224"
    },
    "Trondheim": {
        "Endring siste måned": 0.1,
        "Endring sesongjustert siste måned": 0,
        "Endring hittil i år": "5,6 %",
        "Endring siste år": -0.6,
        "Endring siste 5 år": 18.8,
        "Endring siste 10 år": 39.7,
        "Gjennomsnitt kvm. pris": "56 988",
        "Gjennomsnittspris": "4 261 766"
    },
    "Stavanger m/omegn": {
        "Endring siste måned": 0.9,
        "Endring sesongjustert siste måned": 0.3,
        "Endring hittil i år": "10,0 %",
        "Endring siste år": 4.8,
        "Endring siste 5 år": 28.3,
        "Endring siste 10 år": 17.2,
        "Gjennomsnitt kvm. pris": "46 327",
        "Gjennomsnittspris": "4 703 771"
    },
    "Kristiansand m/omegn": {
        "Endring siste måned": -0.5,
        "Endring sesongjustert siste måned": 0.4,
        "Endring hittil i år": "7,5 %",
        "Endring siste år": 2.1,
        "Endring siste 5 år": 33.7,
        "Endring siste 10 år": 48.3,
        "Gjennomsnitt kvm. pris": "39 899",
        "Gjennomsnittspris": "3 921 015"
    },
    "Tromsø": {
        "Endring siste måned": -0.9,
        "Endring sesongjustert siste måned": 0.8,
        "Endring hittil i år": "7,1 %",
        "Endring siste år": -0.4,
        "Endring siste 5 år": 13.6,
        "Endring siste 10 år": 41.9,
        "Gjennomsnitt kvm. pris": "56 737",
        "Gjennomsnittspris": "4 320 754"
    },
    "Norge": {
        "Endring siste måned": 0.9,
        "Endring sesongjustert siste måned": 0.6,
        "Endring hittil i år": "8,2 %",
        "Endring siste år": 1.7,
        "Endring siste 5 år": 24.9,
        "Endring siste 10 år": 59.6,
        "Gjennomsnitt kvm. pris": "55 025",
        "Gjennomsnittspris": "4 786 495"
    }
};

function updateData(city) {
    const cityData = data[city];
    const dataDisplay = document.getElementById("data-display");
    const cityTitle = document.getElementById("city-title");

    dataDisplay.innerHTML = "";
    cityTitle.textContent = `Markedstrend i ${city}`;

    for (const [key, value] of Object.entries(cityData)) {
        const dataItem = document.createElement("div");
        dataItem.className = "data-item";
        dataItem.textContent = `${key}: ${value}`;
        dataDisplay.appendChild(dataItem);
    }

    // Remove active class from all city boxes
    const cityBoxes = document.querySelectorAll('.city-box');
    cityBoxes.forEach(box => box.classList.remove('active'));

    // Add active class to the selected city box
    const selectedCityBox = document.querySelector(`.city-box[onclick="updateData('${city}')"]`);
    if (selectedCityBox) {
        selectedCityBox.classList.add('active');
    }

    // Update the dropdown menu to match the selected city
    const citySelect = document.getElementById("city-select");
    citySelect.value = city;
}

// Initialize with default city
window.onload = function() {
    updateData('Oslo');
};
