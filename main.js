let mortForm = document.getElementById('mortgageAmt');
let irForm = document.getElementById('interestRate');
let termForm = document.getElementById('loanTerm');
let totalOut = document.getElementById('totalCost');
let monthlyOut = document.getElementById('monthlyCost');


function update() { //updates calculator

    //mortgage calc math
    let n = termForm.value*12;
    let i = (irForm.value/100)/12;
    let pv = Number(mortForm.value.replace(/,/g, ''));

    let monthly = ( pv * i * Math.pow((1+i),n) ) / ( Math.pow((1+i),n) - 1 );
    let total = monthly * n;
    
    //format mortForm with commas after input
    if (isFinite(mortForm.value)) {
        mortForm.value = numFormatComma(pv);
    }
       
    // ( (total < 0 || isNaN(total)) || (monthly < 0 || isNaN(monthly)) )
    if ( isFinite(total) || isFinite(monthly) ) {
        totalOut.textContent = numToCurr(total);
        monthlyOut.textContent = numToCurr(monthly);    
    } else {
        totalOut.textContent = '$';
        monthlyOut.textContent = '$';
    }

}

function numToCurr(num) {
    let output = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return output.format(num);
  }

function numFormatComma(num) {
    return num.toLocaleString();
}


mortForm.addEventListener('change', update);
irForm.addEventListener('change', update);
termForm.addEventListener('change', update);

// TESTING - TO DELETE
console.log(mortForm, irForm, termForm);
console.log(totalOut,monthlyOut);

//
