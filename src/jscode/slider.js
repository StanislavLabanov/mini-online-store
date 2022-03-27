textConteinerImg ()
let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider')

if(document.querySelector('.slider-next')){
   document.querySelector('.slider-next').addEventListener('click', nextBtn)
}
if(document.querySelector('.slider-prev')){
   document.querySelector('.slider-prev').addEventListener('click', prevBtn)
}

function nextBtn(){
   offset += 1366;
   if(offset > 4098){
      offset = 0;
   }
   if(sliderLine){
      sliderLine.style.left = -offset + 'px';
   }
}

function prevBtn(){
   offset -= 1366;
   if(offset < 0){
      offset = 4098;
   }
   if(sliderLine){
      sliderLine.style.left = -offset + 'px';
   }
}

function textConteinerImg (){
   const massContImg = document.querySelectorAll('.conteiner_img')
   if(massContImg){
      massContImg.forEach(item => {
         item.insertAdjacentHTML('beforeEnd', `
         <div class="slider_text_block">
            <h3 class="action_promotion">*Акция действует до 04/09/22</h3>
            <h1 class="main_title_site">Название Акции</h1>
            <p class="p_slider_text_block">Условия акции в пару строк, Условия акции <br />в пару строк, Условия акции в пару строк</p>
            <button class="big_button_site" id="big_button_site">
               <div class="big_button_text" id="big_button_text">принять участие</div>
            </button>
         </div>
         `)
      }) 
   }
}

let interval = setInterval(nextBtn, 4000)

if(slider){
   slider.addEventListener('mouseover', () => {
      clearInterval(interval)
   })
   
   slider.addEventListener('mouseout', () => {
      interval = setInterval(nextBtn, 4000)
   })
}