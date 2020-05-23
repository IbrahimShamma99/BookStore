const router = require("express").Router();
const controlers = require("./controlers");
const { Routes, params } = require("./constants");
const helper = require("../helper/helper");
const uploadCover = require("./upload");
const bookParams = require("./params");

router.param(params.book, bookParams);

//SECTION add book DONE
router.post(
  Routes.create,
  helper.required,
  uploadCover.single("cover"),
  controlers.create
);

//SECTION books feed
router.get(Routes.feed, helper.optional, controlers.feed);

//SECTION fetch book DONE
router.get(Routes.fetch, helper.optional, controlers.fetch);

//SECTION update book DONE
router.put(
  Routes.update,
  helper.required,
  uploadCover.single("cover"),
  controlers.update
);

module.exports = router;
