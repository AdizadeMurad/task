const inp = document.querySelector("#inp-key");
localStorage.getItem("Keywords") ? inp.value = localStorage.getItem("Keywords") :null

inp.addEventListener("keyup", function () {
  localStorage.setItem("Keywords",inp.value)
});
