module.exports = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'connect-src': ["'self'", 'https:', 'http:'],
      'img-src': [
        "'self'",
        'data:',
        'blob:',
        'https://scb-production.up.railway.app',
        'https://*.railway.app',
        'https://*.vercel.app',
      ],
      'media-src': [
        "'self'",
        'data:',
        'blob:',
        'https://scb-production.up.railway.app',
        'https://*.railway.app',
        'https://*.vercel.app',
      ],
      upgradeInsecureRequests: null,
    },
  },
};
