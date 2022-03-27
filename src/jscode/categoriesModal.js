const catalog = document.getElementById('catalog')
const mainPhoto = document.getElementById('main_photo_the_site')
const header = document.getElementById('header')
const topHeader = document.querySelector('.header_top_block')
const footer = document.querySelector('.footer')
const bodyBlock = document.querySelector('.body_block')
const time = 350;


function disabledFalse(){
   setTimeout(() => {
      catalog.disabled = false;
   }, time)
}

catalog.addEventListener('click', () => {
   if(catalog.className === 'button') newCreateModal()
   else if(catalog.className === 'close_button') closeModal()
})


function createModal (){
   const divModal = document.createElement('div')
   divModal.classList.add('catalog_modal')
   divModal.insertAdjacentHTML('afterbegin', `
      <div class="conteiner">
         <div class="flex_elements_catalog_modal">
            <div class="element_block">
               <button class="button" id="catalog">
               <div class="text_button">Бытовая химия</div>
               </button>
               <button class="button" id="catalog">
               <div class="text_button">Косметика и гигиена</div>
               </button>
               <button class="button" id="catalog">
               <div class="text_button">Товары для дома</div>
               </button>
               <button class="button" id="catalog">
               <div class="text_button">Товары для детей и мам</div>
               </button>
               <button class="button" id="catalog">
               <div class="text_button">Посуда</div>
               </button>
            </div>
            <div class="element_block">
               <div class="top_element_block">
               <ul>
                  <li>Уход за ванной и туалетом</li>
                  <li><a href="#">Средства для сантехники</a></li>
                  <li><a href="#">Для прочистки труб</a></li>
                  <li><a href="#">Дезинфицирующие средства</a></li>
               </ul>
               </div>
               <div class="bottom_element_block">
               <ul>
                  <li>Стирка и уход</li>
                  <li><a href="#">Порошки для стирки</a></li>
                  <li><a href="#">Отбеливатели, пятновыводители</a></li>
                  <li><a href="#">Мыло хозяйственное</a></li>
                  <li><a href="#">Кондиционеры, опласкиватели</a></li>
                  <li><a href="#">Гели для стирки</a></li>
               </ul>
               </div>
            </div>
            <div class="element_block">
               <div class="top_element_block">
               <ul>
                  <li>Уход за ванной и туалетом</li>
                  <li><a href="#">Средства для сантехники</a></li>
                  <li><a href="#">Для прочистки труб</a></li>
                  <li><a href="#">Дезинфицирующие средства</a></li>
               </ul>
               </div>
               <div class="bottom_element_block">
               <ul>
                  <li>Стирка и уход</li>
                  <li><a href="#">Порошки для стирки</a></li>
                  <li><a href="#">Отбеливатели, пятновыводители</a></li>
                  <li><a href="#">Мыло хозяйственное</a></li>
                  <li><a href="#">Кондиционеры, опласкиватели</a></li>
                  <li><a href="#">Гели для стирки</a></li>
               </ul>
               </div>
            </div>
            <div class="element_block">
               <div class="top_element_block">
               <ul>
                  <li>Уход за ванной и туалетом</li>
                  <li><a href="#">Средства для сантехники</a></li>
                  <li><a href="#">Для прочистки труб</a></li>
                  <li><a href="#">Дезинфицирующие средства</a></li>
               </ul>
               </div>
               <div class="bottom_element_block">
               <ul>
                  <li>Стирка и уход</li>
                  <li><a href="#">Порошки для стирки</a></li>
                  <li><a href="#">Отбеливатели, пятновыводители</a></li>
                  <li><a href="#">Мыло хозяйственное</a></li>
                  <li><a href="#">Кондиционеры, опласкиватели</a></li>
                  <li><a href="#">Гели для стирки</a></li>
               </ul>
               </div>
            </div>
         </div>
      </div>
   `)
   return divModal
}

function newCreateModal(){
   catalog.disabled = true;
   const modal = createModal ()
   document.body.append(modal)
   setTimeout(() => {
      openModal(modal)
   })
}

function openModal(el){
   pageAlignment()
   window.scrollTo(0, 0);
   catalog.className = 'close_button'
   el.classList.add('open')
   disabledFalse()
}

function closeModal(){
   catalog.disabled = true;
   elem = document.querySelector('.catalog_modal')
   catalog.className = 'button'
   elem.classList.remove('open')
   elem.classList.add('close_button')
   setTimeout(() => {
      deleteModal(elem)
   }, time)
}

function deleteModal(el){
   el.parentNode.removeChild(el);
   catalog.removeEventListener('click', () => {
      if(catalog.className === 'button') newCreateModal()
      else if(catalog.className === 'close_catalog_block') closeModal()
   })
   notpageAlignment()
   disabledFalse()
}


function disabledFalse(){
   setTimeout(() => {
      catalog.disabled = false;
   }, time)
}


function pageAlignment(){
   const fullWidth = window.innerWidth;
   const documentWidth = document.documentElement.clientWidth;
   const stripWidth = fullWidth - documentWidth;
   header.style.marginRight = stripWidth + 'px';
   topHeader.style.paddingRight = stripWidth + 'px';
   topHeader.style.width = '100%';
   footer.style.paddingRight = stripWidth + 'px';
   mainPhoto ? mainPhoto.style.paddingRight = stripWidth + 'px' : '';
   bodyBlock.style.paddingRight = stripWidth + 'px';
   document.body.style.overflow = "hidden"
}


function notpageAlignment(){
   header.style.marginRight = "";
   topHeader.style.paddingRight = "";
   mainPhoto ? mainPhoto.style.paddingRight = "" : '';
   document.body.style.overflow = "";
   footer.style.paddingRight = "";
   bodyBlock.style.paddingRight = "";
}
