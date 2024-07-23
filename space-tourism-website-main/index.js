function showMenu() {
    let btn = document.querySelector(".bars-btn");
    let dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "inline-block";
        btn.style.display = "none";
    } 
}

function closeMenu() {
    let btn = document.querySelector(".bars-btn");
    let dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "inline-block" || dropdown.style.display !== "") {
        dropdown.style.display = "none";
        btn.style.display = "inline-block";
    }
}

function showProfile() {
    let author = document.querySelector(".author");
    let computedStyle = window.getComputedStyle(author);

    if (computedStyle.display === "none" || computedStyle.display === "") {
        author.style.display = "inline-block";
        author.style.textAlign = "center";
    } else {
        author.style.display = "none";
    }
}


