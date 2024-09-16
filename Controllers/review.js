const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.addReview = ( async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    // console.log(req.user._id);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Review Save Successfully!!");
    res.redirect(`/listings/${listing._id}`);
});

module.exports.delete = (async(req,res) =>  {
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
});