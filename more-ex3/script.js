var input = document.getElementById("work-name");
var workList = document.getElementsByClassName("work-item");
const btnAdd = document.getElementById("work-enter");
var btnClose = document.querySelectorAll(".work-item i");

function addWorkItem() {
    if (input.value.length > 0) {
        var workItem = document.createElement("div");
        workItem.className = "work-item";
        workItem.innerHTML = `<p>${input.value}</p>
            <i class="fas fa-times"></i>`
         document.getElementsByClassName("work-list")[0].appendChild(workItem);
    }
    input.value = "";
    resetWork();
}

function resetWork() {
    workList = document.getElementsByClassName("work-item");
    btnClose = document.querySelectorAll(".work-item i");
    for (let i =0; i < btnClose.length; i++) {
        console.log(i);
        btnClose[i].onclick = function () {
            workList[i].parentNode.removeChild(workList[i]);
            resetWork();
        }
    }
}

btnAdd.onclick = function () {
    addWorkItem();
}

input.onkeypress = function (e) {
    if (e.which === 13)
        addWorkItem();
}