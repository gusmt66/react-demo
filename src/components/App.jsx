import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
//import CustomerCard from './CustomerCard';
import '../App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalClass: 'hidden'
        }
    };

    showModal() {
        this.setState({modalClass: 'displayed'}, function() {
            this.props.showModal(this.state.modalClass);
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



      //const { customers } = this.props;
      //const modal = document.getElementById('myModal');



    render() {
        const customers = [
            { firstName: 'John', lastName: 'Crouchley', companyName: 'Crouchley Plumbing Company' },
            { firstName: 'Steve', lastName: 'Smith', companyName: 'Pacific Crest Plumbing' },
            { firstName: '', lastName: '', companyName: 'American Plumbing Services' },
            { firstName: 'John', lastName: 'Doe', companyName: 'Plumbing Craftsman and Drain Service' },
            { firstName: 'Pete', lastName: 'Sutherland', companyName: 'Sutherland Plumbing' },
            { firstName: '', lastName: '', companyName: 'All Pro Plumbing Services' },
            { firstName: 'Craig', lastName: 'Anderson', companyName: 'Craig Anderson Plumbing' }
        ];

       /* let cards = customers.map((customer,index) => {
            return <CustomerCard key={index}
                                 class="CustomerCard"
                                 firstName={customer.firstName}
                                 lastName={customer.lastName}
                                 companyName={customer.companyName} />
        });*/

    return (
          <div className="App" onClick={(event) => this.closeModal(event)}>
              <div className="">
                  {
                  customers.map((customer,index) => {
                    return (<div
                        key={index}
                        className="card"
                        onClick={() => this.showModal()}>
                        <div className="customerInfo">
                            <h3>{`${customer.firstName} ${customer.lastName}`}</h3>
                            <h4>{customer.companyName}</h4>
                        </div>
                        <button className="arrow-icon"/>
                    </div>)
              })

                  }
              </div>

              <div id="modalCard"
                   className={`${this.state.modalClass} modal`}>
                  <div className="modal-content">
                      <span className="close"
                            onClick={() => this.hideModal()}>&times;</span>
                      <p>Some text in the Modal..</p>
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

export default connect(mapStateToProps, { showModal, hideModal })(App);
