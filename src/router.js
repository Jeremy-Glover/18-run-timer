var Router = Backbone.Router.extend({

  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id:': 'showOneRun',
    ':id/edit': 'editRun',
},

});

export default Router;
