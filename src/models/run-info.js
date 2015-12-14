export default Backbone.Model.extend({
  idAttribute: '_id',

  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-jg',

  defaults: {
    time: '',
    date: '',
    notes: '',
  },
});
