"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findFirst(ctx) {
    const entity = await strapi.services.organization.findOne();
    return sanitizeEntity(entity, { model: strapi.models.organization });
  },
};
