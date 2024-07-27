const { withFederation, shareAll } = require('@module-federation/esbuild/build');

module.exports = withFederation({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll({})
  },
});

