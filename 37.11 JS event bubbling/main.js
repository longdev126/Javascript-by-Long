const child = document.querySelector("#child")
const parent = document.querySelector("#parent")
const grandparent = document.querySelector("#grandparent")

child.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("child clicked");
})

parent.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("parent clicked");
})

grandparent.addEventListener("click", function(){
    console.log("grandparent  clicked");
})