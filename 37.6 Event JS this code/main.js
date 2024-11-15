//37.6 - This keyword 
//Hàm thay đổi ngẫu nhiên giá trị màu r,g,b
function randomColor() {
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r}, ${g}, ${b})`
}

//Chọn phần tử button

const btnList = document.querySelectorAll(".btn")
//Mỗi lần click thay đổi màu nền và màu chữ của button
// for(let btn of btnList) {
//   if (btn instanceof HTMLElement) {
//     btn.addEventListener("click", function(){
//         this.style.backgroundColor = randomColor()
//         this.style.color = randomColor()
//     })
//   }
// }

//Chọn phần tử có class là title 
const title = document.querySelectorAll(".title")
//Mỗi lần click thay đổi màu nền và màu chữ của title

// for(let  of titles) {
//     if (title instanceof HTMLElement) {
//       title.addEventListener("click", function(){
//           title.style.backgroundColor = randomColor()
//           title.style.color = randomColor()
//       })
//     }
//   }

//Dễ nhận thấy rằng, chúng ta đã viết 2 đoạn code tương tự nhau 
//để thay đổi màu nền và màu chữ của button và title
//để giảm sự lặp lại, chúng ta sẽ viết 1 hàm,sử sụng từ khóa this 
// để tham chiếu đến các phần tử đang sử dụng được click 

function changeColor () {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}
//Code phía trên viết gọn lại như sau
//Mỗi lần click thay đổi màu nền và màu chữ của button 
for(let btn of btnList) {
    btn.addEventListener("click", changeColor)
}

//Mỗi lần click thay đổi màu nền và màu chữ của title 
for(let btn of title) {
    btn.addEventListener("click", changeColor)
}

const form = document.querySelector("#login")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("form đã được submit");
    
})

