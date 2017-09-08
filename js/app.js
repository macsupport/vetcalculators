
 /*!
*  © 2017 Mike Sozanski DVM, Dip ABVP
* vetcalculators.com
 */
  
var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    //material:true,
    allowDuplicateUrls:true
});



setdrug();
  //setspin();
   //MLK();
   MLK2();
 

 $$('.refresh-link.refresh-home').on('click', function () {
        var clicked = $$(this);
        if (clicked.hasClass('refreshing')) {
            return;
        }
        clicked.addClass('refreshing');
     $('.refresh-link.refresh-home').removeClass('refreshing');
    });
$(document).on('click touchstart','.resetme',function(){$('#inputKilograms,#inputPounds').val(' ');});

myApp.onPageInit('cri  emergency anesthetic fluids chocolate lab iris calories cat-canned cat-dry dog-dry dog-canned', function (page) {
  $('table.table').footable();
  $(document).on('keyup','#inputKilograms',function() {
     feedCups(); 
  MLK();
  setdrug();
  calcChocTotal();
calcChoc();  
});
  $(document).on('click touchstart','.resetme',function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  $('td span.chip').text(" ");
});

      var inputName = $('input.drug').attr("name"),
        drugValue =   $('input[name="'+inputName+'"]');       
    $(document).on('keyup', drugValue, function () {  feedCups();  MLK(); calcChocTotal(); calcChoc();  setdrug();
console.log(inputName)
    });
    //$(document).on('keyup', this, function () {  MLK();  calcChocTotal(); calcChoc();  setdrug();});
    
$(document).on('click touchstart','.printme',function() {
$( ".printme" ).each(function( index ) {
  var printLink = $(this).data('print');
     var gridElement = $('#'+ printLink);
      printableContent = '';
        var printableContent = $('<div>').append($(gridElement).clone()).html();
        var htmlContent =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<style>@page{size:A4}.container,.container-fluid{width:auto}body,html{font-size:12.5px!important}body{font-family:Roboto,Helvetica,Arial,sans-serif;line-height:12.5px;margin-bottom:5px!important}h4{font-size:1rem}input[type=checkbox]~label{display:none}td,th{white-space:nowrap}.input-group-addon2{margin-bottom:0;line-height:1.25;text-align:center;background-color:#fff;border:none;border-radius:.25rem}.hidden-print{display:none!important}.text-uppercase{text-transform:inherit!important;font-weight:700}.subtitle{margin-top:-2px;font-size:11px!important;line-height:11px!important;font-weight:400;font-style:italic;display:inline-block!important}input[type=checkbox][checked=checked]~label{display:inline}label.btn:not(.active){display:none}.md-form,.md-form .btn{margin-bottom:.2rem!important}.form-control{margin-top:.1rem!important;margin-bottom:.1rem!important}.bottomAdd,.footable-filtering-search{display:none}input[type=text]{font-size:12.5px;max-width:100%}.col-sm-12{width:100%;float:left}.col-sm-3{width:25%;float:left}td div.col-md-10{width:125px!important}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:0;padding-left:0}b.tablesaw-cell-label{display:none}.table-sm>tbody>tr>td,.table-sm>tbody>tr>th,.table-sm>tfoot>tr>td,.table-sm>tfoot>tr>th,.table-sm>thead>tr>td,.table-sm>thead>tr>th{padding:2px}.col-sm-12{padding-right:0;padding-left:0}.table{font-size:12px!important;margin-bottom:0}.input-group-btn-vertical{display:none}form-control{height:1.2rem!important}.label.label-default{background:#eee;color:#444;border:none;font-weight:400;font-size:13px;padding:2px 2px}.label.label-danger,.label.label-info,.label.label-primary,.label.label-success,.label.label-warning{background:#eee;border:none;color:#444;font-weight:400;font-size:13px;padding:2px 2px}.label-success{background:#eee}#adds,#ads,#adunit,#discussion-search,#google_ads_frame2,#printMe,#printMe7,#printMe8,#resetme2,#resetme3,#resetme4,#search,.hideme,.icon-print,.info,.input-group-btn-vertical,.masthead,.navbar-wrapper,.page-title,.species2,.tooltip,.ts-pager,blockquote,button.calc-dose,footer,hr,input.print{display:none!important}blockquote{padding:2px 0;margin:0 0 0;font-size:14px}.btn{display:inline-block;padding:4px 4px}.form-control2{display:block;height:24px;font-size:13px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:none;border-radius:none;-webkit-box-shadow:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:none;-o-transition:none;transition:none}.label{line-height:13px}.tooltip{visibility:hidden}#dosechart2,#drug,#main,#results{float:none}#main{padding-top:0}.well,.well-sm{margin-bottom:2px;padding:2px}input2{border:none!important;box-shadow:none!important;outline:0!important}#contact-print,#copyright-print,#logo-print{display:block}a[href^="http://"]:after{content:" (" attr(href) ") "}a{text-decoration:none}td{display: table-cell !important;} </style>' +
                '</head>' +
                '<body>'+
                printableContent +
                '</body>' +
                '</html>';

cordova.plugins.printer.print( htmlContent, 'Document.html', function () {
 
 }); 
  console.log(htmlContent);
});
});


 });

