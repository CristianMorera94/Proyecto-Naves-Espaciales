const { Ships, Types } = require("../db");
const naves = require("../data/naves");

async function getShips(req, res, next) {
  try {
    const allShips = await Ships.findAll();
    if (allShips.length < 1) {
      const listnaves = naves.map((x) => {
        return {
          name: x.name,
          country: x.country,
          image: x.image,
          yearstart: x.yearstart,
          yearend: x.yearend,
          destination: x.destination,
          description: x.description,
        };
      });
      const listypes = naves.map((t) => {
        return {
          types: t.type,
        };
      });
      console.log(listnaves);
      for (let i = 0; i < listnaves.length; i++) {
        const newnave = await Ships.create(listnaves[i]);
        const typedb = await Types.findOne({
          where: { types: listypes[i].types },
        });
        if (typedb === null) {
          const newtype = await Types.create(listypes[i]);
          await newnave.addTypes(newtype);
        } else {
          await newnave.addTypes(typedb);
        }
      }
      return res.status(202).send(
        await Ships.findAll({
          include: [
            {
              model: Types,
              attributes: ["id", "types"],
              through: {
                attributes: [],
              },
            },
          ],
        })
      );
    }
    res.status(202).send(allShips);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getShipsId(req, res, next) {
  try {
    const { id } = req.params;
    console.log(id);
    const shipsId = await Ships.findOne(
        { where: { id: id },
        include: [
            {
              model: Types,
              attributes: ["id", "types"],
              through: {
                attributes: [],
              },
            },
          ],});
    if (shipsId) {
      res.status(202).send(shipsId);
    } else {
      res.status(404).send(error.message);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = { getShips, getShipsId };
