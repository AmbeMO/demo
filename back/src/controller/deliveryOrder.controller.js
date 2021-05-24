const db = require('../db');

class OrderController {
  async createOrder(req, res) {
    const {
      satus, quantity, price, deliveryAddress,
    } = req.body;
    // INSERT INTO order_item FOR ALL order_item
    const newOrder = await db.query('INSERT INTO "delivery_order" ( satus, quantity, price, delivery_address) VALUES ($1,$2, $3, $4) RETURNING *', [satus, quantity, price, deliveryAddress]);

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
