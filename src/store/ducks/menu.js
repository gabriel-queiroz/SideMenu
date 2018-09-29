export const types = {
    TOOGLE: 'menu/TOOGLE'
}

export const INITIAL_STATE = false;

const menu = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOOGLE:
            return action.payload
        default:
            return state;
    }
}

export default menu;

export const Creators = {
    toogleMenu: bool => ({
        type: types.TOOGLE,
        payload: bool
    })
}