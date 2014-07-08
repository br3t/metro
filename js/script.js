//* MODELS
var Station = Backbone.Model.extend({
	defaults: {
		id: 0,
		title: 'None',
		time: {
			weekdayUp: [],
			weekendUp: [],
			weekdayDown: [],
			weekendDown: []
		}
	}
});


var Stations = Backbone.Collection.extend({
	model: Station
});

var stations = new Stations();
stations.add({
	id: 0,
	title: 'Vokzalnaya',
	isFinal: true,
	time: {
		weekdayDown: [5.4, 5.54, 6.06, 6.18, 6.29, 6.4, 6.51, 6.59, 7.05, 7.11, 7.17, 7.24, 7.31, 7.38, 7.45, 7.52, 8, 8.08, 8.17, 8.25, 8.32, 8.4, 8.49, 8.57, 9.07, 9.18, 9.29, 9.4, 9.51, 10.02, 10.13, 10.29, 10.45, 11.01, 11.17, 11.33, 11.44, 12.05, 12.21, 12.37, 12.53, 13.09, 13.25, 13.41, 13.57, 14.13, 14.29, 14.46, 14.59, 15.1, 15.21, 15.32, 15.43, 15.54, 16.05, 16.16, 16.27, 16.38, 16.49, 17, 17.11, 17.22, 17.33, 17.44, 17.55, 18.06, 18.17, 18.28, 18.39, 18.49, 19.01, 19.12, 19.21, 19.37, 19.53, 20.09, 20.25, 20.41, 20.57, 21.13, 21.29, 21.45, 22.01, 22.17, 22.33, 22.49, 23.05],
		weekendDown: [5.4, 5.58, 6.14, 6.3, 6.46, 7.02, 7.18, 7.34, 7.5, 8.06, 8.22, 8.38, 8.54, 9.1, 9.26, 9.42, 9.58, 10.14, 10.3, 10.46, 11.02, 11.18, 11.34, 11.5, 12.06, 12.22, 12.38, 12.54, 13.1, 13.26, 13.42, 13.58, 14.14, 14.3, 14.46, 15.02, 15.18, 15.35, 15.51, 16.08, 16.24, 16.41, 16.57, 17.13, 17.29, 17.45, 18.01, 18.17, 18.33, 18.49, 19.05, 19.21, 19.37, 19.53, 20.09, 20.25, 20.41, 20.57, 21.13, 21.29, 21.45, 22.01, 22.17, 22.33, 22.49, 23.05]
	}
});
stations.add({
	id: 1,
	title: 'Metrostroiteley',
	isFinal: false,
	time: {
		weekdayUp: [],
		weekendUp: [5.51, 6.07, 6.23, 6.39, 6.55, 7.11, 7.27, 7.43, 7.59, 8.15, 8.31, 8.47, 9.03, 9.19, 9.35, 9.51, 10.07, 10.23, 10.39, 10.55, 11.11, 11.27, 11.43, 11.59, 12.15, 12.31, 12.47, 13.03, 13.19, 13.35, 13.51, 14.07, 14.23, 14.39, 14.55, 15.11, 15.28, 15.44, 16.01, 16.17, 16.34, 16.5, 17.06, 17.22, 17.38, 17.54, 18.1, 18.26, 18.42, 18.58, 19.14, 19.3, 19.46, 20.02, 20.18, 20.34, 20.5, 21.06, 21.22, 21.38, 21.54, 22.1, 22.26, 22.42, 22.58, 23.14],
		weekdayDown: [5.43, 5.56, 6.08, 6.2, 6.31, 6.42, 6.53, 7.01, 7.07, 7.13, 7.19, 7.26, 7.33, 7.4, 7.47, 7.54, 8.02, 8.1, 8.19, 8.28, 8.34, 8.42, 8.51, 8.59, 9.09, 9.2, 9.31, 9.42, 9.53, 10.04, 10.15, 10.31, 10.46, 11.03, 11.19, 11.35, 11.51, 12.07, 12.23, 12.39, 12.55, 13.11, 13.27, 13.43, 13.59, 14.15, 14.31, 14.48, 15.01, 15.12, 15.23, 15.34, 15.45, 15.56, 16.07, 16.18, 16.29, 16.4, 16.51, 17.02, 17.13, 17.24, 17.35, 17.46, 17.57, 18.08, 18.19, 18.3, 18.41, 18.51, 19.03, 19.14, 19.23, 19.39, 19.55, 20.11, 20.27, 20.43, 20.59, 21.15, 21.31, 21.47, 22.03, 22.19, 22.35, 22.51, 23.07],
		weekendDown: [5.43, 6, 6.16, 6.32, 6.48, 7.04, 7.2, 7.36, 7.52, 8.08, 8.24, 8.4, 8.56, 9.12, 9.28, 9.44, 10, 10.16, 10.32, 10.48, 11.04, 11.2, 11.36, 11.52, 12.08, 12.24, 12.4, 12.56, 13.12, 13.28, 13.44, 14, 14.16, 14.32, 14.48, 15.04, 15.21, 15.37, 15.54, 16.1, 16.27, 16.43, 16.59, 17.15, 17.31, 17.47, 18.03, 18.19, 18.35, 18.51, 19.07, 19.23, 19.39, 19.55, 20.11, 20.27, 20.43, 20.59, 21.15, 21.31, 21.47, 22.03, 22.19, 22.3, 22.51, 23.07],
	}
});
stations.add({
	id: 2,
	title: 'Metallurgov',
	isFinal: false,
	time: {
		weekdayUp: [],
		weekendUp: [],
		weekdayDown: [],
		weekendDown: [],
	}
});
stations.add({
	id: 3,
	title: 'Zavodskaya',
	isFinal: false,
	time: {
		weekdayUp: [],
		weekendUp: [],
		weekdayDown: [],
		weekendDown: [],
	}
});
stations.add({
	id: 4,
	title: 'Prospekt Svobody',
	isFinal: false,
	time: {
		weekdayUp: [],
		weekendUp: [],
		weekdayDown: [],
		weekendDown: [],
	}
});
stations.add({
	id: 5,
	title: 'Kommunarovskaya',
	isFinal: true,
	time: {
		weekdayUp: [5.38, 5.5, 6.02, 6.13, 6.24, 6.35, 6.43, 6.49, 6.55, 7.01, 7.08, 7.15, 7.22, 7.29, 7.36, 7.44, 7.52, 8.01, 8.09, 8.16, 8.24, 8.33, 8.41, 8.51, 9.02, 9.13, 9.24, 9.34, 9.45, 9.56, 10.12, 10.29, 10.45, 11.01, 11.17, 11.33, 11.49, 12.05, 12.21, 12.37, 12.53, 13.09, 13.25, 13.41, 13.57, 14.13, 14.29, 14.42, 14.54, 15.09, 15.15, 15.26, 15.37, 15.48, 15.59, 16.1, 16.21, 16.32, 16.43, 16.54, 17.05, 17.16, 17.27, 17.38, 17.49, 18, 18.11, 18.22, 18.33, 18.45, 18.55, 19.05, 19.21, 19.37, 19.53, 20.09, 20.25, 20.41, 20.57, 21.13, 21.29, 21.45, 22.01, 22.17, 22.33, 22.49, 23.05],
		weekendUp: [5.4, 5.58, 6.14, 6.3, 6.46, 7.02, 7.18, 7.34, 7.5, 8.06, 8.22, 8.38, 8.54, 9.1, 9.26, 9.42, 9.58, 10.14, 10.3, 10.46, 11.02, 11.18, 11.34, 11.5, 12.06, 12.22, 12.38, 12.54, 13.1, 13.26, 13.42, 13.58, 14.14, 14.3, 14.46, 15.02, 15.18, 15.35, 15.51, 16.08, 16.24, 16.41, 16.57, 17.13, 17.29, 17.45, 18.01, 18.17, 18.33, 18.49, 19.05, 19.21, 19.37, 19.53, 20.09, 20.25, 20.41, 20.57, 21.13, 21.29, 21.45, 22.01, 22.17, 22.33, 22.49, 23.05]
	}
});

