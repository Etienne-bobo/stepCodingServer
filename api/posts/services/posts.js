'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    async findOne(params, populate) {

        const [fr, en] = await Promise.all(
            [
                strapi.query("posts").findOne({slug: params.id}, populate),
            ]
        );

        return fr ? fr : en;
    },
};
