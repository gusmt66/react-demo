import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';

class CustomerCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalClass: 'hidden',
            customer: {}
        }
    };

    showModal(customer) {
        this.setState({modalClass: 'displayed',customer}, function() {
            this.props.showModal(this.state.modalClass, this.state.customer);
            console.log('this.state.modalClass', this.state.modalClass);
        });
    }

    hideModal() {
        this.setState({modalClass: 'hidden'}, function() {
            this.props.hideModal(this.state.modalClass);
            console.log('this.state.modalClass', this.state.modalClass);
        });
    }

    closeModal(event){
        if(event.target.id === 'modalCard'){
            this.hideModal();
            console.log('closing from outside Modal');
        }
    }

    showTitleCard(customer){
        return customer.firstName ? `${customer.firstName} ${customer.lastName}` : customer.companyName
    }

    render(){
        return(
            <div className="App" onClick={(event) => this.closeModal(event)}>
                <div className="">
                    {
                        this.props.customers.map((customer,index) => {
                            return (<div
                                key={index}
                                className="card"
                                onClick={() => this.showModal(customer)}>
                                <div className="customerInfo">
                                    <h3>{this.showTitleCard(customer)}</h3>
                                    <h4>{customer.firstName ? customer.companyName : ''}</h4>
                                </div>
                                <button className="arrow-icon"/>
                            </div>)
                        })

                    }
                </div>

                <div id="modalCard"
                     className={`${this.state.modalClass} modal`}>
                    <div className="modal-content">
                        <p>{this.showTitleCard(this.state.customer)}</p>
                        <footer className="modal-footer">
                            <a onClick={() => this.hideModal()}>Close</a>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modals: state
    }
}

export default connect(mapStateToProps, { showModal, hideModal })(CustomerCard);