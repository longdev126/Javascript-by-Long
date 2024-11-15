//chon ptu h1 
let heading = document.querySelector("h1")
//thay doi style cua h1 tren giao dien 
// heading.style.backgroundColor = "cyan"
// heading.style.fontSize = "46px"
// heading.style.color = "red"

//cach viet gon nhieu thuoc tinh 
Object.assign(heading.style),{
    backgroundColor: "cyan",
    fontSize: "46px",
    color: "red"
}