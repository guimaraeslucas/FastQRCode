function hideAllTabs() {
    $(".active").removeClass("active");
    $(".HideShow").hide();
}

//BTNTEXT
$("#btnText").click(function() {
    hideAllTabs();
    $("#texto").fadeIn("slow");
    $("#liText").addClass("active");
});

//BTNEMAIL
$("#btnEmail").click(function() {
    hideAllTabs();
    $("#email").fadeIn("slow");
    $("#liEmail").addClass("active");
});

//BTNSMS
$("#btnSms").click(function() {
     hideAllTabs();
        $("#sms").fadeIn("slow");
        $("#liSms").addClass("active");
});

//BTNVCARD
$("#btnVCard").click(function() {
     hideAllTabs();
   $("#vcard").fadeIn("slow");
   $("#liVCard").addClass("active");
});

//BTNGEO
$("#btnGeo").click(function() {
     hideAllTabs();
   $("#geo").fadeIn("slow");
   $("#liGeo").addClass("active");
});



//TRANSLATION


if (!chromeapp) {
//We should load the localization files first ! =)
        //Check user language
        try {
            var userlanguage = window.navigator.userLanguage || window.navigator.language;
            userlanguage = userlanguage.substring(0, 2).toLowerCase();
            var ula = ['en', 'es', 'pt'];
            if ($.inArray(userlanguage, ula) > -1) {
                if (userlanguage == 'pt') {
                    userlanguage = 'pt_BR';
                }
                ulocal = userlanguage;
            } else {
                ulocal = 'en';
            }
        } catch(e) {
            ulocal = 'en';
        }
        //Load the localization files and on success start the app
        $.ajax({
            url : '_locales/' + ulocal + '/messages.json',
            cache : false,
            success : function(data) {
                window.translationfile = data;
            },
            error : function() {
                alert("FastQR\r\nFatal Error: Can't load or parse localization file for " + ulocal + ".");
            },
            headers : {
                "X-LGApps" : "true"
            }
        });
};

function lgtt(elementId) {
    $("#" + elementId).html(lgt(elementId));
}

function lgti(elementId) {
    $("#" + elementId).attr("placeholder",lgt(elementId));
}

function lgt(line) {
    if (chromeapp) {
        return chrome.i18n.getMessage(line);
    } else {

        if (line == "@@extension_id") {
            return 'WebApp@' + document.domain;
        }

        //Try to get key or return empty
        try {
            gett = window.translationfile;
            t = gett[line].message;
        } catch(e) {
            t = '';
        }
        return t;
    }
}
