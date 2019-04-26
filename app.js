'use strict';
import {keys , sounds} from './data.mjs';

window.onload = () => {
  createKeys(); // init function
}

const createKeys = () =>{
   const keysDiv = domElementCreation('div', null, 'keys');
   const audioDiv = document.getElementById('audio');
   const root = document.getElementById('root');

   for(let key in keys){
      const newKey = domElementCreation('div', null, 'key', key.charCodeAt(0));
      const keyLetter = domElementCreation('kbd', key);
      const keySoundSpan = domElementCreation('span', keys[key], 'sound');
      const audio = domElementCreation('audio', null, null, key.charCodeAt(0), sounds[keys[key]]);

      newKey.append(keyLetter, keySoundSpan);
      keysDiv.appendChild(newKey);
      audioDiv.appendChild(audio);
   }
   
   root.appendChild(keysDiv);

   function domElementCreation(tagName, text, className, dataKey, src){
      const newElement = document.createElement(tagName);
      text ? newElement.innerText = text.toUpperCase()  : null; 
      className ? newElement.classList.add(className) : null;
      dataKey ? newElement.setAttribute('data-key', dataKey) : null;
      src ? newElement.setAttribute('src', src) : null;
      // newElement.addEventListener('click', keyClicked);
      return newElement;
   }

   // function keyClicked(event){

   // }

}
