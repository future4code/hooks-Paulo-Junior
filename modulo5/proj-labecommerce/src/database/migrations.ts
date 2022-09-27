import connection from "./connection";
import users from "./users.json";
import products from "./products.json";
import purchases from "./purchases.json";

function printError(error: any): void { console.log(error.sqlMessage || error.message); }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecommerce_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price BIGINT NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );

      `)

      .then(() => { console.log("Tabela criada com sucesso!") })
      .catch(printError)

      const insertUsers = () => connection("labecommerce_users")
      .insert(users)
      .then(() => { console.log("Usuário criado com sucesso") })
      .catch(printError)

     const insertProducts = () => connection("labecommerce_products")
      .insert(products)
      .then(() => { console.log("Produto criado com sucesso!") })
      .catch(printError)

      const insertPurchases = () => connection("labecommerce_purchases")
       .insert(purchases)
       .then(() => { console.log("Compras criadas") })
       .catch(printError)

     const closeConnection = () => { connection.destroy() }

     createTables()
      .then(insertUsers)
      .then(insertProducts)
      .then(insertPurchases)
      .finally(closeConnection)