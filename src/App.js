const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Some dope pizza, yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hots dogs, wtf Italy ",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Pinapple and ham, wtf America",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza?",
      description: "Bit and pieces of good ol' chicken",
    }),
    React.createElement(Pizza, {
      name: "Baked potato pizza",
      description: "Unholy potato mash, wtf Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
