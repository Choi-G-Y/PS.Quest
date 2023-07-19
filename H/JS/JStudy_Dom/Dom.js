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