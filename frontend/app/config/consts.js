(() => {
  angular.module('billingCyclesApp').constant('consts', {
    appName: 'Ciclo de pagamentos',
    version: '1.0',
    owner: 'Desenvolvido por Maurício Generoso - Curso Udemy',
    year: '2018',
    site: 'https://www.udemy.com/mean-primeira-aplicacao-do-zero',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_billingCyclesApp'
  }).run([
    '$rootScope', 
    'consts', 
    function ($rootScope, consts) {
      $rootScope.consts = consts
    }])
})()
