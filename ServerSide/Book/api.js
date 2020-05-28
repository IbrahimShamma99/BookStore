const router = require("express").Router();
const controlers = require("./controlers");
const { Routes, params } = require("./constants");
const helper = require("../helper/helper");
const uploadCover = require("./upload");
const {bookParams,bookgenre} = require("./params");

router.param(params.book, bookParams);
router.param(params.genre, bookgenre);

//SECTION add book 
router.post(
  Routes.create,
  helper.required,
  uploadCover.single("cover"),
  controlers.create
);

//SECTION books feed
router.get(Routes.feed, helper.optional, controlers.feed);

//SECTION books feed based on genre
router.get(Routes.genre, helper.optional, controlers.genrefeed);

//SECTION fetch book 
router.get(Routes.fetch, helper.optional, controlers.fetchBook);

//SECTION comment on book
router.get(Routes.comment, helper.optional, controlers.commentBook);

//SECTION react book 
router.get(Routes.react, helper.optional, controlers.reactBook);


//SECTION update book 
router.put(
  Routes.update,
  helper.required,
  uploadCover.single("cover"),
  controlers.update
);

module.exports = router;
