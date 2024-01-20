import handleDetails from "./details.js"

handleDetails()

// % MAIN DOWNLOAD BUTTON LINK 
const downloadBtn = document.querySelector('.hero__cta__download-btn')

downloadBtn.href = 'http://adfoc.us/serve/sitelinks/?id=475250&url=http://optifine.net/adloadx?f=OptiFine_1.20.1_HD_U_I6.jar&x=f8f1'


// % CHANGE HERO BACKGROUND 
const elementHero = document.querySelector('.hero')

const now = new Date()

if (now.getHours() < 12) {
    elementHero.style.backgroundImage = 'url("https://raw.githubusercontent.com/RenanSantos7/Optifine-Landing-Page/main/assets/images/bg/swamp-river.jpg")'
} else if (12 <= now.getHours() && now.getHours() < 18) {
    elementHero.style.backgroundImage = 'url("https://raw.githubusercontent.com/RenanSantos7/Optifine-Landing-Page/main/assets/images/bg/sunset.jpg")'
} else {
    elementHero.style.backgroundImage = 'url("https://raw.githubusercontent.com/RenanSantos7/Optifine-Landing-Page/main/assets/images/bg/night-moon.png")'
}
