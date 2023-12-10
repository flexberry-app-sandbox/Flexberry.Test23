import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test2-сотрудник', 'Unit | Serializer | i-i-s-test2-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test2-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test2-место-выдачи',
    'transform:i-i-s-test2-состояния',

    'model:i-i-s-test2-заказ',
    'model:i-i-s-test2-контрагент',
    'model:i-i-s-test2-состав-заказа',
    'model:i-i-s-test2-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
