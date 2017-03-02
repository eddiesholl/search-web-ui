import DS from 'ember-data';

export default DS.Model.extend({
  entity: DS.string(),
  field: DS.string(),
  term: DS.string()
});
