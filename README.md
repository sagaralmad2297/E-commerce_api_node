E-commerce API project in NODEJS

--System Requirement
  -NODEJS
  -MySQL
  -NPM

  -setting up the project

  -clone the repository
  -go inside the cloned folder from the terminal/cmd
  -Run npm install
  -created a new file .env and configure the following enviroment variables
   .port=3000
   `npx sequelize init`

   
  -Run the project
    Run `node server.js`

-Category Resource
  -GET `/ecom/api/v1/category`, get all caegories,
  -POST`/ecom/api/v1/category`,create a category,
  -PUT`/ecom/api/v1/category/:id`update a category,
  -DELETE`/ecom/api/v1/category/:id`delete a category,
  -GET`/ecom/api/v1/category/:id`,get the category,
 
## Associations
 -Every product must belong to a category
 -Every category must have many products
 -so between product and categories we have setup a 1:n(one to many )relation

 ## Seeding data in the database
  -npx sequelize seed:generate --name add-categories
  -npx sequelize db:seed:all
 