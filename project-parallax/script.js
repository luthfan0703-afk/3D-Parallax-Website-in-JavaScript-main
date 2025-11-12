let img1 = document.getElementById("img1"),
  img2 = document.getElementById("img2");


  window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    console.log(value);

    img2.style.top = value * 0.8 + 'px';
    
  })