import React, { Component } from 'react';
//import {Card, CardHeader} from 'material-ui/Card';
//import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
/*import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';*/

/*const styles = {
    centeredIcon:{
        padding: '0',
        marginTop: '-25px'
    },
    card:{
        cursor:'pointer',
        marginBottom:'10px'
    },
    CardTitle:{
        margin:'0',
        fontWeight:'100',
        color:'#3d7aca'
    },
    CardSubtitle:{
        marginTop:'5px',
        marginBottom:'0'
    }
};*/

class BairesCard extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
        }
    }

   /* handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };*/

    render(){
        const { customers } = this.props;
/*        let cardTitle = `${this.props.firstName} ${this.props.lastName}`;
        let cardSubtitle = this.props.companyName;

        if(!this.props.firstName) {
            cardTitle = this.props.companyName;
            cardSubtitle = null;
        }*/

/*
        return (
            <ul className="list-group col-sm-4">
            {
                customers.map((customer,index) => {
                    return (
                        <li key={index} className="list-group-item"
                            onClick={() => document.getElementById('myModal').style.display = "block"}>
                            <div className="list-item">
                                <div>{customer.name}</div>
                                <div><em>{customer.companyName}</em></div>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
            );
        */
    }
}

export default BairesCard;