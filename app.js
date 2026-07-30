'use strict'
const switcher= document.querySelector('.btn');
switcher.addEventListener('click',function () { document.boddy.classList.toggle('dark-theme')
    
});
var className= document.boddy.className;
if (className=="light-theme") { this.textContent="Dark"; }
else { this.textContent= "Light";
    }
    console.log('current class name: ' + className);