//* VIEWS
//* 
var StationView = Backbone.View.extend({
	tagName: 'option',
	className: 'station',
	template: _.template('<%= title %>'),
	attributes: function() {
		return {
			'data-attr': this.model.title
		};
	},
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		this.$el.attr('value', attributes.id);
	}
});

var StationFrom = Backbone.View.extend({
	tagName: 'select',
	className: 'stationFrom',
	events: {
		'change': 'changeStationFrom'
	},
	initialize: function() {
		this.render();
	},
	changeStationFrom: function() {
		alert(this.$el[0].value);
	},
	addOne: function(stat){
		var opt = new StationView({model: stat});
		opt.render();
		this.$el.append(opt.el);
	},
	render: function(){
		this.collection.forEach(this.addOne, this);
	}
});

var StationTo = Backbone.View.extend({
	tagName: 'select',
	className: 'stationTo',
	events: {
		'change': 'changeStationFrom'
	},
	initialize: function() {
		this.render();
	},
	changeStationFrom: function() {
		alert(this.$el[0].value);
	},
	addOne: function(stat){
		var opt = new StationView({model: stat});
		if(stat.get('isFinal')) {
			opt.render();
			this.$el.append(opt.el);
		}
	},
	render: function(){
		this.collection.forEach(this.addOne, this);
	}
});

$(document).ready(function() {
	var stationFrom = new StationFrom({collection: stations});
	$('body').append(stationFrom.el);
	var stationTo = new StationTo({collection: stations});
	$('body').append(stationTo.el);
});