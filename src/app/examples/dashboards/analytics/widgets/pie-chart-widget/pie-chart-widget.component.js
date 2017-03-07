(function() {
    'use strict';
    angular
        .module('app.examples.dashboards')
        .component('pieChartWidget', {
            templateUrl: 'app/examples/dashboards/analytics/widgets/pie-chart-widget/pie-chart-widget.tmpl.html',
            controllerAs: 'vm',
            controller: PieChartWidgetController,
            bindings: {
                data: '<',
                options: '<'
            }
        });

    /* @ngInject */
    function PieChartWidgetController($timeout) {
        var vm = this;

        $timeout(function() {
            vm.api.refreshWithTimeout(200);
        }, 0);
    }
})();
