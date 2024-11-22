const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexTrending = async (req, res) => {
    const allListings = await Listing.find({}).sort({ views: -1 }).limit(10);
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexCastles = async (req, res) => {
    const allListings = await Listing.find({ category: "Castles" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexRooms = async (req, res) => {
    const allListings = await Listing.find({ category: "Rooms" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexCity = async (req, res) => {
    const allListings = await Listing.find({ category: "City" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexMountains = async (req, res) => {
    const allListings = await Listing.find({ category: "Mountains" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexPool = async (req, res) => {
    const allListings = await Listing.find({ category: "Swimming Pool" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexArctic = async (req, res) => {
    const allListings = await Listing.find({ category: "Arctic" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexFarms = async (req, res) => {
    const allListings = await Listing.find({ category: "Farms" });
    res.render("listings/index.ejs", { allListings });
}

module.exports.indexCamps = async (req, res) => {
    const allListings = await Listing.find({ category: "Camps" });
    res.render("listings/index.ejs", { allListings });
}
module.exports.search = async (req, res) => {
    const searchQuery = req.query.search;
    const searchType = req.query.type;
        if (searchType === 'price') {
            // Search by price, with listings where price is less than or equal to the search query
            allListings = await Listing.find({
                price: { $lte: parseFloat(searchQuery) }  // Ensure searchQuery is treated as a number
            });
        } else {
            // Search by other fields (for example, title) using a case-insensitive regex
            allListings = await Listing.find({
                [searchType]: { $regex: searchQuery, $options: 'i' }
            });
        }
        res.render("listings/index.ejs", {allListings});
};



module.exports.newPage = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.new_save = (async (req, res) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send();

    let imageurl = req.file.path;
    let imagefilename = req.file.filename;
    // console.log(url,"..", filename);
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listings");
    }
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image.url = imageurl;
    newlisting.image.filename = imagefilename;
    newlisting.geometry = response.body.features[0].geometry;
    newlisting.vistied = 0;
    let savedListing = await newlisting.save();
    console.log(savedListing);
    req.flash("success", "Listing Created Successfully!!");
    res.redirect("/listings");
});

module.exports.show = (async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "This Listing Doesn't Exist");
        res.redirect("/listings");
    }
    else {

        let response = await geocodingClient.forwardGeocode({
            query: listing.location,
            limit: 1
        })
            .send();

        listing.geometry = response.body.features[0].geometry;
        res.render("listings/show.ejs", { listing });
    }
});



module.exports.editPage = (async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "This Listing Doesn't Exist");
        res.redirect("/listings");
    }
    else {
        let orignalImageUrl = listing.image.url;
        orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/w_250")
        res.render("listings/edit.ejs", { listing, orignalImageUrl });
    }
});

module.exports.edit_save = (async (req, res) => {

    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listings");
    }

    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file != "undefined") {
        let imageurl = req.file.path;
        let imagefilename = req.file.filename;
        listing.image.url = imageurl;
        listing.image.filename = imagefilename;
    }
    await listing.save();
    // console.log({ ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect("/listings");
});

module.exports.delete = (async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
});

module.exports.bookNow = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    listing.vistied = listing.vistied + 1;
    await listing.save();
    res.redirect("/listings");
};