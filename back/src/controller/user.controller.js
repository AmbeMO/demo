const db = require('../db');

class UserController {
  async createUser(req, res) {
    const {
      firstName, lastName, phoneNumber, address,
    } = req.body;
    const newPerson = await db.query('INSERT INTO "user" (first_name, last_name, phone_number, address) VALUES ($1,$2, $3, $4) RETURNING *', [firstName, lastName, phoneNumber, address]);

    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM "user"');
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const { id } = req.params;
    const user = await db.query('SELECT * FROM "user" WHERE id = $1', [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const {
      id, firstName, lastName, phoneNumber, address,
    } = req.body;
    const user = await db.query(
      'UPDATE "user" set first_name = $1, last_name = $2, phone_number = $3, address = $4 where id = $5 RETURNING *',
      [firstName, lastName, phoneNumber, address, id],
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await db.query('DELETE  FROM "user" WHERE id = $1', [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
