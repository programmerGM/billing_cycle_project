(() => {
  angular.module('billingCyclesApp').controller('DashboardCtrl', [
    '$http',
    'msgs',
    DashboardController
  ])

  function DashboardController($http, msgs) {
    const vm = this
    vm.getSummary = () => {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then((response) => {
        const { credit = 0, debt = 0 } = response.data
        vm.credit = credit
        vm.debt = debt
        vm.total = credit - debt
      }).catch((response) => {
        vm.credit = 0.0
        vm.debt = 0.0
        vm.total = 0.0
        msgs.addError('Erro ao obter dados do Servidor para o Dashboard')
      })
    }
    vm.getSummary()
  }
})()