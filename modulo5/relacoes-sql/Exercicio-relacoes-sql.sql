USE `hooks-4313535-paulo-junior`;
SET SQL_SAFE_UPDATES = 0;

-- Task 01
-- a) Uma FK é uma chave que vem de uma tabela externa

-- b)

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

