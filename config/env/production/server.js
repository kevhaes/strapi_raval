module.exports = ({ env }) => ({
  host: env('APP_HOST', 'strapi-raval.onrender.com'),
  port: env.int('NODE_PORT', 1337),
});
