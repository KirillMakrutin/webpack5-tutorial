import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import addImage from "./add-image";
import Kiwi from "./kiwi.jpg";
import KiwiSvg from "./kiwi.svg";

new HelloWorldButton().render();
new Heading().render();

helloWorld();
addImage(KiwiSvg);
addImage(Kiwi);
