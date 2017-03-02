import Ember from 'ember';

export default Ember.Controller.extend({
  entity: 'user',
  field: 'name',
  term: 'Cross',

  status: 'No query has been submitted yet',

  actions: {
    submitQuery: function() {
      const entity = this.get('entity');
      const field = this.get('field');
      const term = this.get('term');

      const description = `entity:${entity} - field:${field} - term:${term}`;

      this.set('status', 'Running query for ' + description);

      const self = this;

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8000',
        data: {
          entity,
          field,
          term
        },

        success: function(data) {
          self.set('result', JSON.stringify(data, 0, 4));
          self.set('status', `Displaying query result for ${description}`);
        },
        error: function(request, textStatus, errorThrown) {
          self.set('status', errorThrown);
        }
      });
    }
  }
});
