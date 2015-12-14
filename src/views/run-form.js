export default Backbone.View.extend({
  model: null,

  collection: null,

  tagName: 'form',

  attributes: {
    class: 'run-form',
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      var time = this.$el.find('#date').val();
      var date = this.$el.find('#time').val();
      var notes = this.$el.find('#notes').val();

      this.model.save({date, time, notes})
        .then(() => {
          this.collection.add(this.model);

          Backbone.history.navigate('', {trigger: true});
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
        <input type="text" value="${model.get('date')}" id="time" placeholder="Run Date">
        <input type="text" value="${model.get('time')}" id="date" placeholder="Race Time">
        <input type="text" value="${model.get('notes')}" id="notes" placeholder="Race Notes">
      </li>
      <li class="new-run__btns">
        <a href=#><button class="cancel-btn">Cancel</button></a>
        <a href="#${model.id}/edit"><button class="save-btn">Save</button></a>
      </li>
    </ul>
    `;
  },
});
