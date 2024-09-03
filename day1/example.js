const pic = document.getElementById("pic");
pic.src = "https://imgflip.com/s/meme/Cute-Cat.jpg";

const btnYes = document.getElementById("btn-yes");
const btnNO = document.getElementById("btn-No");
btnYes.addEventListener("click", () => {
  pic.src =
    "https://i.pinimg.com/550x/62/82/41/628241b01dc7c4fa2bea6ea702713a87.jpg";
});
btnNO.addEventListener("click", () => {
  pic.src = "https://i.redd.it/s3wr054razbb1.jpg ";
});
