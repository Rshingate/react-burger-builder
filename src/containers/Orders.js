import React, { Component } from 'react'
import Order from '../components/Burger/Order/Order';
import axios from '../axios-orders'
import Spinner from '../components/UI/Spinner/Spinner';

export default class Orders extends Component {

    state = {
        orders:null
    }

    componentDidMount(){
        axios.get("/orders.json")
        .then((response) => {
            this.setState({orders:response.data})
        })
        .catch((error) => {

        })
    }


    render() {
        let orderData = <Spinner/>;
        if(this.state.orders){
            orderData = Object.entries(this.state.orders).map((order) => {
                return <Order key={order[0]} ingredients={order[1].ingredients}
                price={order[1].price}
                orderId={order[0]}
                delivery={order[1].customer}
                />
            });
        }


        return (
            <div>
                {orderData}
            </div>
        )
    }
}
