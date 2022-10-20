function handleSelect(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const hairColor = document.getElementById("hairColor").value;
  const recreation = document.getElementById("recreation").value;
  const bodyType = document.querySelector("input[name='bodyType']:checked").value;

  createOutput(name, hairColor, bodyType, recreation);
}

function createOutput(name, color, type, recs){
  console.log("creating output: name, " + name + "recs, " + recs);
  console.log(typeof color);
  document.getElementById("mainOutput").removeAttribute("class");
  // let colorText = document.getElementById("hairColor").;
  let response = "this is your name: " + name + ". Your hair color is: " + color + "."

  if (recs === "1" || value === "bulky" ){
    response = response.concat(" ", "you're strong");
  } else if (recs ==="2") {
    response = response.concat(" ", "you're smart");
  } else if (recs ==="3") {
    response = response.concat(" ", "you're thirsty")
  }

  
  console.log(response);
  document.getElementById("output").innerText = response;
}

window.addEventListener("load" , function() {
  document.getElementById("characterForm").addEventListener("submit" , handleSelect);
});
