// handle Deposit button
document.getElementById('depositBtn').addEventListener('click', function() {
    // console.log('Checked Deposit ');
    const depositInput = document.getElementById('deposit-input');
    const previousDepositText = depositInput.value;
    const depositInputAmount = parseFloat(previousDepositText);
    // console.log(depositInputAmount);
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositInputAmount;
    // console.log(depositTotalText);
    // update total balance to previous
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositInputAmount;
    // clear input field
    depositInput.value = '';
});
//handle withdraw button
document.getElementById('withdrawBtn').addEventListener('click', function() {
    // console.log('checked withdraw button');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText)
        // console.log(withdrawAmountText);
        // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    // clear input field
    withdrawInput.value = '';
});