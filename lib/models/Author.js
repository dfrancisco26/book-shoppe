const pool = require('../utils/pool');

module.exports = class Author {
  id;
  name;
  pob;
  dob;

  constructor({ id, name, pob, dob }) {
    this.id = id;
    this.name = name;
    this.pob = pob;
    this.dob = dob;
  }


  static async getAll() {
    const { rows } = await pool.query(' SELECT * FROM authors;');
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM authors WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Author(rows[0]);
  }
};
