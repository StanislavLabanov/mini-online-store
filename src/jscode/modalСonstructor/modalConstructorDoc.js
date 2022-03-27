import url1 from '/src/images/Frame 125 (1).png'
import { clickButtonPriseListCreateModal } from './priseListCreateModal'

export class Modal{
   constructor(massElements){
      this.massElements = massElements;
      this.time = 350
      this.timeDelay = 500
   }

   modalHTML(){
      document.body.insertAdjacentHTML('beforeend', `
      <div class="overflow_${this.massElements.nameModal}" id="oveflow_modal">
         <div class="modal_${this.massElements.nameModal}">
            <div class="modal_conteiner_${this.massElements.nameModal}">
            <img src="${url1}" alt="close" class="close_modal_oveflow" />
            <div class="title_modal_oveflow">${this.massElements.title ? this.massElements.title : ''}</div>
            <div class="subTitle_modal_oveflow">${this.massElements.subtitle ? this.massElements.subtitle : ''}</div>
            <div class="input_block_${this.massElements.nameModal}"></div>
            <div class="where_send_modal_oveflow">${this.massElements.whereSend ? this.massElements.whereSend : ''}</div>
            <div class="flex_button_modal_oveflow_${this.massElements.nameModal}"></div>
            </div>
         </div>
      </div>
      `)
      this.toHTML()
   }

   toHTML(){
      const inputBlock = document.querySelector(`.input_block_${this.massElements.nameModal}`)
      const flexButton = document.querySelector(`.flex_button_modal_oveflow_${this.massElements.nameModal}`)
      const flexInputOne = document.createElement('div')
      const flexInputTwo = document.createElement('div')
      flexInputOne.classList.add('flex_input_one_modal_oveflow')
      flexInputTwo.classList.add('flex_input_two_modal_oveflow')

      for(let item in this.massElements){
         if(this.massElements[item] === this.massElements.inputs){
            this.massElements[item].forEach((element, index) => {
               if(index < 2){
                  flexInputOne.insertAdjacentHTML('beforeend', `
                  <div class="modal_input_block">
                     <div class="text_input_block">${element.name}</div>
                     <div class="input_block_input_field">
                        <input class="input_header input_modal" type="text" placeholder="${element.inputValue}" value="" />
                     </div>
                  </div>
                  `)
               }else if(index > 1){
                  flexInputTwo.insertAdjacentHTML('beforeend', `
                  <div class="modal_input_block">
                     <div class="text_input_block">${element.name}</div>
                     <div class="input_block_input_field">
                        <input class="input_header input_modal" type="text" placeholder="${element.inputValue}" value="" />
                     </div>
                  </div>
                  `)
               }
            })

            inputBlock.append(flexInputOne, flexInputTwo)

         }else if(this.massElements[item] === this.massElements.buttons){
            this.massElements[item].forEach((element, index) => {
               flexButton.insertAdjacentHTML('beforeend', `
               <button class="button button_modal_oveflow_${index}">
                  <div class="text text_button_${index}">${element.textBtn}</div>
                  <img src="${element.imageBtn ? element.imageBtn : ''}" class="image_modal" />
                </button>
               `)
            })
         }
      }
   }

   openModal(){
      const modalOveflow = document.querySelector(`.overflow_${this.massElements.nameModal}`)
      modalOveflow.classList.add('open')
      setTimeout(() => modalOveflow.classList.add('delay'), this.timeDelay)

      /* для кнопок куда отправить */
      clickButtonPriseListCreateModal()

      if(this.massElements.buttons){
         let lastElementIndex = ''
         this.massElements.buttons.reverse().forEach((i, index) => lastElementIndex = index)

         modalOveflow.addEventListener('click', (e) => {
            if(e.target.className === `overflow_${this.massElements.nameModal} open delay` || e.target.className === 'close_modal_oveflow') this.closeModal()
            else if(e.target.className === `button button_modal_oveflow_${lastElementIndex}` || e.target.className === `text text_button_${lastElementIndex}`) this.closeModal()
         })
      }else{
         modalOveflow.addEventListener('click', (e) => {
            if(e.target.className === `overflow_${this.massElements.nameModal} open delay` || e.target.className === 'close_modal_oveflow') this.closeModal()
         })
      }
   }

   closeModal(){
      const modalOveflow = document.querySelector(`.overflow_${this.massElements.nameModal}`)
      modalOveflow.classList.remove('open')
      modalOveflow.classList.remove('delay')
      modalOveflow.classList.add('close')
      
      setTimeout(() => {
         this.deleteClassModal(modalOveflow)
      }, this.time)
   }

   deleteClassModal(element){
      element.classList.remove('close')
   }
}