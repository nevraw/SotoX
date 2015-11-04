(function() {
 loadOptions();
 buttonHandler();
})();

function buttonHandler() {
 var $submitButton = $('#submitButton');

 $submitButton.on('click', function() {
//  console.log('Submit');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
 });

 var $cancelButton = $('#cancelButton');

 $cancelButton.on('click', function() {
//  console.log('Cancel');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to;
 });
}

function loadOptions() {

 var $bgColorPicker = $('#bgColorPicker');
 if (localStorage.bgColor) {
  $bgColorPicker[0].value = localStorage.bgColor;
 }
 
 var $minColorPicker = $('#minColorPicker');
 if (localStorage.minColor) {
  $minColorPicker[0].value = localStorage.minColor;
 }
 
 var $bgColorPicker = $('#hourColorPicker');

 if (localStorage.hourColor) {
  $hourColorPicker[0].value = localStorage.hourColor;
 }
  
 
 
 
} 

function getAndStoreConfigData() {
 var $bgColorPicker = $('#bgColorPicker');
 var $minColorPicker = $('#minColorPicker');
 var $hourColorPicker = $('#hourColorPicker');

 var options = {
  bgColor: $bgColorPicker.val(),
  minColor: $minColorPicker.val(),
  hourColor: $hourColorPicker.val()
 };
 
 console.log('Got options: ' + JSON.stringify(options));

 localStorage.bgcolor   = options.bgColor;
 localStorage.minColor  = options.minColor;
 localStorage.hourColor = options.hourColor;

 return options;
}

function getQueryParam(variable, defaultValue) {
 var query = location.search.substring(1);
 var vars = query.split('&');
 for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');
  if (pair[0] === variable) {
   return decodeURIComponent(pair[1]);
  }
 }
 return defaultValue || false;
}
