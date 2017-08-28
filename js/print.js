/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.getElementById('check').onclick = app.check;
        document.getElementById('pick').onclick = app.pick;
        document.getElementById('print').onclick = app.print;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Check for available printer or support in general
    check: function () {
        cordova.plugins.printer.isAvailable(function (avail, count) {
            alert(avail ? 'Found ' + count + ' services' : 'No');
        });
    },
    // Pick a printer for future usage
    pick: function () {
        cordova.plugins.printer.pick(function (url) {
            alert(url ? url : 'Canceled');
            app.printerId = url;
        });
    },
    // Picked printer
    printerId: null,
    // Print sample content
    print: function () {
        var options = { name: 'awesome', printerId: app.printerId },
            page    = '';

        page += '<style type="text/css">html, body {width: 100%; height: 100%; margin: 0px; padding: 0px;}@page{size:A4}.container,.container-fluid{width:auto}body,html{font-size:12.5px!important}body{font-family:Roboto,Helvetica,Arial,sans-serif;line-height:12.5px;margin-bottom:5px!important}h4{font-size:1rem}input[type=checkbox]~label{display:none}td,th{white-space:nowrap}.input-group-addon2{margin-bottom:0;line-height:1.25;text-align:center;background-color:#fff;border:none;border-radius:.25rem}.hidden-print{display:none!important}.text-uppercase{text-transform:inherit!important;font-weight:700}.subtitle{margin-top:-2px;font-size:11px!important;line-height:11px!important;font-weight:400;font-style:italic;display:inline-block!important}input[type=checkbox][checked=checked]~label{display:inline}label.btn:not(.active){display:none}.md-form,.md-form .btn{margin-bottom:.2rem!important}.form-control{margin-top:.1rem!important;margin-bottom:.1rem!important}.bottomAdd,.footable-filtering-search{display:none}input[type=text]{font-size:12.5px;max-width:100%}.col-sm-12{width:100%;float:left}.col-sm-3{width:25%;float:left}td div.col-md-10{width:125px!important}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:0;padding-left:0}b.tablesaw-cell-label{display:none}.table-sm>tbody>tr>td,.table-sm>tbody>tr>th,.table-sm>tfoot>tr>td,.table-sm>tfoot>tr>th,.table-sm>thead>tr>td,.table-sm>thead>tr>th{padding:2px}.col-sm-12{padding-right:0;padding-left:0}.table{font-size:12px!important;margin-bottom:0}.input-group-btn-vertical{display:none}form-control{height:1.2rem!important}.label.label-default{background:#eee;color:#444;border:none;font-weight:400;font-size:13px;padding:2px 2px}.label.label-danger,.label.label-info,.label.label-primary,.label.label-success,.label.label-warning{background:#eee;border:none;color:#444;font-weight:400;font-size:13px;padding:2px 2px}.label-success{background:#eee}#adds,#ads,#adunit,#discussion-search,#google_ads_frame2,#printMe,#printMe7,#printMe8,#resetme2,#resetme3,#resetme4,#search,.hideme,.icon-print,.info,.input-group-btn-vertical,.masthead,.navbar-wrapper,.page-title,.species2,.tooltip,.ts-pager,blockquote,button.calc-dose,footer,hr,input.print{display:none!important}blockquote{padding:2px 0;margin:0 0 0;font-size:14px}.btn{display:inline-block;padding:4px 4px}.form-control2{display:block;height:24px;font-size:13px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:none;border-radius:none;-webkit-box-shadow:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:none;-o-transition:none;transition:none}.label{line-height:13px}.tooltip{visibility:hidden}#dosechart2,#drug,#main,#results{float:none}#main{padding-top:0}.well,.well-sm{margin-bottom:2px;padding:2px}input2{border:none!important;box-shadow:none!important;outline:0!important}#contact-print,#copyright-print,#logo-print{display:block}a[href^="http://"]:after{content:" (" attr(href) ") "}a{text-decoration:none}</style>';
       

        cordova.plugins.printer.print(page, options, function (res) {
            alert(res ? 'Done' : 'Canceled');
        });
    }
};

if (window.hasOwnProperty('Windows')) {
    alert = function (msg) { new Windows.UI.Popups.MessageDialog(msg).showAsync(); };
}

app.initialize();
