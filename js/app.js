
var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    //material:true,
    allowDuplicateUrls:true
});


myApp.onPageInit('cri', function (page) {
  $('table').footable();
  MLK2();
   setdrug();
  setspin();
   MLK();
  $(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  setdrug();
});
 });

myApp.onPageInit('misc', function (page) {
  $('table').footable();
  MLK2();
   setdrug();
  setspin();
   MLK();
  $(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  setdrug();
});
 }); 




myApp.onPageInit('emergency', function (page) {
$('table').footable();
  setdrug();
  setspin();
   MLK();
    MLK2();
   $('.printme').on('click touchstart',function() {
    $('#dosechart3').printThis();
     return false;
  });
    $('.printme2').on('click touchstart',function() {
    $('#dosechart2').printThis();
  return false;
  });   
     
$(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  setdrug();
});
      });
myApp.onPageInit('anesthetic', function (page) {
  $('table').footable();
  setdrug();
       setspin();
     MLK();
       MLK2();
     $('.resetme').on("click touchstart",function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  $('td span.chip').text(" ");

});
  $('.printme').on('click touchstart',function() {
    $('#dosechart').printThis({     
      importCSS: true
  });
    //window.print();
  return false;
  });   
      $(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  setdrug();
});


      });
myApp.onPageInit('misc', function (page) {
  $('table').footable();
  $('.resetme').on("click touchstart",function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  $('td span.chip').text(" ");

});
  $('.printme').on('click touchstart',function() {
    //$('#drug').printThis({     
      //importCSS: true,          
    // loadCSS: "css/print.css"
  //});
    window.print();
  return false;
  }); 
  setdrug();
  setspin();
  $(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  setdrug();
});
      });


myApp.onPageInit('fluids', function (page) {

  $('table').footable();
  setdrug();
       setspin();
     MLK();
       MLK2();
  $('.resetme').on("click touchstart",function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  $('td span.chip').text(" ");

});
  $('.printme').on('click touchstart',function() {
    //$('#drug').printThis({     
      //importCSS: true,          
    // loadCSS: "css/print.css"
  //});
    window.print();
  return false;
  }); 
 
  $(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  feedCups();
  setdrug();
  calcChocTotal();
calcChoc();  
});
      });


myApp.onPageInit('chocolate', function (page) {
  $('.resetme').on("click touchstart",function() { 
 $('#inputKilograms,#inputPounds,#ounce').val(' ');
  $('td span.chip').text(" ");

});
  $('.printme').on('click touchstart',function() {
    //$('#drug').printThis({     
      //importCSS: true,          
    // loadCSS: "css/print.css"
  //});
    window.print();
  return false;
  }); 
$("#inputKilograms").on('keyup touchend',function() {
  MLK();
  setdrug();
  calcChocTotal();
calcChoc();  
});
  $("#ounce").on('keyup touchend',function() {
  calcChocTotal();
calcChoc();  
});
   
$("#chocolate").on("change",function() {
calcChocTotal();
calcChoc();  

}); 
});


var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent('<!-- Top Navbar-->' + '<div class="navbar">' + '  <div class="navbar-inner">' + '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' + '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' + '  </div>' + '</div>' + '<div class="pages">' + '  <!-- Page, data-page contains page name-->' + '  <div data-page="dynamic-pages" class="page">' + '    <!-- Scrollable page content-->' + '    <div class="page-content">' + '      <div class="content-block">' + '        <div class="content-block-inner">' + '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' + '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' + '        </div>' + '      </div>' + '    </div>' + '  </div>' + '</div>');
    return;
}

 /*!
*  © 2017 Mike Sozanski DVM, Dip ABVP
* vetcalculators.com
 */
  
 $(document).ready(function() {

  //$( ".container" ).trigger( "enhance.tablesaw" );

setTimeout(function(){ 
//setspin();
}, 500);



$('#information').on('hidden.bs.collapse', function () {
 $('.patient').text('Show Patient Info')
});
$('#information').on('shown.bs.collapse', function () {
 $('.patient').text('Hide Patient Info')
});

$('#cpr1').on('shown.bs.collapse', function() {
    $(".emergencyInfo i").addClass('fa-chevron-up').removeClass('fa-chevron-down');
  });

$('#cpr1').on('hidden.bs.collapse', function() {
    $(".emergencyInfo i").addClass('fa-chevron-down').removeClass('fa-chevron-up');
  });
$('#cpr2').on('shown.bs.collapse', function() {
    $(".emergencyInfo i").addClass('fa-chevron-up').removeClass('fa-chevron-down');
  });

$('#cpr2').on('hidden.bs.collapse', function() {
    $(".emergencyInfo i").addClass('fa-chevron-down').removeClass('fa-chevron-up');
  });

$('.footable-filtering-search').addClass('hidden-print');


$(function($){
 new WOW().init();  
});
$('.printmeModal').on('click touchstart',function() {
    $('.modal-body').printThis({     
      importCSS: true,          
    loadCSS: "css/print.css"
  });
  return false;
  });       


$('.printme').on('click touchstart',function() {
    //$('#drug').printThis({     
      //importCSS: true,          
    // loadCSS: "css/print.css"
  //});
    window.print();
  return false;
  });       
var today = new Date();
$('.time').html(today.getHours() + ':' + today.getMinutes());
$('.weekday').html(today.toDateString().substring(0, 3));
$('.date').html(today.toDateString());
   
$('.resetme').on("click touchstart",function() { 
 $('#inputKilograms,#inputPounds').val(' ');
  $('td span.chip-label').text(" ");

});
setTimeout(function(){ 
   
}, 400);


});


 function setspin() { 
    $('input.drug').each(function(index) {
      var inputName = $(this).attr("name"),
        drugValue =   $('input[name="'+inputName+'"]'),
        minDose = parseFloat($(this).attr('data-min')),
        maxDose = parseFloat($(this).attr('data-max')),
        step = parseFloat($(this).attr('data-step')),
        decimal = parseFloat($(this).attr('data-decimal')),
        initval = parseFloat($(this).attr('value')),
        postfix = $(this).attr('data-postfix');
        prefix = $(this).attr('data-prefix');

      //$('input[name="'+ inputName +'"]').TouchSpin({
       // min: minDose,
       // max: maxDose,
       // step: step,
       // decimals: decimal,
       // postfix: postfix,
       // prefix: prefix,
       // initval: initval,
       // verticalbuttons: true,
         //buttondown_class: 'btn btn-default',
            //buttonup_class: 'btn btn-default',
        //verticalupclass: 'fa fa-chevron-up fa-lg',
      //verticaldownclass: 'fa fa-chevron-down fa-lg'
     // });
        
    //$(this).on('touchspin.on.stopspin', function () {  MLK(); calcChocTotal(); calcChoc();  setdrug();});
    $(this).on('keyup touchend', function () {  MLK();  calcChocTotal(); calcChoc();  setdrug();});
    
    });

    

  }
