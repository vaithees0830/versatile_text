const mode = document.getElementById('mode');
const screen = document.querySelector("#screen");

// Check local storage for user preference

const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    screen.classList.add("dark");
    setModeIcon("moon"); // Set moon SVG in dark mode
} else {
    setModeIcon("sun"); // Set sun SVG in light mode
}

mode.addEventListener('click', () => {
    location.reload();
    if (screen.classList.contains('dark')) {
        screen.classList.remove('dark');
        localStorage.setItem("mode", "light");
        setModeIcon("sun"); // Set sun SVG when toggling to light mode
    } else {
        screen.classList.add('dark');
        localStorage.setItem("mode", "dark");
        setModeIcon("moon"); // Set moon SVG when toggling to dark mode
    }
});

function setModeIcon(icon) {
    const lightSVG = '<svg id="dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6713 6.2247C19.7734 5.81044 21.3248 5.95718 21.8291 6.76327C22.8403 8.37947 19.2594 12.0342 13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.65519 16.4125 2.33376 15.0582 3.84259 13.5452" stroke="#252525" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3.5 2.5"/><path d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/></svg>'; // Replace '...' with your actual light SVG path
    const moonSVG = '<svg id="light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2V3" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M12 21V22" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M22 12L21 12" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M3 12L2 12" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M19.0708 4.92969L18.678 5.32252" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M5.32178 18.6777L4.92894 19.0706" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M19.0708 19.0703L18.678 18.6775" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M5.32178 5.32227L4.92894 4.92943" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/><path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="#252525" stroke-width="1.5" stroke-linecap="round"/></svg>'; // Replace '...' with your actual moon SVG path

    const modeButton = document.getElementById('mode');
    modeButton.innerHTML = ''; // Clear previous content

    if (icon === "moon") {
        modeButton.innerHTML = moonSVG;
    } else {
        modeButton.innerHTML = lightSVG;
    }
}



// cc

const uploadBtn = document.querySelector("#upload");
const upScreen = document.querySelector('#option-screen');
const upClose = document.querySelector("#close");

uploadBtn.addEventListener("click", () => {
    upScreen.style.visibility = "visible";
    upScreen.style.opacity = "1";
    upScreen.style.transform = "translateY(0)";

});

upClose.addEventListener("click", () => {
    upScreen.style.visibility = "hidden";
    upScreen.style.opacity = "0";
    upScreen.style.transform = "translateY(900px)";
});

let moreOptionContainer = document.querySelector(".optionContainer");
moreOptionContainer.style.visibility = "hidden";
moreOptionContainer.style.transform = "translateY(900px)";
moreOptionContainer.style.opacity = "0";
moreOptionContainer.style.transition = "all .8s ease-in-out";

function showMoreOptions() {
    moreOptionContainer.style.visibility = "visible";
    moreOptionContainer.style.transform = "translateY(0px)";
    moreOptionContainer.style.opacity = "1";
}

function closeOptions() {
    moreOptionContainer.style.visibility = "hidden";
    moreOptionContainer.style.opacity = "0";
    moreOptionContainer.style.transform = "translateY(900px)";

}

