var qTrip_CurrentOdometerValue = 0;
var qTrip_StartOdo = 99999;
var qTrip_EndOdo = 0;
var qTrip_StartTime = new Date();
var qTrip_EndTime = new Date();
var qTrip_DB = new localStorageDB("qTrip", localStorage);

$(function () {
	showPage("entry");
	setOdometer(qTrip_CurrentOdometerValue);
	resetTrip();
	$("#header-navbar > li").click(function(){showPage($(this).attr("data-page"));});
	$(".odometer-control").click(function(){incrementOdometer($(this).attr("data-increment"));});
	$("#reasonlist").change(function(){if($(this).val() == "") addReason(prompt("New Reason"));});
	$("#button-start").click(startTrip);
	$("#button-end").click(endTrip);
	$("#button-cancel").click(resetTrip);
	if (qTrip_DB.isNew()) qTrip_DB.createTable("Entry", ["sTime", "sOdo", "eTime", "eOdo"]);
});

function saveCurrentToDB() {
	qTrip_DB.insert("Entry", {sTime: qTrip_StartTime, eTime: qTrip_EndTime, sOdo: qTrip_StartOdo, eOdo: qTrip_EndOdo});
	qTrip_DB.commit();
}

function showPage(pageID) {
	$(".page").hide();
	$("div[data-page='" + pageID + "']").show();
}

function setOdometer(mileage) {
	qTrip_CurrentOdometerValue = mileage;
	var str = mileage.toString();
	var offset = 6 - str.length;
	$(".odometer-digit").text("0");
	for (var i = 0; i < str.length; i++) {
		$(".odometer-digit[data-position='" + (i + offset).toString() + "']").text(str.charAt(i)); 
	}
}

function incrementOdometer(amount) {
	var temp = qTrip_CurrentOdometerValue + parseInt(amount);
	if (temp < 0) return;
	setOdometer(temp);
}

function addReason(reason) {
	if (reason == null) return
	$("#reasonlist option:last").before($("<option></option>").text(reason)).val(reason); 
	$("#reasonlist").val(reason); 
}

function startTrip() {
	qTrip_StartTime = new Date();
	$("#datestamp").text(qTrip_StartTime.toString());
	qTrip_StartOdo = qTrip_CurrentOdometerValue;
	$("#reading-start").text(qTrip_CurrentOdometerValue);
	$("#button-start").hide();
	$("#button-end").show();
	$("#button-cancel").show();
	$("#recording").show();
}

function endTrip() {
	qTrip_EndTime = new Date();
	$("#datestamp").text(qTrip_DB.query("Entry", null).toString());
	qTrip_EndOdo = qTrip_CurrentOdometerValue;
	saveCurrentToDB();
	$("#reading-end").text(qTrip_CurrentOdometerValue);
	$("#button-end").hide();
	$("#button-cancel").hide();
	$("#recording").hide();
	$("#button-start").show();
}

function resetTrip() {
	setOdometer(qTrip_StartOdo);
	$("#reading-start").text("");
	$("#reading-end").text("");
	$("#button-end").hide();
	$("#button-cancel").hide();
	$("#recording").hide();
	$("#button-start").show();
}