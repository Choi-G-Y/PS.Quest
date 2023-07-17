
function myFunction(p1, p2, p3) {
    return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("test").innerHTML = result;

function myChange() {
    let change = document.getElementById("string_Chg").innerHTML;
    document.getElementById("string_Chg").innerHTML = change.replace("노력", "재능");
    // document.getElementById("string_Chg").innerHTML = change.replace("재능", "노력");
}

function quest() {
    document.getElementById("hello").innerHTML = "hello world";
}
