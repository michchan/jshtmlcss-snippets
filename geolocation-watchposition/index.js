/**
 * Function is called each time the position of a device changes.
 * 
 * https://medium.com/employbl/30-things-i-learned-from-javascript-30-fa37d554bfca
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
 */

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
});