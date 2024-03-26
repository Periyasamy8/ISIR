
var globalx = 0;
var savemode = 0;
var UserDetails;
$(document).ready(function () {

    //$('#txtnotifyto').tagsinput('removeAll');
    //$('#ddlIARType').change(function () {
    //    if ($('#ddlIARType').val() == "1") {
    //        $('#txtIARNo').prop('disabled', false);
    //        $('#txtIARNo').addClass('validate[required]');
    //        $('#txtIARNo').css('border', '1px solid red');
    //    }
    //    else {
    //        $('#txtIARNo').val('');
    //        $('#txtIARNo').prop('disabled', true);
    //        $('#txtIARNo').removeClass('validate[required]');
    //        $('#txtIARNo').css('border', '1px solid #ccc');
    //    }
    //});


    var PartReturnTypeDraft = 0;
    var ReasonDraft = 0;
    var QuantityDraft = 0;
    var CondDraft = false;
    //$('#ddlTestClass').change(function () {
    //    if ($('#ddlTestClass').val() == "7") {
    //        if (!CondDraft) {
    //            ReasonDraft = $('#ddlReason').val();
    //            QuantityDraft = $('#txtQuantity').val();
    //            PartReturnTypeDraft = $('#ddlPartReturnType').val();
    //            CondDraft = true;
    //        }
    //        $('#ddlReason').val(15);
    //        $('#txtQuantity').val(0);
    //        $('#ddlPartReturnType').val(3);
    //        $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', true);
    //    }
    //    else {
    //        var ID = getUrlVars()["LabRequestID"];
    //        if (typeof ID !== "undefined") {
    //            //$('#ddlReason').val(ReasonDraft);
    //            //$('#txtQuantity').val(QuantityDraft);
    //            //$('#ddlPartReturnType').val(PartReturnTypeDraft);    
    //            $('#ddlPartReturnType').val(PartReturnTypeDrafts != 0 ? PartReturnTypeDrafts : PartReturnTypeDraft);
    //            $('#ddlReason').val(ReasonfortestDrafts != 0 ? ReasonfortestDrafts : ReasonDraft);
    //            $('#txtQuantity').val(QuantityDrafts != 0 ? QuantityDrafts : '');

    //        }
    //        else {
    //            $('#ddlReason').val(0);
    //            $('#txtQuantity').val('');
    //            $('#ddlPartReturnType').val(0);
    //        }
    //        $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', false);
    //    }
    //});
    //$('#ddlLabName').change(function () {
    //    if ($('#ddlLabName').val() == "1") {
    //        $("#ddlTestClass").empty().append(sddlTestClases);
    //    }
    //    else if ($('#ddlLabName').val() == "2" || $('#ddlLabName').val() == "3" || $('#ddlLabName').val() == "4") {
    //        $("#ddlTestClass").empty().append(sddlTestClasesMeasureLab);
    //    }
    //    else {
    //        var optionhtmlnew = '<option value="0" selected>' + "Select" + '</option>';
    //        $("#ddlTestClass").empty().append(optionhtmlnew);
    //    }

    //});


    InitializeUrl();

    MenuRemoveClass();
    

    

    //validation part - Naresh
    //$("#CreateRequest").validationEngine('attach', {
    //    onValidationComplete: function (form, status) {
    //        if (status == true) {
    //            CreateRequestSave('btnsubmit');
    //        }
    //        else {

    //            CreateRequestValidate();
    //            return false;
    //        }

    //    },
    //    'showPrompts': false
    //});




    //$("#ddlIARType").on("change", function (e) {
    //    var IARType = $("#ddlIARType").val() != 1 ? $("#txtIARNo").val('') && $("#txtIARNo").attr("disabled", "disabled") : $("#txtIARNo").removeAttr("disabled");

    //});
    //$("#txtPartNo").on("change", function (e) {
    //    var val = $("#txtPartNo").val();
    //    var obj = $("#ddlPartNo").find("option[value='" + val + "']");

    //    if (obj != null && obj.length > 0) {
    //        var data = $.grep(PartDetails, function (element, index) {
    //            return element.PartNo == $("#txtPartNo").val();
    //        });
    //        if (data.length > 0) {

    //            $('#hdnPartNoId').val(data[0].PartId);
    //            $('#txtPartNo').css('border', '1px solid #ccc');
    //            $('#txtPartName').val(data[0].PartName);
    //            $('#txtPartName').attr("disabled", true);
    //            // $('#txtSupplierName').val(data[0].SupplierName);
    //        }
    //        else {

    //            var PartNo = $("#txtPartNo").val();
    //            $('#hdnPartNoId').val(0);
    //            $("#txtPartName").val('');
    //            $("#txtPartNo").removeAttr("disabled");
    //            $("#txtPartName").removeAttr("disabled");
    //            // $("#txtSupplierName").removeAttr("disabled");
    //        }

    //    }
    //    else {

    //        var PartNo = $("#txtPartNo").val();
    //        $('#hdnPartNoId').val(0);
    //        $("#txtPartNo").removeAttr("disabled");
    //        $("#txtPartName").removeAttr("disabled");
    //        // $("#txtSupplierName").removeAttr("disabled");
    //        $("#txtPartName").val('');
    //    }
    //});

    //Naresh
    //dev 
    $('#btnsubmit').on('click', function () {
        CreateRequestSave('btnsubmit');
    });

    //clear fixed values like name of user
    ClearData();
    $("#txtacceptdate,#txtdeadlinedate,#txtexptcomdate,#txtinscompldate,#txtrptsubdate").datetimepicker({
        autoclose: true,
        pickTime: false,
        minView: 2,
        format: "dd-mm-yyyy"

    });
    if (window.File && window.FileList && window.FileReader) {
        $("#files1").on("change", function (e) {
            LoaderShow();
            var filedata = [];
            var filename = [];
            var filesize = [];
            var files = e.target.files,
                filesLength = files.length, loaded = 0;
            var filejson;

            for (var i = 0; i < filesLength; i++) {
                var fileReader = new FileReader();
                var f = files[i];
                filename.push(f.name);
                filesize.push(f.size);
                fileReader.onload = (function (e) {

                    var file = e.target;
                    filedata.push(e.target.result);
                    loaded++;

                    if (loaded == filesLength) {
                        var aa = filesize.reduce(getSum, 0);
                        LoaderHide();
                        // alert(parseFloat((aa / 1024 / 1024).toFixed(2)));
                        //alert(parseFloat(globalx));
                        if (parseFloat((aa / 1024 / 1024).toFixed(2)) + parseFloat(globalx) <= 10)
                            FileUpload(filedata, filename, filesize);
                        else {
                            alertify.myAlert("File Size should be below 10 MB, you have uploaded " + parseFloat((aa / 1024 / 1024).toFixed(2)) + globalx + "MB data");
                            for (var i = 0; i < FileData.length; i++) {
                                globalx += parseFloat(FileData[i].Size);
                            }
                            return false;
                        }
                    }
                });
                fileReader.readAsDataURL(f);
            }

        });


    } else {
        alert("Your browser doesn't support to File API")
    }


});

