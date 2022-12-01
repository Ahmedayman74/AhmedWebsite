// Start Menu
let toggle = document.querySelector(".toggle")
let nav = document.querySelector(".main-nav")
let header = document.querySelector(".header")
let otherLinks = document.querySelector(".other")
let megaMenu = document.querySelector(".mega-menu")

toggle.onclick = function () {
    nav.classList.toggle("show")
    header.classList.toggle("incheight")
    header.classList.remove("overflowY")
}

otherLinks.onclick = function () {
    megaMenu.classList.toggle("show-menu")
    header.classList.add("overflowY")
}
// End Menu

// start landing 
let landingImage = document.querySelector(".landing-img");
let landingText = document.querySelector(".landing .text")
let landing = document.querySelector(".landing")
landing.onclick = function () {
    megaMenu.classList.remove("show-menu")
}
// function scrolla7a() {
//     landingImage.style.cssText = "transform: translateX(0px); filter: blur(0px);"
//     landingText.style.cssText = "transform: translateX(0px); filter: blur(0px)"
// }
// setTimeout(scrolla7a, 200)
// ending landing



// start skills 
let ourSkill = document.querySelector(".our-skills")
let ourSkillSpan = document.querySelectorAll(".our-skills  .the-progress span")


window.onscroll = function () {
    if (window.scrollY >= ourSkill.offsetTop) {
        ourSkillSpan.forEach((ss) => {
            ss.style.width = ss.dataset.width
        }) 
    }
    //  stats
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            statsSpans.forEach((num) => (startCount(num)))
        }
        started = true
    }
}

// start stats
let stats = document.querySelector(".stats")
let statsSpans = document.querySelectorAll(".stats .number")
// function started ? NO
let started = false;  

// console.log(!started)



    function startCount(el) {
        let goal = el.dataset.goal
        let count = setInterval(() => {
            el.textContent++
            if (el.textContent == goal) {
                clearInterval(count)
            }
        },2000/ goal)
    }



    
// end stats

// end skills


// start testimonials
let testimonialsBox = document.querySelectorAll(".testimonials .box")

// console.log()
// testimonialsBox.forEach((tsbox) => {
//     tsbox.onclick = function() {
//         // tsbox.classList.toggle("zoom")
//         if (tsbox.classList = " zoom") {
//             tsbox.classList.remove("zoom")
//         } else {
//             tsbox.classList.add("zoom")
//         }
//     }
// })
// testimonialsBox.onclick = function() {
//     testimonialsBox[1].classList.toggle("zoom")
// }
// end testimonials 


// start events

let countDown = new Date("Dec 31 ,2022 23:59:59").getTime()
let counter  = setInterval(() => {
    let dayNow = new Date().getTime()
    let diff = countDown - dayNow
    let day = Math.floor((diff / (1000 * 60 * 60 * 24) ))
    let hours = Math.floor((diff % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    let min = Math.floor(diff % (1000 * 60 * 60)  / (1000 * 60))
    let seconds = Math.floor(diff % (1000 * 60) / (1000))
    document.querySelector(".days").innerHTML = day
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".mins").innerHTML = min
    document.querySelector(".seconds").innerHTML = seconds
} ,1000)

// end events

// start video 
let videoList = document.querySelectorAll(".holder .list ul li")
let iframeSource = document.querySelector(".holder iframe")

// console.log(videoList)



videoList[0].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/DqAxcqu5h78"
    videoList[0].classList.add("active-title")
    videoList[1].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
}

videoList[1].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/_C_jeBVmH3E"
    videoList[1].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
    videoList[4].classList.remove("active-title")
    videoList[5].classList.remove("active-title")
    videoList[6].classList.remove("active-title")
    
}


videoList[2].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/Fbodm18s-qA"
    videoList[2].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[1].classList.remove("active-title")
    videoList[4].classList.remove("active-title")
    videoList[3].classList.remove("active-title")
    videoList[5].classList.remove("active-title")
    videoList[6].classList.remove("active-title")
}


videoList[3].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/xUXDUyYOWBQ"
    videoList[3].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[1].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
    videoList[4].classList.remove("active-title")
    videoList[5].classList.remove("active-title")
    videoList[6].classList.remove("active-title")
}

videoList[4].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/eHp3MbsCbMg"
    videoList[4].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[1].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
    videoList[3].classList.remove("active-title")
    videoList[5].classList.remove("active-title")
    videoList[6].classList.remove("active-title")
}

videoList[5].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/BasxzVqJZJg"
    videoList[5].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[1].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
    videoList[3].classList.remove("active-title")
    videoList[6].classList.remove("active-title")
    videoList[4].classList.remove("active-title")

}

videoList[6].onclick = function() {
    iframeSource.src = "https://www.youtube.com/embed/xkt6wzG7pRk"
    videoList[6].classList.add("active-title")
    videoList[0].classList.remove("active-title")
    videoList[1].classList.remove("active-title")
    videoList[2].classList.remove("active-title")
    videoList[3].classList.remove("active-title")
    videoList[5].classList.remove("active-title")
    videoList[4].classList.remove("active-title")
}
// end video


