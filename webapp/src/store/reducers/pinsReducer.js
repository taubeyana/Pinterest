// import * as pins_actions from '../actions/pins.actions'
import {
    ADD_PIN,
    PINS_FETCHING_SUCCESS,
    PINS_IS_LOADING

} from '../actions/pins.actions'

// Pin obj = {
// 
//     _id: int
//     title: String
//     body:String
//     img: String
//     link: String
//     category: String
//     publisher: int
// }

const initialState = {
    loading: true,
    pins: []
}

const pinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIN: 
            return Object.assign({},state,{
                pins:[...state.pins,action.payload]
            }) ;
        case PINS_IS_LOADING:
            return {...state, loading: action.status}
        case PINS_FETCHING_SUCCESS: 
            return {...state, pins: action.pins}
        default:
            return state
    }
}

export default pinsReducer;