
function saveasdraftvalidation() {
    //if ($('#AsddlPlant').val() == '' || $('#AsddlPlant').val() == '0') {
    //    $('#AsddlPlant').css('border', '1px solid red');
    //    return false;
    //}
    //else {
    //    $('#AsddlPlant').css('border', '1px solid #ccc');
    //}
    $('#AsddlPlant').css('border', '1px solid #ccc');
    if ($('#AsddlAuditType').val() == '' || $('#AsddlAuditType').val() == '0') {
        $('#AsddlAuditType').css('border', '1px solid red');
        return false;
    }
    else {
        $('#AsddlAuditType').css('border', '1px solid #ccc');
    }

    if ($('#Asddldept').val() == '' || $('#Asddldept').val() == '0') {
        $('#Asddldept').css('border', '1px solid red');
        return false;
    }
    else {
        $('#Asddldept').css('border', '1px solid #ccc');
    }
    if ($('#Asddlsubdept').val() == '' || $('#Asddlsubdept').val() == '0') {
        $('#Asddlsubdept').css('border', '1px solid red');
        return false;
    }
    else {
        $('#Asddlsubdept').css('border', '1px solid #ccc');
    }

    return true;
}



function Scheduledvalidate() {
    
    //if ($('#AsddlPlant').val() == '' || $('#AsddlPlant').val() == '0') {
    //    $('#AsddlPlant').css('border', '1px solid red');
    //}
    //else {
    //    $('#AsddlPlant').css('border', '1px solid #ccc');
    //}
    if ($('#AsddlAuditType').val() == '' || $('#AsddlAuditType').val() == '0') {
        $('#AsddlAuditType').css('border', '1px solid red');
    }
    else {
        $('#AsddlAuditType').css('border', '1px solid #ccc');
    }

    if ($('#Asddldept').val() == '' || $('#Asddldept').val() == '0') {
        $('#Asddldept').css('border', '1px solid red');
    }
    else {
        $('#Asddldept').css('border', '1px solid #ccc');
    }
    if ($('#Asddlsubdept').val() == '' || $('#Asddlsubdept').val() == '0') {
        $('#Asddlsubdept').css('border', '1px solid red');
    }
    else {
        $('#Asddlsubdept').css('border', '1px solid #ccc');
    }    
    if ($('#sddlAuditee').val() == null || $('#sddlAuditee').val() == '' || $('#sddlAuditee').val() == '0') {        
        $('#sddlAuditee').next('span').css( 'border', '1px solid red' );    
    }
    else {
        $('#sddlAuditee').next('span').css('border', '1px solid #ccc');
    }
    //if ($('#sddlQRepresentative').val() == null || $('#sddlQRepresentative').val() == '' || $('#sddlQRepresentative').val() == '0') {
    //    $('#sddlQRepresentative').next('span').css('border', '1px solid red');
    //}
    //else {
    //    $('#sddlQRepresentative').next('span').css('border', '1px solid #ccc');
    //}
    if ($('#txtLeadAuditor').val() == '') {
        $('#txtLeadAuditor').css('border', '1px solid red');
    }
    else {
        $('#txtLeadAuditor').css('border', '1px solid #ccc');
    }

    if ($('#txtCoAuditor').val() == '') {
        $('#txtCoAuditor').css('border', '1px solid red');
    }
    else {
        $('#txtCoAuditor').css('border', '1px solid #ccc');
    }
   
//    if ($('#AsddlCoAuditor').val() == '' || $('#AsddlCoAuditor').val() == '0') {
//        $('#AsddlCoAuditor').css('border', '1px solid red');
//    }
//    else {
//        $('#AsddlCoAuditor').css('border', '1px solid #ccc');
//    }
    if ($('#FromDateTime').val() == '') {
        $('#FromDateTime').css('border', '1px solid red');
    }
    else {
        $('#FromDateTime').css('border', '1px solid #ccc');
    }
    if ($('#ToDateTime').val() == '') {
        $('#ToDateTime').css('border', '1px solid red');
    }
    else {
        $('#ToDateTime').css('border', '1px solid #ccc');
    }

   
}


function Ncvalidate() {
    var j = 0;
    $.each($('.ncval'), function (i, item) {
        if ($(this).val() == null || $(this).val() == '') {

            if (j == 0)
                $(item).focus();

            $(item).css('border', '1px solid red');
            j = j + 1;
        }
        else {

            $(item).css('border', '1px solid #ccc');
        }
    });

    $.each($('.veobs'), function (i, item) {
        if ($(this).val() == null || $(this).val() == '') {

            if (j == 0)
                $(item).focus();
            $(item).css('border', '1px solid red');
            j = j + 1;
        }
        else {
            $(item).css('border', '1px solid #ccc');
        }
    });



}


