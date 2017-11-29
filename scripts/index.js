console.clear();
import Rellax from 'rellax';

let D = document;
let DH = D.documentElement.clientHeight;
let DS = D.documentElement.scrollTop;
let DSM = D.documentElement.scrollHeight - DH; // maximum scrollTop

let el = {
  kebab: D.querySelector('.kebab'),
  zutaten: D.querySelectorAll('.zutat')
}

let t = 0;

// https://github.com/dixonandmoe/rellax
const rellax = new Rellax('.rellax', {
  // speed: -10,
  // callback: function(positions) {
  //   // callback every position change
  //   console.log(positions);
  // }
});


window.addEventListener('load', handler);
window.addEventListener('scroll', handler);

function handler(e) {
  D = document;
  DH = D.documentElement.clientHeight;
  DS = D.documentElement.scrollTop;
  DSM = D.documentElement.scrollHeight - DH; // maximum scrollTop
  
  t = map(DS, 0, DSM, .1, 1);

  for (let i = 0; i < el.zutaten.length; i++) {
    const zutat = el.zutaten[i];
    zutat.style.transform = `translateY(-${t*i*10}vh)`;
  }

  // console.log(t);
}

function map(value, domainMin, domainMax, rangeMin, rangeMax) {
  return ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin) + rangeMin;
}
