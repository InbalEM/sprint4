
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { stayService } from './stay.service.js'
// import { userService } from './user.service.js'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    // save,
    remove,
    // createOrder,
    getDiffDates,
    getOrder,
    getNewOrder
}
window.cs = orderService

async function query(stay) {
    // try{
    //     let order = storageService.query(STORAGE_KEY) 
    //     if(order) {
    //         order = _getNewOrder(stay)
    //         // save(order)
    //     }

    //     return order
    // } 
    // catch{
    //     console.log('cant find order');
    // }
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

function getDiffDates(startDate, endDate){
    const parseDate = (str) => {
        if(!str) return
        const mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    const dateDiff = (first, second) => {
        if(!first || !second) return
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    const diff =  dateDiff(parseDate(startDate), parseDate(endDate))
    if(!query().totalPrice)
    return diff
}



function getNewOrder(stay,  startDate ='', endDate='') {
    console.log('stay:', stay)
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return {
        "_id": utilService.makeId(),
        "hostId": stay.host._id,
        "createdAt": Date.now(),
        "buyer": {
            "_id": "u101",
            "fullname": "User 1"
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

}


// TEST DATA


