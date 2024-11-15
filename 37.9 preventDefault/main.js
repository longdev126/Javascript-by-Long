const form = document.querySelector("#login")
const userName = document.querySelector("#name")
//chọn thẻ ul cha
const list = document.querySelector("#list")
const password = document.querySelector("#password")
//để trích xuất dữ liệu từ input,
//chúng ta sẽ sử dụng value proerty

form.addEventListener("submit", function(e) {
    e.preventDefault(userName.value)
    console.log(userName);
    //tạo thẻ li mới 
    const newLi = document.createElement("li")
    newLi.innerText = userName.value;
    list.append(newLi)

    //reset input
    userName.value =""
    password.value =""
})

//ngăn không cho thẻ a chuyển hướng
const link = document.querySelector("a")
link.addEventListener("click", function(e){
    e.preventDefault()
    console.log("Link was clicked");
    
})