function responsiblevalidate() {
    var j = 0;
    $.each($('.js-example-tags'), function (i, item) {
        if ($(this).val() == null || $(this).val() == '') {

            if (j == 0)
                $(item).css({"outline":'none'}).focus();

            $(item).next('span').css({"border": '1px solid red',"border-radius":'4px',"outline":'none'});            
            j = j + 1;
        }
        else {

            $(item).css('border', '1px solid #ccc');
        }
    });
}

function AuditeeRejectionvalidate() {
    if ($('#txtRejection').val() == null || $('#txtRejection').val() == '') {
        $('#txtRejection').css('border', '1px solid red');
    }
    else {
        $('#txtRejection').css('border', '1px solid #ccc');
    }
}

function Correctivevalidate() {
    var j = 0;

    if ($('#txtwhy1').val() == null || $('#txtwhy1').val() == '') {
        $('#txtwhy1').css('border', '1px solid red');
        if (j == 0) {
            $('#txtwhy1').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtwhy1').css('border', '1px solid #ccc');
    }
//    if ($('#txtwhy2').val() == null || $('#txtwhy2').val() == '') {
//        $('#txtwhy2').css('border', '1px solid red');
//        if (j == 0) {
//            $('#txtwhy2').focus();
//            j = j + 1;
//        }
//    }
//    else {
//        $('#txtwhy2').css('border', '1px solid #ccc');
//    }
//    if ($('#txtwhy3').val() == null || $('#txtwhy3').val() == '') {
//        $('#txtwhy3').css('border', '1px solid red');
//        if (j == 0) {
//            $('#txtwhy3').focus();
//            j = j + 1;
//        }
//    }
//    else {
//        $('#txtwhy3').css('border', '1px solid #ccc');
//    }
//    if ($('#txtwhy4').val() == null || $('#txtwhy4').val() == '') {
//        $('#txtwhy4').css('border', '1px solid red');
//        if (j == 0) {
//            $('#txtwhy4').focus();
//            j = j + 1;
//        }
//    }
//    else {
//        $('#txtwhy4').css('border', '1px solid #ccc');
//    }
//    if ($('#txtwhy5').val() == null || $('#txtwhy5').val() == '') {
//        $('#txtwhy5').css('border', '1px solid red');
//        if (j == 0) {
//            $('#txtwhy5').focus();
//            j = j + 1;
//        }
//    }
//    else {
//        $('#txtwhy5').css('border', '1px solid #ccc');
//    }

    if ($('#txtcorrection').val() == null || $('#txtcorrection').val() == '') {
        $('#txtcorrection').css('border', '1px solid red');
        if (j == 0) {
            $('#txtcorrection').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtcorrection').css('border', '1px solid #ccc');
    }
    if ($('#txtdocness').val() == null || $('#txtdocness').val() == '') {
        $('#txtdocness').css('border', '1px solid red');
        if (j == 0) {
            $('#txtdocness').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtdocness').css('border', '1px solid #ccc');
    }
    if ($('#txtcorrective').val() == null || $('#txtcorrective').val() == '') {
        $('#txtcorrective').css('border', '1px solid red');
        if (j == 0) {
            $('#txtcorrective').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtcorrective').css('border', '1px solid #ccc');
    }

    $.each($('.js-example-tags'), function (i, item) {
        if ($(this).val() == null || $(this).val() == '') {            

            $(item).next('span').css({ "border": '1px solid red', "border-radius": '4px', "outline": 'none' });
            j = j + 1;
        }
        else {

            $(item).next('span').css("border", '1px solid #ccc');
        }
    });

    if ($('#txttargetdate').val() == null || $('#txttargetdate').val() == '') {
        $('#txttargetdate').css('border', '1px solid red');
        if (j == 0) {
            $('#txttargetdate').focus();
            j = j + 1;
        }
    }
    else {
        $('#txttargetdate').css('border', '1px solid #ccc');
    }

}

function Horizontalvalidate() {
    var j = 0;
    if ($('#txtHremarks').val() == null || $('#txtHremarks').val() == '') {
        $('#txtHremarks').css('border', '1px solid red');
        if (j == 0) {
            $('#txtHremarks').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtHremarks').css('border', '1px solid #ccc');
    }
    if ($('#txtHtarget').val() == null || $('#txtHtarget').val() == '') {
        $('#txtHtarget').css('border', '1px solid red');
        if (j == 0) {
            $('#txtHtarget').focus();
            j = j + 1;
        }
    }
    else {
        $('#txtHtarget').css('border', '1px solid #ccc');
    }
}