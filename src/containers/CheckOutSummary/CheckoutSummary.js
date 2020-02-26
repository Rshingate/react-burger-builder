import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Checkout from '../../components/Burger/Checkout/Checkout';
import DeliveryDetails from './DeliveryDetails';

export default class CheckoutSummary extends Component {

    state = {
        ingredients:null,
        totalPrice:null
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries())
        {
            if(param[0]==='price'){
                price =param[1];
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.push('checkout/delivery-details');
    }

    render() {
        return (
            <div>
                <Checkout
                cancelled = {this.checkoutCancelled}
                continue = {this.checkoutContinue}
                ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path +'/delivery-details'}
                render ={() => (<DeliveryDetails ingredients={this.state.ingredients}
                price={this.state.totalPrice} {...this.props}/>)} />
            </div>
        )
    }
}
