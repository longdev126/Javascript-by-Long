// 1 create element
const newImg = document.createElement("img")
console.log(newImg);

//kiem tra toan bo thuoc tinh va phuong thuc doi tuong
console.log(newImg);

//2 sett attribute
// newImg.setAttribute("src","./assets/img/Black Minimalist Grilled Chicken Instagram Story (2).png")

//c2 
newImg.src = "./assets/img/Black Minimalist Grilled Chicken Instagram Story (2).png"

//3 append: them vao 1 phan tu co san 
document.body.append(newImg)
//set chieu rong 100%
newImg.style.width = "100vw"

//vd2 them the p 
const newText = document.createElement("p")
newText.textContent = "Xin chao, em dang hoc js" //set attribute 
document.body.append(newText)

//vd3 them vao 1 phan tu khac 
const p = document.querySelector(".hero__desc")
p.append("Song cau nuoc chay lo tho, co do trai gai ngoi ho quan duoi")

//vd 4 them nhieu ptu vao cuoi ptu cha 
//tao cac phan tu moi 
let elm1 = document.createElement("p")
elm1.textContent = "Day la doan van moi them"

let elm2 = document.createElement("span")
elm2.textContent = "Day la the span"

//lay phan tu cha 
let container = document.querySelector(".hero__heading")
//them nhieu ptu moi vao phan tu cha 
container.append(elm1, elm2, "Some more text")

//prepend 
//Neu muon them vao dau ptu cha thi dung prepend 
container.prepend("Hi!")
