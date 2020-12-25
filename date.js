timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行
function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}
function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = ('00' + (now.getMonth()+1)).slice(-2); //１を足すこと
    var day = ('00' + now.getDate()).slice(-2);
    var you = now.getDay();
    var hour = ('00' + now.getHours()).slice(-2);
    var min = ('00' + now.getMinutes()).slice(-2);
    var sec = ('00' + now.getSeconds()).slice(-2);
    //曜日の選択肢
    var youbi = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    //出力用
    var s = year + "/" + mon + "/" + day + " " + youbi[you] + " " + hour + ":" + min + ":" + sec;
    return s;
}