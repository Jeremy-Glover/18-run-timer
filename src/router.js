import RunInfo from './models/run-info';
import ListCollection from './collections/run-times';
import ListView from './views/index-view';
import RunForm from './views/run-form';
import RunDetail from './views/detail-run';

var Router = Backbone.Router.extend({

  routes: {
    '': `listAllRuns`,
    new: `newRun`,
    ':id': `showOneRun`,
    ':id/edit': `editRun`,
  },

  list: null,

  cleanUpListners() {

    this.list.off('sync');
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

  showOneRun(id) {
    var lookupRunInfo = () => {
      var runInfo = this.runInfo.get(id);

      if (runInfo) {
        var runDetail = new RunDetail({model: runInfo});

        $('#outlet').html(runDetail.el);
      }
    };

    lookupRunInfo();

    this.contacts.on('sync', lookupRunInfo);
  },

  editRun(id) {
    var lookupRunInfo = () => {
      var runInfo = this.runInfo.get(id);

      if (runInfo) {
        var runDetail = new RunForm({model: runInfo, collection: this.list});

        $('#outlet').html(runDetail.el);
      }
    };

    lookupRunInfo();

    this.contacts.on('sync', lookupRunInfo);
  },

});

export default Router;
