


window.onload = () => {

  createKeys(); // init function
}

createKeys = () =>{
   const keys = {'A': 'CLAP', 'S': 'HIHAT', 'D' : 'KICK', 'F': 'OPENHAT', 'G': 'BOOM', 'H': 'RIDE', 'J' : 'SNARE', 'K': 'TOM', 'L': 'TINK'};

   let keysDiv = document.createElement('div');
   keysDiv.classList.add('keys');

   for(let key in keys){
      const newKey = domElementCreation('div', null, 'key',key.charCodeAt(0));
      const keyLetter = domElementCreation('kbd', key);
      const keySound = domElementCreation('span', keys[key], 'sound');

      // const newKey = document.createElement('div');
      // newKey.classList.add('key');
      // newKey.setAttribute('data-key', key.charCodeAt(0));

      // const keyLetter = document.createElement('kbd');
      // keyLetter.innerHTML = key;

      // const keySound = document.createElement('span');
      // keySound.classList.add('sound')
      // keySound.innerHTML = keys[key];


      newKey.append(keyLetter, keySound);
      keysDiv.appendChild(newKey);
   }
   console.log(keysDiv);
   document.getElementById('root').appendChild(keysDiv);

   function domElementCreation(tagName, text, className, dataKey){
      const newElement = document.createElement(tagName);
      text ? newElement.innerText = text : null; 
      className ? newElement.classList.add(className) : null;
      dataKey ? newElement.setAttribute('data-key', dataKey) : null;
      return newElement;
   }

}
