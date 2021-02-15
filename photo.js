function select_png() {
    let randoms = [];
    let min = 1,
        max = 41;
    for (i = min; i <= max; i++) {
        while (true) {
            let tmp = intRandom(min, max);
            if (!randoms.includes(tmp)) {
                randoms.push(tmp);
                break;
            }
        }
    }

    function intRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(randoms)
    let png1 = "random_photo/" + randoms[0] + ".png";
    document.getElementById("area1").src = png1;
    let png2 = "random_photo/" + randoms[1] + ".png";
    document.getElementById("area2").src = png2;
    let png3 = "random_photo/" + randoms[2] + ".png";
    document.getElementById("area3").src = png3;
    let png4 = "random_photo/" + randoms[3] + ".png";
    document.getElementById("area4").src = png4;
    let png5 = "random_photo/" + randoms[4] + ".png";
    document.getElementById("area5").src = png5;
    let png6 = "random_photo/" + randoms[5] + ".png";
    document.getElementById("area6").src = png6;
    let png7 = "random_photo/" + randoms[6] + ".png";
    document.getElementById("area7").src = png7;
    let png8 = "random_photo/" + randoms[7] + ".png";
    document.getElementById("area8").src = png8;
    let png9 = "random_photo/" + randoms[8] + ".png";
    document.getElementById("area9").src = png9;
    let png10 = "random_photo/" + randoms[9] + ".png";
    document.getElementById("area10").src = png10;
    let png11 = "random_photo/" + randoms[10] + ".png";
    document.getElementById("area11").src = png11;
    setTimeout("select_png()", 10000);
}