
//action name
export const ADD_PIN = 'ADD_PIN';
export const PINS_IS_LOADING = 'PINS_IS_LOADING';
export const PINS_FETCHING_SUCCESS = 'PINS_FETCHING_SUCCESS';

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

//action creator
export const add_pin = (pin)=>{
    return {
        type : ADD_PIN,
        payload : pin
    }
}

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
