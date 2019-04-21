import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('teams', { path: '' }, function() {
    this.route('team', { path: ':teamId' }, function() {
      this.route('channel', {
        path: '/:channelId'
      });
    });
  });
  this.route('team');
});

export default Router;
