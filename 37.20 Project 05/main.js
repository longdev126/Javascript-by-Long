const button = document.querySelectorAll(".btn")

button.forEach(function(button) {
    button.addEventListener("click", function(e){
        //lấy tọa độ độ button so với viewport
        const buttonRect = e.target.getBoundingClientRect()
        console.log(buttonRect);

        //lấy tọa độ chuột click so với viewport
        const x = e.clientX
        const y = e.clientY
        console.log(x, y);
        
        //tính tọa độ chuột click so với button
        const xInside = x - buttonRect.left
        const yInside = y - buttonRect.top

        //thêm thẻ span, để thêm class circle
        const hinhTron = document.createElement("span")
        hinhTron.classList.add("circle")
        hinhTron.style.top = yInside  + "px"
        hinhTron.style.left = xInside  + "px"
        
        this.appendChild(hinhTron)

        //xóa hình tròn sau khi animation kết thúc 
        setTimeout(() => hinhTron.remove(), 500)

    })
})