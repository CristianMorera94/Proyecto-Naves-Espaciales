const {Router}=require('express');
const {getTypes, getTypesId} =require('../controllers/typecontroller');

const typesRouter = Router();

typesRouter.get('/', getTypes);
typesRouter.get('/:id', getTypesId);

module.exports=typesRouter;