import ListView from './views/list-view';

var Router = Backbone.Router.extend({

  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id:': 'showOneRun',
    ':id/edit': 'editRun',
  },

  listAllRuns() {

  },

});

export default Router;
