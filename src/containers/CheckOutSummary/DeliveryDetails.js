import React, { Component } from 'react'
import axios from '../../axios-orders';
//import Button from '../../components/UI/Button/Button';
import {Form,Col,Button} from 'react-bootstrap';

export default class DeliveryDetails extends Component {

    state = {
        customer : {
            name:'',
            mob:'',
            address1 : '',
            address2 : '',
            city : '',
            state : '',
            zipCode : ''
        },
        loading:false
    }

    handleChange = (event)  => {

        const customerData = {
            ...this.state.customer,
        }

        customerData[event.target.name] = event.target.value;

        this.setState({
            customer:customerData
        });
    }


    placeOrder = () => {
        this.setState({loading:true});
        const post = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name:this.state.customer.name,
                mob:this.state.customer.mob,
                address1 : this.state.customer.address1,
                address2 : this.state.customer.address2,
                city : this.state.customer.city,
                state:this.state.customer.state,
                zipCode : this.state.customer.zipCode
            },
            deliveryMethod:'normal',
            paymentMethod : 'cash'
        }

        axios.post('/orders.json',post)
        .then(response =>   this.setState({loading:false}))
        .catch(error => this.setState({loading:false}))


        this.props.history.push('/orders');
    }

    render() {
        return (
            <div style={{margin:'20px auto',width:"80%",padding:"10px"}}>
                <h3>Enter Delivery Details</h3>
                <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.customer.name} placeholder="Enter Name" onChange={(event) => this.handleChange(event)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMob">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name="mob" value={this.state.customer.mob} placeholder="Enter Mobile" onChange={(event) => this.handleChange(event)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  name="address1" value={this.state.customer.address1} placeholder="1234 Main St" onChange={(event) => this.handleChange(event)}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control name="address2"  value={this.state.customer.address2} placeholder="Apartment, studio, or floor" onChange={(event) => this.handleChange(event)}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city" value={this.state.customer.city} onChange={(event) => this.handleChange(event)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select"  name="state" value={this.state.customer.state} onChange={(event) => this.handleChange(event)}>
                            <option>Choose...</option>
                            <option value="MH">MH</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control  name="zipCode" value={this.state.customer.zipCode} onChange={(event) => this.handleChange(event)}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" onClick={this.placeOrder}>
                         PLACE ORDER
                    </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
