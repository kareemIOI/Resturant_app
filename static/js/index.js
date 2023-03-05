var lastScrollTop;
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        var navbarHight = Number.parseInt(getComputedStyle(navbar).height)
        navbar.style.top= -Number(navbarHight+10)+'px'
        // close the list too
    }
    else{
    navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});

let GoTop = document.querySelector("button.GoTop")
let simpleMenu = document.querySelector(".simple-menu")
let simpleMenuOffestTop = simpleMenu.getBoundingClientRect().top

let countSection = document.querySelector(".count-section")
let countsectionOffsetTop = countSection.getBoundingClientRect().top
let counts = document.querySelectorAll(".count-section ul li .roww .number")
let started = false
window.onscroll = function(){
    if(window.scrollY >= countsectionOffsetTop - 200){
        countON()
    }
    if(window.scrollY >= simpleMenuOffestTop){
        GoTop.style.display = "block"
        
    }
    else{
        GoTop.style.display = "none"
    }
    console.log("hello")
}
// onclick works...because GoTopbutton is an existing element inside the html
GoTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
function countON(){
    if(!started){
        counts.forEach(element => {
            startCount(element)
        }); 
    }
    started = true
}
function startCount(ele){
    let goal = ele.dataset.number;
    console.log(goal)
    let count = setInterval(function(){
        ele.textContent++
        if(ele.textContent === goal){
            clearInterval(count)
        }
    },(1000/goal))
}

let landingfood = document.querySelector(".landing .img")
let i =2
setInterval(() => {
    if(i ===4){
        i = 1
    }
    landingfood.removeChild(landingfood.firstElementChild)
    let img = document.createElement("img")
    img.setAttribute("src",`/static/imgs/landingfood${i}.png`)
    img.setAttribute("data-aos","fade-left")
    img.setAttribute("data-aos-once","true")
    img.setAttribute("data-aos-duration","2000")
    landingfood.appendChild(img)
    i++
}, 10000);
// console.log("test")
// start comment section
let comments = [
    {
        name:"Marry lous",
        work:"Marketing Director",
        comment:"Adults should be able to go out and enjoy a quiet dinner. There are plenty of family restaurants that allow children... should be nothing wrong with having a few for adults."
    },
    {
        name:"Sara OL",
        work:"Principal",
        comment:"Coffe smells better than is tastes and chocolate tastes better than it smells."
    },
    {
        name:"Ahmad Sayed",
        work:"Prep Cook",
        comment:"No one should suffer from food insecurity when they work 40 hours a week."
    },
    {
        name:"Lana mais",
        work:"Media Buyer",
        comment:"i like dessert made with lemon better than chocolate - lemo meringue pie over chocolate cake."
    },
    {
        name:"Younnis",
        work:"Director",
        comment:"Different pasta shapes MAKE THE PASTA TASTE DIFFERENT , shells being the best."
    },
]
let comment = document.querySelector(".Comments .container .commentSection")
let beforeBtn = document.querySelector(".Comments .container .UserDeatils .control #left")
let AfterBtn = document.querySelector(".Comments .container .UserDeatils .control #rigth")
let commenterName = document.querySelector(".Comments .UserDeatils .userInfo .name")
let commenterWork = document.querySelector(".Comments .UserDeatils .userInfo .work")
let CommentIndex = 0
AfterBtn.onclick = function(){
    aftercomment()
}
beforeBtn.onclick = function(){
    comment.removeChild(comment.lastElementChild)
    let text1 = document.createElement("p")
    text1.classList.add("fs-5")
    text1.setAttribute("data-aos","fade")
    text1.setAttribute("data-aos-duration","1000")
    if(CommentIndex === 0){
        CommentIndex = comments.length
    }
    CommentIndex--
    text1.textContent = comments[CommentIndex].comment
    comment.appendChild(text1)  
    console.log(CommentIndex)
    commenterName.textContent = comments[CommentIndex].name
    commenterWork.textContent = comments[CommentIndex].work
}
setInterval(() => {
    aftercomment()
}, 10000);

function aftercomment(){
    comment.removeChild(comment.lastElementChild)
    let text1 = document.createElement("p")
    text1.classList.add("fs-5")
    text1.setAttribute("data-aos","fade")
    text1.setAttribute("data-aos-duration","1000")
    CommentIndex++
    if(CommentIndex === comments.length){
        CommentIndex = 0
    }
    text1.textContent = comments[CommentIndex].comment
    comment.appendChild(text1)    
    commenterName.textContent = comments[CommentIndex].name
    commenterWork.textContent = comments[CommentIndex].work
}


// prepare tow buttons ..clean your js code ... fix the footer resposivity
// console.log("hello test")