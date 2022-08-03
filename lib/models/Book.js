const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released;

  constructor({ id, title, released }) {
    this.id = id;
    this.title = title;
    this.released = released;
  }

  static async getAll() {
    const { rows } = await pool.query(' SELECT * FROM books;');
    return rows.map((row) => new Book(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Book(rows[0]);
  }
};
