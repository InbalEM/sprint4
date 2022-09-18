
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    createOrder
}
window.cs = orderService

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(orders => {
        
        // if(!orders) return _getEmptyOrder()
        return orders
    }
    )
}

function createOrder(hostId, startDate, endDate){
     const order = _getNewOrder(hostId, startDate, endDate)
     save(order)
     return order
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
    // return axios.get(`/api/order/${orderId}`)
}
async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)

    } else {
        // Later, owner is set by the backend
        let newOrder = _getNewOrder()
        newOrder.name = order.name
        newOrder.price = order.price
        console.log('newOrder:', newOrder)
        savedOrder = await storageService.post(STORAGE_KEY, newOrder)
    }
    return savedOrder
}

function _getNewOrder(hostId='', startDate='', endDate='') {
    return {
        "_id": utilService.makeId(),
        hostId,
        "createdAt": Date.now(),
        "buyer": {
            "_id": "u101",
            "fullname": "User 1"
        },
        "totalPrice": 160,
        startDate,
        endDate,
        "guests": {
            "adults": 2,
            "kids": 1
        },
        "stay": {
            "_id": "h102",
            "name": "House Of Uncle My",
            "price": 80.00
        },
        "status": "pending"
    }

}


// TEST DATA


