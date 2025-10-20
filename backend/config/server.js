module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Railway-specific configuration
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: false,
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'default-admin-secret-key'),
    },
    // Fix for Railway HTTPS cookies
    url: env('ADMIN_URL', '/admin'),
    serveAdminPanel: true,
  },
  // Fix secure cookies for Railway
  url: env('PUBLIC_URL', 'https://scb-production.up.railway.app'),
});
