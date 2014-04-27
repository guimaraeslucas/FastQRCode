window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
var file_system;

function base64ToBinary(imgUrl) {
  var BASE64_MARKER = ';base64,';
  var base64Index = imgUrl.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = imgUrl.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (i = 0; i < rawLength; ++i) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}


function saveToDisk(blob, fileName) {
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function (event) {
    var save = document.createElement('a');
    save.href = event.target.result;
    save.target = '_blank';
    save.download = fileName || 'unknown';

    var event = document.createEvent('Event');
    event.initEvent('click', true, true);
    save.dispatchEvent(event);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  };
}
function saveQR(){
    content = base64ToBinary($("#generateQr img").attr("src"));
    bob = new Blob([content]);
    saveToDisk(bob, "FastQR.png");
   // fileWriter.write(bob);
}

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}