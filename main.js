
// document.querySelector("#heading_title").setAttribute("style", "color: blue")
//Su dung querySelector de chon phan tu dau tien co class la "list"
const item1 = document.querySelector(".list")

//10.hasAtribute
//kiem tra xem phan tu co thuoc tinh class k ? 
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title")
console.log(item2.hasAttribute("style"));

//11.removeAttribute
//loai bo 1 thuoc tinh khoi phantu
// item2.removeAttribute("style")