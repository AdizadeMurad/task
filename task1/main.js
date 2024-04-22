const btn = document.querySelector("#btn-key");
const inp = document.querySelector("#inp-key");

btn.addEventListener("click", function () {
  const value = inp.value;
  alert(value);
});
