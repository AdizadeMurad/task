const inpTitle = document.querySelector("#inp-key-title");
const inpText = document.querySelector("#inp-key-text");
const btn = document.querySelector("#btn-key");

function fullFill(title, text) {
  const card = document.querySelector(".card");

  card.innerHTML += ` <div class="title">
<h1>${title}</h1>
</div>
<div class="text">
<p>${text}</p>
</div>`;
}

btn.addEventListener("click", function () {
  const titleValue = inpTitle.value;
  const textValue = inpText.value;

  const obj = [
    {
      name: inpTitle.value,
    },
    {
      murad: inpText.value,
    },
  ];

  localStorage.setItem("Keywords", JSON.stringify(obj));

  fullFill(titleValue, textValue);
  display()
});

const storedKeywords = localStorage.getItem("Keywords");

const parsedKeywords = JSON.parse(storedKeywords);
inpTitle.value = parsedKeywords[0].name;
inpText.value = parsedKeywords[1].murad;



















