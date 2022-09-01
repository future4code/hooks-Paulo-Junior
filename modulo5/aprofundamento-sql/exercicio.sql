USE `hooks-4313535-paulo-junior`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projects (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL
);

INSERT INTO Projects(id, name, title, date)
VALUES(
	"1",
    "LabeSky",
    "LSy",
    "2023/10/05"
);

-- Drop table é um comando que exclui a tabela do banco de dados
DROP TABLE Projects;

SELECT * FROM Projects;

INSERT INTO Projects(id, name, title, date)
VALUES(
	"002",
    "Labefy",
    "LFy",
    "2024/01/06"
);

INSERT INTO Projects(id, name, title, date)
VALUES(
	"003",
    "AstroZoom",
    "AZm",
    "2022/12/20"
);

ALTER TABLE Projects 
DROP COLUMN title;

SELECT * FROM Projects;

ALTER TABLE Projects 
CHANGE date duoDate VARCHAR(20) NOT NULL;
DESCRIBE Projects;

ALTER TABLE Projects
ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projects;

UPDATE Projects
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "1";

UPDATE Projects
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projects
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

SELECT * FROM Projects
ORDER BY duoDate DESC;

SELECT name, duoDate
FROM Projects
ORDER BY duoDate ASC
LIMIT 2;

SELECT duoDate AS dueDate
FROM Projects;

