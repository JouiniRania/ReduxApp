import {INCREMENT,DECREMENT} from "./Actions";
const initialState = { counter: 0 };
const Reducer=(state = initialState, action)=>{
    
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                counter: state.counter +1};
        case DECREMENT:
            return {
                ...state,
                counter: state.counter -1};
        default:
            return state;
    }
}

export default Reducer;