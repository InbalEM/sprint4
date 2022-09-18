import { orderService } from "../services/order.service"


export function saveDates(hostId, startDate, endDate) {
    return async dispatch => {
        try {
            // dispatch({ type: 'LOADING_START' })
            console.log(startDate);
            const order = await orderService.createOrder(hostId, startDate, endDate)
            dispatch({ type: 'SET_ORDER', order })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        }
        // finally {
        //     dispatch({ type: 'LOADING_DONE' })
        // }
    }
}

export function saveOrder(order) {
    return async dispatch => {
        try {
            // dispatch({ type: 'LOADING_START' })
            console.log('order:', order)
            order = await orderService.save(order)
            dispatch({ type: 'SET_ORDER', order })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        }
        // finally {
        //     dispatch({ type: 'LOADING_DONE' })
        // }
    }
}