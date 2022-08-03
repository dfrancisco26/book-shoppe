-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR,
    author VARCHAR,
    released INT
);

INSERT INTO books (title, author, released) VALUES
('SQL for dummies', 'D.F.', 1992),
('Supabase goes hard', 'Alt Tab Group', 2022),
('Can I get a witness?', 'D.F.', 1995),
('Y2K wuz sick', 'D.F.', 2001),
('Heroku cool too', 'Alt Tab Group', 2021),
('Wait what', 'D.F.', 2019),
('my only book', 'Iglus Ran', 2024);