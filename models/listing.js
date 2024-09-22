const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: String,
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1660474128741-b9bc5f7b2370?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
    price: Number,
    location: String,
    country: String,
    reviews:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "Review"
            },
        ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            // required: true
        },
        coordinates: {
            type: [Number],
            // required: true
        }
    },
    category: {
        type: String,
        enum: ['Rooms', 'City', 'Mountains', 'Castles', 'Swimming Pool', 'Arctic', 'Farms', 'Camps'],
        required: true
    },
    vistied: {
        type: Number,
        default: 0
    }
});

listingSchema.post("findOneAndDelete", async (listings) => {
    if (listings) {
        await Review.deleteMany({ _id: { $in: listings.reviews } });
    }
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
