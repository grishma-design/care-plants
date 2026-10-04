// =========================================
// SMART NURSERY - SCRIPT.JS
// =========================================


// =========================================
// PLANT DATABASE - 20 PLANTS
// =========================================

const plants = [

    {
        name: "Marigold",
        indianNames: ["Genda", "Zendu"],
        scientific: "Tagetes erecta",
        category: "Flowering Plant",
        image: "images/marigold.jpg",
        sunlight: "5–6 hours",
        water: "Moderate",
        soil: "Well-draining loamy soil",
        place: "Balcony, Garden",
        size: "30–90 cm",
        feature: "Bright seasonal flowers",
        care: "Remove dry flowers regularly and avoid overwatering.",
        description: "Marigold is an easy-to-grow flowering plant with bright yellow and orange flowers."
    },

    {
        name: "Hibiscus",
        indianNames: ["Gudhal", "Jaswand"],
        scientific: "Hibiscus rosa-sinensis",
        category: "Flowering Plant",
        image: "images/hibiscus.jpg",
        sunlight: "5–6 hours",
        water: "Regular",
        soil: "Rich, well-draining soil",
        place: "Garden, Balcony",
        size: "1–3 m",
        feature: "Large colorful flowers",
        care: "Give good sunlight and prune old branches for healthy growth.",
        description: "Hibiscus is a beautiful flowering plant known for its large colorful flowers."
    },

    {
        name: "Bougainvillea",
        indianNames: ["Paper Flower"],
        scientific: "Bougainvillea glabra",
        category: "Flowering Plant",
        image: "images/bougainvillea.jpg",
        sunlight: "6+ hours",
        water: "Low to moderate",
        soil: "Sandy, well-draining soil",
        place: "Terrace, Garden, Entrance",
        size: "2–10 m",
        feature: "Colorful bracts",
        care: "Provide strong sunlight and avoid excessive watering.",
        description: "Bougainvillea is a hardy plant that adds bright color to walls, entrances and terraces."
    },

    {
        name: "Echeveria",
        indianNames: ["Echeveria"],
        scientific: "Echeveria elegans",
        category: "Succulent",
        image: "images/echeveria.jpg",
        sunlight: "4–6 hours",
        water: "Low",
        soil: "Cactus and succulent soil",
        place: "Window, Desk, Balcony",
        size: "10–20 cm",
        feature: "Rose-shaped leaves",
        care: "Let the soil dry completely before watering again.",
        description: "Echeveria is a compact succulent with beautiful rosette-shaped leaves."
    },

    {
        name: "Monstera",
        indianNames: ["Monstera"],
        scientific: "Monstera deliciosa",
        category: "Indoor Plant",
        image: "images/monstera.jpg",
        sunlight: "Bright indirect light",
        water: "Moderate",
        soil: "Rich, well-draining soil",
        place: "Living Room, Balcony",
        size: "1–3 m indoors",
        feature: "Large split leaves",
        care: "Keep it in bright indirect light and water when the top soil feels dry.",
        description: "Monstera is a popular indoor plant with large decorative leaves."
    },

    {
        name: "Jade Plant",
        indianNames: ["Jade"],
        scientific: "Crassula ovata",
        category: "Succulent",
        image: "images/jade-plant.jpg",
        sunlight: "4–6 hours",
        water: "Low",
        soil: "Sandy, well-draining soil",
        place: "Window, Desk, Balcony",
        size: "30–150 cm",
        feature: "Fleshy green leaves",
        care: "Avoid frequent watering and provide plenty of light.",
        description: "Jade Plant is a low-maintenance succulent with thick green leaves."
    },

    {
        name: "Curry Leaf",
        indianNames: ["Kadi Patta"],
        scientific: "Murraya koenigii",
        category: "Indian Plant",
        image: "images/curry-leaf.jpg",
        sunlight: "5–6 hours",
        water: "Moderate",
        soil: "Fertile, well-draining soil",
        place: "Kitchen, Balcony, Garden",
        size: "1–5 m",
        feature: "Aromatic edible leaves",
        care: "Give sunlight, regular watering and occasional organic fertilizer.",
        description: "Curry Leaf is a useful Indian plant whose aromatic leaves are commonly used in cooking."
    },

    {
        name: "Areca Palm",
        indianNames: ["Areca"],
        scientific: "Dypsis lutescens",
        category: "Indoor Plant",
        image: "images/areca-palm.jpg",
        sunlight: "Bright indirect light",
        water: "Moderate",
        soil: "Moist, well-draining soil",
        place: "Living Room, Entrance",
        size: "1.5–2.5 m indoors",
        feature: "Tropical leafy appearance",
        care: "Keep soil slightly moist and provide bright indirect light.",
        description: "Areca Palm gives a fresh tropical appearance and works well in spacious indoor areas."
    },

    {
        name: "Lemon",
        indianNames: ["Nimbu", "Limbu"],
        scientific: "Citrus limon",
        category: "Fruit Plant",
        image: "images/lemon.jpg",
        sunlight: "6+ hours",
        water: "Moderate",
        soil: "Fertile, well-draining soil",
        place: "Terrace, Garden",
        size: "2–5 m",
        feature: "Vitamin-C rich fruits",
        care: "Provide full sunlight and regular but controlled watering.",
        description: "Lemon is a useful fruit plant that can also be grown in large containers."
    },

    {
        name: "Guava",
        indianNames: ["Amrud", "Peru"],
        scientific: "Psidium guajava",
        category: "Fruit Plant",
        image: "images/guava.jpg",
        sunlight: "6+ hours",
        water: "Moderate",
        soil: "Fertile loamy soil",
        place: "Garden, Terrace",
        size: "3–10 m",
        feature: "Sweet nutritious fruits",
        care: "Provide full sunlight and water deeply when the soil becomes dry.",
        description: "Guava is a popular fruit tree that grows well in warm Indian climates."
    },

    {
        name: "Mango",
        indianNames: ["Aam", "Aamba"],
        scientific: "Mangifera indica",
        category: "Fruit Tree",
        image: "images/mango.jpg",
        sunlight: "6+ hours",
        water: "Moderate",
        soil: "Deep fertile soil",
        place: "Garden",
        size: "10–30 m",
        feature: "Popular summer fruit",
        care: "Needs plenty of sunlight, space and good soil drainage.",
        description: "Mango is one of India's most loved fruit trees and needs plenty of space to grow."
    },

    {
        name: "Champa",
        indianNames: ["Plumeria"],
        scientific: "Plumeria rubra",
        category: "Flowering Plant",
        image: "images/champa.jpg",
        sunlight: "6+ hours",
        water: "Low to moderate",
        soil: "Well-draining soil",
        place: "Terrace, Garden",
        size: "3–8 m",
        feature: "Fragrant flowers",
        care: "Give full sunlight and avoid keeping the soil constantly wet.",
        description: "Champa is known for its fragrant flowers and beautiful tropical appearance."
    },

    {
        name: "Money Plant",
        indianNames: ["Pothos"],
        scientific: "Epipremnum aureum",
        category: "Indoor Plant",
        image: "images/money-plant.jpg",
        sunlight: "Bright indirect light",
        water: "Moderate",
        soil: "Well-draining potting mix",
        place: "Study, Living Room, Window",
        size: "1–5 m vines",
        feature: "Easy trailing plant",
        care: "Water when the top layer of soil becomes dry and trim long vines.",
        description: "Money Plant is one of the easiest indoor plants and can grow as a trailing vine."
    },

    {
        name: "Peace Lily",
        indianNames: ["Peace Lily"],
        scientific: "Spathiphyllum wallisii",
        category: "Indoor Plant",
        image: "images/peace-lily.jpg",
        sunlight: "Low to bright indirect light",
        water: "Moderate",
        soil: "Moist, well-draining soil",
        place: "Living Room, Window",
        size: "30–90 cm",
        feature: "White flowers",
        care: "Keep soil slightly moist and protect it from harsh direct sunlight.",
        description: "Peace Lily is an attractive indoor plant with dark green leaves and white flowers."
    },

    {
        name: "Rose",
        indianNames: ["Gulab"],
        scientific: "Rosa spp.",
        category: "Flowering Plant",
        image: "images/rose.jpg",
        sunlight: "5–6 hours",
        water: "Regular",
        soil: "Rich, well-draining soil",
        place: "Garden, Balcony",
        size: "30 cm–2 m",
        feature: "Fragrant flowers",
        care: "Provide sunlight, regular watering and prune old flowers.",
        description: "Rose is a classic flowering plant available in many colors and varieties."
    },

    {
        name: "Jasmine",
        indianNames: ["Mogra", "Chameli"],
        scientific: "Jasminum sambac",
        category: "Flowering Plant",
        image: "images/jasmine.jpg",
        sunlight: "5–6 hours",
        water: "Moderate",
        soil: "Fertile, well-draining soil",
        place: "Balcony, Terrace, Garden",
        size: "1–3 m",
        feature: "Sweet fragrance",
        care: "Give good sunlight and trim after flowering to encourage new growth.",
        description: "Jasmine is famous for its small white flowers and beautiful fragrance."
    },

    {
        name: "Neem",
        indianNames: ["Nimba"],
        scientific: "Azadirachta indica",
        category: "Indian Tree",
        image: "images/neem.jpg",
        sunlight: "6+ hours",
        water: "Low to moderate",
        soil: "Most well-drained soils",
        place: "Garden",
        size: "15–20 m",
        feature: "Hardy traditional tree",
        care: "Needs plenty of sunlight and space for its roots and branches.",
        description: "Neem is a hardy Indian tree traditionally valued for many practical uses."
    },

    {
        name: "Aloe Vera",
        indianNames: ["Korphad", "Gwar Patha"],
        scientific: "Aloe vera",
        category: "Succulent",
        image: "images/aloe-vera.jpg",
        sunlight: "4–6 hours",
        water: "Low",
        soil: "Sandy, well-draining soil",
        place: "Window, Kitchen, Balcony",
        size: "30–60 cm",
        feature: "Fleshy leaves",
        care: "Allow soil to dry between watering and avoid waterlogging.",
        description: "Aloe Vera is an easy-care succulent with thick leaves that store water."
    },

    {
        name: "Tulsi",
        indianNames: ["Holy Basil", "Tulasi"],
        scientific: "Ocimum tenuiflorum",
        category: "Indian Plant",
        image: "images/tulsi.jpg",
        sunlight: "4–6 hours",
        water: "Moderate",
        soil: "Fertile, well-draining soil",
        place: "Window, Balcony, Kitchen",
        size: "30–60 cm",
        feature: "Aromatic traditional herb",
        care: "Provide sunlight, moderate watering and pinch flowers regularly.",
        description: "Tulsi is a popular Indian herb commonly grown in homes."
    },

    {
        name: "Snake Plant",
        indianNames: ["Mother-in-law's Tongue", "Sansevieria"],
        scientific: "Dracaena trifasciata",
        category: "Indoor Plant",
        image: "images/snake-plant.jpg",
        sunlight: "Low to bright indirect light",
        water: "Low",
        soil: "Very well-draining soil",
        place: "Bedroom, Study, Living Room",
        size: "30–120 cm",
        feature: "Very low maintenance",
        care: "Let the soil dry completely between watering.",
        description: "Snake Plant is extremely beginner-friendly and tolerates lower-light indoor conditions."
    }

];


