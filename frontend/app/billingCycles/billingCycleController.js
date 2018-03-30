(() => {
    angular.module('billingCyclesApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleCtrl
    ])

    function BillingCycleCtrl($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = () => {
            $http.get(url).then((response) => {
                vm.billingCycle = {}
                vm.billingCycles = response.data
                tabs.show(vm, {tabList: true, tabCreate: true})
            })
        }

        vm.create = () => {
             $http.post(url, vm.billingCycle).then((response) => {
                 vm.refresh()
                 msgs.addSuccess('Operação realizada com sucesso!!')
             }).catch((resp) => {
                 msgs.addError(resp.data.errors)
             })
        }
        
        vm.refresh()
    }
})()