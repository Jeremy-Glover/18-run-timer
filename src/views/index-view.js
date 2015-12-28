var RunView = Backbone.View.extend({
  model: null,

  tagName: 'ul',

  template(model) {
    return `<ul class="run-list">
        <li class="run-log">
          <a href="#${model.id}">
            <span class="list-items date">${model.get('date')}</span>
          </a>
          <a href="#${model.id}">
            <span class="list-items time">${model.get('time')}</span>
          </a>
        </li>
        </ul>`;
  },

  render() {
    this.$el.html(this.template(this.model));

    return this.$el;
  },
});

export default Backbone.View.extend({

  collection: null,

  tagname: 'li',

  attributes: {
      class: 'index-list',
    },

  initialize() {
    this.listenTo(this.collection, 'sync', this.render);

    this.render();
  },

  render() {
    this.$el.empty();

    this.collection.forEach((runInfo) => {
      var listItem = new RunView({model: runInfo});

      this.$el.append(listItem.render());
    });

    this.$el.append(`<a href="#new" class="post-new"><i class="fa fa-plus"></i></a>`);
  },

});
