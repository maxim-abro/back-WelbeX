const router = require("express-promise-router")()
const tableService = require("./table.service");

router.post("/", tableService.add);
router.get("/", tableService.getAll);
// router.get("/parse", tableService.parsingTables);

module.exports = router;
