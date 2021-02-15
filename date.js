timerID = setInterval('clock()', 500); //0.5秒毎にclock()を実行
function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
    let now = new Date();
    let year = now.getFullYear();
    let mon = ('00' + (now.getMonth() + 1)).slice(-2); //１を足すこと
    let day = ('00' + now.getDate()).slice(-2);
    let you = now.getDay();
    let hour = ('00' + now.getHours()).slice(-2);
    let min = ('00' + now.getMinutes()).slice(-2);
    let sec = ('00' + now.getSeconds()).slice(-2);
    //曜日の選択肢
    let youbi = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    //出力用
    let s = year + "/" + mon + "/" + day + " " + youbi[you] + " " + hour + ":" + min + ":" + sec;
    return s;
}