chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 380;

  chrome.app.window.create('index.htm', {
    id: "fqr",
    bounds: {
      /*width: width,
      height: height,*/
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    },
    minWidth: 500,
    minHeight: 380
  });
});