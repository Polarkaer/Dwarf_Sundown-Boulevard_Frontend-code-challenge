import { useEffect, useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import './home.scss';
import sandwich1 from './slider-images/sandwich1.jpg';
import sandwich2 from './slider-images/sandwich2.jpg';
import sandwich3 from './slider-images/sandwich3.jpg';
import Dish from '../Dish/dish';

const Home = () => {
    const [sliderLeftMargin, setSliderLeftMargin] = useState(0);
    const handleMargin = (back) => {
        if (back) {
            if (sliderLeftMargin >= 0) {
                setSliderLeftMargin(-200);
            } else {
                setSliderLeftMargin(sliderLeftMargin +100);
            }
        } else {
            if (sliderLeftMargin <= -200) {
                setSliderLeftMargin(0);
            } else {
                setSliderLeftMargin(sliderLeftMargin -100);
            }
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderLeftMargin === -200) {
                setSliderLeftMargin(0);
            } else {
                setSliderLeftMargin(sliderLeftMargin -100);
            }
          }, 6000);
          return () => clearInterval(interval);
    });

    return (
        <div className="home">
            <div className="slider">
                <div className="prev" onClick={() => handleMargin(true)}>◂</div>
                <div className="next" onClick={() => handleMargin(false)}>▸</div>
                <div className="carousel" style={{marginLeft: `${sliderLeftMargin}%`}}>
                    <div className="img-container" style={{backgroundImage: `url(${sandwich1})`}}></div>
                    <div className="img-container" style={{backgroundImage: `url(${sandwich2})`}}></div>
                    <div className="img-container" style={{backgroundImage: `url(${sandwich3})`}}></div>
                </div>
            </div>
            <div className="order-flow">
                Here you can order food and it will take you to the pick a dish page.
                <Link to="/dish">
                    <button>
                        Order
                    </button>
                </Link>
            </div>
            <div className="find-order">
                Here you can find an order that you have allready places.
                <input></input>
                <button>Find</button>
            </div>
            <div className="content">
                <span>
                    Bacon ipsum dolor amet doner chuck shoulder filet mignon swine meatloaf ribeye t-bone pork belly salami.
                    Bacon prosciutto buffalo chicken, filet mignon tri-tip porchetta pig ribeye drumstick short loin shank cupim.
                    Jowl meatloaf sirloin prosciutto, porchetta cow pork chop pork belly t-bone frankfurter venison shankle chicken.
                    Ball tip pig cupim, bresaola alcatra chuck tenderloin pork loin picanha spare ribs porchetta pork chop turkey kevin pork belly.
                    Frankfurter turkey ground round strip steak, corned beef short loin sausage. Pork loin t-bone pork chop pork belly chuck, pig brisket.
                </span>
            </div>
            <Switch>
                <Route path="/dish">
                    <Dish />
                </Route>
            </Switch>
        </div>
    );
}

export default Home;