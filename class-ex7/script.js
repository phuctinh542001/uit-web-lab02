var p0 = document.getElementById("username");
var p1 = document.getElementById("address");
var p2 = document.getElementById("tel");
var p3 = document.getElementById("email");
var p4 = document.getElementById("job");
var p5 = document.getElementById("avatar");
var p6 = document.querySelectorAll(".table-kynang table .name-skill");
var p7 = document.querySelectorAll(".table-kynang table .range-skill");
var skill;
// var People = {};

function addSkill() {
    var skillNode = document.createElement("table");
    skillNode.innerHTML = 
    `<tr>
        <td id="nameSkill" class="thongtin ">Tên KN</td>
        <td>
            <input class="nhaptext name-skill" type="text " size="30 " name="tenkynang " placeholder="Nhập kĩ năng bạn có">
        </td>
    </tr>
    <tr>
        <td class="thongtin ">Mức độ</td>
        <td>
            <input class="range-skill" id="rand" type="range" size="30 " min="0" max="100" step="10">
        </td>
    </tr>`;

    document.getElementsByClassName("table-kynang")[0].appendChild(skillNode);

}

function exportPeople() {
    p6 = document.querySelectorAll(".table-kynang table .name-skill");
    p7 = document.querySelectorAll(".table-kynang table .range-skill");
    skill = new Array(p6.length);
    for (let i = 0; i < p6.length; i++) {
        skill[i] = new Array(2);
    }
    
    for (let i = 0; i < p6.length; i++) {
        skill[i][0] = p6[i].value;
        skill[i][1] = p7[i].value;
    }
    
    const People = {
        name: p0.value,
        address: p1.value,
        tel: p2.value,
        email: p3.value,
        job: p4.value,
        avatar: p5.value,
        skillList: skill
    };
    localStorage.setItem("People", JSON.stringify(People));
    window.location.href = "./index2.html";
    window.open('index2.html', '_blank');
    
}


function updatePeople() {
    
}




