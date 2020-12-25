function select_png(){
var randoms = [];
var min = 1, max = 32;
for(i = min; i <= max; i++){
    while(true){
        var tmp = intRandom(min, max);
        if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}
console.log(randoms)
var png1 = "random_photo/"+randoms[0]+".png";
document.getElementById("area1").src = png1;
var png2 = "random_photo/"+randoms[1]+".png";
document.getElementById("area2").src = png2;
var png3 = "random_photo/"+randoms[2]+".png";
document.getElementById("area3").src = png3;
var png4 = "random_photo/"+randoms[3]+".png";
document.getElementById("area4").src = png4;
var png5 = "random_photo/"+randoms[4]+".png";
document.getElementById("area5").src = png5;
var png6 = "random_photo/"+randoms[5]+".png";
document.getElementById("area6").src = png6;
setTimeout("select_png()",10000);
}