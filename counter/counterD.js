let counterOutput = document.getElementById("counterOutputD");

// 加算機能
let plusButton = document.getElementById("plusButtonD");
let onClickPlusButton = () => {
    counterOutput.value++;
};
plusButton.addEventListener("click", onClickPlusButton);

// 減算機能
let minusButton = document.getElementById("minusButtonD");
let onClickMinusButton = () => {
    if (counterOutput.value >= 1) {
        counterOutput.value--; // カウント数が1以上のときだけ減算する
    }
};
minusButton.addEventListener("click", onClickMinusButton);

// リセット機能
let resetButton = document.getElementById("resetButtonD");
let onClickResetButton = () => {
    counterOutput.value = 5;
};
resetButton.addEventListener("click", onClickResetButton);