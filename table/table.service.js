const db = require("../_helpers/db");
const axios = require("axios");
const { Op, fn, col } = require("sequelize");

module.exports = {
  // async getAll(req, res) {
  //   try {
  //     const limit = 30;
  //     const count = await db.Table.count();
  //     const elements = await db.Table.findAndCountAll({
  //       offset: calcPage(limit, req.query.page ? req.query.page : 1),
  //       order: [
  //           [req.query.col || "id", req.query.order || "ASC"]
  //         ],
  //       limit,
  //     });
  //
  //     return res.status(200).send({
  //       pagination: {
  //         total_pages: Math.ceil(count / limit),
  //         total_elements: count,
  //         current_page: req.query.page * 1 || 1
  //       },
  //       rows: elements.rows
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     return res.status(500).send(e);
  //   }
  // },
  async getAll(req, res) {
    try {
      const elements = await db.Table.findAll();

      return res.status(200).send(elements);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },
  async add(req, res) {
    try {
      const elementModel = new db.Table(req.body);
      await elementModel.save();

      return res.status(200).send({message: "ok"});
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },
  // async parsingTables(req, res) {
  //   try {
  //     const words = await axios.get("http://localhost:4000/word/mnogo/");
  //
  //     for (let i of words.data) {
  //       const toDb = new db.Table({
  //         title: i.title,
  //         count: randomMinMax(1, 1000),
  //         distance: randomMinMax(1, 500),
  //       });
  //
  //       await toDb.save();
  //     }
  //     return res.status(200).send({message: "ok"});
  //   } catch (e) {
  //     console.log(e);
  //     return res.status(500).send(e);
  //   }
  // }
}


function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcPage(limit, page) {
  return page == 1 ? 0 : limit * (page -1);
}
