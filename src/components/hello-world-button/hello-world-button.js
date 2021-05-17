import "./hello-world-button.css";
import "./hwb.scss";

class HelloWorldButton {
  buttonClass = "hello-world-button";
  pClass = "hello-world-text";

  render() {
    const handleButtonClick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello World Text!!!";
      p.classList.add(this.pClass);
      body.appendChild(p);
    };

    const body = document.querySelector("body");

    const button = document.createElement("button");
    button.innerHTML = "Hello World Button";
    button.classList.add(this.buttonClass);
    button.onclick = handleButtonClick;

    body.appendChild(button);
  }
}

export default HelloWorldButton;