myApp.onPageInit('calories', function (page) {
 feedCups();
  $("#bcs").on("change",function() {
 feedCups();
  });
$("#catCalCups").on("keyup touchend",function() {
 feedCups();
  });
$("#dogCalCups").on("keyup touchend",function() {
 feedCups();
 });
$("#rerCat").on("change",function() {
 feedCups();
  });
$("#rerDog").on("change",function() {
 feedCups();
 });
 feedCups(); 
 }); 


myApp.onPageInit('emergency', function (page) {

 $$('.resetme').on('click', function() {
  var storedData = myApp.formDeleteData('emergency-form');
});
 
 
 
//document.addEventListener("deviceready", onDeviceReady, false);

// Cordova Device Ready.
function onDeviceReady() {

cordova.plugins.printer.isAvailable(
    //Check whether the printer is available or not.
    function (isAvailable) {
         //Enter the page location.
         //var page = location.href;
         //cordova.plugins.printer.print(page, 'Document.html', function () {
         //alert('printing finished or canceled')
//});
    }
);

}



$(document).on('click touchstart','.printmex',function() {
     var gridElement = $('#emergencyPage'),
            printableContent = '';
        var htmlStart =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<style>@page{size:A4}.container,.container-fluid{width:auto}body,html{font-size:12.5px!important}body{font-family:Roboto,Helvetica,Arial,sans-serif;line-height:12.5px;margin-bottom:5px!important}h4{font-size:1rem}input[type=checkbox]~label{display:none}td,th{white-space:nowrap}.input-group-addon2{margin-bottom:0;line-height:1.25;text-align:center;background-color:#fff;border:none;border-radius:.25rem}.hidden-print{display:none!important}.text-uppercase{text-transform:inherit!important;font-weight:700}.subtitle{margin-top:-2px;font-size:11px!important;line-height:11px!important;font-weight:400;font-style:italic;display:inline-block!important}input[type=checkbox][checked=checked]~label{display:inline}label.btn:not(.active){display:none}.md-form,.md-form .btn{margin-bottom:.2rem!important}.form-control{margin-top:.1rem!important;margin-bottom:.1rem!important}.bottomAdd,.footable-filtering-search{display:none}input[type=text]{font-size:12.5px;max-width:100%}.col-sm-12{width:100%;float:left}.col-sm-3{width:25%;float:left}td div.col-md-10{width:125px!important}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:0;padding-left:0}b.tablesaw-cell-label{display:none}.table-sm>tbody>tr>td,.table-sm>tbody>tr>th,.table-sm>tfoot>tr>td,.table-sm>tfoot>tr>th,.table-sm>thead>tr>td,.table-sm>thead>tr>th{padding:2px}.col-sm-12{padding-right:0;padding-left:0}.table{font-size:12px!important;margin-bottom:0}.input-group-btn-vertical{display:none}form-control{height:1.2rem!important}.label.label-default{background:#eee;color:#444;border:none;font-weight:400;font-size:13px;padding:2px 2px}.label.label-danger,.label.label-info,.label.label-primary,.label.label-success,.label.label-warning{background:#eee;border:none;color:#444;font-weight:400;font-size:13px;padding:2px 2px}.label-success{background:#eee}#adds,#ads,#adunit,#discussion-search,#google_ads_frame2,#printMe,#printMe7,#printMe8,#resetme2,#resetme3,#resetme4,#search,.hideme,.icon-print,.info,.input-group-btn-vertical,.masthead,.navbar-wrapper,.page-title,.species2,.tooltip,.ts-pager,blockquote,button.calc-dose,footer,hr,input.print{display:none!important}blockquote{padding:2px 0;margin:0 0 0;font-size:14px}.btn{display:inline-block;padding:4px 4px}.form-control2{display:block;height:24px;font-size:13px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:none;border-radius:none;-webkit-box-shadow:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:none;-o-transition:none;transition:none}.label{line-height:13px}.tooltip{visibility:hidden}#dosechart2,#drug,#main,#results{float:none}#main{padding-top:0}.well,.well-sm{margin-bottom:2px;padding:2px}input2{border:none!important;box-shadow:none!important;outline:0!important}#contact-print,#copyright-print,#logo-print{display:block}a[href^="http://"]:after{content:" (" attr(href) ") "}a{text-decoration:none}td{display: table-cell !important;} </style>' +
                '</head>' +
                '<body>';

        var htmlEnd =
                '</body>' +
                '</html>';

       var printableContent = gridElement.clone()[0].outerHTML;

cordova.plugins.printer.print( htmlStart + printableContent + htmlEnd, 'Document.html', function () {
 
 }); 
  return false;
  });   
       
      });

myApp.onPageInit('anesthetic', function (page) {
 $$('.resetme').on('click', function() {
  var storedData = myApp.formDeleteData('anesthetic-form');
});
  
   
      });


myApp.onPageInit('misc', function (page) {
  $(document).on('keyup','#inputKilograms',function() {
     feedCups(); 
  MLK();
  setdrug();
  calcChocTotal();
calcChoc();  
});
  $(document).on('click touchstart','.resetme',function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  //$('td span.chip').text(" ");
});

      var inputName = $('input.drug').attr("name"),
        drugValue =   $('input[name="'+inputName+'"]');       
    $(document).on('keyup', drugValue, function () {  feedCups();  MLK(); calcChocTotal(); calcChoc();  setdrug();
console.log(inputName)
    });
  $(document).on('click touchstart','.printme',function() {
    //$('#drug').printThis({     
      //importCSS: true,          
    // loadCSS: "css/print.css"
  //});
    window.print();
  return false;
  }); 
      });


