import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import МестоВыдачиEnum from '../enums/i-i-s-test2-место-выдачи';

export default FlexberryEnum.extend({
  enum: МестоВыдачиEnum,
  sourceType: 'IIS.Test2.МестоВыдачи'
});
