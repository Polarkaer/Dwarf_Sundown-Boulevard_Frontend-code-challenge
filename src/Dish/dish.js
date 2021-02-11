import { useEffect, useState } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import './dish.scss';
import Drinks from '../Drinks/drinks';

const Dish = () => {
    const [dishImg, setDishImg] = useState('');
    const [dishDetails, setDishDetails] = useState(null);

    const getDish = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((resp) => { return resp.json() })
        .then((data) => {
          console.log('data', data);
          const theDish = data.meals[0];
          setDishImg(theDish.strMealThumb);
          setDishDetails({
              id: theDish.idMeal,
              title: theDish.strMeal,
              type: theDish.strArea,
              category: theDish.strCategory,
              tags: theDish.strTags,
              ingredients: [
                  theDish.strIngredient1,
                  theDish.strIngredient2,
                  theDish.strIngredient3,
                  theDish.strIngredient4,
                  theDish.strIngredient5,
                  theDish.strIngredient6,
                  theDish.strIngredient7,
                  theDish.strIngredient8,
                  theDish.strIngredient9,
                  theDish.strIngredient10,
                  theDish.strIngredient11,
                  theDish.strIngredient12,
                  theDish.strIngredient13,
                  theDish.strIngredient14,
                  theDish.strIngredient15,
                  theDish.strIngredient16,
                  theDish.strIngredient17,
                  theDish.strIngredient18,
                  theDish.strIngredient19,
                  theDish.strIngredien20,
                ]
          });
        })
        .catch(function () {
        });
    }

    useEffect(() => {
        getDish();
    }, []);

    const arrayStringOutput = (array) => {
        const cleanArray = array.filter(item => item);
        return (cleanArray.join(', '));
    }

    const dishDitails = (mealDetails) => {
        return (
            <>
                <div className="title">{mealDetails.title}</div>
                <div className="type">{mealDetails.type}</div>
                <div className="category">{mealDetails.category}</div>
                <div className="ingredients">
                    Ingredients:
                    <span>
                        {arrayStringOutput(mealDetails.ingredients)}
                    </span>
                </div>
                <div className="tags">Tags: {mealDetails.tags ? mealDetails.tags.replace(/,/g, ", ") : 'no tags'}</div>
            </>
        )  
    } 

    return (
        <div className="dish">
            <div className="image" style={{backgroundImage: `url(${dishImg})`}}>
            </div>
            <div className="nextContainer">
                After you are satefied with the current dish, click next to select drink(s)
                <Link to="/drinks">
                    <button>
                        Next
                    </button>
                </Link>
            </div>
            <div className="details">
                {dishDetails ? dishDitails(dishDetails) : <div>No details</div>}
            </div>
            <div className="new">
                <button onClick={getDish}>Generate new</button>
            </div>
            <Switch>
                <Route path="/drinks">
                    <Drinks />
                </Route>
            </Switch>
        </div>
    );
}

export default Dish;