//Chọn tất cả các phần tử có class panel
const panels = document.querySelectorAll(".panel")
//xuất thử biến để xem 
console.log(panels);
//duyệt từng phần tử trong danh sách 
panels.forEach((item)=> {
    //xuất ra giá trị item để xem
    console.log(item);
    //lắng nghe sự kiện click
    item.addEventListener("click", function(){
        //xóa class active của các panel khác 
        removeActive()
        //thêm class active cho panel được click 
        item.classList.add("active")
    })
})

//nut nhan chuyen canh
function removeActive(){
    //duyệt từng phần tử trong danh sách panels
    panels.forEach( function(item){
        //xóa class active
        item.classList.remove("active")
    })
}

const panelss = document.querySelectorAll('.panel');
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    panelss[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + panelss.length) % panelss.length;
    panelss[currentIndex].classList.add('active');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    panelss[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % panelss.length;
    panelss[currentIndex].classList.add('active');
});