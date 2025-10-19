'use strict';

module.exports = {
  register(/*{ strapi }*/) {
    // Register custom logic here
  },

  async bootstrap({ strapi }) {
    // Add a simple healthcheck endpoint
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
          };
          ctx.status = 200;
        },
        config: {
          auth: false,
        },
      },
    ]);
  },
};