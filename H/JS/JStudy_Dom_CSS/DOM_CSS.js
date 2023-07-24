//색 바꾸기
function ColorFunction() {
    document.getElementById("p1").style.color = "blue";

}

// 상자를 움직이는 animatation
function myMove() {
    let id = null;
    const ani_elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++
            ani_elem.style.top = pos + "px";
            ani_elem.style.left = pos + "px";

        }
    }
}

// 클릭시 요소 변경
function changeTextFunction(id) {
    id.innerHTML = "요소 변경 완료";
}

// 클릭 시 날짜 표시
function TodayDate() {
    document.getElementById("getDate").innerHTML = new Date();
}

// onchange로 내용 변경
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

// onmouseover,out로 내용 변경
function mOver(oText) {
    oText.innerHTML = "변했습니다."
}

function mOut(oText) {
    oText.innerHTML = "마우스를 올려보세요"
}

// onmouseUp, Down으로 내용 변경
function mUp(cText) {
    cText.innerHTML = "클릭을 땟습니다."
}

function mDown(cText) {
    cText.innerHTML = "클릭을 유지중입니다."
}
