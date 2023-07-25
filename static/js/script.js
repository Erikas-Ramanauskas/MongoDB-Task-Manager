document.addEventListener('DOMContentLoaded', function () {
    let sidenavs = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavs, { edge: "right" });
});