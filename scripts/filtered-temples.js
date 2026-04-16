const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const menuBtn = document.getElementById("menuBtn");
const primaryNav = document.getElementById("primaryNav");
const templeCards = document.getElementById("templeCards");
const pageTitle = document.getElementById("pageTitle");
const navLinks = document.querySelectorAll(".nav a");

menuBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");

    const isOpen = primaryNav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/d709367e4fd0fdb422b80130d127f341947f6dfa/full/1280%2C/0/default"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/8540649d4237393e9b6ae327ab4aac3992f62bd9/full/1280%2C/0/default"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "2004, January, 9",
        area: 11937,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/9591632feb8a8e4221de920d9bf78b23b950a5e0/full/1280%2C/0/default"
    }
];

function getTempleYear(temple) {
    return parseInt(temple.dedicated.split(",")[0]);
}

function displayTemples(filteredTemples) {
    templeCards.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span>Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeCards.appendChild(card);
    });
}

function setActiveLink(selectedLink) {
    navLinks.forEach((link) => link.classList.remove("active"));
    selectedLink.classList.add("active");
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;
        let filtered = temples;
        let title = "Home";

        if (filter === "old") {
            filtered = temples.filter((temple) => getTempleYear(temple) < 1900);
            title = "Old Temples";
        } else if (filter === "new") {
            filtered = temples.filter((temple) => getTempleYear(temple) > 2000);
            title = "New Temples";
        } else if (filter === "large") {
            filtered = temples.filter((temple) => temple.area > 90000);
            title = "Large Temples";
        } else if (filter === "small") {
            filtered = temples.filter((temple) => temple.area < 10000);
            title = "Small Temples";
        }

        pageTitle.textContent = title;
        setActiveLink(link);
        displayTemples(filtered);

        if (primaryNav.classList.contains("open")) {
            primaryNav.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.innerHTML = "&#9776;";
        }
    });
});

displayTemples(temples);