var globalx = 0;

$(document).ready(function () {

    $('#txtnotifyto').tagsinput('removeAll');

    $("#requestCreateCopy").on("click", function () {

        $("#confirmRequestCreateCopy").modal('show');

    });
    $("#btnCopyCancel").on("click", function () {

        $("#confirmRequestCreateCopy").modal('hide');

    });
    $("#btnCopySubmit").on("click", function () {

        var url = '../Home/CreateRequest';
        window.location.href = url + '?LabRequestID=' + $("#LabRequestId").val() + "&Request=" + 'CopyText';

    });



    $('#ddlIARType').change(function () {
        if ($('#ddlIARType').val() == "1") {
            $('#txtIARNo').prop('disabled', false);
            $('#txtIARNo').addClass('validate[required]');
            $('#txtIARNo').css('border', '1px solid red');
        }
        else {
            $('#txtIARNo').val('');
            $('#txtIARNo').prop('disabled', true);
            $('#txtIARNo').removeClass('validate[required]');
            $('#txtIARNo').css('border', '1px solid #ccc');
        }
    })
    //$('#ddlTestClass').change(function () {
    //    if ($('#ddlTestClass').val() == "7") {
    //        $('#ddlReason').val(15);
    //        $('#txtQuantity').val(0);
    //        $('#ddlPartReturnType').val(3);
    //        $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', true);
    //    }
    //    else {
    //        $('#ddlReason').val(0);
    //        $('#txtQuantity').val('');
    //        $('#ddlPartReturnType').val(0);
    //        $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', false);
    //    }
    //});
    var PartReturnTypeDraft = 0;
    var ReasonDraft = 0;
    var QuantityDraft = 0;
    var CondDraft = false;
    $('#ddlTestClass').change(function () {
        if ($('#ddlTestClass').val() == "7") {
            if (!CondDraft) {
                ReasonDraft = $('#ddlReason').val();
                QuantityDraft = $('#txtQuantity').val();
                PartReturnTypeDraft = $('#ddlPartReturnType').val();
                CondDraft = true;
            }
            $('#ddlReason').val(15);
            $('#txtQuantity').val(0);
            $('#ddlPartReturnType').val(3);
            $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', true);
        }
        else {
            $('#ddlPartReturnType').val(PartReturnTypeDrafts != 0 ? PartReturnTypeDrafts : PartReturnTypeDraft);
            $('#ddlReason').val(ReasonfortestDrafts != 0 ? ReasonfortestDrafts : ReasonDraft);
            $('#txtQuantity').val(QuantityDrafts != 0 ? QuantityDrafts : '');
            $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', false);
        }
    });

    $('#progress-status-email').multiple_emails({ position: "bottom" });
    $('#btnReject').click(function () {
        $('#txtRejectReason').val('');
    })

    $(".date").datetimepicker({
        autoclose: true,
        vertical: 'top',
        pickTime: false,
        minView: 2,
        format: "dd/mm/yyyy"
    });

    $(".inner-count").on("click", function () {

        $(".inner-count").removeClass("active");

        $(this).addClass("active");

    });
    //Feasibility if Yes
    $("#ddlFeasibility").change(function () {
        if ($("#ddlFeasibility").val() == 1)
            $("#divFeasibilityYes").show();
        else
            $("#divFeasibilityYes,#divLaboratoryName").hide();
    });
    //If "External" /  "Partially External" is selected 
    $("#ddlFeasibilityYes").change(function () {
        $('#txtLaboratoryName').css('border', '1px solid #ccc');
        if ($("#ddlFeasibilityYes").val() == "2" || $("#ddlFeasibilityYes").val() == "3")
            $("#divLaboratoryName").show();
        else { $("#divLaboratoryName").hide(); $('#txtLaboratoryName').val(''); }

    });
    $("#divNoRecords").hide();
    //show hide header accept or reject 
    $("#divPendingReject,#divPendingAccept,#StatusClosingrequest,#divCloseRequest,#divReject,#divAmendmentreport,#divFeasibilityYes,#divLaboratoryName").hide();

    $("#txtUploadedby").prop('disabled', true);

    $('#UpdateRequestAll').on('keyup keypress', function (e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); return false; } });
    $("#htdStatus").empty();
    $("#htdRequestStatus").empty();
    InitializeUrl();


    $("#CreateRequest").validationEngine('attach', {
        onValidationComplete: function (form, status) {

            if (status == true) {

                CreateRequestSave();
            }
            else {
                CreateRequestValidate();
                return false;
            }

        },
        'showPrompts': false
    });

    $("#UpdateRequestAll").validationEngine('attach', {
        onValidationComplete: function (form, status) {

            if (status == true) {
                RequestUpdate();
            }
            else {
                RequestValidate();
                return false;
            }
        },
        'showPrompts': false
    });

    $('#btnRequestConfirm').click(function () {

        //if ($('#txtSampleCondition').val() == '' || $('#txtSampleCondition').val() == '0') {
        //    $('#txtSampleCondition').css('border', '1px solid red');
        //    $('#txtSampleCondition').focus();
        //    return false;
        //}
        //else {
        //    $('#txtSampleCondition').css('border', '1px solid #ccc');
        //}

        //if ($('#ddlFeasibility').val() == '' || $('#ddlFeasibility').val() == '0') {
        //    $('#ddlFeasibility').css('border', '1px solid red');
        //    $('#ddlFeasibility').focus();
        //    return false;
        //}
        //else {
        //    $('#ddlFeasibility').css('border', '1px solid #ccc');
        //} 

        if ($("input[name='optTestType']:checked").val() == 2 && $('#txtLaboratoryName').val() == "") {
            $('#txtLaboratoryName').css('border', '1px solid red');
            $('#txtLaboratoryName').focus();
            return false;
        }
        else {
            $('#txtLaboratoryName').css('border', '1px solid #ccc');
        }


        if ($('#ddlPJLAScope').val() == '' || $('#ddlPJLAScope').val() == '0') {
            $('#ddlPJLAScope').css('border', '1px solid red');
            $('#ddlPJLAScope').focus();
            return false;
        }
        else {
            $('#ddlPJLAScope').css('border', '1px solid #ccc');
        }

        if ($('#txtTentativeDate').val() == '' || $('#txtTentativeDate').val() == '0') {
            $('#txtTentativeDate').css('border', '1px solid red');
            $('#txtTentativeDate').focus();
            return false;
        }
        else {
            $('#txtTentativeDate').css('border', '1px solid #ccc');
        }
        if ($('#txtTestMethod').val() == '' || $('#txtTestMethod').val() == '0') {
            $('#txtTestMethod').css('border', '1px solid red');
            $('#txtTestMethod').focus();
            return false;
        }
        else {
            $('#txtTestMethod').css('border', '1px solid #ccc');
        }
        var Status = "";
        if ($("#btnRequestConfirm").text() == "Update") {
            Status = "Update";
            RequestConfirm("Accept", 'User');
        }
        else {
            Status = "Accept";
            //var checkstr = confirm('Do you want to ' + Status + ' the Status?');
            var checkstr = confirm('Are you sure ? Want to ' + Status + ' this request ?');

            if (checkstr == true) {
                RequestConfirm("Accept", 'User');
            }
            else {
                return false;
            }
        }
    });

    $('#btnRequestReject').click(function () {
        if ($('#txtRejectReason').val() == '' || $('#txtRejectReason').val() == '0') {
            $('#txtRejectReason').css('border', '1px solid red');
            $('#txtRejectReason').focus();
            return false;
        }
        else {
            $('#txtRejectReason').css('border', '1px solid #ccc');
        }

        RequestConfirm("Reject", 'User');
        //var checkstr = confirm('Do you want to close the Status?');
        var checkstr = confirm('Are you sure ? Want to ' + Reject + ' this request ?');
        if (checkstr == true) {
            RequestClose("Close");
        }
        else {

            return false;
        }

    });

    /// admin reject requetst after accepted
    $('#btnRequestRejectAdmin').click(function () {
        if ($('#txtRejectReasonAdmin').val() == '' || $('#txtRejectReasonAdmin').val() == '0') {
            $('#txtRejectReasonAdmin').css('border', '1px solid red');
            $('#txtRejectReasonAdmin').focus();
            return false;
        }
        else {
            $('#txtRejectReasonAdmin').css('border', '1px solid #ccc');
        }
        RequestConfirm("Reject", 'Admin');
        //var checkstr = confirm('Do you want to close the Status?');
        var checkstr = confirm('Are you sure ? Want to ' + Reject + ' this request ?');
        if (checkstr == true) {
            RequestClose("Close");
        }
        else {

            return false;
        }

    });

    $('#btnRequestClose').click(function () {
        if ($('#ddlResult').val() == '' || $('#ddlResult').val() == '0') {
            $('#ddlResult').css('border', '1px solid red');
            $('#ddlResult').focus();
            return false;
        }
        //else if ($('#Remarktxt').val() == '')
        //{
        //    $('#Remarktxt').css('border', '1px solid red');
        //    $('#Remarktxt').focus();
        //    return false;
        //}
        else {
            $('#ddlResult').css('border', '1px solid #ccc');
            $('#Remarktxt').css('border', '1px solid #ccc');
        }

        //if ($('#ddlSampleStatus').val() == '' || $('#ddlSampleStatus').val() == '0') {
        //    $('#ddlSampleStatus').css('border', '1px solid red');
        //    $('#ddlSampleStatus').focus();
        //    return false;
        //}
        //else {
        //    $('#ddlSampleStatus').css('border', '1px solid #ccc');
        //}

        if (FileDataClose.length == 0) {
            $('#Attachmentshow').css('border', '1px solid red');
            $('#ddlSampleStatus').focus();
            $('#closefilevalidation').css('display', '');

            return false;
        }
        else {
            $('#Attachmentshow').css('border', '1px solid #ccc');
            $('closefilevalidation').css('display', 'none');
        }

        if ($('#txtmulemail').hasClass('multiple_emails-error')) {
            return false;
        }
        else {
            $('#ClsReportToClosingRequest').css('display', 'none');
        }


        var checkstr = confirm('Are you sure? Want to Close this request?');
        if (checkstr == true) {
            RequestClose("Close");
        }
        else {

            return false;
        }



    });

    $('#btnAmendment').click(function () {

        if ($('#txtAmendmentdetails').val() == '' || $('#txtAmendmentdetails').val() == '0') {
            $('#txtAmendmentdetails').css('border', '1px solid red');
            $('#txtAmendmentdetails').focus();
            return false;
        }
        else {
            $('#txtAmendmentdetails').css('border', '1px solid #ccc');
        }

        if (FileDataAmendment.length == 0) {
            $('#AttachmentAmendment').css('border', '1px solid red');
            $('#AttachmentAmendment').focus();
            $('#amenfilevalidation').css('display', '');
            return false;
        }
        else {
            $('#AttachmentAmendment').css('border', '1px solid #ccc');
            $('#amenfilevalidation').css('display', 'none');
        }

        AmendmentClose();

    });

    $("#txtPartNo").on("change", function (e) {

        var val = $("#txtPartNo").val();
        var obj = $("#ddlPartNo").find("option[value='" + val + "']");

        if (obj != null && obj.length > 0) {
            var data = $.grep(PartDetails, function (element, index) {
                return element.PartNo == $("#txtPartNo").val();
            });

            if (data.length > 0) {

                $('#hdnPartNoId').val(data[0].PartId);
                $('#txtPartNo').css('border', '1px solid #ccc');
                $('#txtPartName').val(data[0].PartName);
                // $('#txtSupplierName').val(data[0].SupplierName);
            }
            else {

                var PartNo = $("#txtPartNo").val();
                $('#hdnPartNoId').val(0);
                $("#txtPartNo").removeAttr("disabled");
                $("#txtPartName").removeAttr("disabled");
                // $("#txtSupplierName").removeAttr("disabled");
            }

        }
        else {

            var PartNo = $("#txtPartNo").val();
            $('#hdnPartNoId').val(0);
            $("#txtPartNo").removeAttr("disabled");
            $("#txtPartName").removeAttr("disabled");
            // $("#txtSupplierName").removeAttr("disabled");

        }
    });


    MenuRemoveClass()
    $("#RequestTracker").addClass("active");

    if (window.File && window.FileList && window.FileReader) {
        $("#IARFiles").on("change", function (e) {

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
                        //FileUpload(filedata, filename, filesize, "DocTableMesure");
                        //LoaderHide();

                        var aa = filesize.reduce(getSum, 0);
                        LoaderHide();
                        if (parseFloat((aa / 1024 / 1024).toFixed(2)) + parseFloat(globalx) <= 10)
                            FileUpload(filedata, filename, filesize, "DocTableMesure");
                        else {

                            //alert("File Size should be below 10 MB, you have uploaded " + parseFloat((aa / 1024 / 1024).toFixed(2)) + globalx + "MB data");
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
                        //FileUpload(filedata, filename, filesize, "DocTable");
                        //LoaderHide();
                        var aa = filesize.reduce(getSum, 0);
                        LoaderHide();
                        if (parseFloat((aa / 1024 / 1024).toFixed(2)) + parseFloat(globalx) <= 10)
                            FileUpload(filedata, filename, filesize, "DocTable");
                        else {
                            alert("File Size should be below 10 MB, you have uploaded " + parseFloat((aa / 1024 / 1024).toFixed(2)) + globalx + "MB data");
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

    }

    // else {
    //    alert("Your browser doesn't support to File API")
    //}
    if (window.File && window.FileList && window.FileReader) {
        $("#AmendmentFiles").on("change", function (e) {

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
                        //FileUpload(filedata, filename, filesize, "DocTableCloseAmendment");
                        //LoaderHide();

                        var aa = filesize.reduce(getSum, 0);
                        LoaderHide();
                        if (parseFloat((aa / 1024 / 1024).toFixed(2)) + parseFloat(globalx) <= 10)
                            FileUpload(filedata, filename, filesize, "DocTableCloseAmendment");
                        else {
                            alert("File Size should be below 10 MB, you have uploaded " + parseFloat((aa / 1024 / 1024).toFixed(2)) + globalx + "MB data");
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
    LabRequestTrackerPopup();
});

var PartDetails;
var UserDetails;
var Equipmentdata = [];

function InitializeUrl() {


    var ApiFunc = '../Home/PageLoadData/';
    JsonPostMethod(ApiFunc, '', '', function (data) {

        if (data != null && data != '') {
            UserDetails = data;
            //Tracker Fill
            GetQMRequestTrackerTable();
            // GetQMRequestTrackerTable(data); 
        }
        else {
            alert("Session Expired");
            window.location.href = "Login";
        }
    });


}

var OverViewCount = ''
var QMTrackerdata = '';
var CountFirstCall = false;
function GetQMRequestTrackerTable() {

    var json = {
        "UserId": UserDetails.UserId,
        "LabNames": UserDetails.LabName
    };
    var Input = JSON.stringify(json);
    var ApiFunc = UserDetails.Api + 'LabRequest.svc/QMLabTrackerList';
    PostMethod(ApiFunc, Input, UserDetails.token, function (data) {
        CountFirstCall = true;
        QMTrackerdata = data.QMLabTracker;
        BindingTable(QMTrackerdata, data.TrackerStatusCount, data.Equipment);
        CreateRequestDropDown(data);

    });
}
function BindingTable(data, TrackerStatusCount, Equipment) {

    $("#divNoRecords").hide();
    var dropdownid = ["ddlAuditType", "ddlPlant", "ddlLeadAuditor", "ddlResp", "ddlNCType"];
    var statusimg = ["Accepted", "In - Progress", "Open", "Rejected"];
    var eqiup = [];
    if (data != null && data.length > 0) {
        //Uncheck the check all buttton 
        $('#chkall').prop('checked', false);
        checkedconcerns = [];
        var k = 0;

        table = $('#tblLabRequestTracker').DataTable({
            data: data,
            "columns": [
                //{ "data": "LRRefNo" },
                { "data": "LRRefNo" },
                { "data": "LabName" },
                { "data": "RequestDate" },
                { "data": "TentativeDate" },
                { "data": "RequestorName" },
                { "data": "SubDepartment" },
                { "data": "PartNo" },
                { "data": "PartName" },
                { "data": "SupplierName" },
                { "data": "Quantity" },
                { "data": "Reason" },
                { "data": "Equipment" },
                { "data": "StatusName" },
                { "data": "Status" },
                { "data": "Result" },
                { "data": "ClosedDate" },
                { "data": "Remarks" }
            ], "bSort": true, "bDestroy": true, "bLengthChange": false, "pageLength": 100, "dom": 'lrtip', "bSortCellsTop": true, "bFilter": true, "aaSorting": [], "deferRender": true,
            "createdRow": function (row, data, index) {
                $(row).addClass('tblLabRequestTracker');
                data.TentativeStyle == 'Red' && data.NewStatus == 'Accepted' ? $(row).addClass('colorred') : $(row).removeClass('colorred');
                var arr = data.Equipment.split(')')[1];
                if (arr != null && arr != '') {

                    var arr1 = arr.split(',');
                    eqiup = eqiup.concat(arr1);
                    eqiup = _.uniq(eqiup);
                }

                //$('td', row).eq(11).empty().append('<a href="#" data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="<b>' + data.NewStatus + '</b><br>' + data.StatusTooltip + '"><img src="../Images/' + data.Status + '.png" alt=""  /><span style="display:none">  ' + data.matool + '</span><input hidden="hidden" class="RowLabId"  value="' + data.LRRefNoDraft + '" /></a>');
                //$('td', row).eq(0).attr({ 'data-label': "LRRefNo", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.LRRefNo });
                //$('td', row).eq(1).attr({ 'data-label': "LabName", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.LabName });
                //$('td', row).eq(2).attr({ 'data-label': "RequestDate", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.RequestDate });
                //$('td', row).eq(3).attr({ 'data-label': "RequestorName", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.RequestorName });
                //$('td', row).eq(4).attr({ 'data-label': "SubDepartment", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.SubDepartment });
                //$('td', row).eq(5).attr({ 'data-label': "Part No", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.PartNo });
                //$('td', row).eq(6).attr({ 'data-label': "Part Name", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.PartName });
                //$('td', row).eq(7).attr({ 'data-label': "Supplier Name", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.SupplierName });
                //$('td', row).eq(8).attr({ 'data-label': "Quantity", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Quantity });
                //$('td', row).eq(9).attr({ 'data-label': "Reason", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Reason });
                //$('td', row).eq(10).attr({ 'data-label': "RequestStatus", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.StatusName }); 
                //$('td', row).eq(12).attr({ 'data-label': "Result", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Result });
                //$('td', row).eq(13).attr({ 'data-label': "ClosedDate", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.ClosedDate });

                $('td', row).eq(13).empty().append('<a href="#" data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="<b>' + data.NewStatus + '</b><br>' + data.StatusTooltip + '"><img src="../Images/' + data.Status + '.png" alt=""  /><span style="display:none">  ' + data.matool + '</span><input hidden="hidden" class="RowLabId"  value="' + data.LRRefNoDraft + '" /></a>');
                $('td', row).eq(0).attr({ 'data-label': "LRRefNo", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.LRRefNo });
                $('td', row).eq(1).attr({ 'data-label': "LabName", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.LabName });
                $('td', row).eq(2).attr({ 'data-label': "RequestDate", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.RequestDate });
                $('td', row).eq(3).attr({ 'data-label': "TentativeDate", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.TentativeDate });
                $('td', row).eq(4).attr({ 'data-label': "RequestorName", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.RequestorName });
                $('td', row).eq(5).attr({ 'data-label': "SubDepartment", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.SubDepartment });
                $('td', row).eq(6).attr({ 'data-label': "Part No", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.PartNo });
                $('td', row).eq(7).attr({ 'data-label': "Part Name", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.PartName });
                $('td', row).eq(8).attr({ 'data-label': "Supplier Name", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.SupplierName });
                $('td', row).eq(9).attr({ 'data-label': "Quantity", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Quantity });
                $('td', row).eq(10).attr({ 'data-label': "Reason", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Reason });
                $('td', row).eq(11).attr({ 'data-label': "Equipment", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Equipment });
                $('td', row).eq(12).attr({ 'data-label': "RequestStatus", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.StatusName });
                $('td', row).eq(14).attr({ 'data-label': "Result", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Result });
                $('td', row).eq(15).attr({ 'data-label': "ClosedDate", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.ClosedDate });
                $('td', row).eq(16).attr({ 'data-label': "Remarks", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Remarks });

            }, "autoWidth": false,

            columnDefs: [
                {

                }
            ],
            "drawCallback": function (settings) {
                //$("tblLabRequestTracker tr").on("click", "td:last-child", function (event) {
                //    event.stopPropagation();
                //});
                //$("#tblLabRequestTracker tr td:first-child, #tblLabRequestTracker tr th").on("click", function (event) {
                //    event.stopPropagation();
                //});

            },
            initComplete: function (index) {
                this.api().columns().every(function (i) {
                    var column = this;

                    var columnIndex = this.index()
                    switch ($(".filter th:eq(" + columnIndex + ")").attr('class')) {
                        case 'filterdrop':
                            //var select = $('<select  class="tableheadinput form-control input-sm"><option value="">Select</option></select>')
                            //    .appendTo($(".filter th:eq(" + columnIndex + ")").empty());

                            var select = $('<select id="' + dropdownid[k] + '" class="tableheadinput form-control input-sm"><option value="">Select</option></select>')
                                .appendTo($(".filter th:eq(" + columnIndex + ")").empty()).on('change', function () {
                                    var val = $(this).val();
                                    column
                                        .search(val ? '^' + $(this).val() + '$' : val, true, false).draw();
                                    OverViewCountFilter();
                                });

                            column.data().unique().sort().each(function (d, j) {
                                if (d != '') {
                                    select.append('<option data-thumbnail="../Images/' + d + '.png"  value="' + d + '">' + d + '</option>')
                                    //  select.append('<option  value="' + d + '">' + d + '</option>') 
                                }
                            });

                            k = k + 1;

                            break;
                        case 'filterdrop1':

                            var select = $('<select id="ddlAuditee" class="tableheadinput form-control input-sm"><option value="">Select</option></select>')
                                .appendTo($(".filter th:eq(" + columnIndex + ")").empty()).on('change', function () {
                                    column
                                        .search($(this).val())
                                        .draw();
                                    OverViewCountFilter();
                                });

                            break;
                        case 'filtertxt':

                            $('input', $(".filter th:eq(" + columnIndex + ")")).on('keyup change', function () {

                                if (column.search() !== this.value) {

                                    column
                                        .search(this.value)
                                        .draw();
                                    OverViewCountFilter();
                                }

                            });
                            break;
                    }

                });
            }
        });

        $('#ddlAuditee').empty();
        var equipdata = [];

        $.each(Equipment, function (i, item) {
            if (i == 0) {
                var optionhtml1 = '<option value="">Select</option>';
                equipdata.push(optionhtml1);
            }
            var optionhtml = '<option>' + item.ModelName + '</option>';
            equipdata.push(optionhtml);
        });
        $('#ddlAuditee').append(equipdata.join(' '))
        // console.log(TrackerStatusCount);
        // if (TrackerStatusCount != null || TrackerStatusCount != "" || TrackerStatusCount != 'undefined') {
        if (TrackerStatusCount != null && TrackerStatusCount != "" && TrackerStatusCount != 'undefined' && CountFirstCall == true) {

            for (var i = 0; i < TrackerStatusCount.length; i++) {
                $("#Request" + i).html(TrackerStatusCount[i].Count);
            }
            CountFirstCall = false;
        }
        $('#chkall').on('click', function () {

            if (!this.checked) {
                //Empty Array and then uncheck the checkbox
                checkedconcerns = [];
                var rows = table.rows({ 'search': 'applied' }).nodes();
                $('input[type="checkbox"]', rows).prop('checked', false);
            }
            else {
                //Check/uncheck all checkboxes in the table
                var rows = table.rows({ 'search': 'applied' }).nodes();
                $('input[type="checkbox"]', rows).prop('checked', this.checked);
                //Empty Array and then push the data
                checkedconcerns = [];

                rows.$(".checkbox:checked").each(function () {
                    checkedconcerns.push($(this).val());
                    // console.log($(this).val());
                });
            }
        });

        $("#ddlAuditType").change(function () {            
            if ($("#ddlAuditType").val() != '') {

                $('#ddlAuditee').empty();
                var equipdata = [];                
                var data = $.grep(Equipment, function (element, index) {
                    return element.NLabName == $("#ddlAuditType").val();
                });                
                $.each(data, function (i, item) {
                    if (i == 0) {
                        var optionhtml1 = '<option value="">Select</option>';
                        equipdata.push(optionhtml1);
                    }
                    var optionhtml = '<option>' + item.ModelName + '</option>';
                    equipdata.push(optionhtml);
                });
                $('#ddlAuditee').append(equipdata.join(' '))
            }
            else {
                $('#ddlAuditee').empty();
                var equipdata = [];                
                $.each(Equipment, function (i, item) {
                    if (i == 0) {
                        var optionhtml1 = '<option value="">Select</option>';
                        equipdata.push(optionhtml1);
                    }
                    var optionhtml = '<option>' + item.ModelName + '</option>';
                    equipdata.push(optionhtml);
                });
                $('#ddlAuditee').append(equipdata.join(' '))
            }
        });

    }
    else {
        // to show the tracker count  
        if (data.length == 0 && CountFirstCall == true) {
            for (var i = 0; i < TrackerStatusCount.length; i++) {
                $("#Request" + i).html(TrackerStatusCount[i].Count);
            }
        }
        //end
        $("#divNoRecords").show();
    }
}


function LabRequestTrackerPopup() {

    $("#tblLabRequestTracker tbody").on("click", 'tr', function () {
        // alert('2times');
        var CreateRequest = "";
        var RequestFiles = "";
        var RequestclosedFiles = "";
        var EquipmentDetails = "";
        var AmendmentFiles = "";
        var Equipment = "";
        var CondDisable = "";
        $("#dAddEquipmentDetails").empty();
        $('#ClsReportToClosingRequest').css('display', 'none');
        FileDataClose = [];
        FileData = [];
        FileDataAmendment = [];
        // alert($(this).find('td:nth-child(2)').text()) 
        var FileUpdateCount;
        FileUpdateCount = 0;
        var date = new Date();

        LRRefNo = $(this).find('td:nth-child(1)').text();

        if (LRRefNo == "") {

            var url = '../Home/CreateRequest';
            window.location.href = url + '?LabRequestID=' + $(this).find('.RowLabId').val();
        }
        else {
            $("#createRequestModel").modal('show');
            var json = {
                "RequestNo": LRRefNo
            };
            var Input = JSON.stringify(json);

            var ApiFunc = UserDetails.Api + 'LabRequest.svc/GetLabTrackerDetails';

            PostMethod(ApiFunc, Input, UserDetails.token, function (data) {

                CreateRequest = data.CreateRequest;
                RequestFiles = data.RequestFiles;
                RequestclosedFiles = data.RequestclosedFiles;
                Equipment = data.Equipment;
                EquipmentDetails = data.EquipmentDetails;
                AmendmentFiles = data.AmendmentFiles;
                $("#txtIARNo,#txtZGSNo,#ddlVariant").val('');
                $('#txtnotifyto').tagsinput('removeAll');
                if (Equipment != null && Equipment.length > 0) {
                    Equipmentdata = [];
                    var optionhtml1 = '<option value="' + '0' + '" selected>' + "Select" + '</option>';
                    $.each(Equipment, function (i, item) {
                        if (i == 0) {
                            Equipmentdata.push(optionhtml1);
                        }
                        var optionhtml = '<option value="' + Equipment[i].EquipmentId + '">' + Equipment[i].EquipmentName + '</option>';
                        Equipmentdata.push(optionhtml);
                    });
                }
                //Concern Details Tab Values Bind  
                $("#LabRequestId").val(CreateRequest[0].LabRequestId);
                $("#LRRefNo").html(CreateRequest[0].RefNo);
                $("#txtRequestorName").val(CreateRequest[0].RequestorName);//'Edit Concern - ' + 
                $("#txtDepartment").val(CreateRequest[0].Department);
                $("#txtSubDepartment").val(CreateRequest[0].Department);
                $("#txtContactNo").val(CreateRequest[0].ContactNo);
                // RemoveValidation();
                $("#ddlLabName").val(CreateRequest[0].LabId);
                if (CreateRequest[0].LabId == "1") {
                    $("#ddlTestClass").empty().append(sddlTestClases);
                    $("#ddlTestClass").val(CreateRequest[0].TestClassId);
                }
                else {
                    $("#ddlTestClass").empty().append(sddlTestClasesMeasureLab);
                    $("#ddlTestClass").val(CreateRequest[0].TestClassId);
                }

                if (CreateRequest[0].IARTypeId == '0')
                    $("#ddlIARType").val('');
                else
                    $("#ddlIARType").val(CreateRequest[0].IARTypeId);
                if (CreateRequest[0].Model == '0')
                    $("#ddlModel").val('');
                else
                    $("#ddlModel").val(CreateRequest[0].Model);

                //if (CreateRequest[0].PartReturnType == '0')
                //    $("#ddlPartReturnType").val('');
                //else
                $("#ddlPartReturnType").val(CreateRequest[0].PartReturnType);
                PartReturnTypeDrafts = CreateRequest[0].PartReturnType;
                //if (CreateRequest[0].TestReasonId == '0')
                //    $("#ddlReason").val('');
                //else
                $("#ddlReason").val(CreateRequest[0].TestReasonId);
                ReasonfortestDrafts = CreateRequest[0].TestReasonId;

                if (CreateRequest[0].Variant == null || CreateRequest[0].Variant == 0 || CreateRequest[0].Variant == '' || CreateRequest[0].Variant == 'null') {
                    $("#ddlVariant").val('');
                }
                else {
                    $("#ddlVariant").val(CreateRequest[0].Variant);
                }
                //$("#txtnotifyto").val(CreateRequest[0].Notifyto);

                if (CreateRequest[0].IARTypeId == '1') {
                    $("#txtIARNo").prop('disabled', false);
                    $("#txtIARNo").val(CreateRequest[0].IARNo);
                }
                else {
                    $("#txtIARNo").prop('disabled', true);

                }
                var obj = $("#ddlPartNo").find("option[value='" + CreateRequest[0].PartNo + "']");

                if (obj != null && obj.length > 0) {
                    var data = $.grep(PartDetails, function (element, index) {
                        return element.PartNo == CreateRequest[0].PartNo;
                    });

                    if (data.length > 0) {
                        $('#hdnPartNoId').val(data[0].PartId);
                        $('#txtPartNo').val(CreateRequest[0].PartNo);
                        $('#txtPartName').val(data[0].PartName);
                    }
                    else {
                        var PartNo = $("#txtPartNo").val();
                        $('#hdnPartNoId').val(0);
                        $("#txtPartNo").removeAttr("disabled");
                        $("#txtPartName").removeAttr("disabled");
                    }
                }
                else {

                    var PartNo = $("#txtPartNo").val();
                    $('#hdnPartNoId').val(0);
                    $("#txtPartNo").removeAttr("disabled");
                    $("#txtPartName").removeAttr("disabled");
                }
                $("#ddlPartStatus").val(CreateRequest[0].PartStatus);
                // $("#ddlPartReturnType").val(CreateRequest[0].PartReturnType);
                $("#ddlSupplier").val(CreateRequest[0].Supplier);
                //$("#ddlModel").val(CreateRequest[0].Model);
                $("#txtZGSNo").val(CreateRequest[0].ZGSNo);
                //$("#ddlReason").val(CreateRequest[0].TestReasonId); 
                if (CreateRequest[0].Vehicledetails.length > 70)
                    $("#txtVehicledetails").val(CreateRequest[0].Vehicledetails).css('height', CreateRequest[0].Vehicledetails.length > 300 ? 150 : 100);
                else
                    $("#txtVehicledetails").val(CreateRequest[0].Vehicledetails).css('height', 'auto');

                if (CreateRequest[0].Subject.length > 70)
                    $("#txtSubject").val(CreateRequest[0].Subject).css('height', CreateRequest[0].Subject.length > 300 ? 150 : 100);
                else
                    $("#txtSubject").val(CreateRequest[0].Subject).css('height', 60);
                if (CreateRequest[0].PurposeInspection.length > 70)
                    $("#txtPurposeInspection").val(CreateRequest[0].PurposeInspection).css('height', CreateRequest[0].PurposeInspection.length > 300 ? 150 : 100);
                else
                    $("#txtPurposeInspection").val(CreateRequest[0].PurposeInspection).css('height', 60);
                $("#txtQuantity").val(CreateRequest[0].Quantity);

                $("#txtnotifyto").tagsinput('add', CreateRequest[0].Notifyto.replace(";",","));

                QuantityDrafts = CreateRequest[0].Quantity;
                if (CreateRequest[0].MeasurementParameter.length > 70)
                    $("#txtTestDetails").val(CreateRequest[0].MeasurementParameter).css('height', CreateRequest[0].MeasurementParameter.length > 300 ? 150 : 100);
                else
                    $("#txtTestDetails").val(CreateRequest[0].MeasurementParameter).css('height', 60);
                if (CreateRequest[0].Drawingattached != 0) {
                    $("input[name=optradio][value='" + CreateRequest[0].Drawingattached + "']").prop('checked', true);
                    $("#ShowAttachment").show();
                }
                else {
                    $("input[name=optradio][value='" + CreateRequest[0].Drawingattached + "']").prop('checked', true);
                    $("#ShowAttachment").hide();
                }
                $("#ddlPriority").val(CreateRequest[0].Priority);
                $("#txtRequestStatus").val(CreateRequest[0].RequestStatus);
                $("#txtRequestDate").val(CreateRequest[0].CreatedDate);

                var arrdata = [];
                var html = '';
                var htmlClosed = '';
                var htmlAmendment = '';
                $('#DocTable').empty();
                if (RequestFiles != null && RequestFiles.length > 0) {
                    FileValidate = RequestFiles.length;
                    if (UserDetails.UserType == "User" || CreateRequest[0].Status == "Closed")
                        CondDisable = "disabled = disabled";
                    $.each(RequestFiles, function (j, Fileitem) {
                        var ids = guid();
                        var json = {};
                        var ids = guid();
                        // var fs = (filesize[i] / 1024 / 1024).toFixed(2);
                        var ext = Fileitem.Name.split('.')[1];

                        if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "jfif") {

                            html += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                + '<div style ="border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                + '<div class="dtemp col-xs-3" style="padding-left: 30px;"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                + '</div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                + '<span class="pull-right btn-group">'
                                + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="fa fa-download"></span></a>'
                                + '<button ' + CondDisable + ' onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "LabFiles" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                                + '</span></p></div></div></div></div>'
                        }
                        else {
                            html += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                + ' <div style = " border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                + '<p class="mbsize"> </p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                + '<span class="pull-right btn-group">'
                                + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></a>'
                                + '<button ' + CondDisable + ' onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "LabFiles" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                                + '</span></p></div></div></div></div>'
                        }
                        FileUpdateCount++;
                    });
                }

                $('#DocTable').append(html);
                // based on the condition enable Accept or Reject 
                $("#AcceptRejectthisrequest").show();
                $("#divPendingRejectAdmin,#divRejectByAdm,#divRejectByAdminPanel").hide();
                $('#txtPartNo,#txtPartName').prop('disabled', true);
                $("#txtIARNo,#ddlIARType").prop('disabled', true);
                if (CreateRequest[0].RequestStatus == "Pending") {
                    if (UserDetails.UserAccess.indexOf('2') != -1) {
                        $("#htdStatus").val(CreateRequest[0].LabStatus);
                        $("#ddlTestClass    ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', false);
                        $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod, input[name = 'optTestType'], #txtLaboratoryName").prop('disabled', false);
                        $("#txtSampleCondition,  #txtTentativeDate,#txtTestMethod").val('');
                        $("#ddlPJLAScope").val(0);

                        $("#btnRequestConfirm").text("Confirm");
                        if (UserDetails.UserType == "Admin") {
                            $("#divPendingReject,#divPendingAccept,#divAccept,#divReject,#divCloseRequest,#divAmendmentreport").hide();
                            $("#btnUpdateSave,#btnUpdateClose,#btnRequestConfirm,#btnRequestClear").show();
                            $("#ddlTestClass   ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', false);
                            $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod,input[name='optTestType'],#txtLaboratoryName").prop('disabled', false);
                            $('#txtPartNo,#txtPartName').prop('disabled', false);
                        }
                        else if (UserDetails.UserType == "User" && CreateRequest[0].RequestStatus == "Pending") {
                            $("#btnUpdateSave,#btnUpdateClose,#divPendingReject,#divPendingAccept,#divAccept,#divReject,#divCloseRequest,#divAmendmentreport").hide();
                            $("#btnRequestConfirm,#btnRequestClear").show();
                            $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', true);
                            $("#txtSampleCondition, #ddlPJLAScope, #txtTentativeDate, #txtTestMethod,input[name='optTestType'],#txtLaboratoryName").prop('disabled', false);

                        }
                        else {
                            $("#divPendingReject,#divPendingAccept,#divAccept,#divReject,#divCloseRequest,#divAmendmentreport").hide();
                            $("#btnRequestConfirm,#btnRequestClear").show();
                            $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable,#txtSampleCondition,#ddlFeasibility,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod,#txtLaboratoryName").prop('disabled', true);
                        }
                    }
                    else {
                        $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', true);
                        $("#txtSampleCondition,#txtLaboratoryName,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                        $("input[name='optTestType']").prop('disabled', true);
                        $("#btnUpdateSave,#btnUpdateClose,#divAccept,#divReject,#pending-status-afterAcceptReject,#AcceptRejectthisrequest,#divCloseRequest,#divAmendmentreport,#AcceptRejectthisrequest").hide();
                    }
                    if ($('#ddlTestClass').val() == "7") {
                        $('#ddlReason,#txtQuantity,#ddlPartReturnType').prop('disabled', true);
                    }
                }
                else if (CreateRequest[0].RequestStatus == "Accepted") {
                    $("#htdStatus").val(CreateRequest[0].LabStatus);
                    $("#txtSampleCondition").val(CreateRequest[0].SampleCondition);
                    //$("#ddlFeasibility").val(CreateRequest[0].Feasibility); 
                    $("input[name=optTestType][value='" + CreateRequest[0].Feasibility + "']").prop('checked', true);
                    if (CreateRequest[0].Feasibility == 2) {
                        $("#divLaboratoryName").show();
                        $("#txtLaboratoryName").val(CreateRequest[0].LaboratoryName);
                    }
                    else
                        $("#divLaboratoryName").hide();

                    $("#ddlPJLAScope").val(CreateRequest[0].PJLAScope);
                    $("#txtTentativeDate").val(CreateRequest[0].TentativeDate);
                    if (CreateRequest[0].TestMethod.length > 80)
                        $("#txtTestMethod").val(CreateRequest[0].TestMethod).css('height', CreateRequest[0].TestMethod.length > 300 ? 150 : 100);
                    else
                        $("#txtTestMethod").val(CreateRequest[0].TestMethod).css('height', 'auto');
                    $("#htdRequestStatus").val(CreateRequest[0].LabStatus);
                    // show or hide header
                    $("#spRequestAcceptStatus").html("Request " + CreateRequest[0].RequestStatus + " by " + CreateRequest[0].AcceptedBy + " JST");
                    $("#AcceptRejectthisrequest,#divPendingReject,#btnRequestConfirm,#btnRequestClear,#divReject,#StatusClosingrequest,#btnAmendment,#btnAmendmentClear,#divAmendmentreport,#divCloseRequest").hide();
                    $("#pending-status-afterAcceptReject,#divPendingAccept,#divAccept").show();
                    if (UserDetails.UserType == "Admin" && UserDetails.UserId != CreateRequest[0].AcceptedId) {
                        $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', false);
                        $("#ddlTestClass  ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', false);
                        $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', false);
                        $("#btnUpdateSave,#btnUpdateClose,#btnRequestConfirm").show();
                        $('#txtPartNo,#txtPartName').prop('disabled', false);
                        $("input[name='optTestType']").prop('disabled', false);
                        AddValidation();
                        $("#btnRequestConfirm").text("Update");
                        if (CreateRequest[0].Status == "In-Progress") {
                            $("#btnRequestConfirm").text("Update");
                            $("#btnRequestClose").text("Confirm");
                        }
                        else {
                            $("#btnRequestClose").text("Confirm");
                        }
                    }
                    else if (UserDetails.UserId == CreateRequest[0].AcceptedId) {
                        if (UserDetails.UserType == "Admin" && UserDetails.UserId == CreateRequest[0].AcceptedId) {
                            $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', false);
                            $("#ddlTestClass   ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', false);
                            $("#txtSampleCondition,#txtLaboratoryName,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', false);
                            $("#btnUpdateSave,#btnUpdateClose,#btnRequestConfirm").show();
                            $("input[name='optTestType']").prop('disabled', false);
                            AddValidation();
                            $("#btnRequestConfirm").text("Update");
                            if (CreateRequest[0].Status == "In-Progress") {
                                $("#btnRequestConfirm").text("Update");
                                $("#btnRequestClose").text("Confirm");
                            }
                            else {
                                $("#btnRequestClose").text("Confirm");
                            }
                            $("#divCloseRequest").show();
                            id = 0;
                            addingEquipmentDetails(Equipmentdata);

                        } else {
                            id = 0;
                            addingEquipmentDetails(Equipmentdata);
                            $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                            $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable,#txtSampleCondition,#ddlFeasibility,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                            $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                            $("#btnUpdateSave,#btnUpdateClose,#btnRequestConfirm,#btnRequestClear").hide();
                            $("#divCloseRequest,#zoneEquipmentDetails").show();
                            $("input[name='optTestType'],#txtLaboratoryName").prop('disabled', true);
                        }
                    }
                    else {
                        $("#txtSampleCondition,#txtLaboratoryName,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                        $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable,#txtSampleCondition,#ddlFeasibility,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                        $("#btnUpdateSave,#btnUpdateClose").hide();
                        $("input[name='optTestType'],#txtLaboratoryName").prop('disabled', true);
                        if (CreateRequest[0].Status == "Closed")
                            $("#divCloseRequest").show();
                        else
                            $("#divCloseRequest,#divAmendmentreport").hide();
                    }
                    if (CreateRequest[0].Status == "Closed") {
                        $("#divCloseRequest").show();
                        $("#spRequestClosedStatus").html("Request  CLOSED by " + CreateRequest[0].ClosedBy + " on " + CreateRequest[0].Closeddate + " JST");
                        $("#ddlResult").val(CreateRequest[0].Result);
                        $("#Remarktxt").val(CreateRequest[0].Remarks);
                        if (CreateRequest[0].NCDetails.length > 80)
                            $("#txtNCdetails").val(CreateRequest[0].NCDetails).css('height', CreateRequest[0].NCDetails.length > 300 ? 150 : 100);
                        else
                            $("#txtNCdetails").val(CreateRequest[0].NCDetails).css('height', 'auto');
                        $("#ddlSampleStatus").val(CreateRequest[0].SampleStatus);
                        $(".multiple_emails-input").val(CreateRequest[0].Sendreportto);

                        //if (CreateRequest[0].Feasibility == 1) {
                        //    if (CreateRequest[0].Feasibility == 1) {
                        //        $("#divLaboratoryName").show();
                        //        //$("#ddlFeasibilityYes").val(CreateRequest[0].FeasibilityYes);
                        //        $("#txtLaboratoryName").val(CreateRequest[0].LaboratoryName);
                        //    }
                        //    else {
                        //        //$("#ddlFeasibilityYes").val(CreateRequest[0].FeasibilityYes);
                        //        $("#txtLaboratoryName").val(CreateRequest[0].LaboratoryName);
                        //        $("#divLaboratoryName").hide();
                        //    }
                        //}
                        //else
                        //    $("#divLaboratoryName").hide();

                        //if (UserDetails.UserType == "User") 
                        CondDisable = "disabled = disabled";
                        $('#DocTableMesure').empty();
                        if (RequestclosedFiles != null && RequestclosedFiles.length > 0) {
                            $.each(RequestclosedFiles, function (j, Fileitem) {
                                var ids = guid();
                                var json = {};
                                var ids = guid();
                                $('#DocTableMesure').empty();
                                // var fs = (filesize[i] / 1024 / 1024).toFixed(2);
                                var ext = Fileitem.Name.split('.')[1];
                                if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "jfif") {
                                    htmlClosed += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                        + '<div style ="border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                        + '<div class="dtemp col-xs-3" style="padding-left: 30px;"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                        + '</div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                        + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                        + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                        + '<span class="pull-right btn-group">'
                                        + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="fa fa-download"></span></a>'
                                        + '<button ' + CondDisable + '   onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "Closed" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'

                                        + '</span></p></div></div></div></div>'
                                }
                                else {
                                    htmlClosed += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                        + ' <div style = " border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                        + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                        + '<p class="mbsize"> </p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                        + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                        + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                        + '<span class="pull-right btn-group">'
                                        + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></a>'
                                        + '<button ' + CondDisable + '  onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "Closed" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                                        + '</span></p></div></div></div></div>'
                                }
                            });
                        }
                        $('#DocTableMesure').append(htmlClosed);
                        // console.log(EquipmentDetails.length)
                        $("#dAddEquipmentDetails").empty();
                        $("#zoneEquipmentDetails").show();
                        if (EquipmentDetails != null && EquipmentDetails.length > 0) {

                            for (var k = 0; k < EquipmentDetails.length; k++) {
                                var AddEquipmentDetailsClose = [];
                                //AddEquipmentDetailsClose.push('<tr><td> <select id="equipmentDetails' + i + '" class="form-control equipmentDetails"   ' + CondDisable + '  >' + Equipmentdata + '</td><td> <input type="time" id="MachineHours' + i + '" value="' + EquipmentDetails[i].MachineHours + '"   ' + CondDisable + '  class="form-control" name="MachineHours' + i + '"  ></td><td></td> </tr>');

                                var Machinetime = EquipmentDetails[k].MachineHours.split(' : ');
                                AddEquipmentDetailsClose.push('<tr><td><select id="equipmentDetails' + k + '" class="form-control equipmentDetails"  '
                                    + CondDisable + '>' + Equipmentdata + '</td><td style="text-align: center; "><input min="0" max="99" id="MachineHours'
                                    + k + '" value="' + Machinetime[0].trim() + '"   ' + CondDisable + '  type="number" class="form-control validate[required]" maxlength="2" onKeyUp="hoursnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-right:2%">  <input min="0" max="59" id="MachineHours'
                                    + k + '" value="' + Machinetime[1].trim() + '"   ' + CondDisable + ' type="number" class="form-control validate[required]" maxlength="2" onKeyUp="minnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-left:2%"> </td></tr>');

                                $("#dAddEquipmentDetails").append(AddEquipmentDetailsClose.join(' '));
                                $('#equipmentDetails' + k).val(EquipmentDetails[k].EquipmentVal);

                            }
                            //console.log(AddEquipmentDetailsClose);

                        }
                        else {
                            $("#zoneEquipmentDetails").hide();
                        }
                        $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#txtPartNo ,#txtPartName ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', true);
                        $("#txtSampleCondition,#txtLaboratoryName,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                        $("#ddlResult,#txtNCdetails,#ddlSampleStatus,#Attachmentshow,#DocTableMesure,.multiple_emails-input,#Remarktxt").prop('disabled', true);
                        $("#StatusClosingrequest").show();
                        $("input[name='optTestType'],#txtLaboratoryName").prop('disabled', true);
                        $("#btnRequestConfirm,#HeaderClosingrequest,#btnRequestClose,#btnUpdateSave,#btnUpdateClose,#btnRequestCloseClear").hide();
                        $('input[name=optradio]').prop('disabled', true);
                        // Amendment Report   
                        if (CreateRequest[0].ClosedBy == UserDetails.UserName) {
                            $('#txtAmendmentDate,#txtAmendmentdetails').val('');
                            $("#txtUploadedby").val(CreateRequest[0].ClosedBy);
                            $('input[name=optradio]').prop('disabled', false);
                            $("#txtAmendmentDate,#txtAmendmentdetails,#AttachmentAmendment,#Remarktxt").prop('disabled', false);
                            $("#ddlResult,#txtNCdetails,#ddlSampleStatus,#Attachmentshow,#DocTableMesure").attr("disabled", "true");
                            $(".multiple_emails-input").attr("disabled", "true");
                            $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#txtPartNo ,#txtPartName ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").prop('disabled', true);
                            $("#txtSampleCondition,#ddlPJLAScope,#txtTentativeDate,#txtTestMethod").prop('disabled', true);
                            $("#HeaderAmendmentrequest,#divAmendmentreport,#btnAmendment,#btnAmendmentClear").show();
                            $("#btnRequestConfirm,#btnRequestClear,#AcceptRejectthisrequest,#divReject,#StatusAmendmentrequest").hide();
                            $("input[name='optTestType'],#txtLaboratoryName").prop('disabled', true);
                        }
                        else {
                            if (CreateRequest[0].IsAmendment) {
                                $("#divAmendmentreport,#StatusAmendmentrequest").show();
                                $("#HeaderAmendmentrequest").hide();
                            }
                            else {
                                $("#divAmendmentreport,#HeaderAmendmentrequest").hide();
                                $("#StatusAmendmentrequest").hide();
                            }
                        }

                        $('#DocTableCloseAmendment').empty();
                        if (CreateRequest[0].IsAmendment) {
                            //if (UserDetails.UserType == "Admin")
                            CondDisable = "disabled = disabled";
                            $("#StatusAmendmentrequest").show();
                            $("#RequestAmendmentStatus").html("Request  Amendment by " + CreateRequest[0].ClosedBy + " on " + CreateRequest[0].AmendmentCreatedDate + " JST");
                            $("#txtAmendmentDate").val(CreateRequest[0].AmendmentDate);
                            if (CreateRequest[0].AmendmentDetails.length > 80)
                                $("#txtAmendmentdetails").val(CreateRequest[0].AmendmentDetails).css('height', CreateRequest[0].AmendmentDetails.length > 300 ? 150 : 100);
                            else
                                $("#txtAmendmentdetails").val(CreateRequest[0].AmendmentDetails).css('height', 'auto');
                            if (AmendmentFiles != null && AmendmentFiles.length > 0) {
                                $.each(AmendmentFiles, function (j, Fileitem) {
                                    var ids = guid();
                                    var json = {};
                                    var ids = guid();
                                    $('#DocTableCloseAmendment').empty();
                                    // var fs = (filesize[i] / 1024 / 1024).toFixed(2);
                                    var ext = Fileitem.Name.split('.')[1];
                                    if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "jfif") {

                                        htmlAmendment += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                            + '<div style ="border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                            + '<div class="dtemp col-xs-3" style="padding-left: 30px;"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                            + '</div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                            + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                            + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                            + '<span class="pull-right btn-group">'
                                            + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="fa fa-download"></span></a>'
                                            + '<button ' + CondDisable + '   onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "Amendment" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                                            + '</span></p></div></div></div></div>'
                                    }

                                    else {
                                        htmlAmendment += '<div id="' + ids + '" class="col-xs-4 doutline">'
                                            + ' <div style = " border: 1px solid #ddd; padding: 5px;" class="col-md-12">'
                                            + '<div class="dtemp col-xs-3"><img class="img-responsive" src = "../Images/' + CheckFileType(Fileitem.Name) + '"/>'
                                            + '<p class="mbsize"> </p></div><div class="dtemp col-xs-9 nopadleft"><div class="lheight">'
                                            + '<h4 class="dfilename"><label class="control-label dfilenametext">' + Fileitem.Name + '</label></h4>'
                                            + '<p class="dfileuploadon">' + Fileitem.fileon + ''
                                            + '<span class="pull-right btn-group">'
                                            + '<a data-container="body" data-toggle="tooltip" data-placement="top" title="Download" href="../Home/DownloadFile?url=' + Fileitem.FolderName + '&filename=' + Fileitem.Name + '" class="fright btn btn-success btn-xs"> <span class="glyphicon glyphicon-cloud-download"></span></a>'
                                            + '<button ' + CondDisable + ' onclick="deleteFileAjax(\'' + Fileitem.Name + '\',\'' + ids + '\',\'' + Fileitem.FolderName + '\',\'' + "LabFiles" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                                            + '</span></p></div></div></div></div>'
                                    }
                                });
                                $('#DocTableCloseAmendment').append(htmlAmendment);
                                $("#HeaderAmendmentrequest,#btnAmendment,#btnAmendmentClear").hide();
                                $("#txtAmendmentDate,#txtAmendmentdetails,#AttachmentAmendment,#Remarktxt").prop('disabled', true);
                                //}
                            }
                            else {
                                $("#HeaderAmendmentrequest,#btnAmendment,#btnAmendmentClear").hide();
                                $("#txtAmendmentDate,#txtAmendmentdetails,#AttachmentAmendment,#Remarktxt").prop('disabled', true);
                            }
                        }
                    }
                    else {
                        // addingEquipmentDetails(Equipmentdata);
                        $("#ddlResult,#ddlSampleStatus").val(0);
                        $("#txtNCdetails,.multiple_emails-input").val('');
                        $("#DocTableMesure").empty();
                        $("#Remarktxt").val('');
                        $("#HeaderClosingrequest,#btnRequestCloseClear,#btnRequestClose").show();
                        $("#ddlResult,#txtNCdetails,#ddlSampleStatus,#Attachmentshow,#DocTableMesure,.multiple_emails-input, #Remarktxt").prop('disabled', false);
                    }
                    if (CreateRequest[0].Status != "Closed" && UserDetails.UserType == "Admin" && CreateRequest[0].RejectedDateByAdmin == '') {

                        $("#divRejectAdm,#divRejectByAdm,#btnRequestRejectClearAdmin,#btnRequestRejectAdmin").show();
                    }
                    //else if (CreateRequest[0].Status == "Pending" ) {
                    //    $("#divReject").show();
                    //}
                    else {
                        $("#divPendingRejectAdmin,#divRejectByAdm").hide();

                    }

                    $("#divRejectByAdminPanel").hide();
                }
                else if (CreateRequest[0].RequestStatus == "Rejected") {
                    $("#htdStatus").val(CreateRequest[0].LabStatus);
                    $("#spRequestRejectStatus").html("Request " + CreateRequest[0].RequestStatus + " by " + CreateRequest[0].AcceptedBy + " JST");
                    if (CreateRequest[0].RejectingReason.length > 80)
                        $("#txtRejectReason").val(CreateRequest[0].RejectingReason).css('height', CreateRequest[0].RejectingReason.length > 300 ? 150 : 100);
                    else
                        $("#txtRejectReason").val(CreateRequest[0].RejectingReason).css('height', 'auto');
                    $("#AcceptRejectthisrequest,#divAccept,#divPendingAccept,#divPendingReject,#divReject").hide();
                    $("#btnRequestRejectClear,#btnRequestReject,#divCloseRequest,#divAmendmentreport,#btnRequestClose,#btnUpdateSave,#btnUpdateClose,#btnRequestCloseClear").hide();
                    $('#pending-status-afterAcceptReject,#divReject,#divPendingReject').show();
                    $('#txtRejectReason').attr("disabled", "true");
                    $("#ddlTestClass ,#ddlIARType ,#txtIARNo ,#txtPartNo ,#txtPartName ,#ddlPartStatus ,#ddlPartReturnType ,#ddlSupplier ,#ddlModel, #ddlVariant, #txtZGSNo, #ddlReason, #txtVehicledetails, #txtSubject, #txtPurposeInspection, #txtQuantity ,#txtTestDetails, #ddlPriority, #Attachment, #DocTable").attr("disabled", "true");
                    $('#txtSampleCondition, #ddlPJLAScope, #txtTentativeDate, #txtTestMethod,#txtLaboratoryName').attr("disabled", "true");
                    $('input[name=optradio], input[name=optTestType]').attr("disabled", true);
                }
                else {
                    $("#divAccept,#divReject,divPendingAccept").hide();
                }

                // Accepted after Rejected By Admin
                if (CreateRequest[0].TentativeDate != '' && CreateRequest[0].RejectedDateByAdmin != '') {
                    $("#htdStatus").val(CreateRequest[0].LabStatus);
                    $("#txtSampleCondition").val(CreateRequest[0].SampleCondition);
                    //$("#ddlFeasibility").val(CreateRequest[0].Feasibility); 
                    $("input[name=optTestType][value='" + CreateRequest[0].Feasibility + "']").prop('checked', true);
                    if (CreateRequest[0].Feasibility == 2) {
                        $("#divLaboratoryName").show();
                        $("#txtLaboratoryName").val(CreateRequest[0].LaboratoryName);
                    }
                    else
                        $("#divLaboratoryName").hide();

                    $("#ddlPJLAScope").val(CreateRequest[0].PJLAScope);
                    $("#txtTentativeDate").val(CreateRequest[0].TentativeDate);
                    if (CreateRequest[0].TestMethod.length > 80)
                        $("#txtTestMethod").val(CreateRequest[0].TestMethod).css('height', CreateRequest[0].TestMethod.length > 300 ? 150 : 100);
                    else
                        $("#txtTestMethod").val(CreateRequest[0].TestMethod).css('height', 'auto');
                    $("#htdRequestStatus").val(CreateRequest[0].LabStatus);
                    // show or hide header
                    if (CreateRequest[0].RejectingReason.length > 80)
                        $("#txtRejectReasonAdmin").val(CreateRequest[0].RejectingReason).css('height', CreateRequest[0].RejectingReason.length > 300 ? 150 : 100);
                    else
                        $("#txtRejectReasonAdmin").val(CreateRequest[0].RejectingReason).css('height', 'auto');
                    $("#spRequestRejectStatusAdmin").html("Request " + CreateRequest[0].RequestStatus + " by " + CreateRequest[0].RejectedDateByAdmin + " JST");
                    $("#spRequestAcceptStatus").html("Request Accepted by " + CreateRequest[0].AcceptedBy + " JST");
                    //$("#AcceptRejectthisrequest,#divPendingReject,#btnRequestConfirm,#btnRequestClear,#divReject,#StatusClosingrequest,#btnAmendment,#btnAmendmentClear,#divAmendmentreport,#divCloseRequest").hide();
                    $("#divPendingRejectAdmin,#divRejectByAdminPanel,#divAccept,#divPendingAccept").show();
                    $("#divPendingReject,#divReject,#btnAdminRejectShow").hide();
                    $('#txtRejectReasonAdmin').attr("disabled", true);
                    $("#btnUpdateSave,#btnUpdateClose,#btnRequestConfirm,#btnRequestClear").hide();
                }
            });
        }

    });


}

var deletefilename = '';
var deleteid = '';
var deletepartreqreno = '';
function deleteFileAjax(filename, id, partreqreno, FileOrgin) {
    deletefilename = filename;
    deleteid = id;
    deletepartreqreno = partreqreno;
    if (confirm('Are you sure you want to Delete the file?')) {
        DeleteFilesPopup(FileOrgin);
    } else {

    }
}

function DeleteFilesPopup(FileOrgin) {
    var filename, id, partreqreno;
    filename = deletefilename;
    id = deleteid;
    partreqreno = deletepartreqreno;

    FileData = $.grep(FileData, function (element, index) {
        return element.Name != filename;
    });
    FileDataClose = $.grep(FileDataClose, function (element, index) {
        return element.Name != filename;
    });
    FileDataAmendment = $.grep(FileDataClose, function (element, index) {
        return element.Name != filename;
    });
    // console.log(FileData);

    if (partreqreno == '') {
    }

    else {
        var ApiFunc = UserDetails.Api + 'LabRequest.svc/' + "DeleteFiles?PartReqRefno=" + partreqreno + "&FileName=" + filename.trim() + "&UserId=" + UserDetails.UserId + "&FileOrgin=" + FileOrgin;

        GetMethod(ApiFunc, UserDetails.token, function (data) {
            // console.log(data);

        });
    }
    globalx = 0;
    for (var i = 0; i < FileData.length; i++) {
        globalx += parseFloat(FileData[i].Size);
    }
    //console.log(FileData);

    deletefilename = '';
    deleteid = '';
    deletepartreqreno = '';
    $('#' + id).remove();
}

function CheckFileType(filename) {

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
        // Filetype = filedata;
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
var sddlTestClases = [];
var sddlTestClasesMeasureLab = [];
function CreateRequestDropDown(data) {
    $(".pending-status-afterAcceptReject input[type='text'], .pending-status-afterAcceptReject select, .pending-status-afterAcceptReject textarea").attr("disabled", "true");
    $(".after-close-progress-status input[type='text'], .after-close-progress-status select, .after-close-progress-status textarea").attr("disabled", "true");

    $("ul.multiple_emails-ul").empty();

    $(".acceptBtn").on("click", function () {
        $("#txtLaboratoryName").val('');
        $("input[name=optTestType][value='1']").prop('checked', true);
        $(".rejectBtn").removeClass("active");
        $(this).addClass("active");
        $(".pending-reject").hide();
        $(".after-pending-reject,#divLaboratoryName").hide();
        $(".pending-accept").show();

    });
    $(".rejectBtn").on("click", function () {

        $(".acceptBtn").removeClass("active");
        $(this).addClass("active");
        $(".pending-accept").hide();
        $(".after-pending-accept").hide();
        $(".pending-reject").show();
        $("#txtRejectReason").prop("disabled", false);
        $("#btnRequestReject").show();
        $("#btnRequestRejectClear").show();
        $("#divRejectByAdmin").hide();
    });
    $("#btnRejectAdm").on("click", function () {

        $(".btnRejectAdm").removeClass("active");
        $(this).addClass("active");
        //$(".pending-accept").hide();
        //$(".after-pending-accept").hide(); 
        $("#divRejectByAdminPanel,#btnAdminRejectShow").show();
        $("#txtRejectReasonAdmin").prop("disabled", false);
        $("#txtRejectReasonAdmin").val('');
        //$("#btnRequestReject").show();
        //$("#btnRequestRejectClear").show();
        //$("#divRejectByAdmin").hide();
    });

    //var ApiFunc = UserDetails.Api + 'LabRequest.svc/GetCreateRequest?UserId=' + UserDetails.UserId + '&LabNames=' + UserDetails.LabName + '';
    var optionhtml1 = '<option value="" selected>' + "Select" + '</option>';
    var optionhtmlNew = '<option value="0" selected>' + "Select" + '</option>';

    // sddlplant.push(optionhtml1);

    var sddlLabNames = [];
    //var sddlTestClases = [];
    var iarType = [];
    var sddlModel = [];
    var sddlReason = [];
    var arrPartNo = [];
    var partstatus = [];
    var partReturnType = [];
    var priority = [];
    var FeasibilityYes = [];
    var VariantDetails = [];
    //GetMethod(ApiFunc, UserDetails.token, function (data) {

    //dropdowndata = data;

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
    sddlTestClases = [];
    sddlTestClasesMeasureLab = [];
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
    $("#ddlTestClass").empty().append(sddlTestClases);

    //#endregion

    //#region IARType DropDwon

    $.each(data.iarCategory, function (i, item) {
        if (i == 0) {
            iarType.push(optionhtml1);
        }
        var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
        iarType.push(optionhtml);
    });
    $("#ddlIARType").empty().append(iarType);

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
            partReturnType.push(optionhtml1);
        }
        var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
        partReturnType.push(optionhtml);
    })
    $("#ddlPartReturnType").empty().append(partReturnType.join(''));
    //#endregion

    //#region Model DropDwon
    $.each(data.Model, function (i, item) {
        if (i == 0) {
            sddlModel.push(optionhtml1);
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
            sddlReason.push(optionhtml1);
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
    //#region feasibility Yes
    $.each(data.FeasibilityYes, function (i, item) {
        if (i == 0) {
            FeasibilityYes.push(optionhtmlNew);
        }
        var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>';
        FeasibilityYes.push(optionhtml);
    });
    $("#ddlFeasibilityYes").empty().append(FeasibilityYes);
    //#endregion       


    $.each(data.RequestDetails, function (i, item) {
        $("#txtRequestorName").val(item.Name);
        $("#txtDepartment").val(item.DeptName);
        $("#txtSubDepartment").val(item.SubDeptName);
    });

    //$.each(data.Supplier, function (i, item) {
    //    if (i == 0) {
    //        sddlSupplier.push(optionhtml1);
    //    }
    //    var optionhtml = '<option value="' + item.SupplierId + '">' + item.SupplierName + '</option>';
    //    sddlSupplier.push(optionhtml);
    //});

    $("#ddlPartNo").empty();
    $('#txtPartName').empty();
    $.each(data.Part, function (i, item) {
        var optionhtml = '<option value="' +
            item.PartNo + '"></option>';
        arrPartNo.push(optionhtml);
    });

    $("#ddlPartNo").append(arrPartNo.join(''));
    PartDetails = data.Part;

    $.each(data.Reason, function (i, item) {
        if (i == 0) {
            sddlReason.push(optionhtml1);
        }
        var optionhtml = '<option value="' + item.ReasonId + '">' + item.Reason + '</option>';
        sddlReason.push(optionhtml);
    });
    $.each(data.VariantType, function (i, item) {
        if (i == 0) {
            VariantDetails.push(optionhtml1);
        }
        var optionhtml = '<option value="' + item.ModelId + '">' + item.ModelName + '</option>'
        VariantDetails.push(optionhtml);
    });
    $('#ddlVariant').empty().append(VariantDetails);

    //console.log(VariantDetails);


    //$("#ddlLabName").append(sddlLabNames);
    //$("#ddlTestClass").append(sddlTestClases);
    //$("#ddlModel").append(sddlModel);
    //$("#ddlSupplier").append(sddlSupplier);
    //$("#ddlReason").append(sddlReason);
    //$("#ddlReasonTracker").append(sddlReason);
    //Allow Number Fields
    $("#txtQuantity").keydown(function (e) {
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
    //});
}

function RequestUpdate() {

    $("#createRequestModel").modal('hide');
    if ($("input[name='optradio']:checked").val() == 1) {
        if (FileData.length == 0) {
            alertify.myAlert("if there is no Attachment please check No and continue!", 'Alert');

            return false;
        }
    }
    var formdata = new FormData();

    formdata.append("LRRefNo", LRRefNo),
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
        formdata.append("PurposeInspection", $("#txtPurposeInspection").val()),
        formdata.append("Quantity", $("#txtQuantity").val() == '' ? 0 : parseInt($("#txtQuantity").val())),//passing int value 0, by default. 
        formdata.append("MeasurementParameter", $("#txtTestDetails").val()),
        formdata.append("Drawingattached", $("input[name='optradio']:checked").val()),
        formdata.append("Priority", $("#ddlPriority").val()),
        formdata.append("Createdby", UserDetails.UserName),
        formdata.append("CreatedId", UserDetails.UserId);
    //formdata.append("Notifyto", $("#txtnotifyto").val())
    $.each(FileData, function (key, value) {
        formdata.append("FileName[" + key + "]", value.Name);
        formdata.append("FileData[" + key + "]", value.Data);
        formdata.append("FileSize[" + key + "]", value.Size);
    })




    var ApiFunc = '../Home/UpdateRequestPost/';

    //Post Method to Create Request
    JsonFormPostMethod(ApiFunc, formdata, '', function (data) {
        if (data == 'true') {
            $("#UpdateAlertModal").modal('show');
            $('#hUpdate').text('Request has been Updated Successfully');

            GetQMRequestTrackerTable();
        }
        else {
            $('#CMsg').append('Error Processing');
        }

    });
}
function RequestConfirm(Status, AdminReject) {
   
    var json = {
        "LabRequestId": $("#LabRequestId").val(),
        "LRRefNo": $("#LRRefNo").html(),
        "SampleCondition": $("#txtSampleCondition").val(),
        //"Feasibility": $("#ddlFeasibility").val(),
        "Feasibility": $("input[name='optTestType']:checked").val(),
        "FeasibilityYes": ($("#ddlFeasibilityYes").val() == "" || $("#ddlFeasibilityYes").val() == null) ? parseInt(0) : $("#ddlFeasibilityYes").val(),
        "LaboratoryName": $("#txtLaboratoryName").val(),
        "PJLAScope": $("#ddlPJLAScope").val(),
        "TentativeDate": $("#txtTentativeDate").val(),
        "TestMethod": $("#txtTestMethod").val(),
        //"RejectingReason": $("#txtRejectReason").val(), 
        "RejectingReason": AdminReject == 'Admin' ? $("#txtRejectReasonAdmin").val() : $("#txtRejectReason").val(),
        "RequestStatus": Status == 'Accept' ? parseInt(1) : parseInt(2),
        "Createdby": UserDetails.UserName,
        "CreatedId": UserDetails.UserId,
        "Cond": $("#btnRequestConfirm").text().trim()
    }

    var ApiFunc = UserDetails.Api + 'LabRequest.svc/SaveRequestStatus';
    var RequestStatusDetails = JSON.stringify(json);

    //Post Method to Create Request
    PostMethod(ApiFunc, RequestStatusDetails, UserDetails.token, function (data) {

        if (data == true) {
            LoaderHide();
            var dNow = new Date();
            var Requestdate = (dNow.getMonth() + 1) + '-' + dNow.getDate() + '-' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
            $("#UpdateRequestAll .close").click()
            $('#createRequestModel').modal('hide');
            if (Status == "Accept") {

                if ($("#btnRequestConfirm").text() != "Update")
                    alertify.myAlert("The request has been accepted and assigned to you", 'Alert');
                else if ($("#btnRequestConfirm").text() == "Update")
                    alertify.myAlert("The request has been Updated Successfully", 'Alert');
            }
            else if (Status == "Reject") {
                alertify.myAlert("The request has been rejected and sent back to the requester", 'Alert');

            }
            GetQMRequestTrackerTable();
            $(".inner-count").removeClass("active");

            $("#AllRequestCount").addClass('inner-count col-md-2 active');
        }
        else {
            $('#CMsg').append('Error Processing');

        }

    });


}


function RequestClose(Status) {

    var CondValidate = true;

    var RowCount = $("#tblEquipmentDetails tbody tr").length;
    // console.log(RowCount)
    var EquipmentDetailsData = [];
    var json = {};


    $("#tblEquipmentDetails tbody tr").each(function (i) {

        if ($('#equipmentDetails' + i).val() != '') {
            var EquipmentVal = $('#equipmentDetails' + i).val();
            var MachineHours = $('#MachineHours' + i).val() + ' : ' + $('#MachineMinutes' + i).val();
            //MachineMinutes

            json = {
                "EquipmentVal": EquipmentVal,
                "MachineHours": MachineHours
            };
            EquipmentDetailsData.push(json);
        }
    });
    //console.log(EquipmentDetailsData);
    var SendEmailval = "";
    if ($("#btnRequestClose").text() == "Update" && $("#progress-status-email").val() == "") {
        SendEmailval = $("#hdnstatusemail").val().split(';');

        var SendToEmail = [];
        var json = {};
        for (var j = 0; j < SendEmailval.length; j++) {

            if (SendEmailval[j] != "") {
                json["Email"] = SendEmailval[j];
                SendToEmail.push(json);
            }
        }
    }
    else {
        SendEmailval = $("#progress-status-email").val();
        var newVal = SendEmailval.substring(1, SendEmailval.length);
        var resutl = newVal.substring(0, newVal.length - 1)

        var SendEmail = resutl.split(',');
        SendEmail.join(';')

        var SendToEmail = [];
        var json = {};
        for (var j = 0; j < SendEmail.length; j++) {
            var MailSendto = SendEmail[j].replace(/"/g, ''); + ";";
            json = {
                "Email": MailSendto
            };
            SendToEmail.push(json);
        }
    }

    var formdata = new FormData();

    formdata.append("LabRequestId", $("#LabRequestId").val()),
        formdata.append("LRRefNo", $("#LRRefNo").html()),
        formdata.append("Result", $("#ddlResult").val()),
        formdata.append("NCdetails", $("#txtNCdetails").val()),
        formdata.append("SampleStatus", $("#ddlSampleStatus").val()),
        formdata.append("Remarks", $("#Remarktxt").val()),
        formdata.append("Createdby", UserDetails.UserName),
        formdata.append("CreatedId", UserDetails.UserId);


    $.each(FileDataClose, function (key, value) {
        formdata.append("FileName[" + key + "]", value.Name);
        formdata.append("FileData[" + key + "]", value.Data);
        formdata.append("FileSize[" + key + "]", value.Size);
    })

    $.each(EquipmentDetailsData, function (key, value) {
        formdata.append("EquipmentName[" + key + "]", value.EquipmentVal);
        formdata.append("MachineHours[" + key + "]", value.MachineHours);
    })


    $.each(SendToEmail, function (key, value) {
        formdata.append("SendToEmail[" + key + "]", value.Email);
    })

    var ApiFunc = '../Home/InsertCloseRequestPost/';


    //Post Method to Create Request
    JsonFormPostMethod(ApiFunc, formdata, UserDetails.token, function (data) {
        if (data == 'true') {

            $("#UpdateRequestAll .close").click()
            $('#createRequestModel').modal('hide');
            GetQMRequestTrackerTable();
            alertify.myAlert("The request has been closed successfully and report sent to all stakeholders", 'Alert');

            $('#txtNCdetails').val('');
            $("#DocTableMesure,#dAddEquipmentDetails,.multiple_emails-ul").empty();
        }
        else {

            $('#CMsg').append('Error Processing');
        }
        GetQMRequestTrackerTable();

        $(".inner-count").removeClass("active");

        //$("#AllRequestCount").addClass("active");
        $("#AllRequestCount").addClass('inner-count col-md-2 active');
    });





    return false;

}

function AmendmentClose() {
    // var json = {
    var formdata = new FormData();

    formdata.append("LabRequestId", $("#LabRequestId").val()),
        formdata.append("LRRefNo", $("#LRRefNo").html()),
        formdata.append("AmendmentDate", $("#txtAmendmentDate").val()),
        formdata.append("Amendmentdetails", $("#txtAmendmentdetails").val()),
        formdata.append("Remarks", $("#Remarktxt").val()),
        formdata.append("CreatedId", UserDetails.UserId);

    $.each(FileDataAmendment, function (key, value) {
        formdata.append("FileName[" + key + "]", value.Name);
        formdata.append("FileData[" + key + "]", value.Data);
        formdata.append("FileSize[" + key + "]", value.Size);
    })
    var ApiFunc = '../Home/InsertAmendentRequestPost/';


    //Post Method to Create Request
    JsonFormPostMethod(ApiFunc, formdata, UserDetails.token, function (data) {

        if (data == 'true') {
            $("#UpdateRequestAll .close").click();
            $('#createRequestModel').modal('hide');
            GetQMRequestTrackerTable();
            $(".inner-count").removeClass("active");
            $("#AllRequestCount").addClass('inner-count col-md-2 active');
            alertify.myAlert("Amendment report has been sent to all stakeholders", 'Alert');
        }
        else {

            return false;
        }
    });
}
var FileData = [];
var FileDataClose = [];
var FileDataAmendment = [];
var FileValidate = 0;
var JsonFileSize = [];
function FileUpload(filedata, filename, filesize, table) {

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
                + '<button id="' + table + i + '" onclick="deleteFileAjax(\'' + filename[i] + '\',\'' + ids + '\',\'' + "" + '\',\'' + "Amendment" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
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
                + '<button id="' + table + i + '" onclick="deleteFileAjax(\'' + filename[i] + '\',\'' + ids + '\',\'' + "" + '\',\'' + "Amendment" + '\');" type="button" class="fright btn btn-danger rejectbtn btn-xs"><span class="glyphicon glyphicon-remove"></span></button>'
                + '</span></p></div></div></div></div>'
        }

        json = { "Name": filename[i], "Size": fs, "Data": filedata[i] };

        if (table == "DocTable") {
            FileData.push(json);
        }
        else if (table == "DocTableMesure") {
            $('#Attachmentshow').css('border', '1px solid #ccc');
            $('#closefilevalidation').css('display', 'none');
            FileDataClose.push(json);
        }
        else if (table == "DocTableCloseAmendment") {
            $('#AttachmentAmendment').css('border', '1px solid #ccc');
            $('#amenfilevalidation').css('display', 'none');
            FileDataAmendment.push(json);
        }
        JsonFileSize.push(json)

    }
    $('#' + table).append(html);


    for (var i = 0; i < JsonFileSize.length; i++) {
        globalx += parseFloat(JsonFileSize[i].Size);

    }
    JsonFileSize = [];


    console.log(globalx);


    // alertify.myAlert("File Size should be below 10 MB", 'Alert');



    //console.log(fs);

    // $('#' + table).append(html);
}

var id = 0;

function addingEquipmentDetails(Equipmentdata, Removeval) {

    if ($('#tblEquipmentDetails tr').length < 11) {

        var AddEquipmentDetails = '';
        var EquipmentDetails = [];

        if (id == 0) {
            AddEquipmentDetails += '<tr id="' + id + '">';
            AddEquipmentDetails += '<td style="text-align: right; width: 35%;"> <select id="equipmentDetails' + id + '" class="form-control equipmentDetails">' + Equipmentdata + '</td>'
            AddEquipmentDetails += '<td style="text-align: right; width: 25%;"><input min="0" max="9999" id="MachineHours' + id + '" type="number" placeholder="HH" class="form-control validate[required]" maxlength="4" onKeyUp="hoursnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-right:2%">'
            AddEquipmentDetails += '<input min="0" max="59" id="MachineMinutes' + id + '" type="number" placeholder="MM" class="form-control validate[required]" maxlength="2" onKeyUp="minnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-left:2%"> </td>'
            AddEquipmentDetails += '<td style="text-align: left; width: 30%;"><span id="AddEquipment' + id + '"><i id="addequipmentDetails' + id + '" onclick="return DynamicAddequipmentDetails(' + id + ')" class="fas fa-plus-circle add-equipmentDetails" style="font-size:24px; color: skyblue; cursor:pointer;"></i></span>'
            //AddEquipmentDetails += '<span id="RemoveEquipmentDetails' + id + '" ><i id="RemoveequipmentDetails' + id + '" onclick="return DynamicRemoveequipmentDetails(' + id + ')" class="fas fa-minus-circle add-equipmentDetails cursordis' + this.id + '" style="font-size:24px; color: skyblue; cursor:pointer;"></i></span>'
            AddEquipmentDetails += '</td></tr>';
        }
        else {
            AddEquipmentDetails += '<tr id="' + id + '">';
            AddEquipmentDetails += '<td style="text-align: right; width: 35%;"> <select id="equipmentDetails' + id + '" class="form-control equipmentDetails">' + Equipmentdata + '</td>'
            AddEquipmentDetails += '<td style="text-align: right; width: 25%;"><input min="0" max="9999" id="MachineHours' + id + '" type="number" placeholder="HH" class="form-control validate[required]" maxlength="4" onKeyUp="hoursnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-right:2%">'
            AddEquipmentDetails += '<input min="0" max="59" id="MachineMinutes' + id + '" type="number" placeholder="MM"  class="form-control validate[required]" maxlength="2" onKeyUp="minnumbersonly(' + this.id + ')" style="display: inline-block;width:70px; margin-left:2%"> </td>'
            AddEquipmentDetails += '<td style="text-align: left; width: 30%;"><span id="AddEquipment' + id + '"><i id="addequipmentDetails' + id + '" onclick="return DynamicAddequipmentDetails(' + id + ')" class="fas fa-plus-circle add-equipmentDetails" style="font-size:24px; color: skyblue; cursor:pointer;"></i></span>'
            AddEquipmentDetails += '<span id="RemoveEquipmentDetails' + id + '" ><i id="RemoveequipmentDetails' + id + '" onclick="return DynamicRemoveequipmentDetails(' + id + ')" class="fas fa-minus-circle add-equipmentDetails cursordis' + this.id + '" style="font-size:24px; color: skyblue; cursor:pointer;"></i></span>'
            AddEquipmentDetails += '</td></tr>';
        }
        EquipmentDetails.push(AddEquipmentDetails);
        $("#dAddEquipmentDetails").append(EquipmentDetails.join(' '));

        if (id > 0) {
            $("#AddEquipment" + Removeval).hide();
            $("#RemoveEquipmentDetails" + Removeval).hide();
        }
    }

    // $("#addequipmentDetails" + Removeval).remove();   
    $("#addequipmentDetails" + Removeval).visibility = "visible";
    id++;
}


function DynamicAddequipmentDetails(Removeval) {

    addingEquipmentDetails(Equipmentdata, Removeval);
}
function DynamicRemoveequipmentDetails(Removeval) {
    var tbllen = $('#dAddEquipmentDetails tr').length;
    if (tbllen > 1) {

        $("#" + Removeval).remove();
        var tbllength = $('#dAddEquipmentDetails tr').length;
        //tbllength = tbllength - 1;

        if (id > 0) {
            $("#AddEquipment" + parseInt(Removeval - 1)).show();
            $("#RemoveEquipmentDetails" + parseInt(Removeval - 1)).show();
        }
        if ($('#dAddEquipmentDetails tr').length == 2)
            $("#RemoveEquipmentDetails").hide();

        if (tbllen == 2) {
            $("#AddEquipment0").show();
        }
    }


}

function hoursnumbersonly(id) {
    var str = document.getElementById("MachineHours" + id).value

    var num = 0
    var newstr = ""
    if (str != null && str.length != 0) {
        for (i = 0; i < str.length; i++) {
            for (ii = 0; ii < 10; ii++) {
                if (str.charAt(i).indexOf(num) > -1) {
                    newstr += str.charAt(i)
                }
                num++
            }
            num = 0
        }
    }
    if (parseInt(newstr) > 9999) {
        newstr = 9999
    }
    document.getElementById("MachineHours" + id).value = newstr
}
function minnumbersonly(id) {
    var str = document.getElementById(id).value
    var num = 0
    var newstr = ""
    if (str != null && str.length != 0) {
        for (i = 0; i < str.length; i++) {
            for (ii = 0; ii < 10; ii++) {
                if (str.charAt(i).indexOf(num) > -1) {
                    newstr += str.charAt(i)
                }
                num++
            }
            num = 0
        }
    }

    if (parseInt(newstr) > 59) {
        newstr = 59
    }
    document.getElementById(id).value = newstr
}
function checkAttachement(result) {

    if (result == "True")
        $("#ShowAttachment").show();
    else
        $("#ShowAttachment").hide();
}
function checkTestType(result) {

    if (result == "True")
        $("#divLaboratoryName").show();
    else
        $("#divLaboratoryName").hide();
}

function ClearAccept() {
    $("#txtSampleCondition,#txtTentativeDate,#txtTestMethod").val('');
    $("#ddlFeasibility,#ddlPJLAScope").val('');
}
function ClearReject() {
    $("#txtRejectReason").val('');
}
function ClearRejectAdmin() {
    $("#txtRejectReasonAdmin").val('');
}
function ClearClose() {
    $("#ddlResult,#ddlSampleStatus").val('');
    $("#txtNCdetails,#hdnstatusemail,#Remarktxt").val('');
    $("#DocTableMesure,#dAddEquipmentDetails,.multiple_emails-ul").empty();
    $('#ClsReportToClosingRequest,#closefilevalidation','#ClsReportToRemark').css('display', 'none');
    EquipmentDetailsData = [];
    FileDataClose = [];
    checkfilesize = [];
    id = 0;
    addingEquipmentDetails(Equipmentdata);
}
function ClearAmendment() {
    $("#txtAmendmentDate,#txtAmendmentdetails").val('');
    $("#DocTableCloseAmendment").empty();
    FileDataAmendment = [];
    checkfilesize = [];

}

function AddValidation() {
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

function CreateRequestSave() {
    if ($("input[name='optradio']:checked").val() == 1 && FileValidate == 0) {
        if (FileData.length == 0) {
            alertify.myAlert("if there is no Attachment please check No and continue!", 'Alert');
            return false;
        }
    }
    var savemode = 2;
    var formdata = new FormData();

    formdata.append("LRRefNo", $("#LRRefNo").html()),
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
        formdata.append("PurposeInspection", $("#txtPurposeInspection").val()),
        formdata.append("Quantity", $("#txtQuantity").val() == '' ? 0 : parseInt($("#txtQuantity").val())),//passing int value 0, by default. 
        formdata.append("MeasurementParameter", $("#txtTestDetails").val()),
        formdata.append("Drawingattached", $("input[name='optradio']:checked").val()),
        formdata.append("Priority", $("#ddlPriority").val()),
        formdata.append("Createdby", UserDetails.UserName),
        formdata.append("CreatedId", UserDetails.UserId),
        formdata.append("IsSaved", savemode),

        $.each(FileData, function (key, value) {
            formdata.append("FileName[" + key + "]", value.Name);
            formdata.append("FileData[" + key + "]", value.Data);
            formdata.append("FileSize[" + key + "]", value.Size);
        })

    var ApiFunc = '../Home/UpdateRequestPost/';
    JsonFormPostMethod(ApiFunc, formdata, '', function (data) {

        if (data == "true") {
            $('#createRequestModel').modal('hide');
            alertify.myAlert("Request has been updated successfully", 'Alert');
            $("#txtIARNo").val('');
            LoaderHide();
        }
        else {
            alertify.myAlert("Error while updating request", 'Alert');
        }
        GetQMRequestTrackerTable();
    });

}

// To filter Header Count Based on the Selection
var CountFilter = '';

function OverViewCountFilter() {
    CountFilter = QMTrackerdata.filter(function (x) { return x.NewStatus != "Saved As Draft" });

    //if ($("#txtReqNo").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.LRRefNo.toLowerCase().indexOf($("#txtReqNo").val()) > -1 });

    if ($("#ddlAuditType").val() != '')
        CountFilter = CountFilter.filter(function (x) { return x.LabName == $("#ddlAuditType").val() });
    if ($("#ddlAuditee").val() != '')
        CountFilter = CountFilter.filter(function (x) { return x.Equipment.indexOf($("#ddlAuditee").val()) !== -1 });
    //if ($("#txtReqDate").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.RequestDate.toLowerCase().indexOf($("#txtReqDate").val()) > -1 });

    //if ($("#txtReqName").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.RequestorName.toLowerCase().indexOf($("#txtReqName").val().trim().toLowerCase()) > -1 });

    //if ($("#txtSubDept").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.SubDepartment.toLowerCase().indexOf($("#txtSubDept").val().trim().toLowerCase()) > -1 });

    //if ($("#txtPartNoFilter").val() != '') {
    //    CountFilter = CountFilter.filter(function (x) { return x.PartNo.toLowerCase().indexOf($("#txtPartNoFilter").val().trim().toLowerCase()) > -1 });
    //    if ($("#txtPartNoFilter").val().toLowerCase().indexOf("no") != -1) {
    //        if ($("#txtPartNoFilter").val().length > 2) {
    //            alert('PartNo Iuput has duplicates please try with some other valid Input');
    //            return true;
    //        }
    //    }
    //}
    //if ($("#txtPartNameFilter").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.PartName.toLowerCase().indexOf($("#txtPartNameFilter").val().trim().toLowerCase()) > -1 });

    //if ($("#txtSupName").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.SupplierName.toLowerCase().indexOf($("#txtSupName").val().trim().toLowerCase()) > -1 });

    //if ($("#txtQty").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.Quantity.indexOf($("#txtQty").val().trim()) > -1 });

    //if ($("#ddlPlant").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.Reason == $("#ddlPlant").val().trim() });

    //if ($("#txtPIC").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.StatusName.toLowerCase().indexOf($("#txtPIC").val().trim().toLowerCase()) > -1 });

    //if ($("#ddlLeadAuditor").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.Status == $("#ddlLeadAuditor").val().trim() });

    //if ($("#txtResult").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.Result.toLowerCase().indexOf($("#txtResult").val().trim().toLowerCase()) > -1 });

    //if ($("#txtClosedDate").val() != '')
    //    CountFilter = CountFilter.filter(function (x) { return x.ClosedDate.toLowerCase().indexOf($("#txtClosedDate").val().trim()) > -1 });

    if (conCheckTrue == false) {
        if (CountFilter.length > 0) {
            $("#Request0").html(CountFilter.filter(function (x) { return x.NewStatus != "Saved As Draft" }).length);
            $("#Request1").html(CountFilter.filter(function (x) { return x.NewStatus == "Pending" }).length);
            $("#Request2").html(CountFilter.filter(function (x) { return x.NewStatus == "Accepted" }).length);
            $("#Request3").html(CountFilter.filter(function (x) { return x.NewStatus == "Rejected" }).length);
            $("#Request4").html(CountFilter.filter(function (x) { return x.NewStatus == "Closed" }).length);
        }
        else
            $("#Request0,#Request1,#Request2,#Request3,#Request4").html(0);
    }
    conCheckTrue = false;

    $("#Request0").html() == "0" ? $("#AllRequestCount").css('pointer-events', 'none') : $("#AllRequestCount").css('pointer-events', '');
    $("#Request1").html() == "0" ? $("#divPendingCnt").css('pointer-events', 'none') : $("#divPendingCnt").css('pointer-events', '');
    $("#Request2").html() == "0" ? $("#divIn_ProgressCnt").css('pointer-events', 'none') : $("#divIn_ProgressCnt").css('pointer-events', '');
    $("#Request3").html() == "0" ? $("#divRejectedCnt").css('pointer-events', 'none') : $("#divRejectedCnt").css('pointer-events', '');
    $("#Request4").html() == "0" ? $("#divClosedCnt").css('pointer-events', 'none') : $("#divClosedCnt").css('pointer-events', '');
}

var conCheckTrue = false;
function OverViewCountFilterHeader(Request) {
    if (Request == "All Request") {
        $("#ddlLeadAuditor").val("");
        conCheckTrue = false;
    }
    else {
        $("#ddlLeadAuditor").val(Request);
        conCheckTrue = true;
    }
    $('#ddlLeadAuditor').trigger('change');
}




function showlabhistroy() {
    $('#Historymodal').modal('show')
    var ApiFunc = UserDetails.Api + 'LabRequest.svc/GetLabHistroyData?Lrrefno=' + $('#LRRefNo').text() + '';
    GetMethod(ApiFunc, UserDetails.token, function (data) {
        console.log(data);
        BindingTTable(data);
    });


}

function BindingTTable(data) {

    $('#tblLabHMaster').DataTable({
        data: data,
        "columns": [
            { "data": "Lrrefno" },
            { "data": "Status" },
            { "data": "Date" },
            { "data": "Responsibe" },
            { "data": "UpdatedData" }
        ],
        "bSort": true, "bDestroy": true, "bLengthChange": false, "pageLength": 100, "dom": 'lrtip', "bSortCellsTop": true, "bFilter": true, "aaSorting": [], "deferRender": true,
        "autoWidth": false,
        "createdRow": function (row, data, index) {
            $('td', row).eq(3).attr({ 'data-label': "Responsibe", 'data-toggle': "tooltip", 'data-placement': "top", 'title': data.Responsibe });
            $('td', row).eq(4).attr({ 'data-label': "UpdatedData", 'data-toggle': "tooltip", 'data-placement': "left", 'title': data.UpdatedData });
        },
        initComplete: function (index) {
            this.api().columns().every(function (i) {
                var column = this;

                var columnIndex = this.index()
                switch ($(".filter th:eq(" + columnIndex + ")").attr('class')) {

                    case 'filtertxt':

                        $('input', $(".filter th:eq(" + columnIndex + ")")).on('keyup change', function () {

                            if (column.search() !== this.value) {

                                column
                                    .search(this.value)
                                    .draw();
                            }
                        });
                        break;
                }
            });
        }
    });



}



function GetQMRequestTrackerExcel() {

    document.location.href = "../Home/QMRequestTrackerforExcel?UserId=" + UserDetails.UserId + "&LabNames=" + UserDetails.LabName + "";
}
