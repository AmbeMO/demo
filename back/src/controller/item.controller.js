const db = require('../db');

class ItemController {
  async createItem(req, res) {
    const {
      quantity,
    } = req.body;
    const newItem = await db.query('INSERT INTO "order_item" (quantity) VALUES ($1) RETURNING *', [quantity]);

    res.json(newItem.rows[0]);
  }

  async getItems(req, res) {
    const items = await db.query('SELECT * FROM "order_item"');
    res.json(items.rows);
  }

  async getOneItem(req, res) {
    const { id } = req.params;
    const item = await db.query('SELECT * FROM "order_item" WHERE id = $1', [id]);
    res.json(item.rows[0]);
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    const item = await db.query('DELETE  FROM "order_item" WHERE id = $1', [id]);
    res.json(item.rows[0]);
  }
}

module.exports = new ItemController();
