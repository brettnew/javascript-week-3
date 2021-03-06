import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question'),
        votes: 0
      };
      debugger;
      this.sendAction('saveAnswer2', params);
      this.set('addNewAnswer', false);
    }
  }
});
