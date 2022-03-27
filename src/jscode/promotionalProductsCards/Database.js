import firebase from 'firebase/compat/app'
import { pushHtmlCardProducts } from './productsHTMLcards'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { productLocalStorage} from '../basketDocument/localStorage'


const firebaseConfig = {
  apiKey: "AIzaSyDlkT6frSK7bigmIGPfNFieao1tw9bRZV8",
  authDomain: "my-magazin-6244e.firebaseapp.com",
  databaseURL: "https://my-magazin-6244e-default-rtdb.firebaseio.com",
  projectId: "my-magazin-6244e",
  storageBucket: "my-magazin-6244e.appspot.com",
  messagingSenderId: "1030535333411",
  appId: "1:1030535333411:web:98e455621c9911ac2a9396"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const listRef = ref(storage, 'gs://my-magazin-6244e.appspot.com');


export class SendingDatabase{
   constructor(dishesobj, crystalObj, arielObj, biMaxObj){
      this.dishesobj = dishesobj;
      this.crystalObj = crystalObj;
      this.arielObj = arielObj;
      this.biMaxObj = biMaxObj;
   }
   sendDatabase(){
      fetch('https://my-magazin-6244e-default-rtdb.firebaseio.com/objs.json', {
      method: 'POST',
      body: JSON.stringify([this.dishesobj, this.crystalObj, this.arielObj, this.biMaxObj]),
      headers: {
         'Content-Type': 'application/json'
      }
   })
   }

   getDatabase(){ 
      fetch('https://my-magazin-6244e-default-rtdb.firebaseio.com/objs.json')
         .then(response => response.json())
         .then(response => {
            for(let item in response) response[item].forEach((element, index) => this.getStorage(element, index, response[item].length));
         })
   }
   
   getStorage(el, ind, lengthElement){
      listAll(listRef)
         .then(img => {
            const massImages = img.items.map(item => getDownloadURL(item))
            Promise.all(massImages)
            .then(mass => mass.forEach((item, index) => {
               if(index === ind) el.img = item
            }))
            .then(() => pushHtmlCardProducts(el))
            .then(() => productLocalStorage(el, lengthElement))
         })
   }
}
 

export const databaseObject = new SendingDatabase({
      name: 'AOS Средство для мытья посуды',
      shCode: '8748630760326',
      producing: 'USA',
      brend: 'AOS',
      prise: '49$',
      artical: 'nwnw12',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam 
      nisi sit,<br />pariatur enim repellendus exercitationem repellat distinctio sunt unde 
      temporibus iusto<br />voluptatibus in ipsa, cupiditate totam nostrum. Ratione, nisi? Consequatur!`
   },
   {
      name: 'AOS средство для мытья посуды Crystal',
      shCode: '6595783746735685',
      producing: 'USA',
      brend: 'AOS',
      prise: '34$',
      artical: 'hfhf23',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam 
      nisi sit,<br />pariatur enim repellendus exercitationem repellat distinctio sunt unde 
      temporibus iusto<br />voluptatibus in ipsa, cupiditate totam nostrum. Ratione, nisi? Consequatur!`
   },
   {
      name: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      shCode: '23163263755343',
      producing: 'USA',
      brend: 'AOS',
      prise: '51$',
      artical: 'drdr61',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam 
      nisi sit,<br />pariatur enim repellendus exercitationem repellat distinctio sunt unde 
      temporibus iusto<br />voluptatibus in ipsa, cupiditate totam nostrum. Ratione, nisi? Consequatur!`
   },
   {
      name: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      shCode: '367354468854',
      producing: 'USA',
      brend: 'AOS',
      prise: '43$',
      artical: 'ktkt44',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam 
      nisi sit,<br />pariatur enim repellendus exercitationem repellat distinctio sunt unde 
      temporibus iusto<br />voluptatibus in ipsa, cupiditate totam nostrum. Ratione, nisi? Consequatur!`
   }
)
