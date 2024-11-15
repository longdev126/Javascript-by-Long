//llấy các phần tử cần thao tác 
const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const steps = document.querySelectorAll(".step")

let currentActive = 1 //khởi tạo giá trị ban đầu của bước đang hoạt động

//lắng nghe sự kiện cho nút next
next.addEventListener("click", function(){
    changeStep(1) //tăng bước lên 1 
})

//lắng nghe sự kiện cho nút prev
prev.addEventListener("click", function(){
    changeStep(-1) //tăng bước lên 1 
})

function changeStep(step) {
    currentActive += step //thay đổi giá trị currentActive

    update() //cập nhật lại giao diện
}

function update() {
    //Duyệt qua các phần tử của danh sách steps
    steps.forEach(function(step, idx){
        if(idx < currentActive) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
     })

     //Bật hoặc tắt các nút "Prev" và "Next" dựa trên giá trị currentAcctive
     prev.disabled = currentActive === 1
     next.disabled = currentActive === steps.length

     //cập nhật chiều rộng của thanh tiến trình
progress.style.width = ((currentActive - 1) / (steps.length - 1)) *100 +"%"
}

