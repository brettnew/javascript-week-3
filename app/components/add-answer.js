import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer2', params);
    }
  }
});
