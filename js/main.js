//Default config
config = {
    render : 'image',
    background : '#FFF',
    quiet : 1,
    size : 220
};

//Set true if running as chrome app
chromeapp = true;


//Loader
head.js("js/jquery-2.1.0.min.js", "js/bootstrap.min.js", "js/jquery.qrcode-0.7.0.min.js", "js/canvas.js", "js/menu.js");
head.ready(function() {

    $(".loader").hide();

    //TEXT
    $("#doIt1").click(function() {
        var textValue = $("#qrText").val();
        var oConfig = merge_options(config, {
            text : textValue
        });
        $("#generateQr").html("");
        $("#generateQr").qrcode(oConfig);
        saveQR();
    });

    //EMAIL
    $("#doIt2").click(function() {
        var emailValue = $("#qrEEmail").val();
        var subjectValue = $("#qrESubject").val();
        var messageValue = $("#qrEMessage").val();
        var formatMsg = "MATMSG:TO:" + emailValue + ";SUB:" + subjectValue + ";BODY:" + messageValue + ";;";
        var oConfig = merge_options(config, {
            text : formatMsg
        });
        $("#generateQr").html("");
        $("#generateQr").qrcode(oConfig);
        saveQR();
    });

    //SMS
    $("#doIt3").click(function() {
        var nbrValue = $("#qrSNumber").val();
        var messageValue = $("#qrSMessage").val();
        var formatMsg = "SMSTO:" + nbrValue + ":" + messageValue;
        var oConfig = merge_options(config, {
            text : formatMsg
        });
        $("#generateQr").html("");
        $("#generateQr").qrcode(oConfig);
        saveQR();
    });

    //VCard
    $("#doIt4").click(function() {
        var qrVName = $("#qrVName").val();
        var qrVLName = $("#qrVLName").val();
        var qrVOrg = $("#qrVOrg").val();
        var qrVTitle = $("#qrVTitle").val();
        var qrVStreet = $("#qrVStreet").val();
        var qrVCity = $("#qrVCity").val();
        var qrVLocation = $("#qrVLocation").val();
        var qrVZip = $("#qrVZip").val();
        var qrVCountry = $("#qrVCountry").val();
        var qrVTel = $("#qrVTel").val();
        var qrVMobile = $("#qrVMobile").val();
        var qrVFax = $("#qrVFax").val();
        var qrVEmail = $("#qrVEmail").val();
        var qrVUrl = $("#qrVUrl").val();
        var qrVBday = $("#qrVBday").val();
        var formatMsg = "BEGIN:VCARD\nVERSION:3.0\nN:" + qrVLName + ";" + qrVName + "\nFN:" + qrVName + " " + qrVLName + "\nORG:" + qrVOrg + "\nTITLE:" + qrVTitle + "\nADR:;;" + qrVStreet + ";" + qrVCity + ";" + qrVLocation + ";" + qrVZip + ";" + qrVCountry + "\nTEL:" + qrVTel + "\nTEL;CELL:" + qrVMobile + "\nTEL;FAX:" + qrVFax + "\nEMAIL;INTERNET:" + qrVEmail + "\nURL:" + qrVUrl + "\nBDAY:" + qrVBday + "\nEND:VCARD";
        var oConfig = merge_options(config, {
            text : formatMsg
        });
        $("#generateQr").html("");
        $("#generateQr").qrcode(oConfig);
        saveQR();
    });

    //SMS
    $("#doIt5").click(function() {
        var qrGLat = $("#qrGLat").val();
        var qrGLon = $("#qrGLon").val();
        var formatMsg = "GEO:" + qrGLat + "," + qrGLon;
        var oConfig = merge_options(config, {
            text : formatMsg
        });
        $("#generateQr").html("");
        $("#generateQr").qrcode(oConfig);
        saveQR();
    });

    //Translate things

    //Headers and buttons
    lgtt("generatelink");
    $(".generateBtn").html(lgt("generateBtn"));
    lgtt("generateemail");
    lgtt("generatesms");
    lgtt("generatevcard");
    lgtt("generategeo");
    //Inputs
    lgti("qrESubject");
    lgti("qrEMessage");
    lgti("qrSNumber");
    lgti("qrSMessage");
    lgti("qrVName");
    lgti("qrVLName");
    lgti("qrVOrg");
    lgti("qrVTitle");
    lgti("qrVStreet");
    lgti("qrVCity");
    lgti("qrVLocation");
    lgti("qrVZip");
    lgti("qrVCountry");
    lgti("qrVTel");
    lgti("qrVMobile");
    lgti("qrVFax");
    lgti("qrVBday");

});
