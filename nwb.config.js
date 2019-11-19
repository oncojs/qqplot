module.exports = {
  devServer: {
    port: 3001,
  },
  npm: {
    esModules: true,
    umd: {
      externals: {
        react: 'React',
      },
      global: 'OncojsQQPlot',
    },
  },
  type: 'react-component',
};