var PartReturnTypeDrafts;
var ReasonfortestDrafts;
var QuantityDrafts;
//Naresh- after completing request tracker

//function BindDraftDetails(LabRequestID, LabRequest) {

//    var json = {
//        "LabRequestID": LabRequestID
//    };
//    var Input = JSON.stringify(json);
//    console.log(UserDetails);
//    var ApiFunc = UserDetails.Api + '/LabRequest.svc/GetLabTrackerDetailsDraft';

//    PostMethod(ApiFunc, Input, UserDetails.token, function (data) {

//        RemoveValidation();
//        AddValidation();
//        var CreateRequest = data.CreateRequest;
//        var RequestFiles = data.RequestFiles;
//        //CreateRequestDropDown()
//        //Concern Details Tab Values Bind 
//        //$("#LRRefNo").html(CreateRequest[0].RefNo);
//        if (LabRequest != 'CopyText') {
//            $("#LabRequestId").val(CreateRequest[0].LabRequestId);
//            $("#txtRequestorName").val(CreateRequest[0].RequestorName);//'Edit Concern - ' + 
//            $("#txtDepartment").val(CreateRequest[0].Department);
//            $("#txtSubDepartment").val(CreateRequest[0].Department);
//        }
//        $("#txtContactNo").val(CreateRequest[0].ContactNo);
//        $("#ddlLabName").val(CreateRequest[0].LabId);
//        // $("#ddlTestClass").val(CreateRequest[0].TestClassId); 
//        if (CreateRequest[0].LabId == "1") {
//            $("#ddlTestClass").empty().append(sddlTestClases);
//        }
//        else {
//            $("#ddlTestClass").empty().append(sddlTestClasesMeasureLab);
//        }
//        if (CreateRequest[0].TestClassId == "7")
//            $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', true);
//        else
//            $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', false);
//        if (CreateRequest[0].TestClassId == '0')
//            $("#ddlTestClass").val('');
//        else
//            $("#ddlTestClass").val(CreateRequest[0].TestClassId);

//        if (CreateRequest[0].IARTypeId == '0')
//            $("#ddlIARType").val('');
//        else
//            $("#ddlIARType").val(CreateRequest[0].IARTypeId);
//        $("#ddlModel").val(CreateRequest[0].Model);

