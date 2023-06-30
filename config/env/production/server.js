module.exports = ({ env }) => ({
  host: env('APP_HOST', 'https://strapi-raval.onrender.com/'),
  port: env.int('NODE_PORT', 1337),
});
