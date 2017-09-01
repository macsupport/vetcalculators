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

        page += '<style type="text/css">html, body {width: 100%; height: 100%; margin: 0px; padding: 0px;}@page{size:A4}td{display:table-cell; font-size:13px;}</style>';
       

        cordova.plugins.printer.print(page, options, function (res) {
            alert(res ? 'Done' : 'Canceled');
        });
    }
};

if (window.hasOwnProperty('Windows')) {
    alert = function (msg) { new Windows.UI.Popups.MessageDialog(msg).showAsync(); };
}

app.initialize();
