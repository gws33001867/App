window.addEventListener("load", function () {
    var nav = document.querySelector(".nav");
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 44) {
            nav.classList.add("fix");
        } else {
            nav.classList.remove("fix");
        }
    })
})