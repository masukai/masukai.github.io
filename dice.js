var count; // 変化しているように見せる回数
let result = [];
let result_time = [];
let result_count = -1;
var $id = function (id) {
    return document.getElementById(id);
};

function roll() {
    var sai = Math.floor(Math.random() * 6) + 1; // 1から6までの適当な数字
    $id("saikoro").innerHTML = "Time: " + getNow_time() + "<br><img src='dice_photo/" + sai + ".png' width='256' height='256'>";
    return {
        sai: sai,
        time: getNow_time()
    };
}

function anime() {
    let obj = roll();
    let sai = obj['sai'];
    let time = obj['time'];
    count++;
    if (count > 15) {
        count = 0;
        result_count++;
        result.push(sai);
        console.log(result);
        result_time.push(time);
        $id("btn").disabled = ""; // ボタンを使える状態にする
        if (result_count > 0) {
            $id("result1").innerHTML = "Time: " + result_time[result_count - 1] + "<br><img src='dice_photo/" + result[result_count - 1] + ".png' width='64' height='64'>";
        }
        if (result_count > 1) {
            $id("result2").innerHTML = "Time: " + result_time[result_count - 2] + "<br><img src='dice_photo/" + result[result_count - 2] + ".png' width='64' height='64'>";
        }
        if (result_count > 2) {
            $id("result3").innerHTML = "Time: " + result_time[result_count - 3] + "<br><img src='dice_photo/" + result[result_count - 3] + ".png' width='64' height='64'>";
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

function getNow_time() {
    var now = new Date();
    var hour = ('00' + now.getHours()).slice(-2);
    var min = ('00' + now.getMinutes()).slice(-2);
    var sec = ('00' + now.getSeconds()).slice(-2);
    //出力用
    var s = hour + ":" + min + ":" + sec;
    return s;
}