import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test2',
          title: 'Test2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
