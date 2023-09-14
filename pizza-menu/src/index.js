import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "Uppercase" };
  const style = {};
  return (
    <header className="header fotter">
      <h1 style={style}>Fast Pizza React Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/spinaci.jpg"
        price={15}
      />

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      />
    </div>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="pizzas spinaci"></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  );
  //    return(React.createElement('footer',null,"We're currently open"))
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App></App>
  </React.StrictMode>
);
