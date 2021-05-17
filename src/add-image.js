import AltKiwi from "./imageAlt.txt";

const addImage = (image) => {
  const img = document.createElement("img");
  img.alt = AltKiwi;
  img.src = image;
  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
