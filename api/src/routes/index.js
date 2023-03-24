const { Router } = require('express');
const getShips = require('./shipsRouter');
const getTypes = require('./typesRouter');

const router = Router();

router.use("/ships", getShips);
router.use("/types", getTypes);

module.exports = router;