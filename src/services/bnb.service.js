
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
// import { getActionRemoveBnb, getActionAddBnb, getActionUpdateBnb } from '../store/bnb.actions.js'
import {store} from '../store/store'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'bnb'
const bnbChannel = new BroadcastChannel('bnbChannel')


;(()=>{
    bnbChannel.addEventListener('message', (ev)=>{
        store.dispatch(ev.data)
    })
})()

export const bnbService = {
    query,
    getById,
    save,
    remove,
    getEmptyBnb,
}
window.cs = bnbService


function query(filterBy) {
    return storageService.query(STORAGE_KEY)
}
function getById(bnbId) {
    return storageService.get(STORAGE_KEY, bnbId)
    // return axios.get(`/api/bnb/${bnbId}`)
}
async function remove(bnbId) {
    await storageService.remove(STORAGE_KEY, bnbId)
    bnbChannel.postMessage(getActionRemoveBnb(bnbId))
}
async function save(bnb) {
    var savedBnb
    if (bnb._id) {
        savedBnb = await storageService.put(STORAGE_KEY, bnb)
        bnbChannel.postMessage(getActionUpdateBnb(savedBnb))
        
    } else {
        // Later, owner is set by the backend
        bnb.owner = userService.getLoggedinUser()
        savedBnb = await storageService.post(STORAGE_KEY, bnb)
        bnbChannel.postMessage(getActionAddBnb(savedBnb))
    }
    return savedBnb
}

function getEmptyBnb() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




