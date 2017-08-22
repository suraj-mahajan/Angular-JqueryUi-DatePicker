myApp.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            var _options = {};
            _options.dateFormat = 'mm/dd/yy';
            _options.changeMonth = true;
            _options.changeYear = true;

            var _minDate = attrs["mindate"];

            if (_minDate != "" && _minDate != undefined) {
                _options.minDate=attrs["mindate"];
            }
          
            var _mxDate = attrs["maxdate"];

            if (_mxDate != "" && _mxDate != undefined) {
                _options.maxDate = attrs["maxdate"];
            }
            

            var _format = attrs["format"];

            if (_format != "" && _format != undefined) {
                _options.dateFormat = attrs["format"];
            }
            

            //-------------------------------
            var _changeyear = attrs["changeyear"];

            if (_changeyear != "" && _changeyear != undefined) {
                var isTrueSet = (_changeyear === 'true');
                _options.changeYear = isTrueSet;
            }

            //-------------------------------
            var _changemonth = attrs["changemonth"];

            if (_changemonth != "" && _changemonth != undefined)
            {
                var isTrueSet = (_changemonth === 'true');
                _options.changeMonth = isTrueSet;
            }

            //-------------------------------
            var _defaultDate = attrs["defaultdate"];

            if (_defaultDate != "" && _defaultDate != undefined) {
                _options.defaultDate = _defaultDate;
            }
            //-------------------------------

            var _firstDay = attrs["firstday"];

            if (_firstDay != "" && _firstDay != undefined) {
                _options.firstDay = _firstDay;
            }

         

            //-------------------------------
            var _gotoCurrent = attrs["gotocurrent"];
            if (_gotoCurrent != "" && _gotoCurrent != undefined) {
                var isTrueSet = (_gotoCurrent === 'true');
                _options.gotoCurrent = isTrueSet;
            }

            var hidenavebuttons = attrs["hidenavebuttons"];
            if (hidenavebuttons != "" && hidenavebuttons != undefined) {
                var isTrueSet = (hidenavebuttons === 'true');
                _options.hideIfNoPrevNext = isTrueSet;
            }


            element.datepicker(_options);

            element.bind('blur keyup change', function () {
                var model = attrs.ngModel;
                scope[model] = element.val();
            });
        }
    };
});
