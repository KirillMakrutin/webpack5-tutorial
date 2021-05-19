import "./heading.scss";

class Heading {
  render(pageName) {
    const h1Elem = document.createElement("h1");
    h1Elem.innerHTML = `Custom JS Heading class component. This is "${pageName}" page`;
    document.querySelector("body").appendChild(h1Elem);
  }
}

export default Heading;
