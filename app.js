var option = document.querySelector('.option')
var from = document.querySelector('.from')
var calc = document.querySelector('.calculate')

calc.addEventListener('click', getToValueAndFromVAlue)

// var fromValue = from.value
var optionValue = option.value

function getToValueAndFromVAlue() {
    var from = document.querySelector('.from')
    var fromValue = from.value
        console.log('from',from.value)
    var toValue = getFromValue()
        console.log('to',toValue)
    
    exchangeRate(fromValue,toValue) 

}

function getFromValue() {
    var to = document.querySelector('.to')
    return to.value
}

function exchangeRate(from,to) {
    var input = document.querySelector('.input')
    var num = document.querySelector('.num')

    //USD AND Canadian Dollar (CAD)
    if(from === 'USD' && to === 'CAD'){
        console.log(input.value * 1.39)
        num.innerHTML = '$' + ' ' + input.value * 1.39 + ' ' + 'CAD'

    }else if(from === 'CAD' && to === 'USD'){
        console.log(input.value * 0.72)
        num.innerHTML = '$' + ' ' + input.value * 0.72 + ' ' + 'USD'
    }
    //USD AND Mexican Peso (MXN)
    if(from === 'USD' && to === 'MXN'){
        console.log(input.value * 18.09)
        num.innerHTML = '$' + ' ' + input.value * 18.09 + ' ' + 'MXN'

    }else if(from === 'MXN' && to === 'USD'){
        console.log(input.value *  0.055)
        num.innerHTML = '$' + ' ' +  input.value *  0.055- + ' ' + 'USD'
    }
    //USD AND Beninese CFA (XOF)
    if(from === 'USD' && to === 'XOF'){
        console.log(input.value * 620.85)
        num.innerHTML = '$' + ' ' + input.value * 620.85 + ' ' + 'XOF'

    }else if(from === 'XOF' && to === 'USD'){
        console.log(input.value *  0.0016)
        num.innerHTML = '$' + ' ' + input.value *  0.0016 + ' ' + 'USD'
    }
    //USD AND Haitian Gourde (HTG)
    if(from === 'USD' && to === 'HTG'){
        console.log(input.value * 133.41)
        num.innerHTML = '$' + ' ' + input.value * 133.41 + ' ' + 'HTG'

    }else if(from === 'HTG' && to === 'USD'){
        console.log(input.value * 0.0075)
        num.innerHTML = '$' + ' ' + input.value *  0.0075 + ' ' + 'USD'
    }
    //USD AND British Pound (BGP)
    if(from === 'USD' && to === 'BGP'){
        console.log(input.value * 0.83)
        num.innerHTML = '$' + ' ' + input.value * 0.83 + ' ' + 'BGP'
    }else if(from === 'BGP' && to === 'USD'){
        console.log(input.value * 1.21)
        num.innerHTML = '$' + ' ' + input.value *  1.21 + 'USD' + ' ' + 'USD'
    }
    //USD AND Bitcoin (BTC)
    if(from === 'USD' && to === 'BTC'){
        console.log(input.value * 0.000029)
        num.innerHTML = '$' + ' ' + input.value * 0.000029 + ' ' + 'XBT'
    }else if(from === 'BTC' && to === 'USD'){
        console.log(input.value * 34256.50 )
        num.innerHTML = '$' + ' ' + input.value *  34256.50 + ' ' + 'USD'
    }
}