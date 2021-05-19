import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import addImage from "./add-image";
import Kiwi from "./kiwi.jpg";
import KiwiSvg from "./kiwi.svg";

const hwBtn = new HelloWorldButton();
hwBtn.render();
new Heading().render();

helloWorld();
addImage(Kiwi);
addImage(KiwiSvg);

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Production Mode");
}