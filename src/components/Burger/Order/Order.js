import React from 'react'
import classes from './Order.css'

export default function Order(props) {
    const  ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
           return (<li key={igKey}>
                    <span style={{textTransform:"capitalize"}}>{igKey} : </span>
                        {props.ingredients[igKey]}
                </li>);
    });

    return (
        <div className={classes.Order}>
            <h4>Order ID : #{props.orderId}
            </h4>
            <h5>1 Burger with following:</h5>
            <h5>Items :  {ingredientSummary}</h5>
            <h6>Name and Contact : {props.delivery.name} - {props.delivery.mob} </h6>
            <p>Delivery Address : {props.delivery.address1},{props.delivery.address2},{props.delivery.city},{props.delivery.state},{props.delivery.zipCode}</p>
            <p>Total Price: <strong>{parseInt(props.price).toFixed(2)}</strong></p>
            <p>Paid By: <strong>{props.orderpaid}</strong></p>
        </div>
    )
}
