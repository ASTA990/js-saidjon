const div1 = document.getElementById("div1");

div1.addEventListener("click", () => {
  console.log("Tolov qildingiz");
  div1.style.backgroundColor = "yellow";
  div1.style.width = "400px"
  div1.style.height = "200px"
  div1.innerHTML = `<button style="width: 100px; height: 60px; border: none; background-color: green; color: snow;">Tolov qilindi</button>`
});

