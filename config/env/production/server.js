module.exports = ({ env }) => ({
  host: env('APP_HOST', 'kevhaes.github.io/strapi_raval'),
  port: env.int('NODE_PORT', 1337),
});
