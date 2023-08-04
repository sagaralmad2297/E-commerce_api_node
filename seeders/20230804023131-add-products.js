'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Products',[{
       name:'Iphone 13',
       description:'The brand new iphone 13 by apple',
       cost:'100000',
       categoryId:1,
       createdAt:new Date(),
       updatedAt:new Date()
    },{
         name:'Ipad air',
         description:'the brand new apple ipad air ',
         cost:50000,
         categoryId:1,
         createdAt:new Date(),
         updatedAt:new Date()
    },{
        name:'Mac-book Pro',
        description:'the brand new apple macbook pro',
        cost:150000,
        categoryId:1,
        createdAt:new Date(),
        updatedAt:new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
