let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let leaf = document.getElementById('leaf');
let plant = document.getElementById('plant');
let text = document.getElementById('text');

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  const isMobile = window.innerWidth < 391;

  if (isMobile) {
    text.style.marginTop = value * 1.2 + 'px';
    leaf.style.top = value * -0.8 + 'px';
    leaf.style.left = value * 0.8 + 'px';
    hill5.style.left = value * 0.8 + 'px';
    hill4.style.left = value * -1 + 'px';
    hill4.style.top = value * 0.9 + 'px';
    hill1.style.top = value * 2.5 + 'px';
  } else {
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill3.style.top = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    hill2.style.top = value * 1 + 'px';
    tree.style.top = value * 2 + 'px';
    plant.style.top = value * 1 + 'px';
  }
});