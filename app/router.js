import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('web-portfolio');
  this.route('imagery-portfolio');
  this.route('music-portfolio');
});

export default Router;
