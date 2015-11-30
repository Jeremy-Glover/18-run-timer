import RunInfo from '../models/run-info';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/runs-jg',

  model: RunInfo,
});
