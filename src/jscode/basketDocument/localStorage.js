import urlBasket from '/src/images/Vector (100).png'
import {noProducts, deleteCard} from './removeElement'
import {blockButtonElements, stylesButtonDisabled, priseProductMainHtml, plusAndMinusNumberStorage, plusNumber, minusNumber} from './priseElement'

export const massProducts = []
const massObjectDataElements = []
export const disabledMass = []


if(localStorage.getItem('priseMainHTML')){
   const textBasketPrise = document.querySelector('.prise_basket_header')
   textBasketPrise.innerHTML = localStorage.getItem('priseMainHTML')
}else{
   const textBasketPrise = document.querySelector('.prise_basket_header')
   textBasketPrise.innerHTML = 0 + ' $'
}


export function buttonDisabled (){
   if(localStorage.getItem('disabled') !== null){
      localStorage.getItem('disabled').split(',').forEach(i => {
         disabledMass.push(i)
         document.querySelectorAll('.product_button').forEach(g => {
            if(g.dataset.id === i) stylesButtonDisabled(g)
         })
      }) 
   }
}

if(localStorage.getItem('tovar') !== null){
   massProducts.push(localStorage.getItem('tovar'))
}

export function productLocalStorage(item, numberElement){
   if(item !== undefined) massObjectDataElements.push(item)
   if(massObjectDataElements.length === numberElement){
      buttonDisabled ()
      let numberProduct = document.querySelector('.number_product')
      document.querySelectorAll('.product_button').forEach(i => i.addEventListener('click', () => {
         numberProduct.innerHTML = +numberProduct.innerHTML + 1
         localStorage.setItem('number', numberProduct.innerHTML)
         blockButtonElements(i, i.dataset.id)
         goProductCard(i.dataset.id)
         priseProductMainHtml(i.dataset.id)
      }))
   }
}

function numberBasketProducts(){
   const number = localStorage.getItem('number') 
   if(number !== null) document.querySelector('.number_product').innerHTML = number
}

function goProductCard(dataElement){
   massObjectDataElements.forEach(i => {
      if(i.artical === dataElement){
         const elementHTMLBasket = `
         <div class="card_basket" data-name="${i.artical}">
            <div class="img_conteiner">
               <img src="${i.img}" alt="products" />
            </div>
            <div class="flex_charecter">
               <div class="barcode">${i.name}</div>
               <div class="manufacturer">${i.text}</div>
            </div>
            <div class="flex_block_product_card">
               <button class="minus" data-id="${i.artical}">-</button>
               <div class="number_products_basket" data-id="${i.artical}">1</div>
               <button class="plus" data-id="${i.artical}">+</button>
            </div>
            <div class="prise" data-id="${i.artical}">${i.prise}</div>
            <div class="remove_element" data-name="${i.artical}">
               <img src="${urlBasket}" alt="products" class="img_products_card">
            </div>
         </div>
         `
         massProducts.push(elementHTMLBasket)
         localStorage.setItem('tovar', massProducts.join(''))
      }
   })
}

function goBasketHtml(){
   const product = document.querySelector('.block_basket_elements')
   if(product !== null) {

      if(document.querySelector('.prise_basket')){
         const priseBasket = document.querySelector('.prise_basket')
         priseBasket.innerHTML = localStorage.getItem('priseMainHTML')
      }
      
      const a = localStorage.getItem('tovar') ? localStorage.getItem('tovar') : ''
      product.insertAdjacentHTML('afterbegin', a)

      if(!product.querySelector('.card_basket'))noProducts(product)
      plusAndMinusNumberStorage()
      plusAndMinusButtons()
      deleteCard(product)
   }
}

function plusAndMinusButtons(){
   const number = document.querySelectorAll('.number_products_basket')
   const plus = document.querySelectorAll('.plus')
   const minus = document.querySelectorAll('.minus')

   number.forEach(i => i.dataset.id)

   plus.forEach(i => i.addEventListener('click', () => number.forEach(n => {
      if(n.dataset.id === i.dataset.id && n.innerHTML < 5){
         n.innerHTML = +n.innerHTML + 1
         localStorage.setItem(`${i.dataset.id}`, n.innerHTML)
         plusNumber(n.dataset.id)
      }
   })))
   minus.forEach(i => i.addEventListener('click', () => number.forEach(n => {
      if(n.dataset.id === i.dataset.id && n.innerHTML > 1){
         n.innerHTML = +n.innerHTML - 1  
         localStorage.setItem(`${i.dataset.id}`, n.innerHTML)
         minusNumber(n.dataset.id)
      }
   })))
}

numberBasketProducts()
goBasketHtml()