//        $("#ddlPartReturnType").val(CreateRequest[0].PartReturnType);
//        PartReturnTypeDrafts = CreateRequest[0].PartReturnType;
//        $("#ddlReason").val(CreateRequest[0].TestReasonId);

//        ReasonfortestDrafts = CreateRequest[0].TestReasonId;

//        $("#txtIARNo").val(CreateRequest[0].IARNo);
//        var obj = $("#ddlPartNo").find("option[value='" + CreateRequest[0].PartNo + "']");
//        // 
//        if (obj != null && obj.length > 0 && CreateRequest[0].PartNo != '') {
//            var data = $.grep(PartDetails, function (element, index) {
//                return element.PartNo == CreateRequest[0].PartNo;
//            });

//            if (data.length > 0) {

//                $('#hdnPartNoId').val(data[0].PartId);
//                $('#txtPartNo').val(CreateRequest[0].PartNo);
//                $('#txtPartName').val(data[0].PartName);
//                // $('#txtSupplierName').val(data[0].SupplierName);
//            }
//            else {

//                var PartNo = $("#txtPartNo").val();
//                $('#hdnPartNoId').val(0);
//                $("#txtPartNo").removeAttr("disabled");
//                $("#txtPartName").removeAttr("disabled");
//                // $("#txtSupplierName").removeAttr("disabled");
//            }

//        }
//        else {

//            var PartNo = $("#txtPartNo").val();
//            $('#hdnPartNoId').val(0);
//            $("#txtPartNo").removeAttr("disabled");
//            $("#txtPartName").removeAttr("disabled");
//            // $("#txtSupplierName").removeAttr("disabled");

//        }
//        $("#ddlPartStatus").val(CreateRequest[0].PartStatus);

//        $("#ddlSupplier").val(CreateRequest[0].Supplier);
//        $("#ddlVariant").val(CreateRequest[0].Variant);
//        // $('#ddlSupplier option[value="' + CreateRequest[0].SupplierId+'"]').attr("selected", "selected"); 
//        $("#txtZGSNo").val(CreateRequest[0].ZGSNo);
//        if (CreateRequest[0].Vehicledetails.length > 80)
//            $("#txtVehicledetails").val(CreateRequest[0].Vehicledetails).css('height', CreateRequest[0].Vehicledetails.length > 300 ? 150 : 100);
//        else
//            $("#txtVehicledetails").val(CreateRequest[0].Vehicledetails).css('height', 'auto');

//        if (CreateRequest[0].Subject.length > 80)
//            $("#txtSubject").val(CreateRequest[0].Subject).css('height', CreateRequest[0].Subject.length > 300 ? 150 : 100);
//        else
//            $("#txtSubject").val(CreateRequest[0].Subject).css('height', 'auto');
//        if (CreateRequest[0].PurposeInspection.length > 80)
//            $("#txtPurpose").val(CreateRequest[0].PurposeInspection).css('height', CreateRequest[0].PurposeInspection.length > 300 ? 150 : 100);
//        else
//            $("#txtPurpose").val(CreateRequest[0].PurposeInspection).css('height', 'auto');

//        $("#txtQuantity").val(CreateRequest[0].Quantity);
//        //$("#txtnotifyto").val(CreateRequest[0].Notifyto);
//        $(".multiple_emails-input").val(CreateRequest[0].Notifyto);
//        QuantityDrafts = CreateRequest[0].Quantity;

//        //$("#txtPurpose").val(CreateRequest[0].PurposeInspection);
//        if (CreateRequest[0].MeasurementParameter.length > 80)
//            $("#txtTestDetails").val(CreateRequest[0].MeasurementParameter).css('height', CreateRequest[0].MeasurementParameter.length > 300 ? 150 : 100);
//        else
//            $("#txtTestDetails").val(CreateRequest[0].MeasurementParameter).css('height', 'auto');
//        if (CreateRequest[0].Drawingattached != 0) {
//            $("input[name=optradio][value='" + CreateRequest[0].Drawingattached + "']").prop('checked', true);
//            $("#ShowAttachment").show();
//        }
//        else {
//            $("input[name=optradio][value='" + CreateRequest[0].Drawingattached + "']").prop('checked', true);
//            $("#ShowAttachment").hide();
//        }
//        $("#ddlPriority").val(CreateRequest[0].Priority);
//        $("#txtRequestStatus").val(CreateRequest[0].Status);
//        $("#txtRequestDate").val(CreateRequest[0].CreatedDate);
//        var arrdata = [];
//        var html = '';
//        var FileUpdateCount;

//        FileUpdateCount = 0;
//        if (LabRequest != 'CopyText') {
//            if (RequestFiles != null && RequestFiles.length > 0) {

//                //FileData = RequestFiles;
//                FileDraftValidate = RequestFiles.length;
//                $.each(RequestFiles, function (j, Fileitem) {
//                    var ids = guid();
//                    var json = {};

