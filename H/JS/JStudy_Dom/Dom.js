const element = document.getElementById("intro");

document.getElementById("CallIntro").innerHTML = "이 문장앞에는 intro를 불러올것입니다."
    + element.innerHTML
// 부여된 id가 들어가있는 구간을 불러올 때 쓸 수 있다.

const Tagele = document.getElementsByTagName("p");

document.getElementById("TagCall").innerHTML = "이 문장 앞에는 Tag Name을 불러올것입니다."
    + Tagele[2].innerHTML;
// 지금까지 <p>가 사용된 순서를 적어서 불러올 태그를 선택 할 수 있다.


// class를 이용한 다중선언과 css선택자가 일치하는것을 찾는다.

const query_select = document.querySelectorAll("p.ClassIntro");

document.getElementById("Q_S_Change").innerHTML = '이번에는 다중선택을 하며 여러가지' +
    '속성이 일치하는것을 불러옵니다.' + query_select[0].innerHTML;

const hd_element = document.getElementById("id01");
hd_element.innerHTML = "New Heading";

// Date로 현재시간 나타내기
document.getElementById("Date_now").innerHTML = Date();

// 유효성 검사
function validateForm() {
    let x = document.forms["testForm"]["fname"].value;
    if (x == "") {
        alert("이름은 반드시 입력해야 합니다.");
        return false;
        // 리턴값을 true을 준다면 action_page로 넘어가진다.
    }
}

// 유효성 검사2
/*function Numtest() {
    let Numt = document.getElementById("NubTest").value;
    let text;
    if (isNaN(Numt) && Numt >= 1 && Numt <= 10) {
        text = "유효성 검사 통과";
    } else {
        text = "유효성 검사 불통과";
    }
    document.getElementById("유효숫자 테스트").innerHTML = text;
}*/
// 흠 왜안될까 좀 더 직관적으로 이름을 바꿔서 해봐야겠음.
// 유효성 검사2 mk.2(&&를 사용했을때 비교하는 방법을 잘못씀. 이후 수정하면서 
// isNaN의 기능을 잘못 생각한 덕분에 엄청난 오류)
/*function NumtestFunction() {
    let Numx = document.getElementById("TestNum").value;
    let text;
    if (!isNaN(Numx) && Numx >= 1 && Numx <= 10) {
        text = "유효성 검사 통과";
    } else {
        text = "유효성 검사 불통과";
    }
    document.getElementById("유효숫자 테스트").innerHTML = text;
}*/
// ||를 사용하는것이 더 편하다.
function NumtestFunction() {
    // Get the value of the input field with id="numb"
    let Numx = document.getElementById("TestNum").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(Numx) || Numx < 1 || Numx > 10) {
        text = "유효성 검사 불통과";
    } else {
        text = "유효성 검사 통과";
    }
    document.getElementById("유효숫자 테스트").innerHTML = text;
}

// 유효성 검사 2 끝 생각보다 길게 나왔다 실패한 케이스가 생각보다 많이 나온경우.

// 시험 - a가 1보다 작을 때 hello 텍스트 출력을 가능한 짧게 구현.

function TestFunction() {
    let a = document.getElementById("fieldNum").value;
    if (isNaN(a) || a < 1) {
        alert('Hello World');
    } else {
        alert('해당하는 범위가 아닙니다.')
    }
}
