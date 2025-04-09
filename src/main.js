const buttons = document.getElementsByClassName('.card');

let totales = 0;

const addToCar = (prodId) => {
    const prodSpan = document.getElementById(prodId);
    const num = parseInt(prodSpan.innerText);
    prodSpan.innerText = num + 1;
    totales += 1;
    document.getElementById('tot').innerText = totales * 51;
}

const inps = document.getElementsByClassName('inp');
const pay = () => {
    let valid = true;
    for (let inp of inps) {
        valid = valid && inp.checkValidity();
    }
    if (valid) alert('compra realizada con exito');
    else alert('los campos son invalidos')
}

window.addToCar = addToCar;
window.pay = pay;