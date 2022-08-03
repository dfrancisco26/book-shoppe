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
};
