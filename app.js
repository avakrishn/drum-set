'use strict';

window.onload = () => {
  createKeys(); // init function
}

const createKeys = () =>{
   const keys = {'A': 'CLAP', 'S': 'HIHAT', 'D' : 'KICK', 'F': 'OPENHAT', 'G': 'BOOM', 'H': 'RIDE', 'J' : 'SNARE', 'K': 'TOM', 'L': 'TINK'};

   const keysDiv = domElementCreation('div', null, 'keys');

   for(let key in keys){
      const newKey = domElementCreation('div', null, 'key', key.charCodeAt(0));
      const keyLetter = domElementCreation('kbd', key);
      const keySound = domElementCreation('span', keys[key], 'sound');

      newKey.append(keyLetter, keySound);
      keysDiv.appendChild(newKey);
   }
   
   document.getElementById('root').appendChild(keysDiv);

   function domElementCreation(tagName, text, className, dataKey){
      const newElement = document.createElement(tagName);
      text ? newElement.innerText = text : null; 
      className ? newElement.classList.add(className) : null;
      dataKey ? newElement.setAttribute('data-key', dataKey) : null;
      return newElement;
   }

}
