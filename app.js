function login() {
    document.getElementById("transection-area").style.display = "block";
    document.getElementById("login-area").style.display = "none";
}

function handleDeposit() {
    var input = document.getElementById("depodit-input").value;
    var inputvalue = parseFloat(input);
    var currentDeposit = document.getElementById("current-deposit").innerText;
    var currentDepositvalue = parseInt(currentDeposit);
    var totalDeposit = inputvalue + currentDepositvalue;
    document.getElementById('current-deposit').innerText = totalDeposit;

    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalanceValue = parseFloat(totalBalance)
    var subtotal = totalBalanceValue + inputvalue;
    document.getElementById('total-balance').innerText = subtotal;
}

function handleWithdraw() {
    var withdrawinput = document.getElementById('Withdraw').value;
    var withdrawinputvalue = parseFloat(withdrawinput)

    var currentwithdraw = document.getElementById('current-withdraw').innerText;
    var currentwithdrawvalue = parseFloat(currentwithdraw);
    var totalWithdraw = withdrawinputvalue + currentwithdrawvalue;
    document.getElementById('current-withdraw').innerText = totalWithdraw;


    var totalBalance = document.getElementById('total-balance').innerText;
    var totalBalanceValue = parseFloat(totalBalance)
    var subtotal = totalBalanceValue - withdrawinputvalue;
    if (subtotal < 0) {
        alert("what are you doing man")
    } else {

        document.getElementById('total-balance').innerText = subtotal;
    }

}