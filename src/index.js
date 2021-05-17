import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import addImage from "./add-image";
import Kiwi from "./kiwi.jpg";
import KiwiSvg from "./kiwi.svg";

const hwBtn = new HelloWorldButton();
hwBtn.render();

helloWorld();
addImage(Kiwi);
addImage(KiwiSvg);
