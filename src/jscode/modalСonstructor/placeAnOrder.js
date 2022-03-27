import { Modal } from './modalConstructorDoc'

const plaseAnOrder = new Modal({
   nameModal: 'plaseAnOrder',
   title: 'Спасибо за заказ',
   subtitle: 'В ближайшее время с вами свяжется<br /> наш менеджер',
})

plaseAnOrder.modalHTML()

if(document.querySelector('.place_an_order')){
   document.querySelector('.place_an_order').addEventListener('click', () => {
      plaseAnOrder.openModal()
   })
}