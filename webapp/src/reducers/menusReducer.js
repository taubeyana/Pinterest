
const initial_state = {
    menu:{
        isDisplayed: true
    }
    
}

const menusReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return ({...state, menu: { 
                isDisplayed: true
            }})
        default:
            return state
    }
}
export default menusReducer;