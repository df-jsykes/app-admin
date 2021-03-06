var SwaggerCtrl = function ($rootScope, $timeout, $scope) {
    $("#swagger, #swagger iframe").css('display', 'none');
    $rootScope.loadSwagger = function (hash) {
        $("#swagger iframe").attr('src', '');
        var appendURL = "";
        if (hash) {
            appendURL = "/#!/" + hash;
        }
        $("#swagger").css('height', $(window).height()).css('width', '100%').show();

        $timeout(function () {
            $("#swagger, #swagger iframe").css('height', $(window).height()).css('width', '100%').attr("src", CurrentServer + '/public/admin/swagger/' + appendURL).show();

        }, 1000);

        $(window).resize(function () {
            $('#swagger').css('height', $(window).height()).css('width', '100%').css('width', '100%');
            $("#swagger iframe").css('height', $(window).height()).css('width', '100%');
        });
    }
};