myApp.onPageInit('fluids', function (page) {

 
 
      });



myApp.onPageInit('chocolate', function (page) {

 calcChocTotal();
calcChoc();  
 

  $(document).on('keyup','#ounce',function() {
  calcChocTotal();
calcChoc();  
});
   
$(document).on("change","#chocolate",function() {
calcChocTotal();
calcChoc();  

}); 
});



 $(document).ready(function() {

$('.footable-filtering-search').addClass('hidden-print');         
var today = new Date();
$('.time').html(today.getHours() + ':' + today.getMinutes());
$('.weekday').html(today.toDateString().substring(0, 3));
$('.date').html(today.toDateString());
});


 function setspin() { 
    $('input.drug').each(function(index) {
      var inputName = $(this).attr("name"),
        drugValue =   $('input[name="'+inputName+'"]');       
    $(document).on('keyup', drugValue, function () {  MLK(); calcChocTotal(); calcChoc();  setdrug();
console.log(inputName)
    });
    $(document).on('keyup', this, function () {  MLK();  calcChocTotal(); calcChoc();  setdrug();});
    
    }); 

  }
//$(function($){
 // $('table.table').footable({
 //   "filtering": {
 //     "delay": 800
 //   }
//  });
  
//});


function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputPounds = document.getElementById("inputPounds");
  var inputKilograms = document.getElementById("inputKilograms");
   var inputKilogramsVal =  parseFloat($(inputKilograms).val()); 
      var inputPoundsVal =  parseFloat($(inputPounds).val()); 
  if (source=="inputPounds") {
     inputKilograms.value=(valNum/2.2046).toFixed(2); 
      $("label[for='inputKilograms']").addClass('active');  
  }
  if (source=="inputKilograms") { 
     inputPounds.value=(valNum*2.2046).toFixed(2); 
     $("label[for='inputPounds']").addClass('active'); 
  }
  MLK();
  calcChocTotal();
calcChoc();  
    setdrug();
}

 
function temperatureConverter(source,valNum) {
valNum = parseFloat(valNum);
  var inputFahrenheit = document.getElementById("tempF");
  var inputCelsius = document.getElementById("tempC");
  if (source=="tempF") {
    inputCelsius.value=((valNum-32)/1.8).toFixed(2);
  }
  if (source=="tempC") {
    inputFahrenheit.value=((valNum*1.8)+32).toFixed(2);
  }  
}

function ugmgConverter(source,valNum) {
valNum = parseFloat(valNum);
  var inputMg = document.getElementById("mg");
  var inputUg = document.getElementById("ug");
  if (source=="mg") {
    inputUg.value=((valNum*1000)).toFixed(2);
  }
  if (source=="ug") {
    inputMg.value=((valNum/1000)).toFixed(2);
  }  
}
  
$(document).on('keyup touchend','input#themg',function() {
  setdrug();
});

$(document).on("change","select.pickDose", function() {
                 setdrug();
 });


