module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5fed0e212db202ccc6e4c5b5ad79e5e5'),
    },
  },
});
