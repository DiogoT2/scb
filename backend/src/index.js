'use strict';

module.exports = {
  register(/*{ strapi }*/) {
    // Custom logic can be added here
  },

  async bootstrap({ strapi }) {
    console.log('Strapi bootstrap completed');
    console.log('Healthcheck middleware registered');
  },
};