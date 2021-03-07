
function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt');


if(accordionList.length){
  accordionList[0].classList.add('ativo');
 accordionList[0].nextElementSibling.classList.add('ativo');


  const active = ('ativo');

  function ativaAccordion(){
    this.classList.toggle(active)
    this.nextElementSibling.classList.toggle(active)
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', ativaAccordion);
  })
}
}

initAccordion();
