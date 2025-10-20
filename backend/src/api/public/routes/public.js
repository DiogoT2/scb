'use strict';

/**
 * public router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::public.public', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});

// Custom routes for public access
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/public/articles',
      handler: 'public.getArticles',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/public/players',
      handler: 'public.getPlayers',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/public/matches',
      handler: 'public.getMatches',
      config: {
        auth: false,
      },
    },
  ],
};
