const router = require("express").Router();
const controlers = require("./controlers");
const { Routes, params } = require("./constants");
const helper = require("../helper/helper");
const uploadCover = require("./upload");
const bookParams = require("./params");

router.param(params.book, bookParams);

//SECTION add book
router.post(
  Routes.create,
  helper.required,
  uploadCover.single("cover"),
  controlers.create
);

//SECTION fetch book
router.post(Routes.fetch, helper.optional, controlers.fetch);

//SECTION update book
router.post(
  Routes.update,
  helper.required,
  uploadCover.single("cover"),
  controlers.update
);

//SECTION update book
router.post(Routes.feed, helper.optional, controlers.feed);

module.exports = router;
