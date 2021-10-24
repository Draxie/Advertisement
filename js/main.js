/*-------------- Slider ---------------*/

let slider= document.getElementById('slider');
let price= document.getElementById('price');
let view= document.getElementById('views');

let prices= [8, 12, 16, 24, 36];
let views= ['10K', '50K', '100K', '500K', '1M'];

slider.addEventListener('input', function(){
    let x= slider.value;
    let color = ('linear-gradient(90deg, var(--full-slider-bar) ' + x + '%, var(--empty-slider-bar) ' + x + '%)')
    slider.style.background = color;

    if(isToggled) {
        view.innerHTML= views[x/25]+' PAGEVIEWS'
        price.innerHTML='$' + (prices[x/25] - prices[x/25] * 0.25).toFixed(2);
    }
    else {
        view.innerHTML= views[x/25]+' PAGEVIEWS'
        price.innerHTML='$' + prices[x/25].toFixed(2);
    }
});

/*-------------- Toggle ---------------*/

let planSelector = document.getElementById('switch')
let toggle= document.getElementById('toggle')
let isToggled= false

planSelector.addEventListener('click', function(){
    if(!isToggled){
        toggle.style.marginRight='0px';
        toggle.style.marginLeft='auto';
        planSelector.style.backgroundColor='var(--full-slider-bar)';
        view.innerHTML= views[slider.value/25]+' PAGEVIEWS'
        price.innerHTML='$' + (prices[slider.value/25] - prices[slider.value/25] * 0.25).toFixed(2);
        isToggled=true;
    }

    else{
        toggle.style.marginLeft='0px';
        toggle.style.marginRight='auto';
        planSelector.style.backgroundColor='var(--toggle-background)';
        view.innerHTML= views[slider.value/25]+' PAGEVIEWS'
        price.innerHTML='$' + prices[slider.value/25].toFixed(2);
        isToggled=false;
    }
});

/*-------------- Window resize ---------------*/

let discount = document.getElementById('discount')
let ps = document.getElementById('ps')
    window.addEventListener('resize', function(event) {
    if(window.innerWidth<1200) {
      discount.innerHTML='-25%'
      discount.style.marginRight='42px'
    }
    else discount.innerHTML= '25% discount'
}, true);

window.addEventListener('DOMContentLoaded', (event) => {
    if(window.innerWidth<1200) {
        discount.innerHTML='-25%'
        discount.style.marginRight='42px'
      }
    else discount.innerHTML= '25% discount'
});