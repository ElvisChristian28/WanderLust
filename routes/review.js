const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedin,isReviewAuthor} = require("../middleware");
const reviewControllers = require("../Controllers/review");

// ADD REVIEW
router.post("/",isLoggedin,validateReview,wrapAsync(reviewControllers.addReview));

//DELETE REVIEW
router.delete("/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewControllers.delete));

module.exports = router;