export default Backbone.View.extend({
  attributes: {
    class: 'run-detail',
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <ul class="run-detail">
        <h2 class="run-detail__head">My Run</h2>
        <li class="run-detail__log">
          <span class="run-item date">${model.get('date')}</span>
          <span class="run-item time">${model.get('time')}</span>
        </li>
        <li class="run-detail__note">${model.get('notes')}</li>
        <li>
          <a href="#"><button class= back-btn><</button></a>
          <a href="#${model.id}/edit" class="edit-btn"><i class="fa fa-pencil"></i></a>
        </li>
      </ul>
    `;
  },
});
