const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedin, isOwner, validateListing } = require("../middleware");
const listingControllers = require("../Controllers/listing");
const multer  = require('multer');
const {storage} = require("../cloudConfig");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingControllers.index))
    .get(wrapAsync(listingControllers.indexCastles))
    .post(isLoggedin, upload.single('listing[image][url]'),validateListing, wrapAsync(listingControllers.new_save));

router.get("/new", isLoggedin, wrapAsync(listingControllers.newPage));
router.get("/trending",wrapAsync(listingControllers.indexTrending));
router.get("/castles",wrapAsync(listingControllers.indexCastles));
router.get("/rooms",wrapAsync(listingControllers.indexRooms));
router.get("/iconic-cities",wrapAsync(listingControllers.indexCity));
router.get("/mountains",wrapAsync(listingControllers.indexMountains));
router.get("/arctic",wrapAsync(listingControllers.indexArctic));
router.get("/amazing-pool",wrapAsync(listingControllers.indexPool));
router.get("/farms",wrapAsync(listingControllers.indexFarms));
router.get("/camps",wrapAsync(listingControllers.indexCamps));
router.get("/search",wrapAsync(listingControllers.search));

router.route("/:id")
    .get(wrapAsync(listingControllers.show))
    .put(isLoggedin, isOwner,upload.single('listing[image][url]'), validateListing, wrapAsync(listingControllers.edit_save))
    .delete( isLoggedin, isOwner, wrapAsync(listingControllers.delete));

router.get("/:id/edit", isLoggedin, isOwner, wrapAsync(listingControllers.editPage));
router.put("/:id/book-now", isLoggedin, wrapAsync(listingControllers.bookNow));

module.exports = router;