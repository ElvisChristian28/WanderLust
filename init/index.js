const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");

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

const initDB = async () => {
    await Listing.deleteMany({});
  
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66d037fbc0b7d2f0c0e9ede4" }));
    initData.data = initData.data.map((obj) => ({ ...obj, vistied: 0 }));
  
    category = ['Rooms', 'City', 'Mountains', 'Castles', 'Swimming Pool', 'Arctic', 'Farms', 'Camps'];
    for (let i = 0; i < initData.data.length; i++) {
      initData.data[i].category = category[Math.floor(Math.random() * category.length)];
    }

    await Listing.insertMany(initData.data);
    console.log("Successfully inserted");
  };

initDB();