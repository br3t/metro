$(document).ready(function() {
	var stationFrom = new StationFrom({collection: stations});
	$('body').append(stationFrom.el);
	var stationTo = new StationTo({collection: stations});
	$('body').append(stationTo.el);
	var arrives = new Arrives();
	$('body').append(arrives.el);
});