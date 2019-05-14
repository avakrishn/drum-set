'use strict';
import {keys , sounds} from './data.mjs';

window.onload = () => {
  createKeys(); // init function
}

const createKeys = () =>{
   const root = document.getElementById('root');
   const audioDiv = document.getElementById('audio');
   const keysDiv = domElementCreation('div', null, 'keys');

   for(let key in keys){
      const newKey = domElementCreation('div', null, 'key', key.charCodeAt(0));
      const keyLetter = domElementCreation('kbd', key);
      const keySoundSpan = domElementCreation('span', keys[key], 'sound');
      const audio = domElementCreation('audio', null, null, key.charCodeAt(0), sounds[keys[key]]);

      newKey.addEventListener('click', playSound);
      newKey.addEventListener('transitionend', removeTransition);

      newKey.append(keyLetter, keySoundSpan);
      keysDiv.appendChild(newKey);
      audioDiv.appendChild(audio);
   }
   
   root.appendChild(keysDiv);
   window.addEventListener('keydown', playSound); 

   function domElementCreation(tagName, text, className, dataKey, src){
      const newElement = document.createElement(tagName);
      text ? newElement.innerText = text.toUpperCase()  : null; 
      className ? newElement.classList.add(className) : null;
      dataKey ? newElement.setAttribute('data-key', dataKey) : null;
      src ? newElement.setAttribute('src', src) : null;
      return newElement;
   }

   function playSound(event){
      const keyCode = (event.keyCode) ? event.keyCode : this.getAttribute('data-key');

      const audioKey = document.querySelector(`audio[data-key="${keyCode}"]`);

      let key = document.querySelector(`.key[data-key="${keyCode}"]`);;
      // if key is clicked on screen  
      if(this !== window) key = this;
      
      if(!audioKey) return;

      audioKey.currentTime = 0; // rewind to the start
      audioKey.play();

      key.classList.add('playing');
   }

   function removeTransition(event){
      if(event.propertyName !== "transform") return;

      this.classList.remove('playing');
   }

}
