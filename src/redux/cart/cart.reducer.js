import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hideCartDropdown:true
}


const cartReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CARTDROPDOWN_HIDDEN:{
            return {
                ...state,
                hideCartDropdown:!state.hideCartDropdown
            };
        }
        default:{
            return state;
        }
    }
}

export default cartReducer;