// =========================================
// SPACE RECOMMENDATIONS
// =========================================

const spacePlants = {

    livingroom: [
        "Monstera",
        "Peace Lily",
        "Areca Palm",
        "Money Plant"
    ],

    workdesk: [
        "Money Plant",
        "Jade Plant",
        "Snake Plant",
        "Aloe Vera"
    ],

    window: [
        "Aloe Vera",
        "Jade Plant",
        "Peace Lily",
        "Money Plant"
    ],

    kitchen: [
        "Tulsi",
        "Curry Leaf",
        "Aloe Vera"
    ],

    garden: [
        "Rose",
        "Hibiscus",
        "Marigold",
        "Neem",
        "Guava"
    ],

    terrace: [
        "Champa",
        "Lemon",
        "Bougainvillea",
        "Jasmine"
    ]

};


// =========================================
// CREATE 20 PLANT CARDS
// =========================================

function renderPlantCollection() {

    const grid = document.querySelector(".plant-grid");

    if (!grid) return;

    grid.innerHTML = "";

    plants.forEach((plant, index) => {

        const card = document.createElement("article");

        card.className = "plant-card";

        card.style.animationDelay = `${index * 0.04}s`;

        card.innerHTML = `

            <div class="plant-card-image">

                <img
                    src="${plant.image}"
                    alt="${plant.name}"
                    loading="lazy"
                >

                <span class="plant-category">
                    ${plant.category}
                </span>

            </div>

            <div class="plant-card-body">

                <h3>
                    ${plant.name}
                </h3>

                <p class="plant-scientific">
                    ${plant.scientific}
                </p>

                <div class="plant-mini-info">
                    <span>☀️ ${plant.sunlight}</span>
                    <span>💧 ${plant.water}</span>
                </div>

                <button
                    class="plant-guide-btn"
                    onclick="showPlantInfo('${plant.name}')"
                >
                    View Plant Guide →
                </button>

            </div>

        `;

        grid.appendChild(card);

    });
}


