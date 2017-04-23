import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerCard from './CustomerCard';
import '../App.css'

class App extends Component {

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
          <CustomerCard customers={customers}/>
    );
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);
