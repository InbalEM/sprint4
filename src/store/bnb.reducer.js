const initialState = {
    bnbs: [],
    bnbt:[],
    lastRemovedBnb: null
}
export function bnbReducer(state = initialState, action) {
    var newState = state
    var bnbs
    var bnbt
    switch (action.type) {
        case 'SET_BNBS':
            newState = { ...state, bnbs: action.bnbs }
            break
        case 'REMOVE_BNB':
            const lastRemovedBnb = state.bnbs.find(bnb => bnb._id === action.bnbId)
            bnbs = state.bnbs.filter(bnb => bnb._id !== action.bnbId)
            newState = { ...state, bnbs, lastRemovedBnb}
            break
        case 'ADD_BNB':
            newState = { ...state, bnbs:[...state.bnbs, action.bnb]}
            break
        case 'UPDATE_BNB':
            bnbs = state.bnbs.map(bnb => (bnb._id === action.bnb._id)? action.bnb : bnb)
            newState = { ...state, bnbs}
            break
        case 'ADD_TO_BNBT':
            newState = { ...state, bnbt:[...state.bnbt, action.bnb]}
            break
        case 'REMOVE_FROM_BNBT':
            bnbt = state.bnbt.filter(bnb => bnb._id !== action.bnbId)
            newState = { ...state, bnbt}
            break
        case 'CLEAR_BNBT':
            newState = { ...state, bnbt: []}
            break
        case 'UNDO_REMOVE_BNB':
            if (state.lastRemovedBnb) {
                newState = { ...state, bnbs: [...state.bnbs, state.lastRemovedBnb], lastRemovedBnb: null}
            }
            break
        default:
    }
    // For debug:
    window.bnbState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
