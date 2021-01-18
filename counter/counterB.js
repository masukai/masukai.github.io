let counterOutputB = document.getElementById("counterOutputB");

// 加算機能
let plusButtonB = document.getElementById("plusButtonB");
let onClickPlusButton = () => {
    counterOutputB.value++;
};
plusButtonB.addEventListener("click", onClickPlusButton);

// 減算機能
let minusButtonB = document.getElementById("minusButtonB");
let onClickMinusButton = () => {
    if (counterOutputB.value >= 1) {
        counterOutputB.value--; // カウント数が1以上のときだけ減算する
    }
};
minusButtonB.addEventListener("click", onClickMinusButton);

// リセット機能
let resetButtonB = document.getElementById("resetButtonB");
let onClickResetButton = () => {
    counterOutputB.value = 5;
};
resetButtonB.addEventListener("click", onClickResetButton);