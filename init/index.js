const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = "pk.eyJ1IjoiaXRzc2FyYW5oZXJlIiwiYSI6ImNsd3B3aDFybjFodTMyaXJ6cGQxeWdwYzcifQ.4HPJRlRvgTdHaXXTDQEWCg";
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

main()
    .then(() => {
        console.log("Conneted to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://localhost:27017/wanderlust")
}

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({ ...obj, owner: "66d037fbc0b7d2f0c0e9ede4" }));
//     initData.data = initData.data.map((obj) => ({ ...obj, vistied: 0 }));
//     category = ['Rooms', 'City', 'Mountains', 'Castles', 'Swimming Pool', 'Arctic', 'Farms', 'Camps'];
//     for (let i = 0; i < initData.data.length; i++) {
//         initData.data[i].category = category[Math.floor(Math.random() * category.length)];
//     }
//     console.log(initData)
//     for (let i = 0; i < initData.data.length; i++) {
//         let response = await geocodingClient.forwardGeocode({
//             query: initData.data[i].location,
//             limit: 1
//         })
//             .send();
//         if (response.body.features && response.body.features.length > 0) {
//             initDB.data[i].geometry = response.body.features[0].geometry;
//         } else {
//             console.error(`Could not find coordinates for ${initData.data[i].location}`);
//             // Handle the case where coordinates are not found (e.g., set a default value)
//         }
//         // initDB.data[i].geometry = response.body.features[0].geometry;
//     }
//     // await Listing.insertMany(initData.data);
//     console.log("Successfully inserted");
// };

const initDB = async () => {
    await Listing.deleteMany({});
  
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66d037fbc0b7d2f0c0e9ede4" }));
    initData.data = initData.data.map((obj) => ({ ...obj, vistied: 0 }));
  
    category = ['Rooms', 'City', 'Mountains', 'Castles', 'Swimming Pool', 'Arctic', 'Farms', 'Camps'];
    for (let i = 0; i < initData.data.length; i++) {
      initData.data[i].category = category[Math.floor(Math.random() * category.length)];
    }
  
    console.log(initData);
  
    for (let i = 0; i < initData.data.length; i++) {
      let response = await geocodingClient.forwardGeocode({
        query: initData.data[i].location,
        limit: 1
      }).send();
  
      // Check if features exist and have elements before accessing
      // if (response.body.features && response.body.features.length > 0) {
      //   initDB.data[i].geometry = response.body.features[0].geometry;
      // } else {
      //   console.error(`Could not find coordinates for ${initData.data[i].location}`);
      //   // Handle the case where coordinates are not found (e.g., set a default value)
      // }
    }
  
    // Insert listings only after successful geocoding (optional)
    await Listing.insertMany(initData.data);
    console.log("Successfully inserted");
  };

initDB();