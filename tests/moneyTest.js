import { formatCurrency } from "../scripts/utils/money.js";
//Automatic test
if(formatCurrency(2095)=== '20.95'){
    console.log('Passed')
} else {
    console.log('failed')
}

if(formatCurrency(0)=== '0.00'){
    console.log('Passed')
} else {
    console.log('failed')
}

if(formatCurrency(2000.5)=== '20.01'){
    console.log('Passed')
} else {
    console.log('failed')
}
if(formatCurrency(2000.4)=== '20.00'){
    console.log('Passed')
} else {
    console.log('failed')
}