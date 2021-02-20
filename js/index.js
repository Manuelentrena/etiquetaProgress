const bar = document.querySelector("progress");
const alturaTotal = document.documentElement.scrollHeight;
const alturaVentana = window.innerHeight;
bar.max = alturaTotal - alturaVentana;

document.addEventListener("scroll", () => {
  bar.value = window.scrollY;
});
