import connection from "./connection";
import users from "./users.json";

function printError(error: any): void { console.log(error.sqlMessage || error.message); }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      `)

      .then(() => { console.log("Tabela criada com sucesso!") })
      .catch(printError)

      const insertUsers = () => connection("labecommerce_users")
     .insert(users)
     .then(() => { console.log("Usuário criado com sucesso") })
     .catch(printError)

     const closeConnection = () => { connection.destroy() }

     createTables()
   .then(insertUsers)
   .finally(closeConnection)