//                    var ids = guid();
//                    $('#DocTable').empty();
//                    // var fs = (filesize[i] / 1024 / 1024).toFixed(2);
//                    var ext = Fileitem.Name.split('.')[1];

//                    if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "jfif") {

//                        html += '<div id="' + ids + '" class="col-xs-4 doutline">'
//                            + '<div style ="border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
//                            //  + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "' + Fileitem.filepath + '"/>' 
//                            + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
//                            + '<p class="mbsize"><span>' + Fileitem.Size + " MB" + '</span ></p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
//                            + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
//                            //+ '<p class="dfilenameuser" title="' + UserDetails.Name + '">' + UserDetails.Name + '</p>'
//                            + '<p class="dfileuploadon">' + Fileitem.fileon + ''
//                            + '<span class="pull-right btn-group">'
//                            // + '<button onclick="downloadFile(\'' + Fileitem.Name + '\',\'' + Fileitem.filepath + '\');" type="button" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></button>'
//                            + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="fa fa-download"></span></a>'

//                            // + '<button  onclick="deleteFileAjax(\'' + Fileitem.FolderName + '\',\'' + Fileitem.Name + '\',\'' + "" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
//                            + '<button  onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'

//                            + '</span></p></div></div></div></div>'
//                    }
//                    else {
//                        html += '<div id="' + ids + '" class="col-xs-4 doutline">'
//                            + ' <div style = " border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
//                            + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
//                            // + '<p class="mbsize"><span>' + fs.toString() + " MB" + '</span ></p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
//                            + '<p class="mbsize"> </p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
//                            + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
//                            //+ '<p class="dfilenameuser" title="' + UserDetails.Name + '">' + UserDetails.Name + '</p>'
//                            + '<p class="dfileuploadon">' + Fileitem.fileon + ''
//                            + '<span class="pull-right btn-group">'
//                            // + '<button onclick="downloadFile(\'' + Fileitem.Name + '\',\'' + Fileitem.filepath + '\');" type="button" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></button>'
//                            + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></a>'

//                            //+ '<button  onclick="deleteFileAjax(\'' + Fileitem.FolderName + '\',\'' + Fileitem.Name  + '\',\'' + "" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
//                            + '<button  onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'

//                            + '</span></p></div></div></div></div>'
//                    }

//                    FileUpdateCount++;

//                });
//            }
//        }

//        $('#DocTable').append(html);


//        //    $("#CreateRequest").validationEngine('attach', {
//        //        onValidationComplete: function (form, status) {

//        //            if (status) {

//        //                CreateRequestSave();
//        //            }
//        //            else {
//        //                CreateRequestValidate();
//        //                return false;
//        //            }

//        //        },
//        //        'showPrompts': false
//        //    });

//    });

//}

function AddValidation() {
    //change inputs
    $('#ddlTestClass').addClass('validate[required]');
    $('#txtPartNo').addClass('validate[required]');
    $('#txtPartName').addClass('validate[required]');
    $('#ddlPartStatus').addClass('validate[required]');
    $('#ddlPartReturnType').addClass('validate[required]');
    $('#ddlSupplier').addClass('validate[required]');
    $('#ddlModel').addClass('validate[required]');
    $('#ddlReason').addClass('validate[required]');
    $('#txtVehicledetails').addClass('validate[required]');
    $('#txtSubject').addClass('validate[required]');
    $('#txtPurposeInspection').addClass('validate[required]');
    $('#txtQuantity').addClass('validate[required]');
    $('#txtTestDetails').addClass('validate[required]');
    $('#ddlPriority').addClass('validate[required]');
}

function RemoveValidation() {
    //change inputs
    $('#ddlTestClass').removeClass('validate[required]');
    $('#txtPartNo').removeClass('validate[required]');
    $('#txtPartName').removeClass('validate[required]');
    $('#ddlPartStatus').removeClass('validate[required]');
    $('#ddlPartReturnType').removeClass('validate[required]');
    $('#ddlSupplier').removeClass('validate[required]');
    $('#ddlModel').removeClass('validate[required]');
    $('#ddlReason').removeClass('validate[required]');
    $('#txtVehicledetails').removeClass('validate[required]');
    $('#txtSubject').removeClass('validate[required]');
    $('#txtPurposeInspection').removeClass('validate[required]');
    $('#txtQuantity').removeClass('validate[required]');
    $('#txtTestDetails').removeClass('validate[required]');
    $('#ddlPriority').removeClass('validate[required]');
}

function checkAttachement(result) {

    if (result == "True")
        $("#ShowAttachment").show();
    else
        $("#ShowAttachment").hide();
}

