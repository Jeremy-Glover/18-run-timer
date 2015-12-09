import RunInfo from './models/run-info';
import ListCollection from './collections/run-times';
import ListView from './views/index-view';
import RunForm from './views/run-form';

var Router = Backbone.Router.extend({

  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id': 'showOneRun',
    ':id/edit': 'editRun',
  },

  initialize() {
    this.list = new ListCollection();

    this.list.fetch();
  },

  listAllRuns() {
    var list = new ListView({collection: this.list});

    $('#outlet').html(list.el);
  },

  newRun() {
    var runInfo = new RunInfo();

    var form = new RunForm({model: runInfo});

    $('#outlet').html(form.el);
  },

  showOneRun() {

  },

  editRun() {

  },

});

export default Router;
