import React, { Component } from "react";
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'

const INGREDIENT_PRICE = {
        'cheese' : 1.5,
        'meat' : 3.5,
        'salad' : 1.2,
        'bacon' : 2.5,
}


class BurgerBuilder extends Component{

    state = {
        ingredients : {
            'cheese' : 0,
            'meat' : 0,
            'salad' : 0,
            'bacon' : 0,
        },
        totalPrice:5
    }

    addIngredients= (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
                ...this.state.ingredients
        }

        updateIngredients[type] = updatedCount;

        //CALCULATE PRICE
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];

        this.setState({
            totalPrice:newPrice,
            ingredients:updateIngredients,
        });
    }

    removeIngredients= (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount === 0){
            return;
        }

        const updatedCount = oldCount - 1;
        const updateIngredients = {
                ...this.state.ingredients
        }

        updateIngredients[type] = updatedCount;

        //CALCULATE PRICE
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICE[type];

        this.setState({
            totalPrice:newPrice,
            ingredients:updateIngredients,
        });

    }

    render(){

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls addIng={this.addIngredients}
                                removeIng = {this.removeIngredients}/>
            </Aux>
        )
    }

}

export default BurgerBuilder;