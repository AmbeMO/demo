const db = require('../db');

class SupplierController {
  async getSupplier(req, res) {
    const suppliers = await db.query('SELECT * FROM supplier');
    res.json(suppliers.rows);
  }

  async getOneSupplier(req, res) {
    const { id } = req.params;
    const supplier = await db.query('SELECT * FROM supplier WHERE id = $1', [id]);
    res.json(supplier.rows[0]);
  }
}

module.exports = new SupplierController();
