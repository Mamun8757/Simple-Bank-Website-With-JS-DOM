document.getElementById('btn-withdraw').addEventListener('click', function(){
    const getFieldValueInitial = document.getElementById('withdraw-field');
    const getFieldValueString = getFieldValueInitial.value ;
    const getFieldValue = parseFloat(getFieldValueString);

    //Now just add fieldValue to the Current Deposit value:
    const previousDepositValueInitial = document.getElementById('withdraw-amount');
    const previousDepositValueString = previousDepositValueInitial.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    const currentDeposit = previousDepositValue + getFieldValue;
    previousDepositValueInitial.innerText = currentDeposit;
    getFieldValueInitial.value = ''; 
    
    const addDeposit = document.getElementById('total-balance');
    const currentBalanceString = addDeposit.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    
    const totalBalance = currentBalance - getFieldValue;
    addDeposit.innerText = totalBalance;

    //Error Handling
   
    
})