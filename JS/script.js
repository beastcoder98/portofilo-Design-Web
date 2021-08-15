//portofilo item filter

const filterContainer = document.querySelector(".portofilo-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portofiloItems = document.querySelectorAll(".portofilo-item"),
    totalportofiloItem = portofiloItems.length;

for (var i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function() {
        // body...
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");


        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalportofiloItem; k++) {
            if (filterValue === portofiloItems[k].getAttribute("data-category")) {
                portofiloItems[k].classList.remove("hide");
                portofiloItems[k].classList.add("show");
            } else {
                portofiloItems[k].classList.remove("show")
                portofiloItems[k].classList.add("hide")
            }
            if (filterValue === "all") {
                portofiloItems[k].classList.remove("hide");
                portofiloItems[k].classList.add("show");
            }
        }
    })
}


/*portofilo light box */

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for (let i = 0; i < totalportofiloItem; i++) {
    portofiloItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex === totalportofiloItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalportofiloItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portofiloItems[itemIndex].querySelector(".portofilo-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portofiloItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalportofiloItem;
}


/**-------------------CLOSE BUTTON------------------ */
lightbox.addEventListener("click", function(event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})