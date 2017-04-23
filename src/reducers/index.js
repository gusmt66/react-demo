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
        //This case was not required but it gives sense to using actions
/*        case ADD_CUSTOMER:
            customers = [...state, customer(action)];
            return customers;*/
        default:
            return state;
    }
};

export default modals;
