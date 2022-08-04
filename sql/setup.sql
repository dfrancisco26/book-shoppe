-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books
CASCADE;
DROP table if exists authors
CASCADE;
DROP table if exists books_authors;


CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    released INT
);

INSERT INTO books (title, author, released) VALUES
('SQL for dummies', 'D.F.', 1992),
('Supabase goes hard', 'Alt Tab Group', 2022),
('Can I get a witness?', 'D.F.', 1995),
('Y2K wuz lame', 'D.F.', 2001),
('Heroku cool too', 'Alt Tab Group', 2021),
('Wait what', 'D.F.', 2019),
('my only book', 'Iglus Ran', 2024);

CREATE table authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    pob VARCHAR,
    dob INT
);

INSERT INTO authors (name, pob, dob) VALUES
    ('D.F.', 'Nowhere', 1992),
    ('Alt Tab Group', 'The Other Plane', 2020),
    ('Iglus Ran', 'Alone', 2050);


CREATE table books_authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books_authors(author_id, book_id) VALUES
    (1,1),
    (2,2),
    (1,3),
    (1,4),
    (2,5),
    (1,6),
    (3,7);