function CreateRequestSave(Id) {
    //if (($('#ddlPartStatus').val() == '' || $('#ddlPartStatus').val() == '0') && (Id == 'btnsubmit')) {
    //    $('#ddlPartStatus').css('border', '1px solid red');
    //    $('#ddlPartStatus').focus();
    //    return false;
    //}
    //else {
    //    $('#ddlPartStatus').css('border', '1px solid #ccc');
    //}

    //if ($('#ddlPartReturnType').val() == '0' && Id == 'btnsubmit') {
    //    $('#ddlPartReturnType').css('border', '1px solid red');
    //    $('#ddlPartReturnType').focus();
    //    return false;
    //}
    //else {
    //    $('#ddlPartReturnType').css('border', '1px solid #ccc');
    //}

    //if ($('#ddlModel').val() == '0' && Id == 'btnsubmit') {
    //    $('#ddlModel').css('border', '1px solid red');
    //    $('#ddlModel').focus();
    //    return false;
    //}
    //else {
    //    $('#ddlModel').css('border', '1px solid #ccc');
    //}
    //if ($('#ddlReason').val() == 0 && Id == 'btnsubmit') {
    //    $('#ddlReason').css('border', '1px solid red');
    //    $('#ddlReason').focus();
    //    return false;
    //}
    //else {
    //    $('#ddlReason').css('border', '1px solid #ccc');
    //}

    //if ($("input[name='optradio']:checked").val() == 1) {
    //    if (FileData.length == 0 && FileDraftValidate == 0) {
    //        alertify.myAlert("if there is no Attachment please check No and continue!", 'Alert');

    //        return false;
    //    }
    //}

    //else if ($('#ddlLabName').val() == '' || $('#ddlLabName').val() == '0') {
    //    alertify.myAlert("Without lab name you can not draft!", 'Alert');

    //    return false;
    //}
    //if (Id == 'btnsubmit') {
    //    savemode = 1;
    //}
    //else {
    //    savemode = 0;
    //}
    //var LRRefNo = getUrlVars()["LRRefNo"];

    //if (typeof LRRefNo !== "undefined") {

    //}
    //else {
    //    LRRefNo = 0;
    //}

    //var SendEmailval = $("#txtnotifyto").val().split(",");

    //var SendToEmail = [];

    //var Return = true;

    //if (SendEmailval[0] != "") {


    //    $.each(SendEmailval, function (i) {
    //        if (SendEmailval[i].toLowerCase().indexOf("daimlertruck.com") === -1) {
    //            Return = false;
    //        }
    //        else {
    //            // Manager.push(txtmanagerval[i]);
    //            json = {
    //                "Email": SendEmailval[i]
    //            };
    //            SendToEmail.push(json);

    //        }
    //    });
    //}




    //if (Return == false) {
    //    $("#idnotifyto").text("Email should be daimlertruck.com");
    //    $("#idnotifyto").show();
    //    return false;
    //}
    //else {
    //    $("#idnotifyto").hide();
    //}


    //above - old inputs validation




    var formdata = new FormData();
    formdata.append("LabRequestId", $("#LabRequestId").val()),
        formdata.append("LRRefNo", LRRefNo),
        formdata.append("RequestorName", $("#txtRequestorName").val()),
        formdata.append("Department", $("#txtDepartment").val()),
        formdata.append("SubDepartment", $("#txtSubDepartment").val()),
        formdata.append("ContactNo", $("#txtContactNo").val()),
        formdata.append("LabId", $("#ddlLabName").val()),
        formdata.append("TestClassId", $("#ddlTestClass").val()),
        formdata.append("IARTypeId", $("#ddlIARType").val()),
        formdata.append("IARNo", $("#txtIARNo").val()),
        formdata.append("PartId", $("#hdnPartNoId").val() == 0 ? 0 : parseInt($("#hdnPartNoId").val())),//passing int value 0, by default. 
        formdata.append("PartNo", $("#txtPartNo").val()),
        formdata.append("PartName", $("#txtPartName").val().trim()),
        formdata.append("PartStatus", $("#ddlPartStatus").val().trim()),
        formdata.append("PartReturnType", $("#ddlPartReturnType").val()),
        formdata.append("Supplier", $("#ddlSupplier").val()),
        formdata.append("Model", $("#ddlModel").val()),
        formdata.append("Variant", $("#ddlVariant").val()),
        formdata.append("ZGSNo", $("#txtZGSNo").val()),
        formdata.append("TestReasonId", $("#ddlReason").val()),
        formdata.append("Vehicledetails", $("#txtVehicledetails").val()),
        formdata.append("Subject", $("#txtSubject").val()),
        formdata.append("PurposeInspection", $("#txtPurpose").val()),
        formdata.append("Quantity", $("#txtQuantity").val() == '' ? 0 : parseInt($("#txtQuantity").val())),//passing int value 0, by default. 
        formdata.append("MeasurementParameter", $("#txtTestDetails").val()),
        formdata.append("Drawingattached", $("input[name='optradio']:checked").val()),
        formdata.append("Priority", $("#ddlPriority").val()),
        formdata.append("Createdby", UserDetails.UserName),
        formdata.append("CreatedId", UserDetails.UserId),
        formdata.append("IsSaved", savemode),

        /* formdata.append("Notifyto", $("#txtnotifyto").val());*/

        $.each(SendToEmail, function (key, value) {
            formdata.append("Notifytoarr[" + key + "]", value.Email);
        })

    $.each(FileData, function (key, value) {
        formdata.append("FileName[" + key + "]", value.Name);
        formdata.append("FileData[" + key + "]", value.Data);
        formdata.append("FileSize[" + key + "]", value.Size);
    })

    var ApiFunc = '../Home/CreateRequestPost/';
    //Post Method to Create Request
    // PostMethod(ApiFunc, CreateRequest, UserDetails.token, function (data) {
    JsonFormPostMethod(ApiFunc, formdata, '', function (data) {

        if (data == "true") {

            if (savemode == 1) {
                alertify.alert("New request has been created and sent to respective stakeholders for review").set('onok', function (closeEvent) { window.location.href = "../Home/LabTracker"; });

            }
            else if (savemode == 0) {
                alertify.alert("Your request has been saved as draft").set('onok', function (closeEvent) { window.location.href = "../Home/LabTracker"; });
            }
            ClearData();
        }
        else {
            alertify.alert('Error Processing');
        }

    });

}


