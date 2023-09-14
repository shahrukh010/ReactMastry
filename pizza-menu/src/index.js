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
  const pizzas = pizzaData;
//  const pizzas = [];
  const numberPizza = pizzas.length;

  return (
    <div className="menu">
      <h2>Our menu</h2>
      {numberPizza > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName = {pizza.photoName}
          />
        ))}
      </div> */}
      {/* <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/spinaci.jpg"
        price={15}
      /> */}

      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      /> */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </div>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt="pizzas spinaci"></img>
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <p>{props.pizzaObject.price}</p>
      </div>
    </li>
  );
}
function Footer() {
  //  const hour = new Date().getHours;
  const hour = 15;
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until unitl {closeHour}:00 Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // return (
  //   <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  // );
  // //    return(React.createElement('footer',null,"We're currently open"))
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App></App>
  </React.StrictMode>
);
