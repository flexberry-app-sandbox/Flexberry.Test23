import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСотр: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  кодСотр: {
    descriptionKey: 'models.i-i-s-test2-сотрудник.validations.кодСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-test2-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-test2-сотрудник', {
    кодСотр: attr('Код сотр', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-test2-сотрудник', {
    кодСотр: attr('Код сотр', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });
};
