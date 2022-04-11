let submit = document.getElementById('submit');
var cardRate = document.getElementById('card-rate');
var cardSelected = document.getElementById('selected');

submit.addEventListener('click', changePage);

function changePage() {
  let rate = 0;
  const rates = document.getElementsByName('rate');
  rates.forEach((el) => {
    if (el.checked) rate = el.value;
  });
  cardRate.classList.replace('on', 'off');
  cardSelected.classList.replace('off', 'on');
  document.getElementById('choosen-score').innerHTML = rate;
}
