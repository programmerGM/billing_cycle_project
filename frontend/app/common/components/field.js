(() => {
  angular.module('billingCyclesApp').component('field', {
    bindings: {
      id: '@',
      label: '@',
      grid: '@',
      placeholder: '@',
      type: '@',
      model: '=',
      readonly: '<', // A alteração feita no componente não vai refletir no controller
    },
    controller: [
      'gridSystem',
      function (gridSystem) {
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template: `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input id="{{ $ctrl.id }}" class="form-control" 
                        placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}" 
                        ng-model="$ctrl.model" ng-readonly="$ctrl.readonly"/>
                </div>   
            </div>
        `
  })
})()
/* 
    Um componente por padrão tem o scopo isolado, os dados inseridos no input não serão
    vistos pelos controlles, para que isso aconteça é necessário inserir o binding como '=',
    assim o scopo daquela propriedade será compartilhado, ou seja, tudo que alterar no component 
    será refletido no controlle, e tudo que alterar no controller será refletido no component.
*/