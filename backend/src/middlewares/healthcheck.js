'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Handle healthcheck at root path
    if (ctx.path === '/' && ctx.method === 'GET') {
      ctx.body = {
        status: 'ok',
        message: 'Strapi is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
      };
      ctx.status = 200;
      return;
    }
    
    await next();
  };
};
