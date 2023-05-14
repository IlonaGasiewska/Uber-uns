const carouselItem = document.querySelectorAll(".carousel-item");
const img = document.querySelectorAll(".carousel-photo");
const popup = document.querySelector(".popup");
const popupPhoto = document.querySelector(".popup-photo");

img.forEach((image)=>{
        image.addEventListener("click", (event)=>{ popup.style.display="flex";
        popupPhoto.setAttribute("src", event.currentTarget.getAttribute("src"));
        popup.addEventListener("click", ()=>{popup.style.display="none"});
        });
    });






