/* =========================== toggle style switcher ============================ */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide tryle switcher on scroll
window.addEventListener("scroll", ()=> {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* =========================== theme colors ============================ */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true"); 
        }
    })
}
/* =========================== theme light and dark mode ============================ */
 const dayNight = document.querySelector(".day-night");
 dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
})
 window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

/* ============================== change language ==================================== */
const enRus = document.querySelector(".en-rus");
enRus.addEventListener("click", () => {
    document.body.classList.toggle("eng");
})
window.addEventListener("load", () => {
   if(document.body.classList.contains("eng"))
   {
       enRus.querySelector("h2").innerHTML = "RU";
   }
   else
   {
       enRus.querySelector("h2").innerHTML = "EN";
   }
})
