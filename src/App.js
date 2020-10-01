const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {},  props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(Pet, {name : "Catter", animal: "Bird", breed:"Cockatiel"}),React.createElement(Pet, {name : "Doink", animal: "Cat", breed:"Mixed"}),React.createElement(Pet, {name : "Luna", animal: "Dog", breed:"Havanese"}),
    )
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)