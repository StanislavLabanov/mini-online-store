import url9 from '/src/images/Vector (9).png'
import url5 from '/src/images/Vector (5).png'


const basketBlock = document.querySelector('.basket_block')
const basket = document.getElementById('basket')


basketBlock.addEventListener('mouseover', basketBlockMouseOver)
basketBlock.addEventListener('mouseout', basketBlockMouseOut)

function basketBlockMouseOver(){
   const numberProduct = document.querySelector('.number_product')
   const basketImage = document.querySelector('.basket_image')
   
   basketImage.style.cssText = `
      background-image: url(${url9});
      background-repeat: no-repeat;
      width: 41px;
      height: 29px;
      transition: background-image .35s;
   `
   numberProduct.style.cssText = `
      background-color: #3F4E65;
      transition: background-color .5s;
   `
}

function basketBlockMouseOut () {
   const numberProduct = document.querySelector('.number_product')
   const basketImage = document.querySelector('.basket_image')
   
   basketImage.style.cssText = `
      background-image: url(${url5});
      background-repeat: no-repeat;
      width: 41px;
      height: 29px;
      transition: background-image .5s;
   `
   numberProduct.style.cssText = `
      background-color: #FFC85E;
      transition: background-color .5s;
   `
   removeEventListener('mouseover', basketBlockMouseOver)
}