function setdrug() {
   var kg =  parseFloat($('#inputKilograms').val());  
    $('input.fluid').each(function(index) {
    var drug = parseFloat($(this).val()).toFixed(3);
     var drugml = $(this).attr('data-ml'); 
       var drugconc = parseFloat($(this).attr('data-conc'));
        var appendDose =  $(this).attr('data-appendDose');
      var appendVol =  $(this).attr('data-appendVol');
      var multiplier= parseFloat($(this).attr('data-multiply'));
   var fluids = parseFloat((((drugconc * kg)/24) + 70/24));
   var lrs = (fluids * multiplier).toFixed(2);
    if (!isNaN(kg)) {
      $(drugml).text(parseFloat(lrs).toFixed(2)).append(appendVol);
    }
  else{
    $(drugml).text(' ');
  }         
       });
  $('input.shock').each(function(index) {
    var drug = parseFloat($(this).val()).toFixed(3);
     var drugml = $(this).attr('data-ml'); 
       var drugconc = parseFloat($(this).attr('data-conc'));
      var appendDose =  $(this).attr('data-appendDose');
      var appendVol =  $(this).attr('data-appendVol');
      var multiplier= parseFloat($(this).attr('data-multiply'));
   var fluids = parseFloat((drugconc * kg));
   var lrs = (fluids * multiplier).toFixed(2);
    if (!isNaN(kg)) {
      $(drugml).text(parseFloat(fluids).toFixed(2)).append(appendVol);
    }
  else{
    $(drugml).text(' ');
  }   
      
       });  
    $('input.drug').each(function(index) {
      var drug = parseFloat($(this).val()).toFixed(3) || 0;
      var drugmg = $(this).attr('data-mg');
      var drugml = $(this).attr('data-ml');
      var drugconc = parseFloat($(this).attr('data-conc'));
      var appendDose =  $(this).attr('data-appendDose');
      var appendVol =  $(this).attr('data-appendVol');
      if ($('#naloxDog').length) {
     var naloxoneT = parseFloat(($('#naloxDog.chip-label').html().replace(' ml', ''))*3).toFixed(2);
     var lidoT = parseFloat(($('#lidoDog.chip-label').html().replace(' ml', ''))*3).toFixed(2);
    var atroT = parseFloat(($('#atroDog.chip-label').html().replace(' ml', ''))*3).toFixed(2);
    var epiT = parseFloat(($('#epiDogHi.chip-label').html().replace(' ml', ''))*3).toFixed(2);
   var vasoT = parseFloat(($('#vassopressinDog.chip-label').html().replace(' ml', ''))*3).toFixed(2);
  }
    if ($('#dexdomitorMl').length) {
    var dex = parseFloat($('#dexdomitorMl.chip-label').html().replace(' ml', '')).toFixed(2);
}if ($('#dexdomitorMagicMl').length) {
    var dex2 = parseFloat($('#dexdomitorMagicMl.chip-label').html().replace(' ml', '')).toFixed(2);
     }if ($('#dttMl').length) {
    var dtt = parseFloat($('#dttMl.label').html().replace(' ml', '')).toFixed(2);
     }if ($('#ketamineMagicMl').length) {
    var ket2 = parseFloat($('#ketamineMagicMl.chip-label').html().replace(' ml', '')).toFixed(2);
    }if ($('#butorphanolMagicMl').length) {
    var butorph2 = parseFloat($('#butorphanolMagicMl.chip-label').html().replace(' ml', '')).toFixed(2);
    }
    var bsaDogs = parseFloat((Math.pow((kg/2.2), .67) * 10.1)/100).toFixed(3);
    var bsaCats = parseFloat((Math.pow((kg/2.2), .67) * 10.4)/100).toFixed(3);
   
    //if($('element')[0] || $('element')[0])
//{
// do something
//}
    var concDex = parseFloat($('#concDex').val()*1000);
    var concDexMagic = parseFloat($('#concDexMagic').val()*1000);
    var concBSR = parseFloat($('#concBSR').val());
    var concF1 = parseFloat($('#concF1').val());
    var enterConc = parseFloat($('#themg').val());
     var totalMagic = parseFloat(dex2) + parseFloat(ket2) + parseFloat(butorph2);
   var totalMagic = totalMagic.toFixed(2);
     
if (!isNaN(kg)) {
    parseFloat($('input[name="dexdomitor"]').attr('data-conc', concDex ));
    parseFloat($('input[name="dexdomitorMagic"]').attr('data-conc', concDexMagic ));
    parseFloat($('input[name="buprenorphinesr"]').attr('data-conc', concBSR ));
    parseFloat($('input[name="buprenorphine"]').attr('data-conc', concF1 ));
    parseFloat($('input[name="drugDose"]').attr('data-conc', enterConc ));
    $(drugml).text(parseFloat((kg * drug) / drugconc).toFixed(2)).append(appendVol);
    $(drugmg).text(parseFloat((kg * drug)).toFixed(2)).append(appendDose);
    $('#antiDose.label').text(dex).append(' ml');
    $('#atroT.chip-label').text(atroT).append(' ml');
    $('#epiT.chip-label').text(epiT).append(' ml');
    $('#lidoT.chip-label').text(lidoT).append(' ml');
    $('#vasoT.chip-label').text(vasoT).append(' ml');
    $('#naloxoneT.chip-label').text(naloxoneT).append(' ml');
    $('#antisedanDTTMl.chip-label').text(dex).append(' ml');
    $('#antisedanMagicMl.chip-label').text(dex2).append(' ml');
    $('#totalMagic.chip-label').text(totalMagic).append(' ml');
    $('#bsaDog').val(bsaDogs);
    $('#bsaCat').val(bsaCats);
    
//console.log(concDex, concBSR ,concF1)
}
    
  else{
    $(drugmg, drugml).text(' ');
  }   
    });
  
   $( 'select.pickDose' ).each( function( index, element ){
     var selectDose = parseFloat($(this).val());
      var butorphenol =  $('.butorphenol').text().replace(' ml', '');
   var ketamine =  $('.ketamine').text().replace(' ml', '');
   var dexdomitor =  $('.dexdomitor').text().replace(' ml', '');
     
   });
  }
 


 function calcChocTotal() {
  var chocvalue = parseFloat($('#chocolate option:selected').val());
  var chocvalue2 = parseFloat($('#chocolate option:selected').attr("data-value"));
  var kg =  parseFloat($('#inputKilograms').val());
  var ounce  = parseFloat($('#ounce').val());
  var theo =  parseFloat((ounce/kg) * chocvalue ).toFixed(2);
  var caff =  parseFloat(((ounce/kg) * chocvalue2)).toFixed(2);
  var total = parseFloat(theo) + parseFloat(caff);
  var total = parseFloat(total).toFixed(2);
  $('#toxic').text(theo).append(' mg Theobromine');
  $('span.plus').text(' + ')
    $('span.equal').text(' = ')
  $('#toxic2').text(caff).append(' mg Caffeine');
  $('#toxicTotal').text(total).append(' mg Total Methylxanthines');
  $('#toxicTotal2').text(total);
 }
   
