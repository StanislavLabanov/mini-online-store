import img1 from '/src/images/image 20 (1).png';
import img2 from '/src/images/image 20 (2).png';
import img3 from '/src/images/image 20 (3).png';
import img4 from '/src/images/image 20 (4).png';
import img5 from '/src/images/image 20 (5).png';
import img6 from '/src/images/image 20 (6).png';
import img7 from '/src/images/image 20 (7).png';
import img8 from '/src/images/image 20 (8).png';
import img9 from '/src/images/image 20.png';

const ImgMainBlock = document.querySelectorAll('.images_slider_line');
let int = 0;

class Products{
   constructor(img, stylesImg, stylesBlock){
      this.img = img;
      this.stylesImg = stylesImg;
      this.stylesBlock = stylesBlock;
   }
   toHtml(){
      int++;
      ImgMainBlock.forEach(item => {
         item.insertAdjacentHTML('afterbegin', `
         <div class="content_block_img_${int} image_product">
            <img src="${this.img}" alt="image best products" class="img_content_block_${int}" />
         </div>
         `)
      }) 
      this.toCSS(int)
   }
   toCSS(i){
      const contentBlockImg = document.querySelectorAll(`.content_block_img_${i}`)
      const image = document.querySelectorAll(`.img_content_block_${i}`)
      image.forEach(item => {
         item.style.cssText = `
         width: ${this.stylesImg.width}px;
         height: ${this.stylesImg.height}px;
      `
      })
      contentBlockImg.forEach(item => {
         item.style.cssText = `
         width: ${this.stylesBlock}px;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         box-shadow: 0 0 12px 4px #ebe6e6;
         margin-right: 12px;
         margin-left: 12px;
      `
      })
   }
}


new Products(img1,
   {
      width: '82',
      height: '68'
   }, '102',
).toHtml()


new Products(img2,
   {
      width: '157',
      height: '46'
   }, '193'
).toHtml()

new Products(img3,
   {
      width: '82',
      height: '66'
   }, '102'
).toHtml()

new Products(img6,
   {
      width: '105',
      height: '69'
   }, '102'
).toHtml()

new Products(img5,
   {
      width: '124',
      height: '65'
   }, '144'
).toHtml()

new Products(img4,
   {
      width: '140',
      height: '50'
   }, '184'
).toHtml()

new Products(img7,
   {
      width: '140',
      height: '50'
   }, '143'
).toHtml()

new Products(img8,
   {
      width: '102',
      height: '65'
   }, '102'
).toHtml()

new Products(img9,
   {
      width: '63',
      height: '63'
   }, '102'
).toHtml()



/*butoon click scroll slider*/
const buttons = document.querySelectorAll('.btn_block_slider')
const sliderLine = document.querySelector('.slider_line_hidden_block')

function removeActive(){
   const elem = document.querySelector('.active')
   elem.classList.remove('active')
}

for (let i = 0; i < buttons.length; i++) {
   switch(i){
      case(0):
      buttons[i].addEventListener('click', () => nullButtons(0, buttons[i]))
      break;

      case(1):
      buttons[i].addEventListener('click', () => nullButtons(-1366, buttons[i]))
      break;

      case(2):
      buttons[i].addEventListener('click', () => nullButtons(-2732, buttons[i]))
      break;

      case(3):
      buttons[i].addEventListener('click', () => nullButtons(-4098, buttons[i]))
      break;
   }
}

function nullButtons(cheng, num){
   removeActive()
   num.classList.add('active')
   sliderLine.style.left = cheng + 'px'
}

