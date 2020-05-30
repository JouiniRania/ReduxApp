import { createStore, applyMiddleware} from "redux";
import Reducer from "./Stores/Reducer";

const Logg= (store) => (next) => (action) => {
        console.log(action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
}

export default createStore(Reducer, applyMiddleware(Logg));