function calcChoc() {
   var kg =  parseFloat($('#inputKilograms').val());
var quota = parseFloat($('#toxicTotal2').text());
   if (quota > 200 ) {
    $('.red.info').text('Extreme Danger - Death');
     $('span.red, span.red2').fadeIn();
     $('span.green,span.yellow').fadeOut('fast');
   } 
    else if (quota > 100 ) {       
    $('.red.info').text('Danger');
     $('span.red, span.red2').fadeIn();
     $('span.green,span.yellow').fadeOut('fast');
    }
  else if (quota > 40 && quota <= 100 ) {      
    $('.progress-bar').text('Danger');
     $('span.red').fadeIn();
     $('span.red2,span.green,span.yellow').fadeOut('fast');     
    } 
    else if (quota > 20 && quota <= 40){
    $('.progress-bar').text('Warning');
    $('span.yellow').fadeIn();
    $('span.red,span.red2,span.green').fadeOut('fast');
    }
    else if (quota >= 0.0001 && quota <= 20) {       
    $('.progress-bar').text('Safe');
    $('span.green').fadeIn();
    $('span.red,span.yellow,span.red2').fadeOut('fast');
    }
    else if (quota = isNaN() ) { 
 
    $('.progress-bar').text('Enter Weight');
    $('span.green').fadeOut('fast');
    $('span.red,span.yellow,span.red2').fadeOut('fast');
    }     
 }
 $(document).on("change","#chocolate",function() {
calcChocTotal();
calcChoc();  
});

