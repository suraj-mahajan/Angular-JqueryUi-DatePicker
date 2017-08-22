

Complete Demo
https://suraj-mahajan.github.io/AngularJqueryUiDatePicker/

<h3>Header</h3>

    <link href="jquery-ui.css" rel="stylesheet" />
    <link href="bootstrap.min.css" rel="stylesheet" />

    <script src="jquery.min.js"></script>
    <script src="jquery-ui-1.10.0.js"></script>
    <script data-require="angular.js@1.5.x" src="angular.min.js" data-semver="1.5.11"></script>

<h5>Default</h5>
<code>
                    &lt;input type="text" class="form-control" ng-model="fromDate" <u>jqdatepicker</u> /&gt;
                </code>
<h5>With Custom Date Format</h5>
<code>
                    &lt;input type="text" class="form-control" ng-model="fromDate2" jqdatepicker  <u>format="yy.dd.mm"</u> /&gt;
                </code>
                <h5>Change Year & Month</h5>
                <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker <u>changeyear="false"</u> <u>changemonth="false"</u> /&gt;
                </code>
                <h5>Min Date</h5>
                <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker <u>mindate="15d"</u>  /&gt;
                </code>
                <h5>Max Date</h5>
                <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker <u>maxdate="2d"</u>  /&gt;
                </code>
                <h5>Default Date</h5>
                 <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate5" jqdatepicker <u>defaultdate="+7m"</u>  /&gt;
                </code>
                <h5>First Day </h5>
                <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate" jqdatepicker <u>firstday="2"</u> /&gt;
                </code>
                <h5>gotoCurrent </h5>
                 <code>
                    &lt;input type="text" class="form-control" ng-model="fromDate6" jqdatepicker <u>gotoCurrent ="true"</u> /&gt;
                </code>
                
                
