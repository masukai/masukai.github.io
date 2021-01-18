let counterOutputA = document.getElementById("counterOutputA");

// 加算機能
let plusButtonA = document.getElementById("plusButtonA");
let onClickPlusButton = () => {
    counterOutputA.value++;
};
plusButtonA.addEventListener("click", onClickPlusButton);

// 減算機能
let minusButtonA = document.getElementById("minusButtonA");
let onClickMinusButton = () => {
    if (counterOutputA.value >= 1) {
        counterOutputA.value--; // カウント数が1以上のときだけ減算する
    }
};
minusButtonA.addEventListener("click", onClickMinusButton);

// リセット機能
let resetButtonA = document.getElementById("resetButtonA");
let onClickResetButton = () => {
    counterOutputA.value = 5;
};
resetButtonA.addEventListener("click", onClickResetButton);