function CreatedRequest() {
    window.location.href = "../Home/LabTracker";
}

function ClearData() {
    //Periyan





    //$("#txtContactNo,#txtIARNo,#hdnPartNoId,#txtPartNo,#txtPartName,#txtZGSNo,#txtVehicledetails,#txtSubject,#txtPurpose,#txtQuantity,#txtTestDetails,#txtnotifyto").val('');
    //$("#txtContactNo,#txtIARNo,#hdnPartNoId,#txtPartNo,#txtPartName,#txtZGSNo,#txtVehicledetails,#txtSubject,#txtPurpose,#txtQuantity,#txtTestDetails").val('');
    //$('#ddlSupplier').val(''); //txtbox
    //$('#ddlVariant').val(''); //should be 0
    //$("#ddlLabName,#ddlTestClass,#ddlIARType,#ddlPartStatus,#ddlPartReturnType,#ddlModel,#ddlReason").val(0);
    //$("#ddlPriority").val(1);
    FileData = [];
    JsonFileSize = [];
    $('#DocTable').empty();//Empty File Upload
    savemode = 0;
    $("#ShowAttachment").show();
    //$('input[name=optradio][value=1]').attr('checked', true);
    //$("#ddlLabName,#ddlTestClass,#ddlIARType,#ddlPartStatus,#ddlPartReturnType,#ddlModel,#ddlReason").css('border', '1px solid #ccc');
    //$("#rdoYes").prop('checked', true);
    //$("#rdono").prop('checked', false);
}

function deleteFile(id, filename) {

    var count = parseInt($("#hdnfilecount").val());
    FileData = $.grep(FileData, function (element, index) {
        return element.name != filename;
    });
    $('#' + id).remove();
    count--;
    $("#hdnfilecount").val(count);
}

var FileData = [];
var FileDraftValidate = 0;
var JsonFileSize = [];
function FileUpload(filedata, filename, filesize) {
    //$('#DocTable').empty();
    var json = {};
    var html = '';
    for (var i = 0; i < filename.length; i++) {
        var ids = guid();
        var fs = (filesize[i] / 1024 / 1024).toFixed(2);
        var ext = filename[i].split('.')[1];

        if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "jfif") {

            html += '<div id="' + ids + '" class="col-xs-4 doutline">'
                + '<div style ="border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                + '<div class="dtemp col-xs-3"><img class="img-responsive" src="../Images/' + CheckFileType(filename[i]) + '"/>'
                + '<p class="mbsize"><span>' + fs.toString() + " MB" + '</span ></p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                + '<h4 class="dfilename"><label class="control-label dfilenametext">' + filename[i] + '</label></h4>'
                //+ '<p class="dfilenameuser" title="' + UserDetails.Name + '">' + UserDetails.Name + '</p>'
                + '<p class="dfileuploadon">' + new Date().toString().split('GMT')[0] + ''
                + '<span class="pull-right btn-group">'
                + '<button onclick="downloadFile(\'' + filename[i] + '\',\'' + filedata[i] + '\');" type="button" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></button>'
                + '<button  onclick="deleteFileAjax(\'' + filename[i] + '\',\'' + ids + '\',\'' + "" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                + '</span></p></div></div></div></div>'
        }
        else {
            html += '<div id="' + ids + '" class="col-xs-4 doutline">'
                + ' <div style = " border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(filename[i]) + '"/>'
                + '<p class="mbsize"><span>' + fs.toString() + " MB" + '</span ></p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                + '<h4 class="dfilename"><label class="control-label dfilenametext">' + filename[i] + '</label></h4>'
                //+ '<p class="dfilenameuser" title="' + UserDetails.Name + '">' + UserDetails.Name + '</p>'
                + '<p class="dfileuploadon">' + new Date().toString().split('GMT')[0] + ''
                + '<span class="pull-right btn-group">'
                + '<button onclick="downloadFile(\'' + filename[i] + '\',\'' + filedata[i] + '\');" type="button" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></button>'
                + '<button  onclick="deleteFileAjax(\'' + filename[i] + '\',\'' + ids + '\',\'' + "" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                + '</span></p></div></div></div></div>'
        }


        json = { "Name": filename[i], "Size": fs, "Data": filedata[i] };
        FileData.push(json);
        JsonFileSize.push(json)

    }

    $('#DocTable').append(html);

    for (var i = 0; i < JsonFileSize.length; i++) {
        globalx += parseFloat(JsonFileSize[i].Size);

    }
    JsonFileSize = [];

    console.log(globalx);

    //else {      
    //    alertify.myAlert("File Size should be below 10 MB", 'Alert');
    //}
}

