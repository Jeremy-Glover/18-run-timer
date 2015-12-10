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
      return `<ul class="run-list">
        <li class="run-log">
          <span class="list-items date">${model.get('date')}</span>
          <span class="list-items time">${model.get('time')}</span>
        </li>
        <li>
          <a href="#new" class="post-new"><i class="fa fa-plus-circle"></i></a>
        </li>
      </ul>`;
    });
  },
});
