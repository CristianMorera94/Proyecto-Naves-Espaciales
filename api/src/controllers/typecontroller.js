const { Ships, Types } = require("../db");

async function getTypes(req, res, next){
    try{
        const allTypes = await Types.findAll({
            include:[
                {
                    model:Ships,
                    attributes:["name"],
                    through:{
                        attributes:[],
                    }
                }
            ]
        });
        return res.status(202).send(allTypes);
    }catch(error){
        res.status(400).send(error.message);
    }
};

async function getTypesId(req, res, next){
    try{
        const {id} = req.params;
        const type = await Types.findOne(
            { where: {id:id},
            include: [
                {
                    model:Ships,
                    attributes:["name"],
                    through:{
                        attributes:[],
                    }
                }
            ]
        }
        )
    }catch(error){
        res.status(404).send(error.message);
    }
};

module.exports={getTypes, getTypesId};