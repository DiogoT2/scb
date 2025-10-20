module.exports = {
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-key-here',
    },
  },
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 100000000, // 100MB - moved from providerOptions
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // Fix for Railway HTTPS cookies
  'admin': {
    config: {
      auth: {
        secret: process.env.ADMIN_JWT_SECRET || 'default-admin-secret-key',
      },
    },
  },
};
