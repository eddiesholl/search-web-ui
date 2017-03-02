import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-result-area'],

  // Try to sniff out the object's property that was actually matched by the search
  matchedValue: Ember.computed('field', 'result', function() {
    const field = this.get('field');
    const result = this.get('result');

    if (field && result) {
      try {
        const resultObject = JSON.parse(result);

      return resultObject[field];
      }
      catch(e) {
        console.warn('Could not parse result object: ' + e);
      }
    }
  })
});
