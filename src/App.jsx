import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCard from './ReactCard';
import './App.css'

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

      let cards = customers.map((person,index) => {
          return <MuiThemeProvider key={index}
                                   muiTheme={getMuiTheme()}>
                    <ReactCard class="BairesCard"
                                firstName={person.firstName}
                                lastName={person.lastName}
                                companyName={person.companyName} />
                 </MuiThemeProvider>
      });

    return (
          <div className="App">
              {cards}
          </div>
    );
  }
}

export default App;
