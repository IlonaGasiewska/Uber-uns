const carouselItem = document.querySelectorAll(".carousel-item");
const img = document.querySelectorAll(".carousel-photo");
const popup = document.querySelector(".popup");
const popupPhoto = document.querySelector(".popup-photo");

for (i=0; i<=(img.length - 1); i++)
    {
        img[i].addEventListener("click", (event)=>{ popup.style.display="flex";
        popupPhoto.setAttribute("src", event.currentTarget.getAttribute("src"));
        popup.addEventListener("click", ()=>{popup.style.display="none"});
        });
    } 






