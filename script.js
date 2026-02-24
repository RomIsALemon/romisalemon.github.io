let ssTimer;
const screensaver = document.getElementById("screensaver");
const initTitle = document.title

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
    }
}