/**
 * To start the course off we built a drumkit so that when you press a button the browser makes a sound. It’s a very neat use of the <audio> HTML5 element. My biggest takeaway for the first day was learning the CSS transform property (transform — CSS | MDN). In the code we added a listener for every keydown event and passed in a function that plays the appropriate noise associated with that key. We first went through all of the elements that have a “key” class on them and attached an event listener for the “transitionend” event (transitionend — Event reference | MDN). The transitionend fires when a CSS transition ends, go figure! When the user clicks a button we add a “playing” class that begins the transform. Once the “transitionend” fires for an element we remove the “playing” class. The result is that there’s a real nice yellow glow around the button when we press the corresponding key!

Result: https://01-js30-drumkit--connor11528.repl.co/
 * 
 * https://medium.com/employbl/30-things-i-learned-from-javascript-30-fa37d554bfca
 */

window.addEventListener('keydown', playSound);
/* take in the event and play the appropriate sound file */
function playSound(e){
  // ...
}
// add listener to every key for when css transitions end
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransform);
});

function removeTransform(e){
    if(e.propertyName !== 'transform') return; // only listen for transform changes
    this.classList.remove('playing');
}