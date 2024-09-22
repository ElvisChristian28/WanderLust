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

router.get("/new", isLoggedin, listingControllers.newPage);
router.get("/trending",listingControllers.indexTrending);
router.get("/castles",listingControllers.indexCastles);
router.get("/rooms",listingControllers.indexRooms);
router.get("/iconic-cities",listingControllers.indexCity);
router.get("/mountains",listingControllers.indexMountains);
router.get("/arctic",listingControllers.indexArctic);
router.get("/amazing-pool",listingControllers.indexPool);
router.get("/farms",listingControllers.indexFarms);
router.get("/camps",listingControllers.indexCamps);

router.route("/:id")
    .get(wrapAsync(listingControllers.show))
    .put(isLoggedin, isOwner,upload.single('listing[image][url]'), validateListing, wrapAsync(listingControllers.edit_save))
    .delete( isLoggedin, isOwner, wrapAsync(listingControllers.delete));

router.get("/:id/edit", isLoggedin, isOwner, wrapAsync(listingControllers.editPage));
router.put("/:id/book-now", isLoggedin, wrapAsync(listingControllers.bookNow));

module.exports = router;