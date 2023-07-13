function loadscript() {
    document.getElementById("call").innerHTML = "외부에서 불러오기 성공";
}

// innerHTML사용
document.getElementById("age").innerHTML = 2023 - 1998;

// window.alert 사용
// window는 선택사항
// window.alert('alert 기능을 연습해보았습니다.');

// console.log

console.log('콘솔로그');


// const 상수배열 변경

const cars = ['Saab', 'Volvo', 'BMW'];
// 배열 순서를 3 이후로 넣어서 const에 추가하는방법
cars[0] = "Toyota";
// push를 이용한 마지막에 들어오게 하는 방법.
cars.push("Audi,HD");

document.getElementById("ConNum").innerHTML = cars;





