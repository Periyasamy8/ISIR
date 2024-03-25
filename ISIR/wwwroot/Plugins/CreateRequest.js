var globalx = 0;
$(document).ready(function () {
    //other methods are omitted
    InitializeUrl();
    //add validation

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
    
    $("#txtacceptdate,#txtdeadlinedate,#txtexptcomdate,#txtinscompldate,#txtrptsubdate").datetimepicker({
        autoclose: true,
        pickTime: false,
        minView: 2,
        format: "dd-mm-yyyy"

    });

    //dev
    $('#btnsubmit').on('click', function () {
        CreateRequestSave('btnsubmit');
    });

    //clear fixed values like name of user
    ClearData();
});

var FileData = [];
var JsonFileSize = [];
function FileUpload(filedata, filename, filesize) {
   
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

function InitializeUrl() {


    var LRRefNo = getUrlVars()["LRRefNo"];

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
        var LabRequestID = getUrlVars()["LabRequestID"];
        var LabRequest = getUrlVars()["Request"];
        if (LabRequestID != null) {
            BindDraftDetails(LabRequestID, LabRequest)
        }
    });


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


        var ApiFunc = UserDetails.Api + 'LabRequest.svc/' + "DeleteFiles?PartReqRefno=" + partreqreno + "&FileName=" + filename.trim() + "&UserId=" + UserDetails.UserId + "&FileOrgin=LabFiles";

        GetMethod(ApiFunc, UserDetails.token, function (data) {
            console.log(data);

        });

    }
    deletefilename = '';
    deleteid = '';
    deletepartreqreno = '';
    $('#' + id).remove();
}


function getDateVal(date) {
    var from = $(date).val();
    var fromdate = from.split('-');
    var fromval = fromdate[2] + '-' + fromdate[1] + '-' + fromdate[0];
    return fromval;
}
function CreateRequestSave() {

    //process date values


    //ignoring other conditions


    var formdata = new FormData();
        formdata.append("RequestorName", $("#txtRequestorName").val().trim()),
        formdata.append("Department", $("#txtDepartment").val().trim()),
        formdata.append("SubDepartment", $("#txtSubDepartment").val().trim()),
        formdata.append("ContactNo", $("#txtContactNo").val().trim()),
        formdata.append("LabName", $("#ddlLabName").val()),
        formdata.append("TestClass", $("#ddlTestClass").val()),
        formdata.append("ReceiptNo", $("#txtReceiptNo").val().trim()),
        formdata.append("SupplierCode", $("#txtSupplierCode").val().trim()),
        formdata.append("InspectionGrade", $("#ddlInspGrade").val()),
        formdata.append("QEIncharge", $("#ddlInchrQE").val()),
        formdata.append("Classification", $("#ddlClassification").val()),
        formdata.append("PartNumber", $("#txtpartnumber").val().trim()),
        formdata.append("PartName", $("#txtpartname").val().trim()),
        formdata.append("Content", $("#txtcontent").val().trim()),
        formdata.append("Judgement", $("#ddlJudgement").val()),
        formdata.append("Inspector", $("#ddlInspector").val()),
        formdata.append("InstructionNo", $("#txtInstNo").val().trim()),
        formdata.append("InspectionQuantity", $("#txtInspQuantity").val().trim()),
        formdata.append("EONo", $("#txtEONo").val().trim()),
        formdata.append("Model", $("#ddlModel").val()),
        formdata.append("AcceptanceDate", getDateVal("#txtacceptdate")),
        formdata.append("DeadLineDate", getDateVal("#txtdeadlinedate")),
        formdata.append("ExpectedDate", getDateVal("#txtexptcomdate")),
        formdata.append("CompletionDate", getDateVal("#txtinscompldate")),
        formdata.append("SubmissionDate", getDateVal("#txtrptsubdate")),
        formdata.append("InspectionDays", $("#txtinspdays").val().trim()),
        formdata.append("InspectionHours", $("#txtinsphrs").val().trim()),
        formdata.append("Remarks", $("#ddlRemarks").val()),

        $.each(FileData, function (key, value) {
            formdata.append("FileName[" + key + "]", value.Name);
            formdata.append("FileData[" + key + "]", value.Data);
            formdata.append("FileSize[" + key + "]", value.Size);
        });

    var ApiFunc = '../Home/CreateRequestPost/';
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

function ClearData() {

    $('#txtContactNo,#txtReceiptNo, #txtSupplierCode, #txtpartnumber, #txtpartname,#txtacceptdate, #txtdeadlinedate').val('');
    $('#txtcontent, #txtInstNo, #txtInspQuantity,#txtEONo,#txtrptsubdate, #txtinspdays, #txtinsphrs').val('');
    $('#txtrptsubdate, #txtinspdays, #txtinsphrs,#txtexptcomdate, #txtinscompldate').val('');   
    
    $('#ddlLabName,#ddlTestClass,#ddlInspGrade, #ddlInchrQE, #ddlClassification').val(0);
    $('#ddlInspector, #ddlModel, #ddlRemarks, #ddlJudgement').val(0);

}