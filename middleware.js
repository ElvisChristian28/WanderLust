const wrapAsync = require("./utils/wrapAsync");
const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingsSchema,reviewSchema } = require("./schema");
const ExpressError = require("./utils/ExpressError");

module.exports.isLoggedin = (req,res,next)  => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in");
        res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next();
};

module.exports.isOwner = wrapAsync( async(req,res,next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(req.user._id)){
        req.flash("error",`You don't have Permisson of ${listing.title}`);
        return res.redirect(`/listings/${id}`);
    }
    next();
});

module.exports.validateListing = (req, res, next) => {
    const result = listingsSchema.validate(req.body);
    let { error } = result;
    // console.log(result);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

module.exports.validateReview = (req,res,next) => {
    const result = reviewSchema.validate(req.body);
    let {error} = result;
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};


module.exports.isReviewAuthor = wrapAsync( async(req,res,next) => {
    let { reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        req.flash("error",`You don't have Permission to delete this review`);
        return res.redirect(`/listings`);
    }
    next();
});