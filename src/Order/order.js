import { useState } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './order.scss';

const Order = () => {
    const [date, setDate] = useState();
    const [numberPeople, setNumberPeople] = useState();
    const [email, setEmail] = useState();

    const handleDatePicked = (date) => {
        console.log('date', date);
        setDate(date);
    }

    const disablePastDays = () => {
        const yesterday = Datetime.moment().subtract( 1, 'day' );
        const valid = function( current ){
            return current.isAfter( yesterday );
        };
        return valid;
    }

    return (
        <div className="order">
            <div className="header">
                <div className="title">
                    Order Header
                </div>
            </div>
            <div className="datePicker">
                <div className="title">
                    Pick date and time
                </div>
                <Datetime
                    onChange={(date) => handleDatePicked(date)}
                    isValidDate={disablePastDays()}
                />
            </div>
            <div className="numberPeople">
                <div className="title">
                    Select amount of people
                </div>
                <input type="number" id="quantity" name="quantity" min="1"></input>
            </div>
            <div className="emailContainer">
                <div className="title">
                    Enter email
                </div>
                <input type="email" id="email" name="email" ></input>
            </div>
            <div className="orderButton">
                <button>
                    Order
                </button>
            </div>
            
        </div>
    );
}

export default Order;