
module.exports = {
  babel: {
    loaderOptions: {
      // Fix for https://github.com/alex3165/react-mapbox-gl/issues/931#issuecomment-1507800338
      ignore: ["./node_modules/maplibre-gl/dist/maplibre-gl.js"],
    },
  }
};