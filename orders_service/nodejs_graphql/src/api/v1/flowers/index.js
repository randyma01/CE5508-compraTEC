import Flower from '../../../models/flower';

function flowersRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Welcome',
      handler: function(request, h) {
        return '<h1>Welcome to the GoldenFlower Shop!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/MainMenu',
      handler: function(request, h) {
        return '<h1>Growing and Selling the best Flowers!</h1>';
      }
    }
  ]);
}

export default flowersRoutes;
