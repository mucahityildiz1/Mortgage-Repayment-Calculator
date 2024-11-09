const resultBg = document.querySelector('.mortgage-shown');
const fiyatlandirma = document.querySelector('#fiyat');
const faizHesapla = document.querySelector('#yillikFaiz');
const yuzdeHesapla = document.querySelector('#yuzde');
const calculateBtn = document.querySelector('#calculateBtn');
const clearBtn = document.querySelector('#clearBtn');

function calculateMortgage() {
  fiyatlandirma.value = fiyatlandirma.innerText;
  console.log(fiyatlandirma);
}