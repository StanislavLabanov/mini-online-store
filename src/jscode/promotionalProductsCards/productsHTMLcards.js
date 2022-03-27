import {databaseObject} from './Database'

document.addEventListener('load', databaseObject.getDatabase());

export function pushHtmlCardProducts(massData){
  const div = document.getElementById('conteiner_promotional_products_cards')
  if(div){
      div.insertAdjacentHTML('beforeend', `
        <div class="product_card" data-name="${massData.artical}">
          <div class="product_card_conteiner">
              <div class="popular">популярное</div>
              <div class="image_flex_block">
                <img src="${massData.img}" alt="products" class="img_products_card">
              </div>
              <div class="quantity">${massData.name}</div>
              <div class="barcode"><span>Штрихкод:</span>${massData.shCode}</div>
              <div class="manufacturer"><span>Производитель:</span>${massData.producing}</div>
              <div class="brend"><span>Бренд:</span>${massData.brend}</div>
              <div class="flex_block_product_card">
                <div class="prise">${massData.prise}</div>
                <button class="button product_button products_btn" data-id="${massData.artical}">
                    <div class="text_button">В корзину</div>
                    <div class="catalog_image "></div>
                </button>
              </div>
          </div>
        </div>
      `)
  }
}