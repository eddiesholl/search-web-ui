import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  entity: DS.attr('string'),
  field: DS.attr('string'),
  term: DS.attr('string')
});
