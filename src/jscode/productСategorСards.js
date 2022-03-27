import imageOne from '/src/images/1620084041_49-phonoteka_org-p-bitovaya-khimiya-fon-61_adobespark 1.png';
import imageTwo from '/src/images/mylo-gel-mochalka-gel-dlya_adobespark 1.png';
import imageThree from '/src/images/mylo-gel-mochalka-gel-dlya_adobespark 1 (1).png';
import imageFour from '/src/images/mylo-gel-mochalka-gel-dlya_adobespark 1 (2).png';
import imageFive from '/src/images/mylo-gel-mochalka-gel-dlya_adobespark 1 (3).png';


class creatingСard{
   constructor(text, image, altText){
      this.text = text;
      this.image = image;
      this.altText = altText;
   }
   toHTML(){
      if(document.getElementById('conteiner_cards_product_categores')){
         document.getElementById('conteiner_cards_product_categores').insertAdjacentHTML('beforeend', `
         <div class="card_product">
            <a href="#" class="background_card"><div> 
            <img src="${this.image}" alt=${this.altText}/>
            </div></a>
            <h3 class="text_card_product"><a href="#">${this.text}</a></h3>
         </div>
      `)
      }
   }
}


new creatingСard('Бытовая химия', imageOne, 'household chemicals image').toHTML()
new creatingСard('Косметика и гигиена', imageTwo, 'cosmetics and hygiene').toHTML()
new creatingСard('Товары для дома', imageThree, 'household goods').toHTML()
new creatingСard('Товары для детей и мам', imageFour, 'products for children and mothers').toHTML()
new creatingСard('Посуда', imageFive, 'dishes').toHTML()
