module.exports = {
  apps: [
    {
      name: 'Oddle_Test',
      script: 'server.js',
      watch: true,
      env: {
        PORT: '4003'
      }
    }
  ],
};
