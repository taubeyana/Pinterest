// import * as pins_actions from '../actions/pins.actions'
import {
    ADD_PIN
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
        default:
            return state
    }
}

export default pinsReducer;