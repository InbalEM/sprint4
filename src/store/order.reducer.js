const initialState = {
  order: {},
  dates: {
    startDate: null,
    endDate: null
  }
}

export function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, order: action.order }
    case 'SET_DATES':
      return { ...state, dates: action.dates }
    default:
      return state
  }
}
