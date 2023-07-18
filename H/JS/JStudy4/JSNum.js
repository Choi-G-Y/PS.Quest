const fruits = []
fruits[0] = 'apple';
fruits[1] = 'orange';
fruits[2] = 'peach';
fruits[3] = 'grape';

document.getElementById("과일").innerHTML = fruits

// for을 이용한 배열 반복

const game = []
game[0] = 'LoL';
game[1] = 'LostArk';
game[2] = 'MapleStory';
game[3] = 'Chess';

let glen = game.length;


let gm = "<ul>";
for (let i = 0; i < glen; i++) {
    gm += "<li>" + game[i] + "</li>";
}

gm += "</ul>";

document.getElementById("게임").innerHTML = gm;

