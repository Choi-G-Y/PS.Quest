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