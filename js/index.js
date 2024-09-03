const navbar = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav a")
const sections = document.querySelectorAll("section")
const footer = document.querySelector("footer")

// Function to check footer visibility
function checkFooterVisibility() {
    const footerBounding = footer.getBoundingClientRect() // Gets the position and size of the footer relative to the viewport
    const footerMidpoint = footerBounding.top + (footerBounding.height / 4) // Calculates a point 1/4 of the footer height from the top of the footer (half of half the footer height)

    if (footerMidpoint >= 0 && footerMidpoint < window.innerHeight) {
        navbar.classList.add("move-right")
    } else {
        navbar.classList.remove("move-right")
    }
}

// Function that activates the navigation link corresponding to the section visible on the screen
function activateNavLink() {
    let activeSectionId = "";
    let sectionIndex = -1;

    sections.forEach((section, index) => {
        const bounding = section.getBoundingClientRect()
        const sectionMidPoint = bounding.top + (bounding.height / 2) // Calculate the midpoint of the section

        // Checks whether the midpoint of the section is visible in the viewport
        if (sectionMidPoint >= 0 && sectionMidPoint < window.innerHeight) {
            activeSectionId = section.id;
            sectionIndex = index
        }
    })

    navLinks.forEach(link => {
        link.classList.remove("active", "odd-section", "even-section")
    })

    navLinks.forEach((link, index) => {
        if (link.hash === `#${activeSectionId}`) {
            link.classList.add("active"); // Adds the "active" class to the link corresponding to the active section
        }

        // Adds section color class based on section index
        if (sectionIndex >= 0) {
            link.classList.add(sectionIndex % 2 === 0 ? "odd-section" : "even-section");
        }
    });
}

// Adds smooth scrolling effect when clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute("href").substring(1); // Remove the "#" from the href
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("scroll", () => {
    checkFooterVisibility() // Check footer visibility with each scroll
    activateNavLink() // Update the state of navigation links with each scroll
})

// Call the function to activate the correct navigation link when loading the page
activateNavLink()