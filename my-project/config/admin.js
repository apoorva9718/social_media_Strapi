module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df1d783ff2e6def1a3da0d8964c1c206'),
  },
});
