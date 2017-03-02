import Ember from 'ember';

export default Ember.Controller.extend({
  entity: 'user',
  field: 'name',
  term: 'Cross',

  entities: ['user', 'ticket', 'org'],

  status: 'No query has been submitted yet',

  currentQuery: null,

  actions: {
    submitQuery: function() {
      const entity = this.get('entity');
      const field = this.get('field');
      const term = this.get('term');

      const description = `entity:${entity} - field:${field} - term:${term}`;

      const currentQuery = {
        entity,
        field,
        term
      };

      this.set('currentQuery', currentQuery);

      this.set('status', 'Running query for ' + description);

      const self = this;

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8000',
        data: currentQuery,

        success: function(data) {
          self.set('result', JSON.stringify(data, 0, 4));
          self.set('status', 'Query succeeded!');
        },
        error: function(request, textStatus, errorThrown) {
          self.set('status', 'Query failed :( ' + errorThrown);
        }
      });
    }
  }
});
