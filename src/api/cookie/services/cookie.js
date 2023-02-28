'use strict';

/**
 * cookie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cookie.cookie');
