'use strict';

module.exports = {
  register({ strapi }) {
    // Register simple healthcheck endpoint
    strapi.server.routes([
      {
        method: 'GET',
        path: '/',
        handler: (ctx) => {
          ctx.body = { status: 'ok', message: 'Strapi is running' };
          ctx.status = 200;
        },
        config: { auth: false },
      },
    ]);
  },

  async bootstrap({ strapi }) {
    console.log('Strapi bootstrap completed');
    console.log('Healthcheck endpoint available at: /');
  },
};