function downloadFile(filename, data) {
    alertify.myAlert("Please create request for the part and then download the file", 'Alert');
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
var deletefilename = '';
var deleteid = '';
var deletepartreqreno = '';
function deleteFileAjax(filename, id, partreqreno) {

    $('#deleteModal').modal('show');
    deletefilename = filename;
    deleteid = id;
    deletepartreqreno = partreqreno;
}

function DeleteFilesPopup() {

    var filename, id, partreqreno;
    filename = deletefilename;
    id = deleteid;
    partreqreno = deletepartreqreno;
    FileData = $.grep(FileData, function (element, index) {
        return element.Name != filename;
    });

    if (partreqreno == '') {

    }
    else {

        //naresh
        //var ApiFunc = UserDetails.Api + 'LabRequest.svc/' + "DeleteFiles?PartReqRefno=" + partreqreno + "&FileName=" + filename.trim() + "&UserId=" + UserDetails.UserId + "&FileOrgin=LabFiles";

        //GetMethod(ApiFunc, UserDetails.token, function (data) {
        //    console.log(data);

        //});

    }
    deletefilename = '';
    deleteid = '';
    deletepartreqreno = '';
    $('#' + id).remove();
}

function CheckFileType(filename, filedata) {

    var ext = filename.split('.')[1];
    var Filetype = '';
    if (ext == "pptx" || ext == "ppt") {
        Filetype = "ppt.png";
    }
    else if (ext == "xls" || ext == "xlsx" || ext == "csv") {
        Filetype = "excel.png";
    }
    else if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg") {
        Filetype = "image.png";
        //Filetype = filedata;
    }
    else if (ext == "doc" || ext == "docx") {
        Filetype = "word.png";
    }
    else if (ext == "pdf") {
        Filetype = "pdf.png";
    }
    else if (ext == "mp4") {
        Filetype = "video.png";
    }
    else if (ext == "txt") {
        Filetype = "text.png";
    }
    else if (ext == "zip") {
        Filetype = "zip.png";
    }
    else {
        Filetype = "notype.png";
    }

    return Filetype;
}



function InitializeUrl() {


    /*var LRRefNo = getUrlVars()["LRRefNo"];*/

    var ApiFunc = '../Home/PageLoadData/';
    PostMethod(ApiFunc, '', '', function (data) {

        if (data != null && data != '') {
            UserDetails = data;

            //Dropdown's Fill
            CreateRequestDropDown();// master dropdown
        }
        else {
            alert("Session Expired");
            window.location.href = "Login";
        }
        //var LabRequestID = getUrlVars()["LabRequestID"];
        //var LabRequest = getUrlVars()["Request"];
        //if (LabRequestID != null) {
        //    BindDraftDetails(LabRequestID, LabRequest)
        //}
    });


}

