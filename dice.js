var count; // 変化しているように見せる回数
let result = [];
let result_count = -1;
var $id = function (id) {
    return document.getElementById(id);
};

function roll() {
    var sai = Math.floor(Math.random() * 6) + 1; // 1から6までの適当な数字
    $id("saikoro").innerHTML = "<img src='dice_photo/" + sai + ".png' width='256' height='256'>";
    //$id("saikoro2").innerHTML = "<img src='dice_photo/" + sai + "' width='256' height='256'>";
    return sai;
}

function anime() {
    let sai = roll();
    count++;
    if (count > 15) {
        count = 0;
        result_count++;
        result.push(sai);
        console.log(result);
        $id("btn").disabled = ""; // ボタンを使える状態にする
        if (result_count > 0) {
            $id("result1").innerHTML = "<img src='dice_photo/" + result[result_count - 1] + ".png' width='128' height='128'>";
        }
        if (result_count > 1) {
            $id("result2").innerHTML = "<img src='dice_photo/" + result[result_count - 2] + ".png' width='128' height='128'>";
        }
        if (result_count > 2) {
            $id("result3").innerHTML = "<img src='dice_photo/" + result[result_count - 3] + ".png' width='128' height='128'>";
        }
        return 0;
    }
    setTimeout(anime, 50); // 50ミリ秒間隔で表示切り替え
}

function saikoro() {
    count = 0;
    $id("btn").disabled = "true"; // ボタンを使用不可にする
    anime(); // サイコロアニメ開始
}

window.onload = function () {
    let sai = roll(); // 一回だけサイコロを振る
}