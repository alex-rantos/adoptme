const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Catter",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
