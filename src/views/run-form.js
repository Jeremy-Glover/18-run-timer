export default Backbone.View.extend({
  tagName: 'form',

  events: {
    submit(ev) {
      ev.preventDefault();

      var time = this.$el.find('#time').val();
      var date = this.$el.find('#date').val();
      var notes = this.$el.find('#notes').val();

      this.model.save({time, date, notes})
        .then(() => {
          Backbone.history.navigate('#', {trigger: true});
        });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
    <ul class="new-run">
      <li class="new-run__log">
        <h2 class="new-run__head">New Run</h2>
        <input type="text" value="${model.get('time')}" id="name" placeholder="Run Time">
        <input type="text" value="${model.get('date')}" id="date" placeholder="Race Date">
        <input type="text" value="${model.get('notes')}" id="notes" placeholder="Race Notes">
      </li>
      <li class="new-run__btns">
        <button class="cancel-btn">Cancel</button>
        <button class="save-btn">Save</button>
      </li>
    </ul>
    `;
  },
});
