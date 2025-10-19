'use strict';

/**
 * health controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health.health', ({ strapi }) => ({
  async index(ctx) {
    try {
      // Simple health check - just return 200 if Strapi is running
      ctx.body = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
      };
      ctx.status = 200;
    } catch (error) {
      ctx.body = {
        status: 'error',
        message: error.message,
      };
      ctx.status = 500;
    }
  },
}));
