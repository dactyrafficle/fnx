
let container, output;
let arr;

let index;
let index2 = 0;
let indices = [];

window.addEventListener("load", function() {

  container = document.getElementById("container");
  output = document.getElementById("output");
  
  fetch("./fnx.json?x="+Math.random())
  .then(r => r.json())
  .then(arr_ => {
    arr = arr_;
  })
  .then(() => {
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
      indices[i] = i;
    }
    console.log(indices);
    displayThings();
    container.addEventListener("click", function() {
      displayThings();
    }); // closing onclick
  
  }) // closing then-2
  
}); // closing onload

function displayThings() {

  if (index2 == 0) {
    let a = Math.floor(Math.random()*(indices.length-1));
    index = indices[a];
    output.innerHTML = "<div>" + indices.length + "</div>";
    output.innerHTML += "<div>" + arr[index]["fr"] + "</div>";
    index2 = 1;
    indices.splice(a, 1);
    
    console.log(indices.length);
    if (indices.length == 0) {
      for (let i = 0; i < arr.length; i++) {
        indices[i] = i;
      } // closing i-loop
      console.log("reset");
    }
    
    return;
  }
  
  if (index2 == 1) {
    output.innerHTML += "<div>" + arr[index]["en"] + "</div>";
    index2 = 0;
    return;
  }

}; // closing fn