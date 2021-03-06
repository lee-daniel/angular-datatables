/**
 * @author l.lin
 * @created 17/07/14 17:04
 */
(function() {
    'use strict';
    angular.module('datatablesSampleApp').controller('withAjaxCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtOptions = DTOptionsBuilder.fromSource('data.json')
            .withPaginationType('full_numbers');
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
        ];
    });
})();