import React from 'react'
import Burger from '../Burger'
import Button from '../../UI/Button/Button';

export default function Checkout(props) {
    return (
        <div style={{width:'100%',height:'auto',textAlign:'center'}}>
            <h3>Review Your Order !! Check the Burger Is It Fill with correct ingredients??</h3>
            <Burger ingredients={props.ingredients}/>
            <Button clicked={props.cancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continue} btnType="Success">CONTINUE</Button>
        </div>
    )
}
