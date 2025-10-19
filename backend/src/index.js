'use strict';

module.exports = {
  register({ strapi }) {
    // Register the healthcheck route early in the process
    strapi.server.routes([
      {
        method: 'GET',
        path: '/health',
        handler: (ctx) => {
          ctx.body = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            strapi: 'ready'
          };
          ctx.status = 200;
        },
        config: {
          auth: false,
        },
      },
    ]);
  },

  async bootstrap({ strapi }) {
    // Bootstrap logic can be added here later
    console.log('Strapi bootstrap completed');
  },
};