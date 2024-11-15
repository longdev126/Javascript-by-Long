let elememt = document.getElementById("myElement")
// thêm 1 lớp mới vào phần tử 
elememt.classList.add("newClass")
// kiểm tra xem phần tử có chưa lớp cụ thẻ không
console.log(elememt.classList.contains("newClass"));
//Xóa một lớp khỏi phần tử 
// elememt.classList.remove("newClass")
// thay thế lớp cũ bằng lớp mới 
elememt.classList.replace("newClass", "abc")
// nếu lớp đã tồn tại, loại bỏ nó, nếu k , thêm vào lớp phần tử 
elememt.classList.toggle("toggleClass")

//xem các class trong phần tử 
console.log(elememt.classList);m                  

