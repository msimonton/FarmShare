import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/farm',
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.landing', {
        url: '/landing',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/landing.html',
          }
        }
      })
      .state('tab.faq', {
        url: '/FAQ',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/faq.html',
          }
        }
      })
      .state('tab.farmInfo', {
        url: '/farmInfo',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/farmInfo.html',
          }
        }
      })
      .state('tab.users', {
        url: '/profile',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/users.html',
          }
        }
      })
      .state('tab.login', {
        url: '/login',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/login.html',
          }
        }
      })
      .state('tab.farmer', {
        url: '/farmer',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/farmer.html'
          }
        }
      })
      .state('tab.memberform', {
        url: '/memberform',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/memberform.html',
            controller: 'signup as signup'
          }
        }
      })


    this.$urlRouterProvider.otherwise('farm')
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
