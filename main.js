let mortForm = document.getElementById('mortgageAmt');
let irForm = document.getElementById('interestRate');
let termForm = document.getElementById('loanTerm');
let totalOut = document.getElementById('totalCost');
let monthlyOut = document.getElementById('monthlyCost');


function update() { //updates calculator

    //mortForm formatting
    

    //mortgage calc math
    let n = termForm.value*12;
    let i = (irForm.value/100)/12;
    let pv = mortForm.value.replace(/,/g, '');

    let monthly = ( pv * i * Math.pow((1+i),n) ) / ( Math.pow((1+i),n) - 1 );
    let total = monthly * n;

    totalOut.textContent = formatNumber(total);
    monthlyOut.textContent = formatNumber(monthly);



}

function formatNumber(num) {
    let output = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return output.format(num);
  }

mortForm.addEventListener('change', update);
irForm.addEventListener('change', update);
termForm.addEventListener('change', update);

// TESTING - TO DELETE
console.log(mortForm, irForm, termForm);
console.log(totalOut,monthlyOut);

console.log(typeof mortForm.value);

//