// =========================================
// SEARCH
// =========================================

function searchPlant() {

    const input = document.getElementById("plantSearch");
    const resultBox = document.getElementById("searchResult");

    if (!input || !resultBox) return;

    const query = input.value.trim().toLowerCase();

    if (!query) {

        resultBox.innerHTML = `

            <div class="search-empty">

                <span>🌱</span>

                <h3>
                    Search for a plant
                </h3>

                <p>
                    Try Rose, Tulsi, Mogra, Genda,
                    Aloe Vera or Money Plant.
                </p>

            </div>

        `;

        return;
    }


    const matched = plants.filter(plant => {

        const indianNames =
            Array.isArray(plant.indianNames)
                ? plant.indianNames.join(" ")
                : plant.indianNames;

        const text = `

            ${plant.name}
            ${indianNames}
            ${plant.scientific}
            ${plant.category}
            ${plant.place}
            ${plant.description}
            ${plant.feature}

        `.toLowerCase();

        return text.includes(query);

    });


    // Remove duplicate plant names
    const uniquePlants = [];

    const seenNames = new Set();

    matched.forEach(plant => {

        const key = plant.name.toLowerCase();

        if (!seenNames.has(key)) {

            seenNames.add(key);

            uniquePlants.push(plant);

        }

    });


    displaySearchResults(uniquePlants, query);

}


