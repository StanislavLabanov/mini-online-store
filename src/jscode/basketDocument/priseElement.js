import {disabledMass} from './localStorage'

/*Блокировка кнопок товара*/
export function blockButtonElements(element, id){
   disabledMass.push(id)
   localStorage.setItem('disabled', disabledMass)
   stylesButtonDisabled(element)
} 

export function stylesButtonDisabled(item){
   item.disabled = true
   if(item.disabled = true){
      item.style.cssText = `
      background-color: #fff;
      color: #F3A50D;
      `
      item.innerHTML = 'Добавлено в корзину';
   }
}

export function priseProductMainHtml(el){
   const textBasketPrise = document.querySelector('.prise_basket_header')
   document.querySelectorAll('.product_card').forEach(i => {
      if(i.dataset.name === el){
         const prise = i.querySelector('.prise').innerHTML.replace(/[^0-9\.]/g, '')
         textBasketPrise.innerHTML = +textBasketPrise.innerHTML.replace(/[^0-9\.]/g, '') + +prise + ' $'
         localStorage.setItem('priseMainHTML', textBasketPrise.innerHTML)
      }
   })
}


export function plusAndMinusNumberStorage(){
   document.querySelectorAll('.number_products_basket').forEach(i => {
      Object.keys(localStorage).forEach(key => {
         if(i.dataset.id === key){
            i.innerHTML = localStorage.getItem(`${key}`)
         }
      })
   })
}


export function plusNumber (item){
   document.querySelectorAll('.prise').forEach(i => {
      if(i.dataset.id === item){
         const element = +localStorage.getItem('priseMainHTML').replace(/[^0-9\.]/g, '') + +i.innerHTML.replace(/[^0-9\.]/g, '') + ' $'
         localStorage.setItem('priseMainHTML', element)
         document.querySelector('.prise_basket_header').innerHTML = element
         document.querySelector('.prise_basket').innerHTML = element
      }
   })
}

export function minusNumber (item){
   document.querySelectorAll('.prise').forEach(i => {
      if(i.dataset.id === item){
         const element = +localStorage.getItem('priseMainHTML').replace(/[^0-9\.]/g, '') - +i.innerHTML.replace(/[^0-9\.]/g, '') + ' $'
         localStorage.setItem('priseMainHTML', element)
         document.querySelector('.prise_basket_header').innerHTML = element
         document.querySelector('.prise_basket').innerHTML = element
      }
   })
}