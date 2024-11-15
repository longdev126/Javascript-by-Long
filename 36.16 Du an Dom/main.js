//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
//Chọn phần tử cha 
const container = document.getElementById("container");

let baseUrl = 
    "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
//tạo phần tử con mới 
// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;
// //thêm phần tử con vào container
// container.appendChild(newImg);

// Bài Toán 2 

// for(let i = 1; i<151; i++) {
//     //tạo phần tử con mới 
//     const newImg = document.createElement("img")
//     newImg.src = `${baseUrl}${i}.png`
//     //thêm phần tử con vào container
//     container.appendChild(newImg);
// }

//bài toán 3 
for(let i = 1; i <= 150; i++) {
    //tạo 1 khối div chứa phần tử img và số thứ tự
    const newDiv = document.createElement("div");
    //thêm div vào cuối container
    //và lấy node mới tạo ra gán vào parentDiv
    const parentDiv = container.appendChild(newDiv);
    //tạo phần tử con, thêm vào trong parenDiv
    const newImg = document.createElement("img")
    newImg.src = `${baseUrl}${i}.png`
    //Thêm vào trong khối penrentDiv
    parentDiv.appendChild(newImg);
    //thêm thẻ span số thứ tự vào trong parentDiv
    const newSpan = document.createElement("Span")
    newSpan.innerText = `#${i}`
    parentDiv.appendChild(newSpan)
}