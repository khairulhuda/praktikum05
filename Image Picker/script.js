const img = document.getElementById("image");
const selectImg = document.getElementById("select");

const imgSource = {
  Mobil:
    "mobil.jfif",
  Motor:
    "motor.jfif",
  Sepeda:
    "sepeda.jfif",
  Becak:
    "becak.jfif",
  Pesawat:
  "pesawat.jfif",
  Perahu:
  "perahu.jfif",
};

selectImg.addEventListener("change", function () {
img.src = imgSource[this.value];
  img.alt = this.value;
});