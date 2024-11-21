let navOpen = false;
function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    if (!navOpen) {
        sidebar.style.width = "250px";
        navOpen = true;
    } else {
        sidebar.style.width = "0";
        navOpen = false;
    }
}