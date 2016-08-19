import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionShow: false,
  actions: {
    updateQuestionShow() {
      this.set('updateQuestionShow', true);
    },
    updateQuestion1(question) {
      question.save();
      this.set('updateQuestionShow', false);
    }
  }
});
