document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector("#closebtn").addEventListener("click", closeNav);
    document.getElementById("openbtn").addEventListener("click", openNav);

}

function openNav() {
    document.getElementById("burger-menu").style.width = "80%";
}

function closeNav() {
    document.getElementById("burger-menu").style.width = "0%";
}

function goBack() {
    window.history.back();
}
