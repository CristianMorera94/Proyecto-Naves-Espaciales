const {Router} =require('express');
const {getShips, getShipsId}=require('../controllers/shipscontroller');

const shipsRouter = Router();

shipsRouter.get('/', getShips);
shipsRouter.get('/:id', getShipsId)

module.exports=shipsRouter;