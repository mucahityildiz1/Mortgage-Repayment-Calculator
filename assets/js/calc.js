const resultBg = document.querySelector(".mortgage-shown");
const fiyatlandirma = document.querySelector("#fiyat");
const faizHesapla = document.querySelector("#yillikFaiz");
const yuzdeHesapla = document.querySelector("#yuzde");
const calculateBtn = document.querySelector("#calculateBtn");
const clearBtn = document.querySelector("#clearBtn");

function calculateMortgage() {
  const fiyat = fiyatlandirma.value;
  const faizOrani = faizHesapla.value / 100;
  const yuzde = yuzdeHesapla.value / 100;
  const pesinat = fiyat * yuzde;
  const krediMiktari = fiyat - pesinat;
  const toplamFaiz = krediMiktari * faizOrani;
  const toplamGeriOdeme = krediMiktari + toplamFaiz;
  resultBg.innerHTML = `
    <h3 class="calc-header">Your Results</h3>
    <p class="calc-text">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
   <div class="calc-container">
    <p class="calc-kredi">Your monthly repayments: ${krediMiktari} TL</p>
    <p class="calc-geriodeme">Total you'll repay over the term: ${toplamGeriOdeme} TL</p>
   </div>
  `;
  resultBg.style.display = "block";
}
function clearInputs() {
  fiyatlandirma.value = "";
  faizHesapla.value = "";
  yuzdeHesapla.value = "";
  resultBg.style.display = "none";
}

calculateBtn.addEventListener("click", calculateMortgage);
clearBtn.addEventListener("click", clearInputs);

clearInputs();