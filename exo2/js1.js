let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
    document.body.style.backgroundColor = "white";
  } else {
    d1.style.display = "block";
    document.body.style.backgroundColor = "darkgrey";
  }
})

togg1.addEventListener("blur", () => {
  if(getComputedStyle(d1).backgroundColor != "darkgrey"){

    document.body.style.backgroundColor = "white";
    d1.style.display = "none";
  } else {
   
    document.body.style.backgroundColor = "darkgrey";
  }
})



