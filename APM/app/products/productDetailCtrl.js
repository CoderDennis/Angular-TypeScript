var app;
(function (app) {
    var ProductDetail;
    (function (ProductDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "ProductDetail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        })();
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(ProductDetail = app.ProductDetail || (app.ProductDetail = {}));
})(app || (app = {}));
