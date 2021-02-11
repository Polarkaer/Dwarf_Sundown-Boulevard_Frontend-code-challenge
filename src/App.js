import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dish from './Dish/dish';
import Home from './Home/home';
import Drinks from './Drinks/drinks';
import Order from './Order/order';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
			<nav>
				<ul>
					<li>
					<Link to="/">
						<img src={logo} className="header-logo" alt="logo" />
					</Link>
					</li>
					<li>
						Restauranter
					</li>
					<li>
						Produkter
					</li>
					<li>
						Nyhedsbrev
					</li>
					<li>
						Kontakt
					</li>
				</ul>
			</nav>
        </header>
		<main>
			<Switch>
				<Route path="/dish">
					<Dish />
				</Route>
				<Route path="/drinks">
					<Drinks />
				</Route>
				<Route path="/order">
					<Order />
				</Route>
				<Route path="/receipt">
					<Receipt />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</main>
		<footer>
			Sundown Boulevard
		</footer>
      </div>
    </Router>
  );
}

const Receipt = () => {
  return <h2>Receipt</h2>;
}


export default App;