function feedCups() {
  var kg =  parseFloat($('#inputKilograms').val());
   var lb =  parseFloat($('#inputPounds').val());
  var cups1 = parseFloat($('#caloriesCats').val());
  var totalCups1 = parseFloat($('#catCalCups').val());
  var resultC = (cups1/totalCups1).toFixed(1);
var cups = parseFloat($('#caloriesDogs').val());
  var totalCups = parseFloat($('#dogCalCups').val());
  var resultD = (parseFloat(cups)/parseFloat(totalCups)).toFixed(1);
  var calDogs = Math.pow(kg, 0.75);
  var RERDogs = 70 * parseFloat(calDogs);


var bcs  = parseFloat($('#bcs').val());
var idealWeightKG = parseFloat((kg * (1 - bcs))).toFixed(1);
var idealWeightLB = parseFloat((kg * (1 - bcs))*2.2046).toFixed(1);
var idealCalc = Math.pow(idealWeightKG, 0.75);
var idealKcalDogsTotal = (70 * parseFloat(idealCalc)).toFixed();
var dogRERMultiplier  = parseFloat($('#rerDog').val());
var RERDog = parseFloat(dogRERMultiplier * idealKcalDogsTotal).toFixed();


var idealKcalDogsTotalLoss = (0.8 * parseFloat(idealKcalCatsTotal)).toFixed();





var bcs2  = parseFloat($('#bcs').val());
var idealWeightKG2 = parseFloat((kg * (1 - bcs2))).toFixed(1);
var idealWeightLB2 = parseFloat((kg * (1 - bcs2))*2.2046).toFixed(1);
var idealCalc2 = Math.pow(idealWeightKG2, 0.75);
var idealKcalCatsTotal = (70 * parseFloat(idealCalc2)).toFixed();
var catRERMultiplier  = parseFloat($('#rerCat').val());
var RERCat = parseFloat(catRERMultiplier * idealKcalCatsTotal).toFixed();



var idealKcalCatsTotalLoss = (0.8 * parseFloat(idealKcalCatsTotal)).toFixed();






var dogMultiplyer  = parseFloat($('#rerDog').val());
var caloriesDogs = parseFloat(dogMultiplyer) * parseFloat(RERDogs);
var caloriesDogs = caloriesDogs.toFixed(2);
var calCats = Math.pow(kg, 0.75);
var RERCats = 70 * parseFloat(calCats)
var catMultiplyer  = parseFloat($('#rerCat').val());
var caloriesCats = parseFloat(catMultiplyer) * parseFloat(RERCats);
var caloriesCats = caloriesCats.toFixed(2);
//$('#dogCups').val(cups/totalCups).number( true, 1 );
if (!isNaN(resultD)) { 
$('.dogCups').html('<span>Feed </span><span class="chip bg-blue"><span class="chip-label label-default"> ' + resultD + ' </span></span> <span> Cups or Cans per Day</span>');
}
if (!isNaN(resultC)) { 
$('.catCups').html('<span>Feed </span><span class="chip bg-blue"><span class="chip-label label-default"> ' + resultC + ' </span></span> <span> Cups or Cans per Day</span>');
}
$('#caloriesCats').val(parseFloat(RERCat));
$('#caloriesDogs').val(parseFloat(RERDog));
$('#idealWeightKGDogs').val(parseFloat(idealWeightKG));
$('#idealWeightLBDogs').val(parseFloat(idealWeightLB));
$('#idealWeightKGCats').val(parseFloat(idealWeightKG2));
$('#idealWeightLBCats').val(parseFloat(idealWeightLB2));


}



$("#bcs").on("change",function() {
 feedCups();
  });
$("#catCalCups").on("keyup touchend",function() {
 feedCups();
  });
$("#dogCalCups").on("keyup touchend",function() {
 feedCups();
 });
$("#rerCat").on("change",function() {
 feedCups();
  });
$("#rerDog").on("change",function() {
 feedCups();
 });


