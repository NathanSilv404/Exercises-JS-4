
var keys = {};

onkeydown = onkeyup = function (e) {
   

    keys[e.which] = e.type === 'keydown';
    
    if (keys[17] && keys[18] && keys[69]) {
      d2.style.display = "block";
   
      
    }
    if (keys[17] && keys[18] && keys[70]) {
      d2.style.color = "red";
   
      
    }
}
