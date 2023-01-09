d1.addEventListener("mouseover", () => {
  if(getComputedStyle(d1)){
    d1.style.filter= "none";
    d1.style.border= " solid 2px red"
    
  } 
})

d1.addEventListener("mousedown", () => {
  if(getComputedStyle(d1)){
    d1.style.width= "400px";
   
    
  } 

  })
d1.addEventListener("mouseup", () => {
  if(getComputedStyle(d1) ){
    d1.style.width= "200px";
   
    
  } 

  })

  
  
  
  
  
  
  
  
  
  
  
  
  
  d2.addEventListener("mouseover", () => {
    if(getComputedStyle(d2)){
      d2.style.filter= "blur(0px)";
      d2.style.border= " solid 2px red"
      
    } 
  })
  
  d2.addEventListener("mousedown", () => {
    if(getComputedStyle(d2)){
      d2.style.width= "400px";
     
      
    } 
  
    })
  d2.addEventListener("mouseup", () => {
    if(getComputedStyle(d2)){
      d2.style.width= "200px";
     
      
    } 
  
    })
  
  



