const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const serviceCards = document.querySelectorAll(".service-card");
const modal = document.querySelector("#service-modal");
const closeModalButton = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");

const serviceDetails = {
    ac: {
        title: "AC Installation / Repair / Maintenance",
        description: "Keep your home cool and comfortable with expert AC installation, reliable repairs, and preventive maintenance for long-lasting performance."
    },
    fridge: {
        title: "Refrigerator Repair",
        description: "We diagnose and repair refrigerator issues quickly to help protect your food, restore cooling, and keep your kitchen running smoothly."
    },
    washer: {
        title: "Washing Machine Repair",
        description: "From drainage and spinning problems to electrical faults, we provide dependable washing machine repairs that bring convenience back to your routine."
    },
    dryer: {
        title: "Dryer Repair",
        description: "We repair dryers with heating, airflow, and performance issues so your appliance works safely and efficiently again."
    }
};

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        const serviceKey = card.dataset.service;
        modalTitle.textContent = serviceDetails[serviceKey].title;
        modalDescription.textContent = serviceDetails[serviceKey].description;
        modal.classList.remove("hidden");
    });
});

closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.querySelector("#fullname").value;
        const phone = document.querySelector("#phone").value;
        const service = document.querySelector("#service").value;
        const message = document.querySelector("#message").value;

        const submission = {
            fullName,
            phone,
            service,
            message,
            submittedAt: new Date().toLocaleString()
        };

        const storedSubmissions = JSON.parse(localStorage.getItem("electrofixSubmissions")) || [];
        storedSubmissions.push(submission);
        localStorage.setItem("electrofixSubmissions", JSON.stringify(storedSubmissions));

        window.location.href = "thankyou.html";
    });
}