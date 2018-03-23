(() => {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleCtrl
    ])

    function BillingCycleCtrl($http, msgs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = () => {
            $http.get(url).then((response) => {
                vm.billingCycle = {}
                vm.billingCycles = response
            })
        }

        vm.create = () => {
            $http.post(url, vm.billingCycle).then((response) => {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).error((data) => {
                msgs.addError(data.error)
            })
        }
        vm.refresh()
    }
})()