// =========================================
// DISPLAY SEARCH RESULTS
// =========================================

function displaySearchResults(results, query) {

    const resultBox = document.getElementById("searchResult");

    if (!resultBox) return;


    if (results.length === 0) {

        resultBox.innerHTML = `

            <div class="search-empty">

                <span>🌿</span>

                <h3>
                    No plant found
                </h3>

                <p>
                    We couldn't find a plant for
                    "<strong>${query}</strong>".
                </p>

            </div>

        `;

        return;

    }


    resultBox.innerHTML = `

        <div class="search-heading">

            <h3>
                🌿 ${results.length}
                plant${results.length > 1 ? "s" : ""} found
            </h3>

            <p>
                Choose a plant to explore its complete guide.
            </p>

        </div>


        <div class="search-results-grid">

            ${results.map(plant => `

                <div class="search-result-card">

                    <div class="search-result-image">

                        <img
                            src="${plant.image}"
                            alt="${plant.name}"
                        >

                    </div>


                    <div class="search-result-content">

                        <span class="search-category">
                            ${plant.category}
                        </span>

                        <h3>
                            ${plant.name}
                        </h3>

                        <p class="search-scientific">
                            ${plant.scientific}
                        </p>

                        <p>
                            ${plant.description}
                        </p>


                        <div class="search-quick-info">

                            <span>
                                ☀️ ${plant.sunlight}
                            </span>

                            <span>
                                💧 ${plant.water}
                            </span>

                        </div>


                        <button
                            class="view-guide-btn"
                            onclick="showPlantInfo('${plant.name}')"
                        >
                            View Plant Guide →
                        </button>

                    </div>

                </div>

            `).join("")}

        </div>

    `;

}


// =========================================
// PLANT DETAIL MODAL
// =========================================

