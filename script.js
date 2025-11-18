// Play redirects
document.getElementById("playBtn").addEventListener("click", () => {
    const version = document.getElementById("version").value;

    const redirects = {
        "Newest (1.12.2)": "https://example.com/newest",
        "1.8.8": "https://example.com/188",
        "1.5.2": "https://example.com/152"
    };

    window.location.href = redirects[version];
});

// Coming soon popup for Installations
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

document.getElementById("installationsBtn").addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Patch Notes tab — swap panels
document.getElementById("patchNotesBtn").addEventListener("click", () => {
    document.getElementById("newsPanel").style.display = "none";
    document.getElementById("patchNotesPanel").style.display = "block";
});

// Play tab — show news again
document.getElementById("playTab").addEventListener("click", () => {
    document.getElementById("newsPanel").style.display = "block";
    document.getElementById("patchNotesPanel").style.display = "none";
});
