import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
//import ReactCard from './ReactCard';
import '../App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalClass: 'hidden'
        }
    }

/*      let cards = customers.map((person,index) => {
          return <ReactCard key={index}
                            class="BairesCard"
                            firstName={person.firstName}
                            lastName={person.lastName}
                            companyName={person.companyName} />
      });*/

      //const { customers } = this.props;
      //const modal = document.getElementById('myModal');

      /*showModal() {
          this.setState({modalClass:'displayed'});
          this.props.showModal(this.state.modalClass);
          console.log('this.state.modalClass', this.state.modalClass);
      }*/

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



    return (
          <div className="App">
              <ul className="list-group col-sm-4">
                  {
                      customers.map((customer,index) => {
                          return (
                              <li key={index} className="list-group-item"
                                  onClick={() => this.showModal()}>
                                  <div className="list-item">
                                      <div>{`${customer.firstName} ${customer.lastName}`}</div>
                                      <div><em>{customer.companyName}</em></div>
                                  </div>
                              </li>
                          )
                      })
                  }
              </ul>

              <div id="myModal" className="modal">
                  <div className="modal-content">
                      <span className="close">&times;</span>
                      <p>Some text in the Modal..</p>
                  </div>
              </div>

              <p onClick={() => this.hideModal()}
                 id="close">Close Modal</p>
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
