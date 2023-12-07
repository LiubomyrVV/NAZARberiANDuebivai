let count = 0;
const burgerMenuEl = `
                    <button class="header__burger-btn" id="burger">
                        <span></span><span></span><span></span>
                    </button>
                    `
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("nav").insertAdjacentHTML('afterend', burgerMenuEl)
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector("header").classList.toggle("open");

    })

})
window.addEventListener("resize", () => {
    if(window.screen.width <= 996) {
        document.querySelector("header").classList.remove("open");
    }
} )

