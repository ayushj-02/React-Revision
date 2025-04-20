// Hello World from JS
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!";
const root = document.getElementById("root");
root.appendChild(heading);

//Hello World from React
// const heading1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// ReactDOM.createRoot(document.getElementById("root")).render(heading1);

// Exercise - Nested HTML Structure
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h1", {}, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h1", {}, "Heading 2"),
  ]),
]);

ReactDOM.createRoot(document.getElementById("root")).render(parent);
