(() => {
    angular.module('billingCyclesApp').factory('tabs', [ TabsFactory ])

    function TabsFactory(){
        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false
        }){
            owner.tabList = tabList
            owner.tabCreat = tabCreat
            owner.tabUpdate = tabUpdate
            owner.tabDelete = tabDelete
        }
        return { show }
    }
})()