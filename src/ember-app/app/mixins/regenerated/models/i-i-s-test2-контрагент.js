import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКлиента: DS.attr('number'),
  номерТел: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  кодКлиента: {
    descriptionKey: 'models.i-i-s-test2-контрагент.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТел: {
    descriptionKey: 'models.i-i-s-test2-контрагент.validations.номерТел.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-test2-контрагент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-test2-контрагент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТел: attr('Номер тел', { index: 2 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-test2-контрагент', {
    кодКлиента: attr('Код клиента', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТел: attr('Номер тел', { index: 2 })
  });
};
