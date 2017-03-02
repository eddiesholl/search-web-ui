import { moduleFor, test } from 'ember-qunit';

moduleFor('component:search-result-display', 'Unit | Component | search-result-display', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

const sampleResult = {
  foo: 'bar',
  baz: 1
};

// Replace this with your real tests.
test('matchedValue is null', function(assert) {
  let controller = this.subject();
  assert.equal(controller.get('matchedValue'), null);
});

test('matchedValue has value', function(assert) {
  let controller = this.subject();
  controller.set('result', JSON.stringify(sampleResult));
  controller.set('field', 'foo');
  assert.equal(controller.get('matchedValue'), 'bar');
});
