module.exports = {
  apps: [
    {
      name: 'Oddle_Test',
      script: './server/server.js',
      watch: true,
      env: {
        PORT: '4003'
      }
    }
  ],
};
