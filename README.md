

Complete Demo
https://suraj-mahajan.github.io/AngularJqueryUiDatePicker/

<h3>Header</h3>

    <link href="jquery-ui.css" rel="stylesheet" />
    <link href="bootstrap.min.css" rel="stylesheet" />

    <script src="jquery.min.js"></script>
    <script src="jquery-ui-1.10.0.js"></script>
    <script data-require="angular.js@1.5.x" src="angular.min.js" data-semver="1.5.11"></script>

<h5>Default</h5>
&lt;input type="text" class="form-control" ng-model="fromDate" jqdatepicker /&gt;
               
<h5>With Custom Date Format</h5>
&lt;input type="text" class="form-control" ng-model="fromDate2" jqdatepicker  format="yy.dd.mm" /&gt;
 
<h5>Change Year & Month</h5>
&lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker changeyear="false" changemonth="false" /&gt;
 
<h5>Min Date</h5>
&lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker mindate="15d"  /&gt;

<h5>Max Date</h5>
&lt;input type="text" class="form-control" ng-model="fromDate1" jqdatepicker maxdate="2d"  /&gt;

<h5>Default Date</h5>
&lt;input type="text" class="form-control" ng-model="fromDate5" jqdatepicker defaultdate="+7m"  /&gt;

<h5>First Day </h5>
&lt;input type="text" class="form-control" ng-model="fromDate" jqdatepicker firstday="2" /&gt;

<h5>gotoCurrent </h5>
&lt;input type="text" class="form-control" ng-model="fromDate6" jqdatepicker gotoCurrent ="true" /&gt;
                
                
