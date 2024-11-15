//function 
//1.1 Xác định phần tử có id là btn
const button1 = document.getElementById("btn")
//1.2 gán sự kiện click cho btn, sử dụng function expression 
// button1.onclick = function() {
//     alert("Bạn đã click vào button")
// } 
//1.3 dùng function declaration khai báo hàm,
//sau đó gán hàm đó cho sự kiện click
function clickHandler() {
    alert("Bạn đã thành công")
}

button1.onclick = clickHandler

//1.4 dùng arrow function 
button1.onclick = () => {
    alert("bạn đã thành công")
}

//1.5 
function mouseOver() {
    document.getElementById("message").textContent = "Mouse is over the button"
}

function mouseOut() {
    document.getElementById("message").textContent = "Mouse left the button"
}

function setup() {
    var button = document.getElementById("btn2")
    button.onmouseover = mouseOver
    button.onmouseout = mouseOut 
}


//37.4 - event - addEventListener 
//1. Lấy phần tử 
const btn = document.getElementById("btn3")
// //2. thêm sự kiện
// //2.1 sử dụng với function expresstion
// btn.addEventListener ("click",
//     function() {
//         alert("Bạn đã click vào button")
// })
// //2.2 Sử dụng với function declaration
// function handleClick () {
//     alert("Bạn đã click vào button")
// }
// btn.addEventListener("click", handleClick)
//2.3 Sử dụng với arrow funcion 
btn.addEventListener("click", () => {
    alert("Bạn đã click vào button")
})

//3. Lợi ích của addEventListener
//3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử 
//Lấy phần tử
const btn4 = document.getElementById("btn4")
//Hàm sử lí sự kiện 1 
function handleClick1 () {
    alert("Đây là sự kiện 1")
}

function handleClick2 () {
    alert("Đây là sự kiện 2")
}

//Thêm sự kiện
// btn4.addEventListener("click", handleClick1)
// btn4.addEventListener("click", handleClick2)

// btn4.onclick = handleClick1 
// btn4.onclick = handleClick2
//về cơ bản sự kiện 1 sẽ ghi đè sự kiện 2 


// 3.2 Xóa sự kiện
// btn4.removeEventListener("click", handleClick1)

//3.3 có thể sử dụng sự kiện với options
btn4.addEventListener("click", handleClick1, {once: true})
btn4.addEventListener("click", handleClick2)

// setup();
//Sự kiện onload của đối tượng window được kích hoạt khi toàn bộ 
// trang web đã tải xuong, bao gồm tất cả các tài nguyên như hình ảnh,
// srcipt, và stylesheet.
