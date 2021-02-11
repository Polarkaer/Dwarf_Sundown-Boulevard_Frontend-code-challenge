import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './drinks.scss';
import Order from '../Order/order';

const Drinks = () => {
    const [drinks, setDrinks] = useState(null);
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const getDrinks = () => {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then((resp) => { return resp.json() })
        .then((data) => {
            console.log('data', data);
            setDrinks(data);
        })
        .catch(function () {
        });
    }

    const handleSelectedDrink = (id) => {
        console.log('id', id);
        if(selectedDrinks.includes(id)){
            setSelectedDrinks(oldArray => oldArray.filter(item => item !== id));
        } else {
            setSelectedDrinks(oldArray => [...oldArray, id]);
        }
    }

    const renderDrinks = (drinkArry) => {
        const listDrinks = drinkArry.map((drink) =>
            <div
                key={drink.id}
                className={`drink ${selectedDrinks.includes(drink.id) ? 'active' : ''}`}
                onClick={() => handleSelectedDrink(drink.id)}
            >
                <div className="image" style={{backgroundImage: `url(${drink.image_url})`}}></div>
                <div className="title">{drink.name}</div>
                <div className="selected">✓</div>
            </div>
        );
        return (listDrinks)
    }

    useEffect(() => {
        getDrinks();
    }, []);

    return (
        <div className="drinks">
            <div className="listOfDrinks">
                {drinks ? renderDrinks(drinks) : <div>No drinks found</div>}
            </div>
            <div className="nextContainer">
                After you are satefied with the current drink(s), click next to order.
                <Link to="/order">
                    <button>
                        Next
                    </button>
                </Link>
            </div>
            <Switch>
                <Route path="/order">
                    <Order />
                </Route>
            </Switch>
        </div>
    );
}

export default Drinks;