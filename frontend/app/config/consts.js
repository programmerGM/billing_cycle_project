(() => {
  angular.module('billingCyclesApp').constant('consts', {
    appName: 'Ciclo de pagamentos',
    version: '1.0',
    owner: 'Créditos: Cod3r - Desenvolvido por Maurício Generoso',
    year: '2018',
    site: 'http://cod3r.com.br',
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
