document.getElementById("playBtn").addEventListener("click", () => {
    const version = document.getElementById("version").value;

    const redirects = {
        "Newest (1.12.2)": "https://example.com/newest",
        "1.8.8": "https://example.com/188",
        "1.5.2": "https://example.com/152"
    };

    window.location.href = redirects[version];
});

function comingSoon() {
    alert("Coming Soon!");
}
