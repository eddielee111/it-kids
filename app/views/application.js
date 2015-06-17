import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement : function(){
          // Menu settings
          Ember.$('#menuToggle, .menu-close').on('click', function(){
            Ember.$('#menuToggle').toggleClass('active');
            Ember.$('body').toggleClass('body-push-toleft');
            Ember.$('#theMenu').toggleClass('menu-open');
          });
  }
});