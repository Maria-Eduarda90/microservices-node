import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/client', 'CreateClientController.handle')

}).prefix('/api');