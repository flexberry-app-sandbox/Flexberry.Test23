import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('i-i-s-test2-место-выдачи'),
  кодСостЗак: DS.attr('number'),
  количество: DS.attr('number'),
  номерТел: DS.attr('number'),
  состояние: DS.attr('i-i-s-test2-состояния'),
  стоимость: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-test2-заказ', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСостЗак: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.кодСостЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТел: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.номерТел.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test2-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-test2-состав-заказа', {
    адрес: attr('', { index: 0 }),
    кодСостЗак: attr('', { index: 1 }),
    количество: attr('', { index: 2 }),
    номерТел: attr('', { index: 3 }),
    состояние: attr('', { index: 4 }),
    стоимость: attr('', { index: 5 })
  });
};
