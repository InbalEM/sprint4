
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'stay'

export const stayService = {
    query,
    getById,
    save,
    remove
}
window.cs = stayService

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(stays => {
        if (filterBy) {
            let { maxPrice, minPrice } = filterBy
            if (!maxPrice) maxPrice = Infinity
            if (!minPrice) minPrice = 0
            stays = stays.filter(stay => stay.price <= maxPrice && stay.price >= minPrice)
            return stays
        }
        return stays
    }
    )
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
    // return axios.get(`/api/stay/${stayId}`)
}
async function remove(stayId) {
    await storageService.remove(STORAGE_KEY, stayId)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)

    } else {
        // Later, owner is set by the backend
        let newStay = _getEmptyStay()
        newStay.name = stay.name
        newStay.price =stay.price
        console.log('newStay:', newStay)
        savedStay = await storageService.post(STORAGE_KEY, newStay)
    }
    return savedStay
}

function _getEmptyStay(){
    return     {
        "type": "House",
        "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
        "capacity": 8,
        "amenities": [
          "TV",
          "Wifi",
          "Kitchen",
          "Smoking allowed",
          "Pets allowed",
          "Cooking basics"
        ],
        "host": {
          "_id": "u101",
          "fullname": "Davit Pok",
          "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        "loc": {
          "country": "Portugal",
          "countryCode": "PT",
          "city": "Porto",
          "address": "17 Kombo st",
          "lat": -8.61308,
          "lng": 41.1413
        },
        "reviews": [
          {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
              "_id": "u102",
              "fullname": "user2",
              "imgUrl": "/img/img2.jpg"
            }
          }
        ],
        "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
      }

}


// TEST DATA
// storageService.post(STORAGE_KEY,     {
//     "_id": "1000654161",
//     "name": "Ribeira Charming Duplex",
//     "type": "House",
//     "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
//     "price": 80.00,
//     "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
//     "capacity": {"guests": 8, "bedroom": 4, "bed": 8, "bath": 3  },
//     "amenities": [
//       "TV",
//       "Wifi",
//       "Kitchen",
//       "Smoking allowed",
//       "Pets allowed",
//       "Cooking basics"
//     ],
//     "host": {
//       "_id": "u101",
//       "fullname": "Davit Pok",
//       "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
//     },
//     "loc": {
//       "country": "Portugal",
//       "countryCode": "PT",
//       "city": "Porto",
//       "address": "17 Kombo st",
//       "lat": -8.61308,
//       "lng": 41.1413
//     },
//     "reviews": [
//       {
//         "id": "madeId",
//         "txt": "Very helpful hosts. Cooked traditional...",
//         "rate": 4,
//         "by": {
//           "_id": "u102",
//           "fullname": "user2",
//           "imgUrl": "/img/img2.jpg"
//         }
//       }
//     ],
//     "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
//   }).then(x => console.log(x))




