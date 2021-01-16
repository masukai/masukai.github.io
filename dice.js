var count; // 変化しているように見せる回数
var $id = function (id) {
    return document.getElementById(id);
};

function roll() {
    var sai = Math.floor(Math.random() * 6) + 1; // 1から6までの適当な数字
    sai = sai + ".png"; // 画像ファイル名生成
    $id("saikoro").innerHTML = "<img src='dice_photo/" + sai + "' width='256' height='256'>";
    //$id("saikoro2").innerHTML = "<img src='dice_photo/" + sai + "' width='256' height='256'>";
}

function anime() {
    if (count > 15) { // 適当に20回ほど振る
        count = 0;
        $id("btn").disabled = ""; // ボタンを使える状態にする
        return 0;
    }
    roll();
    count++;
    setTimeout(anime, 50); // 50ミリ秒間隔で表示切り替え
}

function saikoro() {
    count = 0;
    $id("btn").disabled = "true"; // ボタンを使用不可にする
    anime(); // サイコロアニメ開始
}

window.onload = function () {
    roll(); // 一回だけサイコロを振る
}