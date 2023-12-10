import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  контрагент: DS.belongsTo('i-i-s-test2-контрагент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test2-сотрудник', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-test2-состав-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test2-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-test2-заказ.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-test2-заказ.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test2-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-test2-заказ.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-test2-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-test2-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
