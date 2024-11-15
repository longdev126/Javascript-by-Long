//1 removeChild
//chon phan tu can xoa
let childElm = document.querySelector("#item2")
//chọn phần tử cha của phần tử cần xóa 
let ul = document.querySelector("#list")
//Xóa phần tử removeChild
ul.removeChild(childElm);

//c2 ngan gon , khong can chon phan tu cha 
//lay phan tu can xoa
let childElm2 = document.querySelector("#item3")
childElm.parentElement.removeChild(childElm2)