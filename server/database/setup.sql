DROP TABLE IF EXISTS people CASCADE;
DROP TABLE IF EXISTS log_in;
DROP TABLE IF EXISTS diary;

CREATE TABLE people(
    id INT GENERATED ALWAYS AS IDENTITY, 
    user_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO people (user_name)
VALUES
  ('Connor'),
  ('Ishaaq');


CREATE TABLE log_in (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY key(id),
    FOREIGN KEY (user_id) REFERENCES people ("id")
);

INSERT INTO log_in (user_id, username, password)
VALUES
  (1, 'Connor', 'cococonuts'),
  (2, 'Ishaaq', 'bob67');


CREATE TABLE diary(
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    entry VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES people ("id")
);

INSERT INTO diary (user_id, date, entry, category) VALUES 
    (1, '20230101', 'This is my first diary entry', 'Daily'),
    (2, '20230101', 'This is my first diary entry', 'Daily');

