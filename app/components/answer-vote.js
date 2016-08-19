import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      debugger;
      answer.votes += 1;
    },
    downvote(answer){
      answer.votes -= 1;
    }
  }
});
