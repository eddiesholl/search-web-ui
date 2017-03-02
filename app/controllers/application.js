import Ember from 'ember';

var ix = 0;

export default Ember.Controller.extend({
  actions: {
    submitQuery: function() {
      const entity = this.get('entity');
      const field = this.get('field');
      const term = this.get('term');

      const result = this.get('store').queryRecord('search-result', {
        entity,
        field,
        term
      });
    }
  }
});
