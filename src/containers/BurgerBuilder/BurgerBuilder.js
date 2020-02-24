import React, { Component } from "react";
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICE = {
        'cheese' : 1.5,
        'meat' : 3.5,
        'salad' : 1.2,
        'bacon' : 2.5,
}


class BurgerBuilder extends Component{

    state = {
        ingredients : null,
        totalPrice:5,
        purchasable:false,
        purchasing:false,
        loading:false,
        error: false
    }


    componentDidMount(){
        axios.get('https://react-app-3c1c2.firebaseio.com/ingredients.json')
        .then(response => this.setState({ingredients:response.data}))
        .catch( error => {
            this.setState( { error: true } );
        });
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    changePurchase = () => {
         this.setState({purchasing:true});
    }

    removePurchase = () => {
        this.setState({purchasing:false});
    }

    placeOrder = () => {
        this.setState({loading:true,purchasing:false});
        const post = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name:'RRR',
                mob:'7585856565',
                city : 'PU',
                zipCode : '52555'
            },
            deliveryMethod:'normal',
            paymentMethod : 'cash'
        }

        axios.post('/orders.json',post)
        .then(response =>   this.setState({loading:false,purchasing:false}))
        .catch(error => this.setState({loading:false,purchasing:false}))
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
        this.updatePurchaseState(updateIngredients);
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

        //CALCULATE PRICE OF BURGER
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICE[type];

        this.setState({
            totalPrice:newPrice,
            ingredients:updateIngredients,
        });
        this.updatePurchaseState(updateIngredients);
    }

    render(){
        let spinner = null;
        let orderSummary=null
        let burger =null

        if(this.state.loading){
            spinner = <Spinner/>;
        }

        if(this.state.ingredients)
        {
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
            clicked={this.placeOrder}
            cancelled={this.removePurchase}
            price ={this.state.totalPrice} />
            burger = <Burger ingredients={this.state.ingredients}></Burger>
        }
        else{
            orderSummary = <Spinner/>;
            burger =<Spinner/>;
        }
        return (
            <Aux>
                {spinner}
                <Modal show={this.state.purchasing} click={this.removePurchase}>
                {orderSummary}
                </Modal>
                {burger}
                <BuildControls
                    addIng={this.addIngredients}
                    removeIng = {this.removeIngredients}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.changePurchase}
                />
            </Aux>
        )
    }

}   

export default withErrorHandler( BurgerBuilder, axios );