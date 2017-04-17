import React, { Component } from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
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
};

class BairesCard extends Component{

    constructor(props){
        super(props);
        this.state={
            open:false,
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render(){

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let cardTitle = `${this.props.firstName} ${this.props.lastName}`;
        let cardSubtitle = this.props.companyName;

        if(!this.props.firstName) {
            cardTitle = this.props.companyName;
            cardSubtitle = null;
        }

        return (
            <div>
                <Card style={styles.card} label="Dialog" onTouchTap={this.handleOpen}>
                    <CardHeader
                        closeIcon={ <ArrowRight style={styles.centeredIcon}/> }
                        title={ <h3 style={styles.CardTitle}>{ cardTitle }</h3> }
                        subtitle={ <h4 style={styles.CardSubtitle}>{ cardSubtitle }</h4> }
                        actAsExpander={false}
                        showExpandableButton={true}
                    />
                </Card>
                <Dialog
                    title={cardTitle}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    {cardSubtitle}
                </Dialog>
            </div>
        );

    }
}

export default BairesCard;