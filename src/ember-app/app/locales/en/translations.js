import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest2ЗаказLForm from './forms/i-i-s-test2-заказ-l';
import IISTest2КонтрагентLForm from './forms/i-i-s-test2-контрагент-l';
import IISTest2СотрудникLForm from './forms/i-i-s-test2-сотрудник-l';
import IISTest2ЗаказEForm from './forms/i-i-s-test2-заказ-e';
import IISTest2КонтрагентEForm from './forms/i-i-s-test2-контрагент-e';
import IISTest2СотрудникEForm from './forms/i-i-s-test2-сотрудник-e';
import IISTest2ЗаказModel from './models/i-i-s-test2-заказ';
import IISTest2КонтрагентModel from './models/i-i-s-test2-контрагент';
import IISTest2СоставЗаказаModel from './models/i-i-s-test2-состав-заказа';
import IISTest2СотрудникModel from './models/i-i-s-test2-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test2-заказ': IISTest2ЗаказModel,
    'i-i-s-test2-контрагент': IISTest2КонтрагентModel,
    'i-i-s-test2-состав-заказа': IISTest2СоставЗаказаModel,
    'i-i-s-test2-сотрудник': IISTest2СотрудникModel
  },

  'application-name': 'Test2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test2',
          title: 'Test2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test2: {
          caption: 'Test2',
          title: 'Test2',
          'i-i-s-test2-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test2-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-test2-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test2-заказ-l': IISTest2ЗаказLForm,
    'i-i-s-test2-контрагент-l': IISTest2КонтрагентLForm,
    'i-i-s-test2-сотрудник-l': IISTest2СотрудникLForm,
    'i-i-s-test2-заказ-e': IISTest2ЗаказEForm,
    'i-i-s-test2-контрагент-e': IISTest2КонтрагентEForm,
    'i-i-s-test2-сотрудник-e': IISTest2СотрудникEForm
  },

});

export default translations;