var PartDetails;
var sddlTestClases = [];
var sddlTestClasesMeasureLab = [];
function CreateRequestDropDown() {
    //naresh
    var ApiFunc = UserDetails.Api + 'LabRequest.svc/GetCreateRequest?UserId=' + UserDetails.UserId + '&LabNames=' + UserDetails.LabName + '';
    var optionhtml1 = '<option value="" selected>' + "Select" + '</option>';
    var optionhtmlnew = '<option value="0" selected>' + "Select" + '</option>';

    var sddlLabNames = [];
    //var sddlTestClases = [];
    var iarType = [];
    var sddlModel = [];
    var sddlReason = [];
    var arrPartNo = [];
    var partstatus = [];
    var partReturnType = [];
    var priority = [];
    var VariantDetails = [];
    GetMethod(ApiFunc, UserDetails.token, function (data) {
        console.log(data);

        //dropdowndata = data;

        //#region Lab DropDown                                                          
        $.each(data.LabNames, function (i, item) {
            if (i == 0) {
                sddlLabNames.push(optionhtml1);
            }
            var optionhtml = '<option value="' + item.LabId + '">' + item.LabName + '</option>';
            sddlLabNames.push(optionhtml);
        });
        $("#ddlLabName").empty().append(sddlLabNames);
        //#endregion

        //#region Test Class DropDown
        $.each(data.TestClases, function (i, item) {
            if (i == 0) {
                sddlTestClases.push(optionhtml1);
                sddlTestClasesMeasureLab.push(optionhtml1);
            }
            if (item.TestClassName == "Measurement") {
                var opthtml = '<option value="' + item.TestClassId + '">' + item.TestClassName + '</option>';
                sddlTestClasesMeasureLab.push(opthtml);
            }
            else {
                var optionhtml = '<option value="' + item.TestClassId + '">' + item.TestClassName + '</option>';
                sddlTestClases.push(optionhtml);
            }
        });
        $("#ddlTestClass").empty().append(optionhtml1);
        //#endregion

        //#region IARType DropDwon 
        $.each(data.iarCategory, function (i, item) {
            //if (i == 0) {
            //    iarType.push(optionhtml1);
            //}
            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
            iarType.push(optionhtml);
        });
        $("#ddlIARType").empty().append(iarType);
        $("#ddlIARType").val(2);
        //#endregion

        //#region PartStatus DropDown
        $.each(data.partStatus, function (i, item) {
            if (i == 0) {
                partstatus.push(optionhtml1);
            }
            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
            partstatus.push(optionhtml);
        })
        $("#ddlPartStatus").empty().append(partstatus.join(''));
        //#endregion

        //#region PartReturnType DropDown
        $.each(data.partReturntype, function (i, item) {
            if (i == 0) {
                partReturnType.push(optionhtmlnew);
            }
            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
            partReturnType.push(optionhtml);
        })
        $("#ddlPartReturnType").empty().append(partReturnType.join(''));
        //#endregion

        //#region Model DropDwon
        $.each(data.Model, function (i, item) {
            if (i == 0) {
                sddlModel.push(optionhtmlnew);
            }
            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
            sddlModel.push(optionhtml);
        });
        $("#ddlModel").empty().append(sddlModel);
        //#endregion        

        //#region Part No DropDwon
        $.each(data.Part, function (i, item) {
            var optionhtml = '<option value="' + item.PartNo + '"></option>';
            arrPartNo.push(optionhtml);
        });
        $("#ddlPartNo").empty().append(arrPartNo.join(''));
        //#endregion

        PartDetails = data.Part;

        //#region Reasonfortest DropDwon
        $.each(data.Reason, function (i, item) {
            if (i == 0) {
                sddlReason.push(optionhtmlnew);
            }
            var optionhtml = '<option value="' + item.ReasonId + '">' + item.Reason + '</option>';
            sddlReason.push(optionhtml);
        });
        $("#ddlReason").empty().append(sddlReason);
        //#endregion

        //#region Priority DropDwon
        $.each(data.priorityDetails, function (i, item) {

            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
            priority.push(optionhtml);
        });
        $("#ddlPriority").empty().append(priority);
        //#endregion       
        $.each(data.VariantType, function (i, item) {
            if (i == 0) {
                VariantDetails.push(optionhtmlnew);
            }
            var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>'
            VariantDetails.push(optionhtml);
        });
        $('#ddlVariant').empty().append(VariantDetails);

        console.log(VariantDetails);

        $.each(data.RequestDetails, function (i, item) {
            $("#txtRequestorName").val(item.Name);
            $("#txtDepartment").val(item.DeptName);
            $("#txtSubDepartment").val(item.SubDeptName);
        });

        $("#txtIARNo,#ddlIARType").attr("disabled", "disabled");

        //Allow Number Fields
        $("#txtQuantity,#txtContactNo").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

    });
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;

}
function Notifykeyup() {

    var mails = $("#txtmulemail").val();
    let result = mails.includes("daimlertruck.com");


    if (isValidEmailAddress($("#txtmulemail").val()) == false || result == false) {



        $('#txtmulemail').css('border', '1px solid red');
        $('#txtnotifyto').focus();
        $('#idnotifyto').show();
        return false;

    }
    else {
        $('#txtmulemail').css('border', '1px solid #ccc');
        $('#idnotifyto').hide();
    }
}