function MLK() {
  var kg =  parseFloat($('#inputKilograms').val());
var fluidVol = parseFloat($('#fluidVol').val());
var fluidVol1 = parseFloat($('#fluidVol1').val());
var fluidVol2 = parseFloat($('#fluidVol2').val());
var $mlkdose = $("#mlkdose");
var dopamineV = parseFloat($('input[name="dopamineDog"]').val());
var dobutamineV2 = parseFloat($('input[name="dobutamineCat"]').val());
var dobutamineV = parseFloat($('input[name="dobutamineDog"]').val());

var morphV = parseFloat($('input[name="morphV"]').val());
var hydroV = parseFloat($('input[name="hydroV"]').val());
var buprenV = parseFloat($('input[name="buprenV"]').val());
var butorphV = parseFloat($('input[name="butorphV"]').val());
var fentV = parseFloat($('input[name="fentV"]').val());
var mlkghr = parseFloat($('#mlkghr').val());

var lidoV = parseFloat($('input[name="lidoV"]').val());
var ketV = parseFloat($('input[name="ketV"]').val());
var lidoV2 = parseFloat($('input[name="lidoV2"]').val());
var ketV2 = parseFloat($('input[name="ketV2"]').val());
var lidoV3 = parseFloat($('input[name="lidoV3"]').val());
var ketV3 = parseFloat($('input[name="ketV3"]').val());
var lidoV4 = parseFloat($('input[name="lidoV4"]').val());
var lidoV5 = parseFloat($('input[name="lidoV4"]').val());
var ketV4 = parseFloat($('input[name="ketV4"]').val());
var lidoV5 = parseFloat($('input[name="lidoV5"]').val());
var ketV5 = parseFloat($('input[name="ketV5"]').val());
var mlkfluids = parseFloat($('.mlkfluids').val());
var hydrofluids = parseFloat($('.hydrofluids').val());
var buprenfluids = parseFloat($('.buprenfluids').val());
var butorphfluids = parseFloat($('.butorphfluids').val());
var fentfluids = parseFloat($('.fentfluids').val());
var mlkLido = parseFloat($('.mlkLido').val());
var mlkKet = parseFloat($('.mlkKet').val());
var mlkMorph = parseFloat($('#mlkMorph').val());
var mlkHydro = parseFloat($('#mlkHydro').val());
var mlkBuprren = parseFloat($('#mlkBupren').val());
var mlkButorph = parseFloat($('#mlkBupren').val());
var mlkFent = parseFloat($('#mlkFent').val());

 if (!isNaN(kg)) { // the input is a number
        $mlkdose.text(kg * 0.2);

        $('#dopamineDogVol').text((parseFloat(((dopamineV * fluidVol)/40)).toFixed(2))).prepend('Add ').append(' mls'); 
        $('.dopaminefluids, .dobutaminefluids').text(parseFloat((kg)).toFixed(2)).prepend('@').append(' ml\/hr');
        $('#dobutamineDogVol').text((parseFloat(((dobutamineV * fluidVol1)/12.5)).toFixed(2))).prepend('Add: ').append(' mls'); 
        $('#dobutamineCatVol').text((parseFloat(((dobutamineV2 * fluidVol2)/12.5)).toFixed(2))).prepend('Add: ').append(' mls');

$('.mlkfluids, .butorphfluids, .hydrofluids, .buprenfluids, .fentfluids').text(parseFloat((kg * mlkghr)).toFixed(2)).append(' ml\/hr');  

$('#mlkMorph').text((parseFloat(((morphV * fluidVol)/15)/mlkghr).toFixed(2))).append(' ml');
$('.mlkKet').text((parseFloat(((ketV * fluidVol)/100)/mlkghr).toFixed(2))).append(' ml');
$('.mlkLido').text((parseFloat(((lidoV * fluidVol)/20)/mlkghr).toFixed(2))).append(' ml');
var mlk1 = parseFloat($('#mlkMorph').text()).toFixed(2);
var mlk2 = parseFloat($('#mlkLido').text()).toFixed(2);
var mlk3 = parseFloat($('#mlkKet').text()).toFixed(2);
var mlktotal = ((parseFloat(mlk1)) + (parseFloat(mlk2))+ (parseFloat(mlk3))).toFixed(2);
$('#mlktotal').text(parseFloat(mlktotal)).append(' mls');

$('#mlkHydro').text((parseFloat(((hydroV * fluidVol)/2)/mlkghr).toFixed(2))).append(' ml');
$('.mlkKet2').text((parseFloat(((ketV2 * fluidVol)/100)/mlkghr).toFixed(2))).append(' ml');
$('.mlkLido2').text((parseFloat(((lidoV2 * fluidVol)/20)/mlkghr).toFixed(2))).append(' ml');
var hlk1 = parseFloat($('#mlkHydro').text()).toFixed(2);
var hlk2 = parseFloat($('#mlkLido2').text()).toFixed(2);
var hlk3 = parseFloat($('#mlkKet2').text()).toFixed(2);
var hlktotal = ((parseFloat(hlk1)) + (parseFloat(hlk2))+ (parseFloat(hlk3))).toFixed(2);
$('#hlktotal').text(parseFloat(hlktotal)).append(' mls');

$('#mlkBupren').text((parseFloat(((buprenV * fluidVol)/2)/mlkghr).toFixed(3))).append(' ml');
$('.mlkKet3').text((parseFloat(((ketV3 * fluidVol)/100)/mlkghr).toFixed(2))).append(' ml');
$('.mlkLido3').text((parseFloat(((lidoV3 * fluidVol)/20)/mlkghr).toFixed(2))).append(' ml');
var buplk1 = parseFloat($('#mlkBupren').text()).toFixed(3);
var buplk2 = parseFloat($('#mlkLido3').text()).toFixed(2);
var buplk3 = parseFloat($('#mlkKet3').text()).toFixed(2);
var buplktotal = ((parseFloat(buplk1)) + (parseFloat(buplk2))+ (parseFloat(buplk3))).toFixed(2);
$('#buptotal').text(parseFloat(buplktotal)).append(' mls');

$('#mlkButorph').text((parseFloat(((butorphV * fluidVol)/2)/mlkghr).toFixed(2))).append(' ml');
$('.mlkKet4').text((parseFloat(((ketV4 * fluidVol)/100)/mlkghr).toFixed(2))).append(' ml');
$('.mlkLido4').text((parseFloat(((lidoV4 * fluidVol)/20)/mlkghr).toFixed(2))).append(' ml');
var butlk1 = parseFloat($('#mlkButorph').text()).toFixed(2);
var butlk2 = parseFloat($('#mlkLido4').text()).toFixed(2);
var butlk3 = parseFloat($('#mlkKet4').text()).toFixed(2);
var butlktotal = ((parseFloat(butlk1)) + (parseFloat(butlk2))+ (parseFloat(butlk3))).toFixed(2);
$('#buttotal').text(parseFloat(butlktotal)).append(' mls');

$('#mlkFent').text((parseFloat(((fentV * fluidVol)/0.05)/mlkghr).toFixed(3))).append(' ml');
$('.mlkKet5').text((parseFloat(((ketV5 * fluidVol)/100)/mlkghr).toFixed(2))).append(' ml');
$('.mlkLido5').text((parseFloat(((lidoV5 * fluidVol)/20)/mlkghr).toFixed(2))).append(' ml');
var fentlk1 = parseFloat($('#mlkFent').text()).toFixed(3);
var fentlk2 = parseFloat($('#mlkLido5').text()).toFixed(2);
var fentlk3 = parseFloat($('#mlkKet5').text()).toFixed(2);
var fentlktotal = ((parseFloat(fentlk1)) + (parseFloat(fentlk2))+ (parseFloat(fentlk3))).toFixed(2);
$('#fenttotal').text(parseFloat(fentlktotal)).append(' mls');

    } else { // the input wasn't a number
$('#mlkMorph, #mlkHydro').text(" ");
$('.mlkKet').text(" ");
$('.mlkLido').text(" ");
$mlkdose.text("not a number"); 
    }  
}
MLK();
function MLK2() {
$(document).on("change","#fluidVol, #fluidVol1,#fluidVol2, #fluidVol3, #fluidVol4, .morphV,.hydroV,.buprenV,.butorphV, #ketV, #mlkghr,  #mlkghr2, #mlkghr3, #mlkghr4,input[name='lidoV'], input[name='ketV'],input[name='lidoV2'], input[name='ketV2'],input[name='lidoV3'], input[name='ketV3'],input[name='lidoV4'], input[name='ketV4']", function() {
    var morphV = parseFloat($('input[name="morphV"]').val());
    var hydroV = parseFloat($('input[name="hydroV"]').val());
    var buprenV = parseFloat($('input[name="buprenV"]').val());
    var butorphV = parseFloat($('input[name="butorphV"]').val());
    var mlkghr = parseFloat($('#mlkghr').val());
      var mlkghr2 = parseFloat($('#mlkghr2').val());
      var mlkghr3 = parseFloat($('#mlkghr3').val());
      var mlkghr4 = parseFloat($('#mlkghr4').val());
    var lidoV = parseFloat($('input[name="lidoV"]').val());
var ketV = parseFloat($('input[name="ketV"]').val());
var lidoV2 = parseFloat($('input[name="lidoV2"]').val());
var ketV2 = parseFloat($('input[name="ketV2"]').val());
var lidoV3 = parseFloat($('input[name="lidoV3"]').val());
var ketV3 = parseFloat($('input[name="ketV3"]').val());
var lidoV4 = parseFloat($('input[name="lidoV4"]').val());
var ketV4 = parseFloat($('input[name="ketV4"]').val());
  var fluidVol = parseFloat($('#fluidVol').val());
  var fluidVol2 = parseFloat($('#fluidVol2').val());
  var fluidVol3 = parseFloat($('#fluidVol3').val());
  var fluidVol4 = parseFloat($('#fluidVol4').val());
var kg =  parseFloat($('#inputKilograms').val());
  $('.mlkfluids').text((kg * mlkghr)).append(' ml\/hr');  
  $('.hydrofluids').text((kg * mlkghr2)).append(' ml\/hr');
     $('.buprenfluids').text((kg * mlkghr3)).append(' ml\/hr'); 
      $('.butorphfluids').text((kg * mlkghr4)).append(' ml\/hr'); 

$('#mlkMorph').text(((kg * morphV)/15) * (fluidVol/10) ).append(' ml');
$('.mlkKet').text(((kg * ketV)/100) * (fluidVol/10)).append(' ml');
$('.mlkLido').text(((kg * lidoV)/20) * (fluidVol/10)).append(' ml');

$('#mlkHydro').text(((kg * hydroV)/2) * (fluidVol2/10) ).append(' ml');
$('.mlkKet2').text(((kg * ketV2)/100) * (fluidVol2/10)).append(' ml');
$('.mlkLido2').text(((kg * lidoV2)/20) * (fluidVol2/10)).append(' ml');

$('#mlkBupren').text(((kg * buprenV)/2) * (fluidVol3/10) ).append(' ml');
$('.mlkKet3').text(((kg * ketV3)/100) * (fluidVol3/10)).append(' ml');
$('.mlkLido3').text(((kg * lidoV3)/20) * (fluidVol3/10)).append(' ml');

$('#mlkButorph').text(((kg * butorphV)/2) * (fluidVol4/10) ).append(' ml');
$('.mlkKet4').text(((kg * ketV4)/100) * (fluidVol4/10)).append(' ml');
$('.mlkLido4').text(((kg * lidoV4)/20) * (fluidVol4/10)).append(' ml');
setdrug();
MLK();
});
}
