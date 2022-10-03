
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { stayService } from './stay.service.js'
import { userService } from './user.service.js'
// import { userService } from './user.service.js'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    // createOrder,
    getDiffDates,
    getOrder,
    getNewOrder
}
window.cs = orderService

async function query() {
    try {
        let orders = await storageService.query(STORAGE_KEY)
        const currUserId = userService.getLoggedinUser()._id
        orders = orders.filter(order => order.buyer._id === currUserId)
        return orders
    }
    catch {
        console.log('cant find orders');
    }
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
    // return axios.get(`/api/order/${orderId}`)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

function getOrder(order) {

    // var savedOrder
    // // if (order._id) {
    // //     savedOrder = await storageService.put(STORAGE_KEY, order)

    // // } else {
    //     // Later, owner is set by the backend
    //     let newOrder = _getNewOrder()
    //     newOrder.name = order.name
    //     newOrder.price = order.price
    //     console.log('newOrder:', newOrder)
    //     // savedOrder = await storageService.post(STORAGE_KEY, newOrder)
    // // }
    // return savedOrder
}

function getDiffDates(startDate, endDate) {
    const parseDate = (str) => {
        if (!str) return
        const mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    const dateDiff = (first, second) => {
        if (!first || !second) return
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    const diff = dateDiff(parseDate(startDate), parseDate(endDate))
    if (!query().totalPrice)
        return diff
}

function getNewOrder(stay, startDate = '', endDate = '') {

    let date = new Date();
    date.setDate(date.getDate() + 1);

    const { _id, fullname } = userService.getLoggedinUser()
    console.log('_id:', _id)
    const newOrder = {
        "hostId": stay.host._id,
        "createdAt": Date.now(),
        "buyer": {
            _id,
            fullname
        },
        "startDate": new Date().toLocaleDateString(),
        "endDate": date.toLocaleDateString(),
        // "totalPrice": getDiffDates(this.startDate, this.endDate ),
        "guests": {
            "adults": 0,
            "kids": 0,
            "infants": 0,
            "pets": 0
        },
        "stay": {
            "_id": stay._id,
            "name": stay.name,
            "price": stay.price
        },
        "status": "pending"
    }

    // storageService.post(STORAGE_KEY, newOrder)
    console.log('newOrder:', newOrder)
    return newOrder
}

async function save(order) {
    const savedOrder = await storageService.post(STORAGE_KEY, order)
    return savedOrder
}


// TEST DATA


