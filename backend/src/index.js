'use strict';
const fs = require('fs');
const path = require('path');

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
    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('Created uploads directory:', uploadsDir);
    }
    
    console.log('Strapi bootstrap completed');
    console.log('Healthcheck endpoint available at: /');
  },
};