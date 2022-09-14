import { bnbService } from "../services/bnb.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// Action Creators:
export function getActionRemoveBnb(bnbId) {
    return {
        type: 'REMOVE_CAR',
        bnbId
    }
}
export function getActionAddBnb(bnb) {
    return {
        type: 'ADD_CAR',
        bnb
    }
}
export function getActionUpdateBnb(bnb) {
    return {
        type: 'UPDATE_CAR',
        bnb
    }
}

export function loadBnbs() {
    return async (dispatch) => {
        try {
            const bnbs = await bnbService.query()
            console.log('Bnbs from DB:', bnbs)
            dispatch({
                type: 'SET_CARS',
                bnbs
            })

        } catch (err) {
            showErrorMsg('Cannot load bnbs')
            console.log('Cannot load bnbs', err)
        }
    }
}

export function removeBnb(bnbId) {
    return async (dispatch) => {
        try {
            await bnbService.remove(bnbId)
            console.log('Deleted Succesfully!');
            dispatch(getActionRemoveBnb(bnbId))
            showSuccessMsg('Bnb removed')
        } catch (err) {
            showErrorMsg('Cannot remove bnb')
            console.log('Cannot remove bnb', err)
        }
    }
}

export function addBnb(bnb) {
    return (dispatch) => {

        bnbService.save(bnb)
            .then(savedBnb => {
                console.log('Added Bnb', savedBnb);
                dispatch(getActionAddBnb(savedBnb))
                showSuccessMsg('Bnb added')
            })
            .catch(err => {
                showErrorMsg('Cannot add bnb')
                console.log('Cannot add bnb', err)
            })
    }
}

export function updateBnb(bnb) {
    return (dispatch) => {
        bnbService.save(bnb)
            .then(savedBnb => {
                console.log('Updated Bnb:', savedBnb);
                dispatch(getActionUpdateBnb(savedBnb))
                showSuccessMsg('Bnb updated')
            })
            .catch(err => {
                showErrorMsg('Cannot update bnb')
                console.log('Cannot save bnb', err)
            })
    }
}

export function addToBnbt(bnb) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            bnb
        })
    }
}
export function removeFromBnbt(bnbId) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            bnbId
        })
    }
}
export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.bnbModule.bnbt.reduce((acc, bnb) => acc + bnb.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_CART' })
            showSuccessMsg('Charged you: $' + total.toLocaleString())
        } catch (err) {
            showErrorMsg('Cannot checkout, login first')
            console.log('BnbActions: err in checkout', err)
        }
    }
}


// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveBnbOptimistic(bnbId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_CAR',
            bnbId
        })
        showSuccessMsg('Bnb removed')

        bnbService.remove(bnbId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove bnb')
                console.log('Cannot load bnbs', err)
                dispatch({
                    type: 'UNDO_REMOVE_CAR',
                })
            })
    }
}