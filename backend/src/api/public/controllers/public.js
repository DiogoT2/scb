'use strict';

/**
 * public controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::public.public', ({ strapi }) => ({
  async getArticles(ctx) {
    try {
      const articles = await strapi.entityService.findMany('api::article.article', {
        populate: ['featuredImage'],
        sort: { publishedAt: 'desc' },
        filters: { publishedAt: { $notNull: true } },
      });
      ctx.body = { data: articles };
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getPlayers(ctx) {
    try {
      const players = await strapi.entityService.findMany('api::player.player', {
        populate: ['photo'],
        sort: { jerseyNumber: 'asc' },
        filters: { publishedAt: { $notNull: true } },
      });
      ctx.body = { data: players };
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getMatches(ctx) {
    try {
      const matches = await strapi.entityService.findMany('api::match.match', {
        sort: { matchDate: 'desc' },
        filters: { publishedAt: { $notNull: true } },
      });
      ctx.body = { data: matches };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));
