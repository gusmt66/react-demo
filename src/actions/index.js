import { SHOW_MODAL, HIDE_MODAL } from '../constants';

export const showModal = (modalClass) => {
    const action = {
        type: SHOW_MODAL,
        modalClass
    };
    console.log('showing Modal in actions', action);
    return action;
};

export const hideModal = (modalClass) => {
    const action = {
        type: HIDE_MODAL,
        modalClass
    };
    console.log('hiding Modal in actions', action);
    return action;
};

// This is not being used but I added here in case it is needed to implement the Add Customer feature
/*export const addCustomer = (firstName, lastName, companyName) => {
    const action = {
        type: ADD_CUSTOMER,
        firstName,
        lastName,
        companyName
    };
    console.log('action in addCustomer', action);
    return action;
};*/
