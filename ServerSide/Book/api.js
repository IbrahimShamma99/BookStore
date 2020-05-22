const router = require("express").Router();
const controlers = require("./controlers");
const { Routes, params } = require("./constants");
const helper = require("../helper/helper");
const uploadCover = require("./upload");
const userParams = require("./params");

router.param(params.user, userParams);

//SECTION add book
router.post(Routes.create,helper.required, controlers.adduser);

//SECTION fetch book
router.post(Routes.fetch,helper.optional , controlers.adduser);

//SECTION update book
router.post(Routes.update,helper.required, controlers.adduser);


module.exports = router;
