import Ember from 'ember';

var ix = 0;

export default Ember.Controller.extend({
  entity: 'user',
  field: 'name',
  term: 'Cross',

  actions: {
    submitQuery: function() {
      const entity = this.get('entity');
      const field = this.get('field');
      const term = this.get('term');

      this.get('store').queryRecord('search-result', {
        entity,
        field,
        term
      })
      .then(r => {
        this.set('result', r);
      })
      .catch(e => {
        this.set('result', 'An error occurred when getting results: ' + e);
      });
    }
  }
});
