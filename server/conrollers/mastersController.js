const { Masters } = require("../db/models");
const uuid = require("uuid");
const path = require("path");

class MastersController {
  async create(req, res, next) {
    try {
      let { name, second_name, description } = req.body;

      if (req.files) {
        const { image } = req.files;
        let fileName = uuid.v4() + ".jpg";
        image.mv(path.resolve(__dirname, "..", "static", fileName));
        const masters = await Masters.create({
          name,
          second_name,
          description,
          image: fileName,
        });
        return res.json(masters);
      } else {
        const masters = await Masters.create({
          name,
          second_name,
          description,
        });
        return res.json(masters);
      }
    } catch (e) {
      next("Error");
    }
  }
  async getMasters(req, res) {
    const masters = await Masters.findAll();
    return res.json(masters);
  }
  async editMasters(req, res) {
    let { id, name, second_name, description, fileName } = req.body;

    if (req.files) {
      const { image } = req.files;
      fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));
    }

    const master_edit = await Masters.update(
      {
        name: name,
        second_name: second_name,
        description: description,
        image: fileName,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({ id, name, second_name, description, fileName });
  }

  async deleteMasters(req, res) {
    const { id } = req.body;

    const master_delete = await Masters.destroy({
      where: {
        id: id,
      },
    });

    return res.json(id);
  }
}

module.exports = new MastersController();
