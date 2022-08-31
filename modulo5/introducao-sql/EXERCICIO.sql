USE `hooks-4313535-paulo-junior`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Employees_company (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE Employees_company;

DESCRIBE Employees_company

INSERT INTO Employees_company(id, nome, email)
VALUES (id: "001",nome: "Luana",email: "lua@lbn.com"),
		(id: "002",nome: "Vinicius",email: "vini@lbn.com"),
        (id: "003",nome: "Laura",email: "lau@lbn.com")