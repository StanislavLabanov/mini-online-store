import { Modal } from './modalConstructorDoc'


const orderAcall = new Modal({
   nameModal: 'orderAcall',
   title: 'Заказать звонок',
   subtitle: 'закажите звонок и в ближайшее<br />время с вами свяжется наш менеджер',
   inputs: [
      {
         name: 'Имя*',
         inputValue: 'Введите ваше имя'
      },
      {
         name: 'Телефон*',
         inputValue: 'Введите ваш телефон'
      },
   ],
   buttons: [
      {
         textBtn: 'Отправить'
      }
   ]
})

orderAcall.modalHTML()

document.querySelectorAll('.order_call').forEach((el) => {
   el.addEventListener('click', () => orderAcall.openModal())
})