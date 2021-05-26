const db = require('../db');

class OrderController {
  async createOrder(req, res) {
    const {
       quantity,
    } = req.body;
    // INSERT INTO order_item FOR ALL order_item
    const newOrder = await db.query('INSERT INTO "delivery_order" (  quantity ) VALUES ($1) RETURNING *', [ quantity ]);

    res.json(newOrder.rows[0]);
  }

  async getOrders(req, res) {
    const orders = await db.query('SELECT * FROM "delivery_order"');
    res.json(orders.rows);
  }

  async getOneOrder(req, res) {
    const { id } = req.params;
    const order = await db.query('SELECT * FROM "delivery_order" WHERE id = $1', [id]);
    res.json(order.rows[0]);
  }
}

module.exports = new OrderController();
