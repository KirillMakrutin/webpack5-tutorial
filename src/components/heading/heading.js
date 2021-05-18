import "./heading.scss";

class Heading {
  render() {
    const h1Elem = document.createElement("h1");
    h1Elem.innerHTML = "Custom JS Heading class component";
    document.querySelector("body").appendChild(h1Elem);
  }
}

export default Heading;
