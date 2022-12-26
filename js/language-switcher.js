
  /* =========================== theme light and dark mode ============================ */
 const enRus = document.querySelector(".en-rus");
 dayNight.addEventListener("click", () => {
        enRus.querySelector("i").classList.toggle("fa-sun");
        enRus.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("eng");
})
 window.addEventListener("load", () => {
    if(document.body.classList.contains("eng"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
