export default Backbone.View.extend({

  initialize() {
    this.render();
  },

  events: {
    'click .edit-btn'() {
      this.model.change().then(() => {
        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <h2>My Run</h2>
      <ul class="run-detail">
        <li class="run-detail__log">
          <span>date: ${model.get('date')}</span>
          <span>time: ${model.get('time')}</span>
        </li>
        <li class="run-detail__note">notes: ${model.get('notes')}</li>
        <li>
          <button><a href="#">Back</a></button>
          <button><a href="#${model.id}/edit">Edit</a></p>a></button>
        </li>
      </ul>
    `;
  },
});
