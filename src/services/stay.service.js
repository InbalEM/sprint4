
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs 

const STORAGE_KEY = 'stay'

var gStays = [
  {
    "_id": "100065419",
    "name": "Lex Home in a Luxury Hotel",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/d86ddb6b-770f-4604-8273-941dba513879.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/e79d9487-0824-46ca-be68-f99a3393f64f.jpeg?im_w=1440"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": {"guests": 2, "bedroom": 1, "bed": 1, "bath": 1  },
    "amenities": [
      "Sea view",
      "Kitchen",
      "Free street parking",
      "HDTV with Netflix, Roku, standard cable",
      "Free washer – In unit",
      "Beach access – Beachfront",
	  "Fast wifi – 110 Mbps",
	  "Shared outdoor pool - available seasonally, open specific hours",
	  "Elevator"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/0a82e6ad-3368-4dc5-a8ca-a9e776a6867d.jpeg?im_w=1440",
    },
    "loc": {
      "country": "Israel",
      "countryCode": "IL",
      "city": "Herzliya",
      "address": "Ramat Yam St 60",
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
  },
  {
    "_id": "100065416",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
    "price": 80.00,
    "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
    "capacity": {"guests": 8, "bedroom": 4, "bed": 8, "bath": 3  },
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
      "country": "Israel",
      "countryCode": "IL",
      "city": "Tel Aviv-Yafo",
      "address": "HaShah St 10",
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
  },
  {
    "_id": "100065418",
    "name": "Sonder Court Square",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/0df4183e-6c41-4892-a082-6c27fe21eeb0.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/35c79d65-3a03-4282-94fd-105065c30c27.jpeg?im_w=720","https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/3a8b7b8d-0642-40f3-9666-a61566da8949.jpeg?im_w=1440"],
    "price": 247.00,
    "summary": "There's more to NYC than sleek skyscrapers — Court Square is your Long Island City hideaway full of red-brick industrial charm. Your space has a fully equipped kitchen, Roku streaming, and plenty of room to unwind. And there are endless adventures on your doorstep. Colorful street art and contemporary galleries fill this energetic neighborhood. Ready to dive in? MoMA PS1 has an impressive program of performances and exhibitions from resident artists. You can check out the live jazz bands at Domaine Bar à Vins. And Casa Enrique is our go-to spot for its Michelin-star takes on classic Mexican dishes. For a new view of New York, choose Court Square.",
    "capacity": {"guests": 6, "bedroom": 2, "bed": 3, "bath": 1  },
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Refrigerator",
      "Elevator",
	  "Hair dryer",
	  "Microwave",
	  "Long term stays allowed"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    "loc": {
      "country": "United States",
      "countryCode": "US",
      "city": "Queens",
      "address": "45-06 Pearson St",
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
  },
  {
    "_id": "100065417",
    "name": "Sonder Court Square",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-564602702188075826/original/5f8b373d-1d8c-40fe-93aa-beab390cb393.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-564602702188075826/original/2357c215-0f37-428c-b091-0bf63fb29d14.jpeg?im_w=1440"],
    "price": 247.00,
    "summary": "There's more to NYC than sleek skyscrapers — Court Square is your Long Island City hideaway full of red-brick industrial charm. Your space has a fully equipped kitchen, Roku streaming, and plenty of room to unwind. And there are endless adventures on your doorstep. Colorful street art and contemporary galleries fill this energetic neighborhood. Ready to dive in? MoMA PS1 has an impressive program of performances and exhibitions from resident artists. You can check out the live jazz bands at Domaine Bar à Vins. And Casa Enrique is our go-to spot for its Michelin-star takes on classic Mexican dishes. For a new view of New York, choose Court Square.",
    "capacity": {"guests": 6, "bedroom": 2, "bed": 3, "bath": 1  },
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Refrigerator",
      "Elevator",
	  "Hair dryer",
	  "Microwave",
	  "Long term stays allowed"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-564602702188075826/original/5f8b373d-1d8c-40fe-93aa-beab390cb393.jpeg?im_w=1200",
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
  } ,
  {
    "_id": "100065416",
    "name": "Sonder at One Platt",
    "type": "House",
    "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/0df4183e-6c41-4892-a082-6c27fe21eeb0.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/35c79d65-3a03-4282-94fd-105065c30c27.jpeg?im_w=720","https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/3a8b7b8d-0642-40f3-9666-a61566da8949.jpeg?im_w=1440"],
    "price": 350.00,
    "summary": "Set yourself up for success at One Platt. A top choice for a remarkable New York stay. Each space features chic decor, a fully equipped kitchen, and access to the state-of-the-art fitness center. Looking for that iconic New York City skyline? The seasonal rooftop overlooks the city and Brooklyn Bridge. Our expansive lounge, communal kitchen, and co-working space are all yours to enjoy.",
    "capacity": {"guests": 6, "bedroom": 2, "bed": 2, "bath": 2  },
    "amenities": [
      "TV",
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Refrigerator",
      "Gym",
	  "Elevator",
	  "Hair dryer",
	  "Microwave",
	  "Long term stays allowed"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-38674685/original/0df4183e-6c41-4892-a082-6c27fe21eeb0.jpeg?im_w=1200",
    },
    "loc": {
      "country": "United States",
      "countryCode": "USA",
      "city": "New York",
      "address": "1 Platt St",
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
  },
  {
    "_id": "1000654120",
    "name": "Beach front ",
    "type": "Entire villa",
    "imgUrls": ["https://a0.muscache.com/im/pictures/0720a152-5aff-492d-b57b-8b4c39e5b9af.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/45743e9f-cda9-4adb-954f-57001897fe95.jpg?im_w=1440", "https://a0.muscache.com/im/pictures/6944b027-0ac3-408f-8d49-45e651ef99ba.jpg?im_w=1440"],
    "price": 1610.00,
    "summary": "This superb 7 bedroom gated beach front estate in Agios Theodoros offers ultimate luxury for an unforgettable holiday in Cyprus. Access directly to the beach is through the gate located at the end of the lawn area. The beautiful gardens together with the unobstructed views of the Mediterranean Sea makes this estate a perfect setting for a wedding ceremony and reception. Canoes and paddle boards are also available for guests to use.",
    "capacity": {"guests": 16, "bedroom": 7, "bed": 11, "bath": 6  },
    "amenities": [
      "Bay view",
      "Wifi",
      "Private pool",
      "Garden view",
      "Kitchen",
      "Free parking on premises",
	  "TV",
	  "Hair dryer",
	  "Air conditioning"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/0a82e6ad-3368-4dc5-a8ca-a9e776a6867d.jpeg?im_w=1440",
    },
    "loc": {
      "country": "Cyprus",
      "countryCode": "CYP",
      "city": "Oroklini, Larnaca",
      "address": "34 Mesopotamias Street",
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
  },
  {
    "_id": "1000654152",
    "name": "Protaras Holiday Villa CR3",
    "type": "Entire villa",
    "imgUrls": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-43161516/original/1acde0cf-3363-44d8-a707-59403ed74442.jpeg?im_w=1200", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43161516/original/59c1f72a-505f-4487-9230-0f3a8aadb1cc.jpeg?im_w=1440", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43161516/original/32c1b96e-18ed-415e-9356-9f35ec6f38a7.jpeg?im_w=1440"],
    "price": 375.00,
    "summary": "This superb 7 bedroom gated beach front estate in Agios Theodoros offers ultimate luxury for an unforgettable holiday in Cyprus. Access directly to the beach is through the gate located at the end of the lawn area. The beautiful gardens together with the unobstructed views of the Mediterranean Sea makes this estate a perfect setting for a wedding ceremony and reception. Canoes and paddle boards are also available for guests to use.",
    "capacity": {"guests": 16, "bedroom": 7, "bed": 11, "bath": 6  },
    "amenities": [
      "Bay view",
      "Wifi",
      "Private pool",
      "Garden view",
      "Kitchen",
      "Free parking on premises",
	  "TV",
	  "Hair dryer",
	  "Air conditioning"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/0a82e6ad-3368-4dc5-a8ca-a9e776a6867d.jpeg?im_w=1440",
    },
    "loc": {
      "country": "Cyprus",
      "countryCode": "CYP",
      "city": "Oroklini, Larnaca",
      "address": "34 Mesopotamias Street",
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
  },
  {
    "_id": "1000654123",
    "name": "Luxury Seaview Apartment",
    "type": "Entire rental unit",
    "imgUrls": ["https://a0.muscache.com/im/pictures/a4219879-1fca-4cce-a219-cde3f265cd6b.jpg?im_w=1200","https://a0.muscache.com/im/pictures/b5844832-dc82-4139-bc09-645d875d6c8b.jpg?im_w=1440","https://a0.muscache.com/im/pictures/3d47749f-55c8-4450-92d6-8282d1ff5c13.jpg?im_w=1440"],
    "price": 123.00,
    "summary": "Two bedroom apartment in the brand new, modern complex The Pearl! \"The view\" overlooking the Mediterranean Sea, private swimming pool, private parking, and our wonderful receptionist make our apartment a stand out in the area!",
    "capacity": {"guests": 5, "bedroom": 2, "bed": 2, "bath": 2  },
    "amenities": [
      "Marina view",
      "Wifi",
      "Beach access",
      "Free parking on premises",
      "Ocean view",
      "Kitchen",
	  "Dedicated workspace",
	  "Shared pool"
    ],
    "host": {
      "_id": "u101",
      "fullname": "Davit Pok",
      "imgUrl": "https://a0.muscache.com/im/pictures/miso/Hosting-45510674/original/0a82e6ad-3368-4dc5-a8ca-a9e776a6867d.jpeg?im_w=1440",
    },
    "loc": {
      "country": "Cyprus",
      "countryCode": "CYP",
      "city": "Larnaca",
      "address": "Umm Haram 89 Marethea court 6",
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
]

export const stayService = {
    query,
    getById,
    save,
    remove
}
window.cs = stayService

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(stays => {
      if (!stays[0]){
        stays = storageService.postMany(STORAGE_KEY, gStays).then(x => console.log(x))
      }
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


