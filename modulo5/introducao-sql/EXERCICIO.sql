USE `hooks-4313535-paulo-junior`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Employees_company (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

DROP TABLE Employees_company;

DESCRIBE Employees_company;

INSERT INTO Employees_company(id, nome, email)
VALUES ( "001", "Luana", "lua@lbn.com"),
		( "002", "Vinicius", "vini@lbn.com"),
        ( "003", "Laura", "lau@lbn.com");
        
        SELECT * FROM Employees_company; 
        
        -- Alterou o nome da coluna "id" para identifier
        SELECT id AS identifier, nome 
        FROM Employees_company;
        
        SELECT id, nome, email
        FROM Employees_company
		WHERE nome="Laura";
        
        -- Vai selecionar a coluna id, nome e email da tabela empl... que contenham a letra "a" no nome
        SELECT id, nome, email
		FROM Employees_company
		WHERE nome LIKE "%a%";
        
        SELECT id, nome, email
		FROM Employees_company
		WHERE nome NOT LIKE "%a%";
        
        INSERT INTO Employees_company (id, nome, email)
		VALUES ("004", "Yuzo", "yuzo@lbn.com");
        
        DELETE FROM Employees_company
		WHERE id="004";