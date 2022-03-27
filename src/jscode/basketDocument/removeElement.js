export function deleteCard(product){
   document.querySelectorAll('.card_basket').forEach(k=> {
      document.querySelectorAll('.remove_element').forEach(i => {
         i.addEventListener('click', () => {
            if(i.dataset.name === k.dataset.name){
               k.remove()

               const cards = document.querySelectorAll('.card_basket')
               document.querySelector('.number_product').innerHTML = cards.length
               localStorage.setItem('number', cards.length)

               deleteLocalStorage(product)
               notdisabledButtonProducts(i.dataset.name)
               priseRemoveElement(k)

               if(cards.length === 0) noProducts(document.querySelector('.block_basket_elements'))
            }
         })
      })
   })
}

export function noProducts(el){
   el.insertAdjacentHTML('afterbegin', `<div class="no_products">У вас пока нет товаров</div>`)
   document.querySelector('.flex_prise_and_order').remove()
}

function deleteLocalStorage(el){
   localStorage.setItem('tovar', el.innerHTML)
}

function notdisabledButtonProducts(el){
   const massElements = []

   localStorage.getItem('disabled').split(',').forEach(i => { 
      if(el !== i) {
         massElements.push(i)
         localStorage.setItem('disabled', massElements)
      }else if(el === i && localStorage.getItem('disabled').split(',').length === 1){
         massElements.length = 0
         localStorage.setItem('disabled', massElements)
      }
   })
}


function priseRemoveElement(element){
   const number = element.querySelector('.number_products_basket')

   const newPrise = localStorage.getItem('priseMainHTML').replace(/[^0-9\.]/g, '') - (+number.innerHTML * +element.querySelector('.prise').innerHTML.replace(/[^0-9\.]/g, '')) + ' $'
   localStorage.setItem('priseMainHTML', newPrise)
   document.querySelector('.prise_basket_header').innerHTML = newPrise
   document.querySelector('.prise_basket').innerHTML = newPrise

   localStorage.removeItem(`${number.dataset.id}`)
}