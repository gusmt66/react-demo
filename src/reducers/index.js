import { SHOW_MODAL, HIDE_MODAL } from '../constants';

const modal = (action) => {
    let { modalClass, customer } = action;
    return {
        modalClass,
        customer
    }
};

const modals = (state = [], action) => {
    let modals = null;
    switch(action.type) {
        case SHOW_MODAL:
            modals = [...state, modal(action)];
            return modals;
        case HIDE_MODAL:
            modals = [...state, modal(action)];
            return modals;
        //In case it is needed to add customers
/*        case ADD_CUSTOMER:
            customers = [...state, customer(action)];
            return customers;*/
        default:
            return state;
    }
};

export default modals;
