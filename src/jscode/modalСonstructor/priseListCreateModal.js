import { Modal } from './modalConstructorDoc'
import url2 from '/src/images/Vector.png'
import url3 from '/src/images/fluent_mail-16-filled.png'


const priseList = new Modal({
   nameModal: 'prise_list',
   title: 'Куда прислать <br /> оптовый прайс-лист?',
   subtitle: 'Получите оптовый прайс лист с лучшими ценами<br />в Акмолинской области',
   inputs: [
      {
         name: 'Имя*',
         inputValue: 'Введите ваше имя'
      },
      {
         name: 'E-mail*',
         inputValue: 'Введите ваш E-mail'
      },
      {
         name: 'Телефон*',
         inputValue: 'Введите ваш телефон'
      },
      {
         name: 'Название организации',
         inputValue: 'Введите название организации'
      },
   ],
   whereSend: 'Куда отправить прайс-лист?',
   buttons: [
      {
         textBtn: 'WhatsApp',
         imageBtn: `${url2}`
      },
      {
         textBtn: 'E-mail',
         imageBtn: `${url3}`
      },
      {
         textBtn: 'Отправить'
      }
   ]
})

priseList.modalHTML()

document.querySelectorAll('.prise_list_open').forEach((el) => {
   el.addEventListener('click', () => priseList.openModal())
})

export function clickButtonPriseListCreateModal(){
   const massButtom = document.querySelector('.overflow_prise_list').querySelectorAll('.button')
      for (let i = 0; i < massButtom.length; i++){
         const elementOne = massButtom[0]
         const elementTwo = massButtom[1]
         const elementThree = massButtom[2]
         elementOne.addEventListener('click', () => {
            elementOne.style.backgroundColor = '#1FD85D',
            elementTwo.style.backgroundColor = '#D4D4D4'
         })
         elementTwo.addEventListener('click', () => {
            elementTwo.style.backgroundColor = '#1FD85D',
            elementOne.style.backgroundColor = '#D4D4D4'
         })
      }
}