//$(function($){
 // $('table.table').footable({
 //   "filtering": {
 //     "delay": 800
 //   }
//  });
  
//});
setspin();

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
    feedCups();
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
  
$(document).on('keyup touchend','#inputKilograms', function() {
  MLK();
  feedCups();
  setdrug();
  calcChocTotal();
calcChoc();  
});
$("#ounce").on('keyup touchend',function() {
  calcChocTotal();
calcChoc();  
});
   $("#inputPounds").on('keyup touchend',function() {
    //MLK();
    //feedCups();
  //setdrug();
   //calcChocTotal();
//calcChoc();  
});
$("input#themg").on('keyup touchend',function() {
  setdrug();
});

$("select.pickDose").on("change", function() {
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
      var drug = parseFloat($(this).val()).toFixed(3);
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
    var dex = parseFloat($('#dexdomitorMl.label').html().replace(' ml', '')).toFixed(2);
}if ($('#dexdomitorMagicMl').length) {
    var dex2 = parseFloat($('#dexdomitorMagicMl.label').html().replace(' ml', '')).toFixed(2);
     }if ($('#dttMl').length) {
    var dtt = parseFloat($('#dttMl.label').html().replace(' ml', '')).toFixed(2);
     }if ($('#ketamineMagicMl').length) {
    var ket2 = parseFloat($('#ketamineMagicMl.label').html().replace(' ml', '')).toFixed(2);
    }if ($('#butorphanolMagicMl').length) {
    var butorph2 = parseFloat($('#butorphanolMagicMl.label').html().replace(' ml', '')).toFixed(2);
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
    $('#antisedanDTTMl.label').text(dex).append(' ml');
    $('#antisedanMagicMl.label').text(dex2).append(' ml');
    $('#totalMagic.label').text(totalMagic).append(' ml');
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
 $("#chocolate").on("change",function() {
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


var bcs  = parseFloat($('#dogBCS').val());
var idealWeightKG = parseFloat((kg * (1 - bcs))).toFixed(1);
var idealWeightLB = parseFloat((kg * (1 - bcs))*2.2046).toFixed(1);
var idealCalc = Math.pow(idealWeightKG, 0.75);
var idealKcalDogsTotal = (70 * parseFloat(idealCalc)).toFixed();
var dogRERMultiplier  = parseFloat($('#rerDog').val());
var RERDog = parseFloat(dogRERMultiplier * idealKcalDogsTotal).toFixed();


var idealKcalDogsTotalLoss = (0.8 * parseFloat(idealKcalCatsTotal)).toFixed();





var bcs2  = parseFloat($('#catBCS').val());
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
$('.dogCups').html('<span class="label label-default"> ' + resultD + '</span>');
}
if (!isNaN(resultC)) { 
$('.catCups').html('<span class="label label-default"> ' + resultC + '</span>');
}
$('#caloriesCats').val(parseFloat(RERCat));
$('#caloriesDogs').val(parseFloat(RERDog));
$('#idealWeightKGDogs').val(parseFloat(idealWeightKG));
$('#idealWeightLBDogs').val(parseFloat(idealWeightLB));
$('#idealWeightKGCats').val(parseFloat(idealWeightKG2));
$('#idealWeightLBCats').val(parseFloat(idealWeightLB2));


}



$("#dogBCS").on("change",function() {
 feedCups();
  });
$("#catBCS").on("change",function() {
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

        $('#dopamineDogVol').text((parseFloat(((dopamineV * fluidVol)/40)).toFixed(2))).prepend('Add: ').append(' mls'); 
        $('.dopaminefluids, .dobutaminefluids').text(parseFloat((kg)).toFixed(2)).prepend('Rate: ').append(' ml\/hr');
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
$("#fluidVol, #fluidVol1,#fluidVol2, #fluidVol3, #fluidVol4, .morphV,.hydroV,.buprenV,.butorphV, #ketV, #mlkghr,  #mlkghr2, #mlkghr3, #mlkghr4,input[name='lidoV'], input[name='ketV'],input[name='lidoV2'], input[name='ketV2'],input[name='lidoV3'], input[name='ketV3'],input[name='lidoV4'], input[name='ketV4']").on("change", function() {
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
MLK2();
setspin();
setdrug();