function showPlantInfo(plantName) {

    const plant = plants.find(
        item =>
            item.name.toLowerCase() ===
            plantName.toLowerCase()
    );

    const modal = document.getElementById("plantModal");

    const content = document.getElementById("modalContent");

    if (!plant || !modal || !content) return;


    content.innerHTML = `

        <div class="modal-content-inner">


            <div class="modal-image-wrapper">

                <img
                    class="modal-plant-image"
                    src="${plant.image}"
                    alt="${plant.name}"
                >

            </div>


            <div class="modal-plant-info">

                <span class="modal-category">
                    ${plant.category}
                </span>

                <h2>
                    ${plant.name}
                </h2>

                <p class="modal-scientific">
                    ${plant.scientific}
                </p>

                <p class="modal-description">
                    ${plant.description}
                </p>


                <div class="modal-details">


                    <div class="modal-detail">

                        <span>☀️</span>

                        <div>
                            <strong>Sunlight</strong>
                            <p>${plant.sunlight}</p>
                        </div>

                    </div>


                    <div class="modal-detail">

                        <span>💧</span>

                        <div>
                            <strong>Water</strong>
                            <p>${plant.water}</p>
                        </div>

                    </div>


                    <div class="modal-detail">

                        <span>🌱</span>

                        <div>
                            <strong>Soil</strong>
                            <p>${plant.soil}</p>
                        </div>

                    </div>


                    <div class="modal-detail">

                        <span>📍</span>

                        <div>
                            <strong>Best Place</strong>
                            <p>${plant.place}</p>
                        </div>

                    </div>


                    <div class="modal-detail">

                        <span>📏</span>

                        <div>
                            <strong>Size</strong>
                            <p>${plant.size}</p>
                        </div>

                    </div>


                    <div class="modal-detail">

                        <span>✨</span>

                        <div>
                            <strong>Special Feature</strong>
                            <p>${plant.feature}</p>
                        </div>

                    </div>


                </div>


                <div class="modal-care">

                    <h3>
                        🌿 Care Guide
                    </h3>

                    <p>
                        ${plant.care}
                    </p>

                </div>


                <div class="modal-names">

                    <strong>
                        Also known as:
                    </strong>

                    <span>
                        ${plant.indianNames.join(" • ")}
                    </span>

                </div>

            </div>

        </div>

    `;


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


// =========================================
// CLOSE MODAL
// =========================================

function closeModal() {

    const modal = document.getElementById("plantModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


// =========================================
// CLICK OUTSIDE MODAL
// =========================================

window.addEventListener("click", function(event) {

    const modal = document.getElementById("plantModal");

    if (event.target === modal) {

        closeModal();

    }

});


// =========================================
// ESCAPE KEY
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


// =========================================
// SPACE PLANT FINDER
// =========================================

function chooseSpace(space) {

    const selectedPlants = spacePlants[space];

    const recommendationBox =
        document.getElementById("spaceRecommendations");

    if (!recommendationBox || !selectedPlants) return;


    recommendationBox.innerHTML = `

        <div class="recommendation-title">

            <span>🌿</span>

            <div>

                <h3>
                    Plants for your space
                </h3>

                <p>
                    Simple plant suggestions for this space.
                </p>

            </div>

        </div>


        <div class="recommendation-names">

            ${selectedPlants.map((name, index) => `

                <button
                    class="recommended-name"
                    style="animation-delay: ${index * 0.08}s"
                    onclick="showPlantInfo('${name}')"
                >

                    <span class="tiny-leaf">
                        🌱
                    </span>

                    <span>
                        ${name}
                    </span>

                    <span class="arrow">
                        →
                    </span>

                </button>

            `).join("")}

        </div>

    `;


    recommendationBox.classList.add("show");

}


// =========================================
// FIND NEARBY NURSERY
// =========================================

function findNursery() {

    const url =
        "https://www.google.com/maps/search/plant+nursery+near+Chhatrapati+Sambhajinagar";

    window.open(url, "_blank");

}


// =========================================
// PAGE LOAD
// =========================================

document.addEventListener("DOMContentLoaded", function() {

    // Create all 20 plant cards
    renderPlantCollection();


    // Search with Enter key
    const searchInput =
        document.getElementById("plantSearch");

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    searchPlant();

                }

            }
        );

    }

});


// =========================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// =========================================

window.searchPlant = searchPlant;
window.showPlantInfo = showPlantInfo;
window.closeModal = closeModal;
window.chooseSpace = chooseSpace;
window.findNursery = findNursery;