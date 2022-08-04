const pool = require('../utils/pool');

module.exports = class Author {
  id;
  name;
  pob;
  dob;
  books;

  constructor({ id, name, pob, dob, books }) {
    this.id = id;
    this.name = name;
    this.pob = pob;
    this.dob = dob;
    this.books = books ?? [];
  }


  static async getAll() {
    const { rows } = await pool.query(' SELECT * FROM authors;');
    return rows.map((row) => new Author(row));
  }

  static async getAb(id) {
    const { rows } = await pool.query(
      `SELECT
        authors.*,
        COALESCE(
          json_agg(to_jsonb(books))
          FILTER(WHERE books.id IS NOT NULL), '[]'
        ) as books from authors 
          LEFT JOIN books_authors on authors.id = books_authors.author_id
          LEFT JOIN books on books_authors.book_id = books.id
          WHERE authors.id = $1
          GROUP BY authors.id`, [id]
    );
    return new Author(rows[0]);
  }

  static async insert({ name, pob, dob }) {
    const { rows } = await pool.query(
      `INSERT INTO authors (name, pob, dob)
      VALUES ($1, $2, $3)
      RETURNING * `,
      [name, pob, dob]
    );
    return new Author(rows[0]);
  }
};
