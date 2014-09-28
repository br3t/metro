$(document).ready(function() {
	var stationFrom = new StationFrom({collection: stations});
	$('body').append(stationFrom.el);

	var stationTo = new StationTo({collection: stations});
	$('body').append(stationTo.el);

	var daysView = new DaysView({model: days});
	$('body').append(daysView.el);

	var arrivesView = new ArrivesView({model: arrives});
	$('body').append(arrivesView.el);
});