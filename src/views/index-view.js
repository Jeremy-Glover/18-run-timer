export default Backbone.View.extend({
  tagname: 'ul',

  attributes: {
    class: 'index-list',
  },

  initialize() {
    this.render();

    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.html(this.template(this.collection));
  },

  template(collection) {
    return collection.map((model) => {
      return `<li>
        <span>${model.get('date')}</span>
        <span>${model.get('time')}</span>
      </li>`;
    });
  },
});
