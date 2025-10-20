module.exports = {
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000000, // 100MB
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
};
