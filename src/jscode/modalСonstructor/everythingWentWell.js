import {Modal} from './modalConstructorDoc'

const wentWell = new Modal({
   nameModal: 'went_well',
   title: 'Ваше обращение отправлено',
   subtitle: 'В ближайшее время с Вами<br />свяжется наш менеджер',
   inputs: [],
   whereSend: 'Менеджер поможет со всеми Вашими вопросами',
   buttons: [{
      textBtn: 'Закрыть'
   }]
})


wentWell.modalHTML()

document.addEventListener('click', () => {
   const priseList = document.querySelector('.overflow_prise_list')
   const orderCall = document.querySelector('.overflow_orderAcall')
   if(priseList.className === 'overflow_prise_list close' && document.querySelector('.close') !== document.querySelector('.overflow_went_well')){
      const massElementPrise = []
      priseList.querySelectorAll('.input_modal').forEach(i => {
         if(i.value !== '') massElementPrise.push(i)
      })
      if(massElementPrise.length === 4){
         setTimeout(() => {
            wentWell.openModal()
            clearValue(priseList)
         }, 350)
      }else return
   }
   if(orderCall.className === 'overflow_orderAcall close' && document.querySelector('.close') !== document.querySelector('.overflow_went_well')){
      const massElementOrder = []
      orderCall.querySelectorAll('.input_modal').forEach(i => {
         if(i.value !== '') massElementOrder.push(i)
      })
      if(massElementOrder.length === 2){
         setTimeout(() => {
            wentWell.openModal()
            clearValue(orderCall)
         }, 350)
      }else return
   }
})

function clearValue(el){
   el.querySelectorAll('.input_modal').forEach(i => {
      i.value = ''
   })
}

document.getElementById('footer_buttom_input').addEventListener('click', () => {
   const input = document.getElementById('input_footer')
   if(input.value !== ''){
      wentWell.openModal()
      input.value = ''
   }
})