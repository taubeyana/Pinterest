
//action name
export const ADD_PIN = 'ADD_PIN';
export const PINS_IS_LOADING = 'PINS_IS_LOADING';
export const PINS_FETCHING_SUCCESS = 'PINS_FETCHING_SUCCESS';
export const REMOVE_PIN = 'REMOVE_PIN';
export const REMOVE_PIN_SUCCES = 'REMOVE_PIN_SUCCES';
export const REMOVE_PIN_ERROR = 'REMOVE_PIN_ERROR';


export const pinsIsLoading = (status) => {
    return {
        type: PINS_IS_LOADING,
        status
    }
}
export const pinsFetchingSuccess = (pins) => {
    return {
        type: PINS_FETCHING_SUCCESS,
        pins
    }
}

export const getRelevantPins = () => {
    return dispatch => {
        dispatch(pinsIsLoading(true)) 
        fetch('/api/pins')
            .then(res => res.json())
            .then(pins => {
                dispatch(pinsFetchingSuccess(pins))
                dispatch(pinsIsLoading(false))
            })
            .catch(e => console.log(e))
    }
}

export const removePin = (pinId) => {
    return {

        type: REMOVE_PIN,
        pinId
    }
}
const removePinSucces = (status) => {
    return {
        type: REMOVE_PIN_SUCCES,
        status
    }
}
const removePinError = (status) => {
    return {
        type: REMOVE_PIN_ERROR,
        status
    }
    
}

export const removeSelectedPin = (id) => {
    return dispatch => {
        dispatch(removePin(id))
        fetch('/api/pins/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }
}

export const addPin = (pinId) =>{
    return {
        type : ADD_PIN,
        pinId
    }
}

// export const removeSelectedPin = (id) => {
//     return dispatch => {
//         dispatch(removePin(id))
//         fetch('/api/pins/' + id, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err.message))
//     }
// }


//in some other galaxy...
// let pin = {
//     "_id": "5b8f91b89d347e42880549aa",
//     "title": "50 Useful CSS Snippets Every Designer Should Have",
//     "body": "With so many new trends advancing every year it can be difficult keeping up with the industry. Website designers and frontend developers have been deeply",
//     "img": "https://i.pinimg.com/564x/5f/86/fc/5f86fcc99051a36a55ba06e1a4507c09.jpg",
//     "link": "https://www.hongkiat.com/blog/css-snippets-for-designers/",
//     "category": "Tech"
// }
// add_pin(pin)
