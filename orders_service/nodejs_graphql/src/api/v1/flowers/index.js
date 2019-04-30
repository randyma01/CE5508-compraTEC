import Flower from '../../../models/flower';

function flowersRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/welcome',
      handler: function(request, h) {
        return '<h1>Welcome to the GoldenFlower Shop!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/flowers/findFlowerByName',
      handler: function(request, reply) {
        const { name } = request.query;
        return Flower.find({ name });
      }
    },
    {
      method: 'GET',
      path: '/api/v1/flowers/allFlowers',
      handler: function(request, reply) {
        return Flower.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/flowers/insertNewFlower',
      handler: function(request, reply) {
        return (async () => {
          const { name, price, color, stock } = request.payload;
          const flower = new Flower({
            name,
            price,
            color,
            sock
          });
          try {
            await flower.save();
            return reply.response('1');
          } catch (e) {
            return reply.response('0');
          }
        })();
      }
    }
  ]);
}

export default flowersRoutes;
