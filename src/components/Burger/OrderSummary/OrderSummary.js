import React from 'react';
import Aux from '../../../hoc/Aux'

import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    const  ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
           return (<li key={igKey}>
                    <span style={{textTransform:"capitalize"}}>{igKey} : </span>
                        {props.ingredients[igKey]}
                </li>);
    });


    return (
        <Aux>
            <h3>Your Order Summary:</h3>
            <p>With Following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price is : {props.price.toFixed(2)}</h3>
            <Button clicked={props.cancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.clicked} {...props} btnType="Success">CHECKOUT</Button>
        </Aux>
    );

}

export default orderSummary