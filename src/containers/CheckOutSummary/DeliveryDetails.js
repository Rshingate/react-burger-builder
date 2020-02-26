import React, { Component } from 'react'
import axios from '../../axios-orders';
import Button from '../../components/UI/Button/Button';

export default class DeliveryDetails extends Component {

    state = {
        customer : {
            name:'',
            mob:'',
            city : '',
            area : '',
            zipCode : ''
        },
        loading:false
    }

    placeOrder = () => {
        this.setState({loading:true});
        const post = {
            ingredients : this.props.ingredients,
            price : this.props.price,
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
        .then(response =>   this.setState({loading:false}))
        .catch(error => this.setState({loading:false}))


        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h3>Enter Delivery Details</h3>
                <div>
                    <input style={{display:'block',margin:'auto',padding:'10px'}} type="text" name="name" placeholder="Name" />
                    <input style={{display:'block',margin:'auto',padding:'10px'}} type="text" name="mob" placeholder="Mobile"/>
                    <input style={{display:'block',margin:'auto',padding:'10px'}} type="text" name="city" placeholder="City"/>
                    <input style={{display:'block',margin:'auto',padding:'10px'}} type="text" name="area" placeholder="Area"/>
                    <input style={{display:'block',margin:'auto',padding:'10px'}} type="text" name="zipCode" placeholder="Zipcode"/>
                    <Button clicked={this.placeOrder} btnType="Success" >PLACE ORDER</Button>
                </div>
            </div>
        )
    }
}
