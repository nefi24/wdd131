const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const menuBtn = document.getElementById("menuBtn");
const primaryNav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");

    const isOpen = primaryNav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
});