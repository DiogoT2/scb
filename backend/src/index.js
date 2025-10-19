'use strict';

module.exports = {
  register({ strapi }) {
    // Register multiple healthcheck endpoints
    strapi.server.routes([
      {
        method: 'GET',
        path: '/health',
        handler: (ctx) => {
          ctx.body = { status: 'ok', timestamp: new Date().toISOString() };
          ctx.status = 200;
        },
        config: { auth: false },
      },
      {
        method: 'GET',
        path: '/api/health',
        handler: (ctx) => {
          ctx.body = { status: 'ok', timestamp: new Date().toISOString() };
          ctx.status = 200;
        },
        config: { auth: false },
      },
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
    console.log('Healthcheck endpoints available at: /health, /api/health, /');
  },
};