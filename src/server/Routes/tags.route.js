const express = require("express");
const router = express.Router();
const tagsController = require("../Controllers/tags.controller");

router.get("/tags/populertags", tagsController.listPopulerTags);
router.get("/tags/:tag", tagsController.searchTags);
router.get("/tags", tagsController.listTags);

module.exports = router;
