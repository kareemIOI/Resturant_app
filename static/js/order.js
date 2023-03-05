let list_toggler = document.querySelectorAll(".menuSction .list-toggler div")
let Lists = document.querySelectorAll(".menuSction .lists .list")
let Choosnlist
let lists = ["breakfast","lunch","dinner","dessert"]
document.addEventListener("click",function(e){
    if(e.target.classList.contains("sec")){
        list_toggler.forEach((element) => {
            if(element.classList.contains("checked")){
                element.classList.remove("checked")
            }  
        })
        e.target.classList.add("checked")
        Choosnlist = lists.indexOf(e.target.classList[1])
        PutList(Choosnlist)
    }
})
function PutList(list){
    Lists.forEach((e,i)=>{
        if(i===list){
            e.classList.add('d-flex')
            e.classList.remove('d-none')
            // e.setAttribute("data-aos","fade-left")
        }
        else(
            e.classList.add("d-none")
        )
    })
}



let OrderNow = document.querySelector("#orderNow")
let orderList = document.querySelector(".orderMenu .orderList")
let OrderMenu = document.querySelector(".orderMenu")
let closebutton = document.querySelector("button.closeButton")
OrderNow.onclick= function(){
    if(OrderMenu.classList.contains("closeMenu")){
        OrderMenu.classList.remove("closeMenu")
        OrderMenu.classList.add("openMenu")
        document.body.style.overflow = "hidden"
    }
}
closebutton.onclick = function(){
    OrderMenu.classList.add("closeMenu")
    OrderMenu.classList.remove("openMenu")
    document.body.style.overflow = "auto"
    orderList.style.display="block"
    OrderedFoodForm.style.display="none"
    refactorFoodList()
    if(!document.querySelector(".orderMenu .bill .items").textContent === " "){
        console.log("helo")
    }
    

}
document.addEventListener("click",function(e){
    if(e.target.classList.contains("img")){
        // open deatils
        // console.log(e.target.getAttribute("data-foodName"))
        // let choose = e.target 
        // console.log(item.firstElementChild.src)
        Choosenitem.foodimg = e.target.firstElementChild.src
        Choosenitem.foodName= e.target.getAttribute("data-foodName")
        Choosenitem.foodprice = e.target.getAttribute("data-foodPrice")
        // console.log(itemimg , itemName , itemPrice)
        ToggleLists()
        SetOrderedFood()
    }
})
function ToggleLists(){
    orderList.style.display="none"
    OrderedFoodForm.style.display="flex"
}
function SetOrderedFood(){
    orderedFoodImg.src = Choosenitem.foodimg
    orderedFoodName.textContent = Choosenitem.foodName
    orderedFoodPrice.textContent = Choosenitem.foodprice
}




let OrderedFoodForm = document.querySelector(".orderedFood-form")
let orderedFoodImg = document.querySelector(".orderedFood-form img")
let orderedFoodName = document.querySelector(".orderedFood-form .FoodName")
let orderedFoodPrice  = document.querySelector(".orderedFood-form .FoodPrice")
let orderedFoodinput = document.querySelector('.orderedFood-form input')
let orderedFoodinput2 = document.querySelector('.orderedFood-form textarea')
let gobackButton = document.querySelector(".orderedFood-form .goback")
let sizelist = document.querySelectorAll(".orderedFood-form .orderedFood-info  .size ul li button")
let order = document.querySelector(".orderedFood-form .button")

let Choosenitem = {
    foodName:"",
    foodprice:"",
    foodimg : "",
    foodsize:"s",
    foodNumber:"1"
}
document.addEventListener("click",function(e){
    if(e.target.classList.contains("sec1")){
        sizelist.forEach((element) => {
            if(element.classList.contains("clicked")){
                element.classList.remove("clicked")
            }  
        })
        e.target.classList.add("clicked")
        Choosenitem.foodsize = e.target.textContent
    }
})
gobackButton.onclick = function(){
    orderList.style.display="block"
    OrderedFoodForm.style.display="none"
    refactorFoodList()
}
function refactorFoodList(){
    orderedFoodinput.value = "1"
    orderedFoodinput2.value = ""
    sizelist.forEach((e,i) =>{
        if(i===0){
            e.classList.add("clicked")
        }
        else{
            e.classList.remove("clicked")
        }
    })
}

let AddItem = document.querySelector(".orderedFood-form button.additem")
AddItem.onclick = function(){
    Choosenitem.foodNumber = orderedFoodinput.value
    CreateItem()
}
function CreateItem(){
    let item = document.createElement("div")
    item.className = "item"

    let itemid = document.createElement("span")
    itemid.className = "item-id"
    itemid.textContent = 0  

    let itemName = document.createElement("span")
    itemName.className = "itme-name"
    itemName.textContent = Choosenitem.foodName

    let itemnumber = document.createElement("span")
    itemnumber.className = "itme-number"
    itemnumber.textContent = Choosenitem.foodNumber

    let itemPrice = document.createElement("span")
    itemPrice.className = "itme-price"
    itemPrice.textContent = (+Choosenitem.foodNumber * +Choosenitem.foodprice)
    item.appendChild(itemid)
    item.appendChild(itemName)
    item.appendChild(  itemnumber)
    item.appendChild( itemPrice)
    document.querySelector(".orderMenu .bill .items").appendChild(item)
    orderList.style.display="block"
    OrderedFoodForm.style.display="none"
    refactorFoodList()
}
// responsive lists fix
// ordre menu imgs fix
// add intro section 
// clean code
