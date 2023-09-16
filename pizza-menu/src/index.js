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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
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
        <React.Fragment>
          <p>
            Authentic italian cursine. 6 creative dishes to choose from. All
            from our stone oven, all organic,all delicious,
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
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
function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="pizzas spinaci"></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold Out" : pizzaObject.price}</span>
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
          <Order closeHour={closeHour} openHour={openHour} />
          <p>
            We're open until unitl {closeHour}:00 Come visit us or order online.
          </p>
        </div>
      )}
    </footer>
  );
  // return (
  //   <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  // );
  // //    return(React.createElement('footer',null,"We're currently open"))
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00, to {closeHour}:00 Come visut us or order
        Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App></App>
  </React.StrictMode>
);
