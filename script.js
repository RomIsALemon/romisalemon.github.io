let ssTimer;
const screensaver = document.getElementById("screensaver");
const initTitle = document.title
const langToggle = document.getElementById("language");
const enElements = document.querySelectorAll("[lang=en]");
const frElements = document.querySelectorAll("[lang=fr]");

const contact_links = document.querySelectorAll('a[href="#contactme"]');
contact_links.forEach(item => {
    item.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#contactme").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
})

document.addEventListener("mousemove", function(e) {
    setTimer();
});

document.addEventListener("keypress", function(e) {
    setTimer()
});

langToggle.addEventListener("change", function(e) {
    const selected = e.target.value;
    console.log(selected);
    if(selected == "english") {
        toggleEnglish();
    }
    else if(selected == "french") {
        toggleFrench();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem("language");

    if (lang !== null) {
        console.log(lang);

        if (lang === "english") {
            langToggle.value = "english";
            toggleEnglish();
        } 
        else if (lang === "french") {
            langToggle.value = "french";
            toggleFrench();
        }
    }
});

function toggleEnglish() {
    localStorage.setItem("language", "english");

    frElements.forEach(elem => {
        elem.style.display = "none";
    });

    enElements.forEach(elem => {
        elem.style.display = "block";
    });
}

function toggleFrench() {
    localStorage.setItem("language", "french");

    enElements.forEach(elem => {
        elem.style.display = "none";
    });

    frElements.forEach(elem => {
        elem.style.display = "block";
    });
}

function setTimer() {
    document.title = initTitle;
    clearTimeout(ssTimer);
    screensaver.style.display = 'none';
    ssTimer = setTimeout(() => {
        screensaver.style.display = 'flex';
        document.title=initTitle + " - Currently Asleep";
    }, 120000);
}

setTimer();

function sendtopage(name) {
    switch(name) {
        case "ComingSoon":
            window.open("ComingSoon.html", "_self")
            break;
        case "SaveState":
            window.open("SaveState.html", "_self");
            break;
        case "FishEatGame":
            window.open("AlwaysASmallerFish.html", "_self")
            break;
        case "Icarus":
            window.open("IcarusCrispyFeathers.html", "_self")
            break;
        case "ColourMask":
            window.open("ColourMask.html", "_self")
            break;
        case "Dion":
            window.open("Dion.html", "_self")
            break;
    }
}