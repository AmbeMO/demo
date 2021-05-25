const db = require('../db');

class ProductController {
  async getProducts(req, res) {
    // const { limit } = req.params;
    // const { limit } = req.query;
    // const { offset } = req.query;
    // LIMIT ${limit} OFFSET ${offset}
    const products = await db.query(`SELECT * FROM product `);
    res.json(products.rows);
  }

  async getOneProduct(req, res) {
    const { id } = req.params;
    const product = await db.query('SELECT * FROM "product" WHERE id = $1', [id]);
    res.json(product.rows[0]);
  }

  async createProduct(req, res) {
    const {
      name, price, category
    } = req.body;
    const newProduct = await db.query('INSERT INTO "product" (name, price, category) VALUES ($1,$2, $3) RETURNING *', [name, price, category]);

    res.json(newProduct.rows[0]);
  }

  // async get5Products(req, res) {
  //   const products = await db.query('SELECT * FROM product WHERE id BETWEEN 5 AND 9');
  //   res.json(products.rows);
  // }
}

module.exports = new ProductController();
