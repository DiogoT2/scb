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

    // Add middleware to handle secure cookies for Railway
    strapi.server.use(async (ctx, next) => {
      // Force secure cookies to false for Railway
      if (ctx.cookies) {
        const originalSet = ctx.cookies.set;
        ctx.cookies.set = function(name, value, options = {}) {
          // Override secure option for Railway
          options.secure = false;
          options.sameSite = 'lax';
          return originalSet.call(this, name, value, options);
        };
      }
      await next();
    });
  },

  async bootstrap({ strapi }) {
    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('Created uploads directory:', uploadsDir);
    }

    // Configure API permissions for public access
    try {
      const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        // Set permissions for Articles
        await pluginStore.set({ key: 'advanced', value: { ...publicRole.permissions } });
        
        // Enable find and findOne for all content types
        const contentTypes = ['article', 'player', 'match'];
        
        for (const contentType of contentTypes) {
          if (!publicRole.permissions[`api::${contentType}.${contentType}`]) {
            publicRole.permissions[`api::${contentType}.${contentType}`] = {};
          }
          publicRole.permissions[`api::${contentType}.${contentType}`].find = { enabled: true };
          publicRole.permissions[`api::${contentType}.${contentType}`].findOne = { enabled: true };
        }

        await strapi.query('plugin::users-permissions.role').update({
          where: { id: publicRole.id },
          data: { permissions: publicRole.permissions },
        });

        console.log('✅ API permissions configured for public access');
      }
    } catch (error) {
      console.log('⚠️ Could not configure API permissions automatically:', error.message);
    }
    
    console.log('Strapi bootstrap completed');
    console.log('Healthcheck endpoint available at: /');
  },
};